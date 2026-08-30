# ArchiVerse — Web

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's in this scaffold

- `app/layout.tsx` — root shell: fonts (Fraunces/Archivo/Archivo Mono via next/font), skip link, Header, Footer.
- `app/globals.css` — design token CSS variables (color, focus states, reduced-motion, skip link).
- `app/page.tsx` — Home page composition (hero, selected work, services). Content is placeholder — see `TODO` comments.
- `components/Header.tsx`, `components/Footer.tsx` — shared shell nav.
- `components/Button.tsx` — CTA link primitive (primary/secondary variants).
- `tailwind.config.ts` — maps Tailwind utilities to the approved design tokens (colors, spacing scale, breakpoints, radius).

## Manual verification checklist (do this before we build the next page)

1. `npm run dev`, resize the browser from 320px to 1440px+ — confirm no horizontal scroll, header/nav wraps sensibly, gallery goes single-column on mobile.
2. Tab through the page with keyboard only: skip link should appear first and jump past the header; focus outline (gold ring) should be visible on every link/button; tab order should be logical (hero CTAs → gallery → services), not jump around.
3. Toggle "reduce motion" in your OS accessibility settings and confirm smooth-scroll is disabled.
4. Run `npm run typecheck` and `npm run lint` — both should pass with zero errors.
5. Visually confirm colors match the approved palette (warm ivory background, navy headings/footer, gold focus ring and secondary-button border) — nothing should look like default Tailwind blue/gray.

## Known gaps (intentional, flagged for you)

- No real photography or copy yet — every placeholder is commented `TODO(content)`.
- No i18n/RO routing yet — planned for Phase 4 (integration), after component structure is stable.
- No Portfolio, Services, Studio, Contact, or legal pages yet — Home only, per the "approve one page before building all pages" rule.

## Note on legacy index.html

The repo previously contained a static `index.html`. That file is no longer
the app's entry point — Next.js renders the site via `app/page.tsx` and
`app/layout.tsx`. `index.html` is left in place but unused; delete it
whenever you're ready, or tell Claude to remove it.
