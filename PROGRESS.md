# Los Chinitos — Project Progress

## Project Overview

**Los Chinitos** is a premium standalone HTML website for a CDMX-style fast-casual taqueria franchise based in Düsseldorf, Germany. The website covers brand story, menu, locations, franchise information, and a contact form — all in a single self-contained HTML file.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Structure | Single `index.html` | No Node.js on the machine; no build step needed |
| Styling | Tailwind CSS (CDN) | Utility-first, no compilation required |
| Fonts | Google Fonts CDN | Barlow Condensed (display), Outfit (body), JetBrains Mono (prices) |
| Animation | Vanilla CSS + JS | IntersectionObserver for scroll entrance, custom canvas-free particle system |
| i18n | Vanilla JS object | `data-i18n` attributes + `localStorage` persistence |
| Video | Native `<video>` tag | `autoplay muted loop playsinline` |

### Tailwind Custom Colors
```
chili:  #C8202C   (brand red)
masa:   #F5EFE6   (cream background)
carbon: #1A1A1A   (near-black)
adobe:  #7A736C   (muted warm grey)
hueso:  #E4DDD2   (light bone)
```

---

## File Structure

```
C:\Users\Linh Tran\los-chinitos\
├── index.html          ← entire website (~1 900 lines)
├── logo.png            ← Los Chinitos Logo V3 (red on white)
├── suadero_taco_website.mp4  ← hero background video
├── img_9907.jpg        ← story section founder photo (converted from HEIC)
├── taco_pastor.png     ← Al Pastor product photo
├── taco_suadero.png    ← Suadero product photo
├── taco_campechano.png ← Campechano product photo
├── taco_asada.png      ← Carne Asada product photo
└── PROGRESS.md         ← this file
```

---

## Sections (top → bottom)

1. **Navbar** — fixed full-width strip, glassmorphism, logo left, links absolutely centred, lang switcher + CTA right
2. **Hero** — full-viewport video background with inward masking gradient, headline, stats strip
3. **Marquee strip** — scrolling taco names ticker
4. **Unsere Werte** — dark section with CDMX background image, three value columns
5. **Menu** — asymmetric 12-column grid, category filter tabs, 5 product cards
6. **Diagonal divider** — decorative stripe
7. **Unsere Geschichte** — brand story, two image+text rows, founder quote
8. **Stats** — 4 KPI tiles (Standorte / Land / Bewertung / Verlängerungsrate)
9. **Standorte** — 2-column grid: open location card + "Demnächst 2027" München card
10. **Franchise** — left column (headline, checklist, quote), right column (contact form)
11. **FAQ** — accordion, 4 questions
12. **Footer** — logo left, Unternehmen + Kontakt columns right

---

## Key Design Decisions

### Inward Masking Gradient (Hero)
Three-layer stacked CSS background on `#hero-mask` div:
- **Radial gradient** — dark centre for text legibility → cream edges
- **Top/bottom linear fades** — dissolves video into page background
- **Left/right linear fades** — same for sides
Result: video appears as a "window" that bleeds seamlessly into the cream page.

### Logo Rendering on Two Backgrounds
- **Navbar** (cream glassmorphism): `mix-blend-mode: multiply` — dissolves the white PNG background
- **Footer** (carbon `#1A1A1A`): `filter: brightness(0) invert(1)` — renders logo pure white

### Suadero Card Hover Glitch Fix
The dark Suadero card uses `flex-col` with `flex-1` on the image container. The combination of CSS Grid stretch + `transform: scale(1.05)` on hover caused a sub-pixel rendering artifact at the bottom edge. Fixed by adding `transform: translateZ(0)` to the image wrapper, forcing it onto its own GPU compositing layer.

### Navbar Layout
Uses `position: relative` on `<nav>` with the link `<ul>` set to `position: absolute; left: 50%; transform: translateX(-50%)` — true optical centering regardless of logo/button widths. Logo is pinned left via normal flow; right cluster uses `ml-auto`.

---

## Feature Log (Chronological)

### Phase 1 — Initial Build
- Scaffolded full standalone HTML using the taste-skill design framework (DESIGN_VARIANCE: 8, MOTION_INTENSITY: 6, VISUAL_DENSITY: 4)
- Applied brand identity from `Los_Chinitos_Brand_Identity.docx`
- Set up Tailwind CDN config with custom brand colours
- Built all 12 sections from scratch

