# Nautilos — nautilustridentofpaxos.com

One-page site for Nautilos boat tours & transfers, Gaios Port, Paxos, Greece.

## Sections

- Hero (real Ortholithos sunset photo)
- About: vessel photo + two crew cards — Tasos Mitsialis (Owner), Alexandros Mitsialis (Captain)
- Pricing: €1000 Daily Charter (the one priced offering), plus Full Island
  Cruise and Transfers as "Contact us for a quote" cards (no prices, by design)
- Gallery with "View Full Gallery" expansion + commented-out slots for future photos
- Booking: WhatsApp / Viber / Call / Instagram (real number wired in: +30 697 182 9629)
- Contact / Find Us: OpenStreetMap embed of Gaios Port, address, season/hours, phone, email
- Testimonials, Footer (newsletter + Facebook + TikTok marked coming soon)

## Features

- **EN / ΕΛ language toggle** in the nav (persists via localStorage)
- Fully responsive; custom cursor auto-disabled on touch devices
- SEO: meta description, Open Graph tags (nice link previews on WhatsApp/FB),
  schema.org LocalBusiness JSON-LD (Google business info)
- SVG favicon (gold trident on navy)
- Accessibility: alt text on photos, aria labels, visible keyboard focus states
- All photos compressed & optimized (54–250 KB each); no external image dependencies

## Run

Open `index.html` in a browser (or Live Server). No build step.

## Quick edits

- Text/content: `index.html` — note: any text with a `data-i18n` attribute is
  overwritten by the dictionaries at the bottom of `js/script.js`, so edit
  BOTH the English and Greek entries there, not just the HTML.
- Styling: `css/style.css`
- Interactions + translations: `js/script.js`
- Photos: `assets/` — commented-out `<!-- FUTURE IMAGE SLOT -->` blocks are
  ready in both galleries in `index.html`; drop a photo in `assets/`,
  uncomment a block, set `src`/`alt`/caption.

## ⚠️ Confirm before going live

1. **Instagram handle** — links still point to `instagram.com/paxosyacht`.
   Confirm the real Nautilos account and update (2 places in `index.html`).
2. **Email** — `info@nautilustridentofpaxos.com` is assumed; set up this
   mailbox on the domain or replace with the real address (2 places:
   the mailto link and the schema.org block).
3. **Phone** — +30 697 182 9629 taken from the poster; confirm it's the
   booking number (used in WhatsApp/Viber/Call links + schema.org).
4. **Photos still placeholder:** `blue_cave.jpg`, `erimitis_beach.jpg`
   (labeled gradient images — replace with the real photos of the same name),
   and the two portraits `owner_tasos.jpg` / `captain_alex.png`.
5. **Testimonials** are sample copy — replace with real guest reviews.
6. **"12+ Years of Excellence"** badge — confirm the number with the client.
