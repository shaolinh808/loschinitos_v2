/* ============================================================
   Live data: upcoming pop-ups from the CRM + Instagram feed
   ------------------------------------------------------------
   Events: the CRM (Supabase) exposes a read-only function
   `website_events()`. Pop-ups in stage "Termin fix" come with
   venue and date; pop-ups in "Gespräch"/"Zusage" come as
   anonymous placeholders ("Ort folgt") without any details.
   Moving a deal on to "Durchgeführt" removes it again.

   Instagram: set INSTAGRAM_FEED_URL to the JSON feed URL from
   behold.so. Until then the placeholder tiles stay in place.
   ============================================================ */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://yczjmnujsstoxzhmqnrc.supabase.co';
  // Publishable (public) key — safe to ship in the browser; it only
  // allows what the database grants to anonymous visitors.
  var SUPABASE_KEY = 'sb_publishable_NKsTBPATicQs1rjTPm5lKg_EhXbO-eo';
  var MAX_EVENTS = 4;

  var INSTAGRAM_FEED_URL = 'https://feeds.behold.so/pqzoqnva6Ei6OrKuSFHd';
  // While the feed has only a few posts, the remaining tiles are filled
  // with our own food photos. Every new post pushes one of them out.
  var TILES = 9;
  // Posts that Instagram does not hand to the feed (e.g. collabs that another
  // account created). Shown first. `src` is a cover image in the site folder;
  // leave it empty to show a branded "Reel" tile instead.
  var PINNED = [
    { href: 'https://www.instagram.com/reel/DfeRvm9uaGn/', src: '', altKey: 'img.reel' }
  ];
  var FALLBACK = [
    { src: (window.LC_BASE || '') + 'taco_pastor-800.webp', altKey: 'img.pastor' },
    { src: (window.LC_BASE || '') + 'taco_suadero-800.webp', altKey: 'img.suadero' },
    { src: (window.LC_BASE || '') + 'taco_ribeye-800.webp', altKey: 'img.ribeye' },
    { src: (window.LC_BASE || '') + 'hero-tacos-mobile-900.webp', altKey: 'img.hero' }
  ];
  var INSTAGRAM_PROFILE = 'https://www.instagram.com/tacosloschinitos/';

  // On the live site every request goes through our own domain (see the
  // proxies in netlify.toml), so Supabase and Behold never see visitor IPs.
  // Local previews (file://, localhost) talk to the services directly.
  var VIA_PROXY = /^https?:$/.test(location.protocol) &&
    !/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname);
  var EVENTS_URL = VIA_PROXY ? '/api/events' : SUPABASE_URL + '/rest/v1/rpc/website_events';
  var IG_IMG_HOST = 'https://behold.pictures/';
  function igImage(src) {
    if (!VIA_PROXY) return src;
    // only images we can serve through our proxy; anything else is skipped
    return src.indexOf(IG_IMG_HOST) === 0 ? '/api/ig-img/' + src.slice(IG_IMG_HOST.length) : '';
  }


  function t(key) {
    return window.LC_I18N ? window.LC_I18N.t(key) : key;
  }
  function lang() {
    return (window.LC_I18N && window.LC_I18N.lang) || 'de';
  }
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------------- Events ---------------- */
  var events = null; // null = not loaded / failed, [] = none scheduled

  // markup + schema.org data come from js/events-render.js (shared with the
  // deploy-time build, see tools/build-events.js)
  function renderEvents() {
    var list = document.getElementById('events-list');
    if (!list || !events || !events.length || !window.LC_EVENTS) return; // keep what is there
    list.innerHTML = window.LC_EVENTS.rowsHtml(events, lang(), t, MAX_EVENTS);
  }

  function eventsJsonLd(list) {
    if (!window.LC_EVENTS) return;
    var data = window.LC_EVENTS.jsonLd(list, lang(), t);
    if (!data) return;
    var tag = document.getElementById('lc-events-jsonld');
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = 'lc-events-jsonld';
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(data);
  }

  function loadEvents() {
    if (!window.fetch) return;
    fetch(EVENTS_URL, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json'
      },
      body: '{}'
    })
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (rows) { events = Array.isArray(rows) ? rows : []; renderEvents(); eventsJsonLd(events); })
      .catch(function () { /* leave the "planning" note in place */ });
  }

  /* ---------------- Instagram ---------------- */
  function postImage(p) {
    var s = p.sizes || {};
    return (s.medium && s.medium.mediaUrl) || (s.large && s.large.mediaUrl) ||
      p.thumbnailUrl || p.mediaUrl || p.media_url || '';
  }

  function renderInstagram(posts) {
    posts = posts.filter(function (p) { return igImage(postImage(p)); });
    var tracks = document.querySelectorAll('.social-track');
    if ((!posts.length && !PINNED.length) || !tracks.length) return;

    var slots = PINNED.map(function (p) { return { href: p.href, src: p.src, alt: t(p.altKey), brand: !p.src }; });
    posts.forEach(function (p) {
      slots.push({
        href: p.permalink || INSTAGRAM_PROFILE,
        src: igImage(postImage(p)),
        alt: t('img.igPost') + (p.caption ? ': ' + String(p.caption).split('\n')[0].slice(0, 120) : '')
      });
    });
    var real = slots.length;
    for (var k = 0; slots.length < TILES; k++) {
      var f = FALLBACK[k % FALLBACK.length];
      slots.push({ href: INSTAGRAM_PROFILE, src: f.src, alt: t(f.altKey) });
    }

    var n = tracks.length;
    tracks.forEach(function (track, c) {
      // Newest posts go to the right-hand column first (the left one sits
      // behind the headline), then the middle, then the left.
      var rank = n - 1 - c;
      var items = slots.filter(function (_, i) { return i % n === rank; });
      // With fewer posts than columns, still open every column with a real post.
      if (real < n && rank >= real) items[0] = slots[rank % real];
      track.textContent = '';
      // two identical halves so the -50% scroll loop is seamless
      items.concat(items).forEach(function (item, i) {
        var a = el('a', 'social-tile' + (item.brand ? ' social-tile--brand' : ''));
        a.href = item.href;
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('aria-label', 'Instagram: ' + item.alt);
        if (i >= items.length) { a.setAttribute('aria-hidden', 'true'); a.tabIndex = -1; }
        if (item.brand) {
          var logo = el('img');
          logo.src = (window.LC_BASE || '') + 'logo-icon.svg';
          logo.alt = '';
          a.appendChild(logo);
          a.appendChild(el('span', 'social-tile-label', t('social.reel')));
          track.appendChild(a);
          return;
        }
        var img = el('img');
        img.alt = item.alt;
        img.onerror = function () {
          // image blocked or expired: fall back to one of our own photos once
          img.onerror = function () { img.style.display = 'none'; };
          img.src = FALLBACK[i % FALLBACK.length].src;
        };
        img.src = item.src;
        // no lazy-loading here: iOS Safari never "sees" images inside the
        // rotated, constantly moving wall and would leave the tiles empty
        img.decoding = 'async';
        a.appendChild(img);
        track.appendChild(a);
      });
    });
  }

  function loadInstagram() {
    var url = window.LC_INSTAGRAM_FEED_URL || (VIA_PROXY ? '/api/instagram' : INSTAGRAM_FEED_URL);
    if (!url || !window.fetch) return;
    fetch(url)
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (data) { renderInstagram(Array.isArray(data) ? data : (data.posts || [])); })
      .catch(function () { renderInstagram([]); });
  }

  document.addEventListener('lc:lang', renderEvents);

  // the Instagram wall sits near the end of the page: fetch it (and its
  // photos) only when the visitor scrolls towards it, so the hero loads first
  function loadInstagramWhenNear() {
    var wall = document.querySelector('.social-wall-section');
    if (!wall || !('IntersectionObserver' in window)) { loadInstagram(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); loadInstagram(); }
    }, { rootMargin: '800px 0px' });
    io.observe(wall);
  }
  function init() { loadEvents(); loadInstagramWhenNear(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
