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