### Phase 2 — Hero & Assets
- Integrated `suadero_taco_website.mp4` as full-viewport video background
- Built inward masking gradient (3-layer CSS background) for seamless video blending
- Added `Los Chinitos Logo V3 (1).png` to navbar and footer
- Fixed footer logo visibility (`filter: brightness(0) invert(1)`)

### Phase 3 — Navbar & Layout Fixes
- Widened navbar, enlarged links (`text-lg font-semibold gap-9`), enlarged logo (`h-16`)
- Changed location text to Düsseldorf
- Fixed hero stats readability (fully opaque white + text-shadow); values → 1 / 1 / 4,9
- Made top two menu cards equal size (`col-span-6` each)

### Phase 4 — Story Section
- Replaced placeholder photo with `img_9907.jpg` (converted from HEIC by user)
- Updated all story paragraphs with real founder narrative (Linh, Toni, Mazlum)
- Fixed "Ciudad de México" font weight inconsistency (removed `font-semibold` from span)

### Phase 5 — Product Cards
- Replaced placeholders with `taco_pastor.png` and `taco_suadero.png`
- Al Pastor: badge → "Bestseller", price → €7,50, removed tag chips
- Suadero: badge → "★ Founder's Pick", price → €11,00
- Added `taco_campechano.png`: description → "Suadero + Chorizo. Beides. Einfach geil."
- Added `taco_asada.png`: price → €11,00
- Fixed Suadero hover glitch with `transform: translateZ(0)` on image wrapper

### Phase 6 — Locations
- Renamed Berlin card → "Düsseldorf — Mitte", address → Königsallee 52, 40212 Düsseldorf
- Removed Hamburg and Wien cards
- Updated Demnächst card: year → 2027, image → München (`picsum/seed/munchen22`)
- Fixed card alignment: `items-stretch` + `h-full` on both cards

### Phase 7 — Footer
- Removed "Menu" column (Al Pastor / Suadero / Campechano / Carne Asada / Aguas Frescas)
- Updated footer grid: `[1.6fr_1fr_1fr_1fr]` → `[1.6fr_1fr_1fr]`
- Restructured to flex layout: logo left, Unternehmen + Kontakt right
- Logo enlarged: `h-14` → `h-28`
- Removed brand description paragraph
- Updated HQ address → Witzelstraße 46, 40225 Düsseldorf

### Phase 8 — Unsere Werte Section
- Added new section before menu with three value statements:
  - QUALITÄT OHNE KOMPROMISSE
  - KULTURAUFTRAG
  - HERITAGE
- Background: `#1A1A1A` (dark) for visual separation from surrounding cream sections
- Added CDMX background image (Angel of Independence, iStock) at `opacity: 0.48` with dark gradient overlay
- Centered subheaders and text; removed red lines and hover effects from value cards
- Header left-aligned to match all other section headers

### Phase 9 — Navbar Redesign
- Changed from floating pill/bar → full-width edge-to-edge strip
- Removed `rounded-2xl`, outer padding, `max-w-7xl`; changed border to bottom-only
- Mobile dropdown also spans full width

### Phase 10 — Language Switcher (i18n)
- Added flag-based language switcher to navbar (desktop dropdown + mobile flag row)
- **Languages**: 🇩🇪 Deutsch, 🇬🇧 English, 🇲🇽 Español (MX), 🇳🇱 Nederlands, 🇮🇹 Italiano, 🇫🇷 Français
- Animated dropdown: fade + scale transition, chevron rotation
- 69+ `data-i18n` keys across all sections (nav, hero, werte, menu, story, stats, locations, franchise, FAQ, footer)
- Full translations for all 6 languages including story paragraphs, FAQ Q&A, franchise checklist
- Language selection persisted to `localStorage`
- Outside-click closes dropdown

### Phase 11 — Navbar Animation & Restructure
- Added sliding chili-red underline on nav link hover (`.nav-link::after` CSS)
- Nav links moved to absolute centre of strip
- Language switcher moved to right cluster, immediately left of CTA button

### Phase 12 — Smoke Cursor Animation
- DOM-based particle system on `mousemove` (throttled to ~35 puffs/sec)
- Each puff: radial-gradient black circle, spawns at cursor, drifts upward with random side wobble
- Fades and expands over ~0.45s then removed from DOM
- Color: `rgba(0,0,0,0.6)` black

---

## Brand Content

