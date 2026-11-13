#!/usr/bin/env node
/* ============================================================
   Writes the upcoming pop-ups into the HTML at deploy time.

   Netlify runs this as the build command (netlify.toml). It fetches the
   public events from the CRM (Supabase function website_events) and puts
   the event rows + schema.org Event data straight into index.html,
   en/index.html and es/index.html. Search engines and AI crawlers that do
   not run JavaScript then see the dates as well. In the browser,
   js/live-data.js still refreshes the list on every visit.

   Never fails the deploy: on any error the pages keep their
   "we are planning our next stops" note and the browser fills the list.

   Run locally:  node tools/build-events.js            (fetches the CRM)
                 node tools/build-events.js rows.json  (uses a local file)
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { rowsHtml, jsonLd } = require('../js/events-render.js');

const ROOT = path.resolve(__dirname, '..');
const URL = 'https://yczjmnujsstoxzhmqnrc.supabase.co/rest/v1/rpc/website_events';
const KEY = 'sb_publishable_NKsTBPATicQs1rjTPm5lKg_EhXbO-eo'; // public key, same as in the site's JS
const MAX_EVENTS = 4;
const PAGES = [['index.html', 'de'], ['en/index.html', 'en'], ['es/index.html', 'es']];

function loadDict() {
  const src = fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8');
  const start = src.indexOf('var DICT = {');
  const end = src.indexOf('\n  };', start);
  return vm.runInNewContext('(' + src.slice(start + 'var DICT = '.length, end + 4) + ')');
}

async function fetchEvents() {
  if (process.argv[2]) return JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' },
      body: '{}',
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const rows = await res.json();
    if (!Array.isArray(rows)) throw new Error('unexpected response');
    return rows;
  } finally {
    clearTimeout(timer);
  }
}

(async () => {
  let events;
  try {
    events = await fetchEvents();
  } catch (e) {
    console.warn('build-events: could not load events (' + e.message + '), pages keep the planning note.');
    return;
  }
  if (!events.length) {
    console.log('build-events: no upcoming events, pages keep the planning note.');
    return;
  }
  const DICT = loadDict();
  for (const [file, lang] of PAGES) {
    const full = path.join(ROOT, file);
    if (!fs.existsSync(full)) continue;
    const t = (key) => (DICT[lang] && DICT[lang][key] !== undefined ? DICT[lang][key] : key);
    let html = fs.readFileSync(full, 'utf8');

    const rows = rowsHtml(events, lang, t, MAX_EVENTS);
    html = html.replace(/(<!-- events:start[^>]*-->)[\s\S]*?(<!-- events:end -->)/, `$1\n        ${rows}\n        $2`);

    const data = jsonLd(events, lang, t);
    if (data) {
      const json = JSON.stringify(data).replace(/</g, '\\u003c');
      html = html.replace('<!-- events-ld -->', `<script type="application/ld+json" id="lc-events-jsonld">${json}</script>`);
    }
    fs.writeFileSync(full, html);
    console.log(`build-events: ${file}: ${Math.min(events.length, MAX_EVENTS)} events written`);
  }
})().catch((e) => {
  console.warn('build-events: skipped (' + e.message + ')');
});
