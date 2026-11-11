/* ============================================================
   LOS CHINITOS — shared behaviour for index / danke / impressum
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tr = function (key) { return window.LC_I18N ? window.LC_I18N.t(key) : key; };

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- mailto: also copy the address ----------
     Without a configured mail client a mailto: click does nothing visible,
     so the address is copied as well and a short confirmation is shown.
     The default action is kept, so a configured client still opens. */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="mailto:"]');
    if (!link || !navigator.clipboard) return;
    var address = link.getAttribute('href').replace(/^mailto:/, '').split('?')[0];
    navigator.clipboard.writeText(address).then(function () {
      var previous = link.parentNode.querySelector('.copy-hint');
      if (previous) previous.remove();
      var hint = document.createElement('span');
      hint.className = 'copy-hint';
      hint.setAttribute('role', 'status');
      hint.textContent = tr('footer.emailCopied');
      link.insertAdjacentElement('afterend', hint);
      setTimeout(function () { hint.remove(); }, 1900);
    }).catch(function () { /* clipboard blocked — the mailto still fires */ });
  });

  /* ---------- Navbar solid-on-scroll ---------- */
  var nav = document.querySelector('.nav');
  if (nav && !nav.hasAttribute('data-nav-static')) {
    var updateNav = function () {
      if (window.scrollY > 40) {
        nav.classList.add('nav--solid');
      } else {
        nav.classList.remove('nav--solid');
      }
    };
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navMobilePanel = document.querySelector('.nav-mobile-panel');
  if (navToggle && navMobilePanel) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMobilePanel.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navMobilePanel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMobilePanel.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640) {
        navMobilePanel.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Nav "dock" magnify hover (desktop, nice-to-have) ---------- */
  var navLinksRow = document.querySelector('.nav-links');
  if (navLinksRow && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    var navLinkEls = Array.prototype.slice.call(navLinksRow.querySelectorAll('a'));
    var maxScale = 1.34;
    var radius = 110;
    navLinksRow.addEventListener('mousemove', function (e) {
      navLinkEls.forEach(function (link) {
        var rect = link.getBoundingClientRect();
        var center = rect.left + rect.width / 2;
        var dist = Math.abs(e.clientX - center);
        var scale = dist < radius ? 1 + (maxScale - 1) * (1 - dist / radius) : 1;
        link.style.transform = 'scale(' + scale.toFixed(3) + ')';
      });
    });
    navLinksRow.addEventListener('mouseleave', function () {
      navLinkEls.forEach(function (link) { link.style.transform = 'scale(1)'; });
    });
  }

  /* ============================================================
     LOADING WALL — page transition back to home
     ============================================================ */
  var wall = document.querySelector('.loading-wall');

  if (wall && window.__lcRevealWall) {
    setTimeout(function () {
      wall.classList.add('is-revealing');
      setTimeout(function () {
        wall.classList.remove('is-active', 'is-closed', 'show-logo', 'is-revealing');
      }, 480);
    }, 380);
  }

  var homeLinks = document.querySelectorAll('[data-go-home]');
  if (wall && homeLinks.length) {
    homeLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = link.getAttribute('href') || 'index.html';
        wall.classList.add('is-active');
        var panelDelay = 500;
        setTimeout(function () { wall.classList.add('show-logo'); }, panelDelay);
        setTimeout(function () {
          try { sessionStorage.setItem('lc-nav-home', '1'); } catch (err) { /* noop */ }
          window.location.href = href;
        }, panelDelay + 350);
      });
    });
  }

  /* ============================================================
     PRODUKTE — accordion gallery
     Vanilla port of reactbits.dev AccordionGallery (GSAP replaced by CSS
     transitions). Same maths: the active panel gets flex-grow
     r*(n-1)/(1-r), the others 1; inactive panels tilt away from the active
     one and their media drifts sideways (parallax); labels stagger in.
     ============================================================ */
  document.querySelectorAll('.accordion-gallery').forEach(function (root) {
    var panels = Array.prototype.slice.call(root.querySelectorAll('.ag-panel'));
    var count = panels.length;
    if (!count) return;

    var expandRatio = Math.min(Math.max(parseFloat(root.dataset.expandRatio) || 0.52, 0.2), 0.9);
    var parallax = parseFloat(root.dataset.parallax);
    if (isNaN(parallax)) parallax = 0.5;
    var tilt = parseFloat(root.dataset.tilt);
    if (isNaN(tilt)) tilt = 8;
    var trigger = root.dataset.trigger || 'hover';
    var gap = parseFloat(getComputedStyle(root).getPropertyValue('--ag-gap')) || 10;
    var verticalQuery = window.matchMedia('(max-width: 768px)');
    var grow = count > 1 ? (expandRatio * (count - 1)) / (1 - expandRatio) : 1;

    var active = Math.min(Math.max(parseInt(root.dataset.defaultIndex || '0', 10) || 0, 0), count - 1);
    var vertical = verticalQuery.matches;
    var mediaSize = 320;

    function applyLayout() {
      root.classList.toggle('accordion-gallery--vertical', vertical);
      panels.forEach(function (panel, i) {
        var isActive = i === active;
        var media = panel.querySelector('.ag-panel__media');
        var rot = isActive ? 0 : (i < active ? tilt : -tilt);

        panel.style.flexGrow = isActive ? grow : 1;
        panel.style.transform = vertical ? 'rotateX(' + (-rot) + 'deg)' : 'rotateY(' + rot + 'deg)';
        panel.classList.toggle('ag-panel--active', isActive);
        if (isActive) panel.setAttribute('aria-current', 'true'); else panel.removeAttribute('aria-current');

        if (media) {
          var drift = Math.max(-1.5, Math.min(1.5, active - i));
          var shift = isActive ? 0 : drift * parallax * mediaSize * 0.06;
          media.style.transform = 'translate(-50%, -50%) ' +
            (vertical ? 'translateY(' + shift.toFixed(1) + 'px)' : 'translateX(' + shift.toFixed(1) + 'px)');
        }
      });
    }

    function measure() {
      var rect = root.getBoundingClientRect();
      var total = vertical ? rect.height : rect.width;
      var usable = Math.max(total - gap * (count - 1), 120);
      mediaSize = Math.max(140, usable * expandRatio * 1.22);
      root.style.setProperty('--ag-media-size', mediaSize + 'px');
      applyLayout();
    }

    function setActive(i) {
      if (i === active) return;
      active = i;
      applyLayout();
    }

    panels.forEach(function (panel, i) {
      panel.addEventListener('mouseenter', function () { if (trigger === 'hover') setActive(i); });
      panel.addEventListener('click', function (e) {
        if (i !== active) { e.preventDefault(); setActive(i); }
      });
      panel.addEventListener('focus', function () { setActive(i); });
      panel.addEventListener('keydown', function (e) {
        var next = -1;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % count;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + count) % count;
        if (next < 0) return;
        e.preventDefault();
        panels[next].focus();
      });
    });

    var onMediaChange = function () { vertical = verticalQuery.matches; measure(); };
    if (verticalQuery.addEventListener) verticalQuery.addEventListener('change', onMediaChange);
    else verticalQuery.addListener(onMediaChange);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(root);
    else window.addEventListener('resize', measure);

    // first layout snaps into place without animating from the flex defaults
    root.classList.add('ag-no-transition');
    measure();
    void root.offsetHeight;
    root.classList.remove('ag-no-transition');
  });

  /* ============================================================
     ANFRAGEN — contact form validation + submit
     ============================================================ */
  // thank-you page lives at the site root; keep the visitor's language
  var thanksUrl = function () {
    var lang = window.LC_I18N ? window.LC_I18N.lang : 'de';
    return (window.LC_BASE || '') + 'danke.html' + (lang !== 'de' ? '?lang=' + lang : '');
  };

  var form = document.getElementById('anfragen-form');
  if (form) {
    // Netlify Forms: the form is registered at deploy time via data-netlify
    // in the markup; submissions are POSTed url-encoded to the site root.
    // Without JS the native POST to action="/danke.html" does the same.
    var summary = form.querySelector('.form-summary');
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('button[type="submit"]');

    var messages = {
      name: 'Bitte gib deinen Namen an.',
      email: 'Bitte gib eine gültige E-Mail-Adresse an.',
      datum: 'Bitte wähle ein Datum.',
      personen: 'Bitte gib die Personenzahl an.',
      nachricht: 'Bitte schreib uns kurz, worum es geht.'
    };

    var setError = function (field, hasError) {
      var wrap = field.closest('.form-field');
      wrap.classList.toggle('has-error', hasError);
    };

    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var fieldOk = function (key, value) {
      value = value.trim();
      if (key === 'personen') return value !== '' && Number(value) >= 1;
      if (key === 'email') return EMAIL_RE.test(value);
      return value !== '';
    };

    // Live site: same-origin proxy (netlify.toml) → Supabase never sees the
    // visitor's IP. Local previews call Supabase directly.
    var CRM_KEY = 'sb_publishable_NKsTBPATicQs1rjTPm5lKg_EhXbO-eo';
    var viaProxy = /^https?:$/.test(location.protocol) &&
      !/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname);
    var CRM_URL = viaProxy ? '/api/inquiry'
      : 'https://yczjmnujsstoxzhmqnrc.supabase.co/rest/v1/rpc/website_inquiry';

    var sendToCrm = function () {
      var el = form.elements;
      var payload = {
        p_name: el.name.value,
        p_email: el.email.value,
        p_phone: el.telefon ? el.telefon.value : null,
        p_occasion: el.anlass ? el.anlass.value : null,
        p_date: el.datum.value,
        p_guests: Number(el.personen.value),
        p_message: el.nachricht.value,
        p_honeypot: el._gotcha ? el._gotcha.value : ''
      };
      return fetch(CRM_URL, {
        method: 'POST',
        headers: { apikey: CRM_KEY, Authorization: 'Bearer ' + CRM_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (res) { if (!res.ok) throw new Error('CRM ' + res.status); return res.json(); });
    };

    var validate = function () {
      var valid = true;
      ['name', 'email', 'datum', 'personen', 'nachricht'].forEach(function (key) {
        var field = form.elements[key];
        var ok = fieldOk(key, field.value);
        setError(field, !ok);
        if (!ok) valid = false;
      });
      summary.classList.toggle('is-visible', !valid);
      return valid;
    };

    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.name && messages[field.name]) {
          setError(field, !fieldOk(field.name, field.value));
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = '';
      status.className = 'form-status';

      if (!validate()) {
        var firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Honeypot spam trap — real users never fill this in.
      if (form.elements['_gotcha'] && form.elements['_gotcha'].value) {
        window.location.href = thanksUrl();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = tr('form.sending');

      // 1) straight into the CRM (contact + deal "Catering: <Name>")
      var crm = sendToCrm().then(function () { return true; }, function (err) {
        console.warn('Los Chinitos: CRM-Übergabe fehlgeschlagen, Netlify-Formular bleibt als Backup.', err);
        return false;
      });
      // 2) Netlify Forms as before (e-mail notification + backup copy)
      var netlify = fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) { return res.ok; }, function () { return false; });

      Promise.all([crm, netlify])
        .then(function (results) {
          if (!results[0] && !results[1]) throw new Error('Weder CRM noch Netlify haben die Anfrage angenommen');
          submitBtn.textContent = tr('form.sent');
          submitBtn.classList.add('btn-success');
          setTimeout(function () { window.location.href = thanksUrl(); }, 500);
        })
        .catch(function (err) {
          console.error('Los Chinitos: Anfragen-Formular konnte nicht gesendet werden.', err);
          submitBtn.disabled = false;
          submitBtn.textContent = tr('form.submit');
          status.className = 'form-status is-error';
          status.innerHTML = tr('form.errorHtml');
        });
    });
  }
})();