### Founders
Linh, Toni & Mazlum — three university friends who spent time in CDMX learning authentic taqueria craft in the Roma Norte neighbourhood.

### Brand Statement
> "Wir sind keine Mexikaner. Aber unser Trompo ist."

### Current Location
**Düsseldorf — Mitte**
Königsallee 52, 40212 Düsseldorf
Mo–So: 11:00–23:00 · +49 211 8374 5520

### HQ
Witzelstraße 46, 40225 Düsseldorf

### Contact
hola@loschinitos.de

---

## Known Issues / Future Todos

- Smoke cursor animation: user requested the style from lightswind.com/components/smokey-cursor (canvas-based wispy smoke) — not yet implemented; current version is DOM-particle based
- No real backend: franchise form submission (`handleSubmit`) currently simulates success after a timeout
- All picsum.photos placeholder images (Campechano, Carne Asada background, Aguas Frescas, Trompo story, München card) should be replaced with real photography
- `© 2025 Los Chinitos GmbH` — year should be updated when going live

> **NOTE:** The items above are superseded by **Redesign v2** below. All hotlinked images are removed; the copyright is now © 2026.

---

## Redesign v2 — Street-Editorial Rebuild

Full visual-shell rebuild to fix a brand/design mismatch: the v1 site was a polite cream Tailwind template (rounded-3xl cards, pill buttons, glassmorphism nav, fade-up on everything, fake-scale stats) while the brand voice is loud and raw. v2 commits to a confident **street-poster / mercado editorial** art direction. Content, i18n, and all functions preserved; no build step added.

### New Design System

| Token | v1 | v2 |
|---|---|---|
| Display font | Barlow Condensed | **Anton** (ultra-condensed poster type, uppercase) |
| Body font | Outfit | **Archivo** (grotesque, weights 400–900) |
| Accent/mono | JetBrains Mono | **Space Mono** (tickets, prices, kickers, meta) |
| Cards | rounded-3xl, soft shadows | **2px carbon borders, square corners, hard offset shadows** |
| Buttons | pill / rounded-full | **poster hard-shadow blocks** (`5px 5px 0` offset that collapses on press) |
| Nav | glassmorphism blur | **solid masa masthead, 2px carbon bottom border** |
| Eyebrows | pill "tag" chips | **mono `.kicker`** with a red leading rule |
| Red usage | underused accent | **load-bearing** — full red ticker bar, red cards, red numerals, red price tags |

Colors: brand base kept (chili `#C8202C`, masa `#F5EFE6`, carbon `#1A1A1A`). Added `ink #2B2622` (body on light) and `sand #DAD3C8` (body on dark) to raise body contrast to WCAG AA; `adobe` darkened to `#5A524A`. Body type bumped from text-sm/xs to text-base/lg.

