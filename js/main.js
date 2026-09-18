/* ============================================================
   LOS CHINITOS — shared behaviour for index / danke / impressum
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
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
  var form = document.getElementById('anfragen-form');
  if (form) {
    // Netlify Forms: the form is registered at deploy time via data-netlify
    // in the markup; submissions are POSTed url-encoded to the site root.
    // Without JS the native POST to action="/danke.html" does the same.
    var summary = form.querySelector('.form-summary');
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('button[type="submit"]');
    var submitLabel = submitBtn.textContent;

    var messages = {
      name: 'Bitte gib deinen Namen an.',
      datum: 'Bitte wähle ein Datum.',
      personen: 'Bitte gib die Personenzahl an.',
      nachricht: 'Bitte schreib uns kurz, worum es geht.'
    };

    var setError = function (field, hasError) {
      var wrap = field.closest('.form-field');
      wrap.classList.toggle('has-error', hasError);
    };

    var validate = function () {
      var valid = true;
      ['name', 'datum', 'personen', 'nachricht'].forEach(function (key) {
        var field = form.elements[key];
        var ok = true;
        if (key === 'personen') {
          ok = field.value.trim() !== '' && Number(field.value) >= 1;
        } else {
          ok = field.value.trim() !== '';
        }
        setError(field, !ok);
        if (!ok) valid = false;
      });
      summary.classList.toggle('is-visible', !valid);
      return valid;
    };

    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.name && messages[field.name]) {
          var ok = field.name === 'personen'
            ? field.value.trim() !== '' && Number(field.value) >= 1
            : field.value.trim() !== '';
          setError(field, !ok);
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
        window.location.href = 'danke.html';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet…';

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Form endpoint responded with ' + res.status);
          submitBtn.textContent = 'Abgesendet';
          submitBtn.classList.add('btn-success');
          setTimeout(function () { window.location.href = 'danke.html'; }, 500);
        })
        .catch(function (err) {
          console.error('Los Chinitos: Anfragen-Formular konnte nicht gesendet werden.', err);
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
          status.className = 'form-status is-error';
          status.innerHTML = 'Ups, das hat nicht geklappt. Schreib uns direkt an ' +
            '<a href="mailto:info@loschinitos.de">info@loschinitos.de</a>.';
        });
    });
  }
})();
