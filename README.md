# Danat Computers

Marketing website for **Danat Computers** (ASTHAR TRADING CO LLC) — an IT retail,
repair and integration business operating four branches in Oman: Ruwi, Sohar,
Hail and Salalah.

Built with [Astro](https://astro.build) as a static site. Zero JavaScript by
default; only the interactive sections ship any.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command | Does |
| --- | --- |
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Build to `dist/` (generates AVIF/WebP) |
| `npm run preview` | Serve the production build locally |

Requires Node 18+.

## Structure

```
public/
  brand/          Official Danat logo + favicons  (do not edit the logo)
  fonts/          Self-hosted woff2 subsets, 39.5 KB total
src/
  assets/photos/  Source photography (Astro optimises at build time)
  components/
    global/       Header, Footer, Logo
    sections/     Hero, Services
    ui/           Button, Icon
  content/        Service copy as Markdown (typed collection)
  data/           site.ts, services.ts — business facts and hub config
  layouts/        BaseLayout, PageLayout
  scripts/        scroll.ts — the shared scroll engine
  styles/         tokens.css, global.css, motion.css, fonts.css
```

### Where to change things

- **Colours, type, spacing, motion** — `src/styles/tokens.css`. Single source of
  truth; nothing else should hard-code a colour.
- **Phone, email, branches, stats** — `src/data/site.ts`.
- **Hero service hub** — `src/data/services.ts`.
- **Service page copy** — `src/content/services/*.md`.

## Design system

Light/dark alternating sections driven by a `data-tone` attribute
(`light` · `off` · `dark` · `ink`). Danat green `#59AA54` is measured from the
official logo and used as an accent only.

Contrast-safe variants exist for both grounds and every pair is documented with
its computed WCAG ratio in `tokens.css`. The raw brand green fails as text on
white (2.88:1), so it is used for fills only there.

Animation is CSS-driven; `src/scripts/scroll.ts` (~2 KB) writes custom
properties and data attributes and lets CSS do the work. No animation library.
Everything respects `prefers-reduced-motion`.

## Assets

- **Logo** — `public/brand/danat-logo.webp`, used exactly as supplied. The
  current file is 100×100; a higher-resolution SVG or PNG should replace it at
  the same path when available.
- **Photography** — currently sourced from [Pexels](https://pexels.com) under
  their free commercial licence. Intended to be replaced with real photography
  of Danat's technicians, benches and branches.
- **Fonts** — Switzer (Fontshare), Instrument Serif and JetBrains Mono
  (Google Fonts), subset to Latin.

## Outstanding

- Confirm branch addresses, phone numbers and opening hours for Sohar, Hail and
  Salalah (`src/data/site.ts` marks these `verified: false`).
- The live site lists `(+060) 444 434 444`, which is not a valid Oman number;
  omitted pending confirmation.
- Remaining homepage sections: About, Expertise, Business Solutions, Branches,
  Why Danat, Contact.
- Inner pages: `/services/[slug]`, `/about`, `/branches`, `/contact`.
