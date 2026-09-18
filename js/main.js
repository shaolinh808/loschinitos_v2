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
        var panelDelay = reduceMotion ? 0 : 500;
        setTimeout(function () { wall.classList.add('show-logo'); }, panelDelay);
        setTimeout(function () {
          try { sessionStorage.setItem('lc-nav-home', '1'); } catch (err) { /* noop */ }
          window.location.href = href;
        }, panelDelay + (reduceMotion ? 150 : 350));
      });
    });
  }

  /* ============================================================
     STORY — scroll-pinned reveal (desktop only)
     ============================================================ */
  var storyScroll = document.querySelector('.story-scroll');
  if (storyScroll && !reduceMotion && window.matchMedia('(min-width: 769px)').matches) {
    var photo = storyScroll.querySelector('.story-photo-wrap');
    var left = storyScroll.querySelector('.story-col-left');
    var right = storyScroll.querySelector('.story-col-right');
    var badgeLeft = storyScroll.querySelector('.story-badge-left');
    var badgeRight = storyScroll.querySelector('.story-badge-right');

    var lerp = function (from, to, t) { return from + (to - from) * t; };
    var progressFor = function (p, start, end) {
      if (p <= start) return 0;
      if (p >= end) return 1;
      return (p - start) / (end - start);
    };

    var ticking = false;
    var render = function () {
      ticking = false;
      var rect = storyScroll.getBoundingClientRect();
      var total = storyScroll.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      var scrolled = -rect.top;
      var p = Math.min(1, Math.max(0, scrolled / total));

      var pImg = progressFor(p, 0, 0.28);
      photo.style.opacity = pImg;
      photo.style.transform = 'translateY(' + lerp(70, 0, pImg) + 'px)';

      var pLeft = progressFor(p, 0.22, 0.52);
      left.style.opacity = pLeft;
      left.style.transform = 'translateY(' + lerp(70, 0, pLeft) + 'px)';

      var pRight = progressFor(p, 0.46, 0.76);
      right.style.opacity = pRight;
      right.style.transform = 'translateY(' + lerp(70, 0, pRight) + 'px)';

      var pBadge = progressFor(p, 0.74, 1);
      if (badgeLeft) {
        badgeLeft.style.opacity = pBadge;
        badgeLeft.style.transform = 'translateY(-50%) scale(' + lerp(0.7, 1, pBadge) + ')';
      }
      if (badgeRight) {
        badgeRight.style.opacity = pBadge;
        badgeRight.style.transform = 'translateY(-50%) scale(' + lerp(0.7, 1, pBadge) + ')';
      }
    };

    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    photo.style.opacity = 0;
    left.style.opacity = 0;
    right.style.opacity = 0;

    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', render);
  }

  /* ============================================================
     PRODUCT CARDS — tilt on hover
     ============================================================ */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.product-card').forEach(function (card) {
      var inner = card.querySelector('.product-card-inner');
      if (!inner) return;
      var maxDeg = 12;
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        var rotateY = px * maxDeg * 2;
        var rotateX = -py * maxDeg * 2;
        inner.style.transform = 'rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
      });
      card.addEventListener('mouseleave', function () {
        inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  /* ============================================================
     ANFRAGEN — contact form validation + submit
     ============================================================ */
  var form = document.getElementById('anfragen-form');
  if (form) {
    // Replace with the real Formspree (or other) endpoint before launch.
    // Create a free form at https://formspree.io, verify info@loschinitos.de,
    // then paste the form id below. See PROGRESS.md for full setup notes.
    var FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID';

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

      var data = {
        name: form.elements['name'].value,
        anlass: form.elements['anlass'].value,
        datum: form.elements['datum'].value,
        personen: form.elements['personen'].value,
        nachricht: form.elements['nachricht'].value
      };

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
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
