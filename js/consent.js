/* ============================================================
   Consent banner (cookie / tracking consent)
   ------------------------------------------------------------
   Ready to use, but OFF until the site actually loads a tool that
   needs consent (analytics, Meta pixel, embedded videos …).
   A banner that asks for consent to nothing would be misleading.

   To switch it on:
     1. set CONSENT_ENABLED = true
     2. load the tool only after consent, e.g.
          LC_CONSENT.onGrant('statistics', function () {
            // inject the analytics script here
          });
     3. list the tool in datenschutz.html

   Categories: necessary (always on), statistics, marketing.
   The choice is stored in localStorage ("lc-consent"); visitors can
   change it any time via the "Cookie-Einstellungen" link in the footer.
   ============================================================ */
(function () {
  'use strict';

  var CONSENT_ENABLED = false;
  var KEY = 'lc-consent';
  var VERSION = 1; // bump to ask everyone again after adding new tools
  var CATS = ['statistics', 'marketing'];

  var enabled = CONSENT_ENABLED || window.LC_CONSENT_FORCE === true;
  var state = read();
  var listeners = { statistics: [], marketing: [] };

  function t(key) { return window.LC_I18N ? window.LC_I18N.t(key) : key; }

  function read() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      return s && s.v === VERSION ? s : null;
    } catch (e) { return null; }
  }
  function save(choice) {
    state = { v: VERSION, ts: new Date().toISOString(), statistics: !!choice.statistics, marketing: !!choice.marketing };
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* noop */ }
    CATS.forEach(function (c) {
      if (state[c]) listeners[c].splice(0).forEach(function (fn) { try { fn(); } catch (e) { /* noop */ } });
    });
    document.dispatchEvent(new CustomEvent('lc:consent', { detail: state }));
  }
  function has(cat) { return cat === 'necessary' || !!(state && state[cat]); }

  /* ---------- UI ---------- */
  var root = null;

  function build() {
    root = document.createElement('div');
    root.className = 'consent';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'false');
    root.setAttribute('aria-labelledby', 'consent-title');
    root.innerHTML =
      '<div class="consent-card">' +
        '<h2 class="consent-title" id="consent-title" data-i18n="consent.title"></h2>' +
        '<p class="consent-text"><span data-i18n="consent.text"></span> ' +
          '<a href="' + (window.LC_BASE || '') + 'datenschutz.html" data-i18n="consent.more"></a></p>' +
        '<div class="consent-options" hidden>' +
          '<label class="consent-opt is-locked"><input type="checkbox" checked disabled />' +
            '<span><strong data-i18n="consent.necessary"></strong><small data-i18n="consent.necessaryText"></small></span></label>' +
          '<label class="consent-opt"><input type="checkbox" name="statistics" />' +
            '<span><strong data-i18n="consent.statistics"></strong><small data-i18n="consent.statisticsText"></small></span></label>' +
          '<label class="consent-opt"><input type="checkbox" name="marketing" />' +
            '<span><strong data-i18n="consent.marketing"></strong><small data-i18n="consent.marketingText"></small></span></label>' +
        '</div>' +
        '<div class="consent-actions">' +
          '<button type="button" class="btn btn-red" data-consent="all" data-i18n="consent.acceptAll"></button>' +
          '<button type="button" class="btn btn-red" data-consent="necessary" data-i18n="consent.onlyNecessary"></button>' +
          '<button type="button" class="consent-link" data-consent="settings" data-i18n="consent.settings"></button>' +
          '<button type="button" class="btn btn-outline-red" data-consent="save" data-i18n="consent.save" hidden></button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);
    translate();

    root.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consent]');
      if (!btn) return;
      var action = btn.getAttribute('data-consent');
      if (action === 'all') { save({ statistics: true, marketing: true }); close(); }
      else if (action === 'necessary') { save({ statistics: false, marketing: false }); close(); }
      else if (action === 'settings') { showOptions(true); }
      else if (action === 'save') {
        save({
          statistics: root.querySelector('input[name="statistics"]').checked,
          marketing: root.querySelector('input[name="marketing"]').checked
        });
        close();
      }
    });
  }

  function translate() {
    if (!root) return;
    root.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
  }

  function showOptions(on) {
    root.querySelector('.consent-options').hidden = !on;
    root.querySelector('[data-consent="settings"]').hidden = on;
    root.querySelector('[data-consent="save"]').hidden = !on;
    if (on) {
      root.querySelector('input[name="statistics"]').checked = has('statistics');
      root.querySelector('input[name="marketing"]').checked = has('marketing');
    }
  }

  function open(withOptions) {
    if (!enabled) return;
    if (!root) build();
    showOptions(!!withOptions);
    root.classList.add('is-open');
    var first = root.querySelector('[data-consent="all"]');
    if (first) first.focus({ preventScroll: true });
  }
  function close() { if (root) root.classList.remove('is-open'); }

  window.LC_CONSENT = {
    enabled: enabled,
    has: has,
    open: open,
    /* run fn now if already granted, otherwise as soon as it is */
    onGrant: function (cat, fn) {
      if (has(cat)) { fn(); return; }
      if (listeners[cat]) listeners[cat].push(fn);
    }
  };

  document.addEventListener('lc:lang', translate);
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-consent-open]');
    if (link) { e.preventDefault(); open(true); }
  });

  function init() {
    // the footer link only makes sense while the banner is in use
    document.querySelectorAll('[data-consent-open]').forEach(function (el) { el.hidden = !enabled; });
    if (enabled && !state) open(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
