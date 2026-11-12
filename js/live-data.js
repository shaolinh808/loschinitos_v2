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
    { src: (window.LC_BASE || '') + 'taco_pastor.webp', altKey: 'img.pastor' },
    { src: (window.LC_BASE || '') + 'taco_suadero.webp', altKey: 'img.suadero' },
    { src: (window.LC_BASE || '') + 'taco_ribeye.webp', altKey: 'img.ribeye' },
    { src: (window.LC_BASE || '') + 'hero-tacos-mobile.webp', altKey: 'img.hero' }
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

  var LOCALE = { de: 'de-DE', en: 'en-GB', es: 'es-MX' };

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

  function formatDate(iso) {
    var parts = String(iso).split('-');
    var d = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2], 12));
    try {
      return new Intl.DateTimeFormat(LOCALE[lang()] || 'de-DE', {
        weekday: 'short', day: '2-digit', month: '2-digit', timeZone: 'Europe/Berlin'
      }).format(d);
    } catch (e) {
      return parts[2] + '.' + parts[1] + '.';
    }
  }

  // "18:00:00" -> per-language label: "18 Uhr" / "6 pm" / "18:00"
  function fmtTime(t) {
    var p = String(t).split(':'), h = +p[0], m = +p[1];
    var l = lang();
    if (l === 'en') {
      var h12 = h % 12 || 12;
      return h12 + (m ? ':' + p[1] : '') + (h < 12 ? ' am' : ' pm');
    }
    if (l === 'es') return p[0] + ':' + p[1];
    return h + (m ? ':' + p[1] : '');
  }
  function formatTimes(ev) {
    if (!ev.start_time) return '';
    var key = ev.end_time ? 'events.timeRange' : 'events.timeFrom';
    return t(key).replace('{s}', fmtTime(ev.start_time)).replace('{e}', ev.end_time ? fmtTime(ev.end_time) : '');
  }

  function renderEvents() {
    var list = document.getElementById('events-list');
    if (!list || !events || !events.length) return; // keep the "planning" note

    list.textContent = '';
    events.slice(0, MAX_EVENTS).forEach(function (ev) {
      var row = el('div', 'event-row' + (ev.confirmed ? '' : ' event-row--tba'));
      var info = el('div');

      // Every entry is a pop-up; special formats (Ticket-Menü, Marktstand) are added.
      var kind = [t('events.popup')];
      var cat = t('events.cat.' + ev.category);
      if (cat && cat.indexOf('events.cat.') !== 0) kind.push(cat);
      info.appendChild(el('div', 'event-kind', kind.join(' · ')));

      if (ev.confirmed) {
        info.appendChild(el('div', 'event-loc', ev.venue || t('events.tbaPlace')));
        info.appendChild(el('div', 'event-time',
          [formatDate(ev.event_date), formatTimes(ev), ev.city].filter(Boolean).join(' · ')));
      } else {
        info.appendChild(el('div', 'event-loc', t('events.tbaPlace')));
        info.appendChild(el('div', 'event-time', t('events.tbaDate')));
      }
      row.appendChild(info);

      var place = ev.confirmed ? [ev.venue, ev.address, ev.city].filter(Boolean).join(', ') : '';
      if (place) {
        var link = el('a', 'event-details', t('events.route'));
        link.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place);
        link.target = '_blank';
        link.rel = 'noopener';
        row.appendChild(link);
      }
      list.appendChild(row);
    });
  }

  /* Structured data (schema.org/Event) for confirmed pop-ups, so Google and
     AI assistants can pick up date, time and venue. Rebuilt from the CRM on
     every page view, so it is always in sync with "Termin fix". */
  function berlinOffset(dateIso) {
    try {
      var part = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', timeZoneName: 'longOffset' })
        .formatToParts(new Date(dateIso + 'T12:00:00Z'))
        .filter(function (x) { return x.type === 'timeZoneName'; })[0].value; // "GMT+01:00"
      return part === 'GMT' ? '+00:00' : part.replace('GMT', '');
    } catch (e) { return '+01:00'; }
  }
  function eventsJsonLd(list) {
    var old = document.getElementById('lc-events-jsonld');
    if (old) old.remove();
    var items = list.filter(function (ev) { return ev.confirmed && ev.event_date; }).map(function (ev) {
      var start = ev.event_date + (ev.start_time ? 'T' + ev.start_time.slice(0, 5) + ':00' + berlinOffset(ev.event_date) : '');
      var item = {
        '@type': 'Event',
        name: t('events.ldName') + (ev.venue ? t('events.ldAt') + ev.venue : ''),
        description: t('events.ldDesc'),
        startDate: start,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        organizer: { '@id': 'https://loschinitos.de/#org' },
        image: ['https://loschinitos.de/hero-tacos.webp'],
        location: {
          '@type': 'Place',
          name: ev.venue || 'Düsseldorf',
          address: {
            '@type': 'PostalAddress',
            streetAddress: ev.address || undefined,
            addressLocality: ev.city || 'Düsseldorf',
            addressCountry: 'DE'
          }
        }
      };
      if (ev.end_time) item.endDate = ev.event_date + 'T' + ev.end_time.slice(0, 5) + ':00' + berlinOffset(ev.event_date);
      return item;
    });
    if (!items.length) return;
    var tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'lc-events-jsonld';
    tag.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': items });
    document.head.appendChild(tag);
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

  function init() { loadEvents(); loadInstagram(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