### Structural changes per section
1. **Nav** — glass → solid masa masthead, bold uppercase Archivo links, poster CTA. Logo keeps `mix-blend:multiply` (red on cream). CTA relabeled honest ("Besuch uns" → #locations). Lang switcher: bordered, `aria-haspopup`/`aria-expanded`, dropdown rows now show visible language **codes** (DE/EN/…) alongside flags; mobile switcher shows flag+code with `aria-label`.
2. **Hero** — heavy triple-gradient vignette removed; video is now full-bleed with a light bottom-only scrim + thin masa foot-fade. Copy cut to headline ("Tacos. / Sin filtro."), one brand statement, one CTA, plus an honest rotated "Gegründet 2025" sticker. **Hero stats strip deleted.**
3. **Ticker** — restyled into a bold full-width **chili-red bar** with Anton uppercase items (design feature, `aria-hidden`, pauses on reduced-motion).
4. **Werte / Valores** — *new composition:* oversized outline word "VALORES" bleeding across the top boundary + a numbered `01/02/03` editorial list. iStock CDMX photo **removed** (no replacement image needed — typographic).
5. **Menu** — *new composition:* **sticky heading column** (desktop) beside a unified card grid. One coherent card family (`.dish`) with paper + dark (Suadero) + red (Aguas Frescas, now photo-free typographic) variants. Filter tabs **removed** (too few items/category). Dead "Bestellen" buttons **removed** → honest rotated **price tags** + a location note ("Bestellt wird vor Ort — Königsallee 52"). Aguas Frescas picsum image **removed**.
6. **Story** — editorial split; real `img_9907.jpg` kept with a rotated red caption stamp; the Trompo picsum image **replaced with an inline SVG trompo graphic**. Big pull-quote in Anton. Fixed "zwei Chinitos" → **"drei Chinitos"** (three founders) in all 6 languages.
7. **Stats section (1 / 1 / 4,9 / 93%)** — **deleted entirely** (fake scale).
8. **Locations** — honest: one large real Düsseldorf card (with working `tel:` + Google Maps directions link) + a candid red "next city" teaser. Removed inflated "München, Köln, Amsterdam +14 weitere" claim and its picsum image.
9. **Franchise** — layout restyled to numbered rules; fixed "Onboarding in **Berlin**" → **Düsseldorf** and wall-text attribution "Filiale **Berlin Mitte**" → **Königsallee 52** (all languages). Form now has translated Name/E-Mail labels; neutral placeholder examples.
10. **FAQ** — sticky heading + bordered accordion; `aria-expanded` wired.
11. **Footer** — bordered social tiles, © **2026**.

### Removed
- All 4 hotlinked images (iStock Angel + 3 picsum) — **zero external image requests** (verified).
- DOM smoke-cursor gimmick, spotlight mouse-tracking, stats counter animation, menu filter JS.
- Fake-credibility stats (hero strip + stats section).

### Motion / a11y
- Scroll-entrance reduced to a single `.reveal` on headings/key blocks (not every element); IO unobserves after firing.
- `@media (prefers-reduced-motion: reduce)` disables reveals, marquee, and smooth scroll.
- Global `:focus-visible` outlines (chili, with cream `.on-dark-focus` variant on dark surfaces); real `<button>`/`<a>` semantics; flag switchers carry text/`aria-label`.
- Body-text contrast raised to AA (ink on masa, sand on carbon).

### QA performed (all passed)
- **Assets:** every `src` → local file that exists (logo.png, suadero_taco_website.mp4, taco_*.png, img_9907.jpg). Only external URLs are Google Fonts, Tailwind CDN, SVG namespace, and one Google Maps directions link — no external images.
- **i18n:** 88 unique `data-i18n` keys in markup; all present in **all 6** language objects. No orphan keys referencing deleted sections; no duplicate keys within a language.
- **HTML:** tag balance verified (section/article/header/nav/footer/form/ul/li/blockquote/div all open==close).
- **Logic (traced):** language switch + persistence, mobile menu, FAQ accordion, form submit simulation all intact.

### v2 Tech notes
- Fonts loaded: `Anton`, `Archivo` (ital + wght 400–900), `Space Mono` (400/700).
- Card language: `.dish` (border + hard-shadow hover), `.pricetag` (rotated), `.kicker`, `.sticker`, `.btn-red`/`.btn-red.on-dark`/`.btn-dark`/`.btn-outline`.
- Trompo graphic is a hand-built inline `<svg>` (radial-gradient meat cone, spit, pineapple/onion, layer lines) — no external asset.

---

## Redesign v3 — Checkerboard / editorial rebuild (3-page site)

Full replacement of the site with a new design commissioned separately from
a component prototype (red `#E4000A` / yellow `#FFD400` / near-black,
checkerboard divider strips, a scroll-pinned founder story, a catering
request form, a social wall). Rebuilt from scratch as plain static
HTML/CSS/JS (no framework, no build step) so GitHub Pages serves it
directly. The v2 single-file `index.html` above is fully replaced; its
copy/brand facts (founders, address, contact) were reused where the new
brief didn't override them.

### File structure
```
index.html        — main one-page site
danke.html         — "thank you" page after form submit
impressum.html     — Impressum + Datenschutzerklärung
css/style.css       — shared stylesheet (all 3 pages)
js/main.js          — shared behaviour (nav, story pin, tilt cards, form, page-transition overlay)
```

### Fonts
- **Junegull** (self-hosted `junegull.otf`, already in this repo) for all
  display headlines — used in place of the prototype's "Anton" spec,
  since Junegull is this brand's actual established display font
  (see the `los-chinitos-pptx` design system: same red/dark/yellow
  palette, same checkerboard motif, same Junegull headlines).
- **UnifrakturMaguntia** (Google Fonts) for the "tacos sin filtros"
  script tagline, exactly as the brief specified.
- **Archivo** (Google Fonts) for body copy/UI, matching what the repo
  already used.

### Asset mapping (real files used, no placeholders left in production markup)
- Nav / hero / footer / red divider band: `logo.png` (the circular
  Trompo-badge lockup) as the icon, paired with a plain Junegull
  "Los Chinitos" text wordmark (no separate wordmark SVG exists yet —
  swap in a dedicated wordmark file later if the client wants one).
- Hero background video: `suadero_taco_website.mp4` (already in repo).
- Founder story photo: `img_9907.jpg`; founder names set to Toni / Linh /
  Mato per the brief.
- Story-section rotating badges: `mascot_lantern.png` (left) and
  `mascot_trompo.png` (right) — a Chinese-lantern / trompo pairing that
  matches the "Chinitos" nickname story being told next to them.
- Product grid (6 cards): real photos for **Pastor**, **Suadero**,
  **Campechano**, **Ribeye Gaonera** (`taco_*.png`), plus two
  illustrated cards — **Salsas** (`mascot_chili.png`) and **Aguas
  Frescas** (`mascot_pina.png`) — used instead of inventing dishes with
  no photography. Swap in real photos for those two whenever they exist.
- Social wall placeholder tiles: reuses the same taco/founder photos
  (tinted red, tilted, auto-scrolling) instead of grey boxes, until a
  real Instagram/TikTok embed is available.
- `angel_independencia.png` and `founders_flag.png` are unused by this
  design (kept in the repo, not referenced).

### Interactions implemented
- Navbar: transparent-over-hero → solid red on scroll (>40px), ~260ms
  crossfade; red↔white icon/text/logo swap; "Anfragen" pill flips
  filled↔outlined; mouse-proximity "dock" magnify on nav links (desktop,
  `pointer:fine` only); hamburger + slide-down panel below 640px.
- Founder story: real scroll-driven pin (`position:sticky` + a
  scroll-progress JS loop, not a canned animation library) — photo,
  then left text, then right text, then the two rotating badges, each
  fading/sliding in over a scroll range. Disabled below 768px in favour
  of a plain stacked layout (badges hidden), per spec.
- Product cards: JS-computed 3D tilt toward the cursor (~12° max),
  resets on mouse-leave.
- Social wall: pure-CSS duplicated-track marquee, 3 columns at
  different speeds/directions, tilted -6° as a background layer behind
  a solid (non-translucent) red heading card.
- Catering form: full client-side validation (inline red errors +
  summary line), loading → success button states, then redirects to
  `danke.html`. Honeypot field for basic spam filtering.
- Page-transition "loading wall": clicking the logo/wordmark on
  danke/impressum (or the "Zurück zur Startseite" button) slides two red
  panels together, fades in the white logo, then navigates. `index.html`
  detects that navigation via a `sessionStorage` flag and paints the
  overlay already-closed before first render (no blank-page flash), then
  fades it away once the page has settled. Not wired on index.html's own
  nav (clicking the logo there just anchors to the top of the page).

### ⚠️ Still needs a real owner action before launch
1. **Contact form backend.** `js/main.js` posts the Anfragen form as
   JSON to a `FORM_ENDPOINT` constant that is currently a placeholder
   (`https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID`). GitHub Pages
   can't run a server, so this needs a hosted form processor:
   1. Create a free account at formspree.io with `info@loschinitos.de`.
   2. Create a form, verify the email, copy the form id.
   3. Paste it into `FORM_ENDPOINT` in `js/main.js`.
   Until this is done, submissions will correctly show an error state
   with a `mailto:info@loschinitos.de` fallback rather than silently
   pretending to succeed.
2. **USt-IdNr.** on `impressum.html` is a placeholder ("wird ergänzt") —
   fill in the real number.
3. **Datenschutzerklärung** on `impressum.html` is a good-faith draft
   (flagged as such on the page) — have it checked by someone
   legally qualified before this goes live, especially the description
   of the form-processor (Formspree) once that's actually wired up.
4. **Event rows** on `#events` are still literal placeholders ("Ort —
   Platzhalter") — swap in real dates/locations when known.
5. **Image weight.** Product/founder/logo photos are un-optimized
   originals (1–2.5MB each, ~15MB+ total page weight). Worth running
   them through compression / WebP before the domain goes fully live,
   especially for mobile.
6. Two product-grid photos (Ribeye Gaonera is a stand-in for
   "Gaonera"-style asada) plus real photography for the two illustrated
   slots (Salsas, Aguas Frescas) would let all 6 cards use real photos.
