/* FAQ accordion: one answer open at a time, keyboard friendly. */
(function () {
  'use strict';
  function init() {
    var items = Array.prototype.slice.call(document.querySelectorAll('#faq .faq-item'));
    items.forEach(function (item) {
      var btn = item.querySelector('.faq-q button');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var open = !item.classList.contains('is-open');
        items.forEach(function (other) {
          var b = other.querySelector('.faq-q button');
          var on = other === item ? open : false;
          other.classList.toggle('is-open', on);
          if (b) b.setAttribute('aria-expanded', on ? 'true' : 'false');
        });
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
