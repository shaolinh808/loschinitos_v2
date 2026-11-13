/* ============================================================
   Pop-up events: markup + schema.org data
   ------------------------------------------------------------
   Shared by the browser (js/live-data.js, refreshes the list on
   every visit) and by tools/build-events.js (writes the list into
   the HTML at deploy time, so search engines and AI crawlers that
   do not run JavaScript see the dates too). Keep it dependency-free.
   ============================================================ */
(function (root) {
  'use strict';

  var SITE = 'https://loschinitos.de/';
  var LOCALE = { de: 'de-DE', en: 'en-GB', es: 'es-MX' };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function formatDate(iso, lang) {
    var parts = String(iso).split('-');
    var d = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2], 12));
    try {
      return new Intl.DateTimeFormat(LOCALE[lang] || 'de-DE', {
        weekday: 'short', day: '2-digit', month: '2-digit', timeZone: 'Europe/Berlin'
      }).format(d);
    } catch (e) {
      return parts[2] + '.' + parts[1] + '.';
    }
  }

  // "18:00:00" -> per-language label: "18 Uhr" / "6 pm" / "18:00"
  function fmtTime(time, lang) {
    var p = String(time).split(':'), h = +p[0], m = +p[1];
    if (lang === 'en') {
      var h12 = h % 12 || 12;
      return h12 + (m ? ':' + p[1] : '') + (h < 12 ? ' am' : ' pm');
    }
    if (lang === 'es') return p[0] + ':' + p[1];
    return h + (m ? ':' + p[1] : '');
  }

  function formatTimes(ev, lang, t) {
    if (!ev.start_time) return '';
    var key = ev.end_time ? 'events.timeRange' : 'events.timeFrom';
    return t(key).replace('{s}', fmtTime(ev.start_time, lang)).replace('{e}', ev.end_time ? fmtTime(ev.end_time, lang) : '');
  }

  /* HTML for the rows of #events-list (empty string = keep the "planning" note) */
  function rowsHtml(events, lang, t, max) {
    if (!events || !events.length) return '';
    return events.slice(0, max || 4).map(function (ev) {
      var kind = [t('events.popup')];
      var cat = t('events.cat.' + ev.category);
      if (cat && cat.indexOf('events.cat.') !== 0) kind.push(cat);

      var loc, time;
      if (ev.confirmed) {
        loc = ev.venue || t('events.tbaPlace');
        time = [formatDate(ev.event_date, lang), formatTimes(ev, lang, t), ev.city].filter(Boolean).join(' · ');
      } else {
        loc = t('events.tbaPlace');
        time = t('events.tbaDate');
      }

      var html = '<div class="event-row' + (ev.confirmed ? '' : ' event-row--tba') + '"><div>' +
        '<div class="event-kind">' + esc(kind.join(' · ')) + '</div>' +
        '<div class="event-loc">' + esc(loc) + '</div>' +
        '<div class="event-time">' + esc(time) + '</div></div>';

      var place = ev.confirmed ? [ev.venue, ev.address, ev.city].filter(Boolean).join(', ') : '';
      if (place) {
        html += '<a class="event-details" target="_blank" rel="noopener" href="' +
          esc('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place)) + '">' +
          esc(t('events.route')) + '</a>';
      }
      return html + '</div>';
    }).join('');
  }

  function berlinOffset(dateIso) {
    try {
      var part = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', timeZoneName: 'longOffset' })
        .formatToParts(new Date(dateIso + 'T12:00:00Z'))
        .filter(function (x) { return x.type === 'timeZoneName'; })[0].value; // "GMT+01:00"
      return part === 'GMT' ? '+00:00' : part.replace('GMT', '');
    } catch (e) { return '+01:00'; }
  }

  /* schema.org/Event graph for confirmed pop-ups (null if there are none) */
  function jsonLd(events, lang, t) {
    var page = SITE + (lang && lang !== 'de' ? lang + '/' : '');
    var items = (events || []).filter(function (ev) { return ev.confirmed && ev.event_date; }).map(function (ev) {
      var start = ev.event_date + (ev.start_time ? 'T' + ev.start_time.slice(0, 5) + ':00' + berlinOffset(ev.event_date) : '');
      var item = {
        '@type': 'Event',
        name: t('events.ldName') + (ev.venue ? t('events.ldAt') + ev.venue : ''),
        description: t('events.ldDesc'),
        startDate: start,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: page + '#events',
        organizer: { '@type': 'Organization', '@id': SITE + '#org', name: 'Los Chinitos', url: SITE },
        image: [SITE + 'hero-tacos.webp'],
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
    return items.length ? { '@context': 'https://schema.org', '@graph': items } : null;
  }

  var api = { rowsHtml: rowsHtml, jsonLd: jsonLd };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LC_EVENTS = api;
})(this);
