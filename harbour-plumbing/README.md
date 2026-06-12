# Harbour Plumbing Co. — Single-Page Marketing Site

Vite + React 19 + TypeScript + Tailwind CSS v4. Mobile-first, deployed to Vercel.

```bash
npm install
npm run dev      # local dev on http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Architecture

```
src/
├── data/data.ts        ← ALL site content (the ONLY file you edit to re-skin)
├── lib/useReveal.ts    ← scroll-reveal hook (fade-up, 0.6s, once)
├── index.css           ← design tokens (@theme) + global styles
└── components/         ← presentational only, zero hard-coded content
public/
├── hero-plumber.webp   ← hero image
├── 404.html            ← static 404 page
└── favicon.svg
index.html              ← meta tags, fonts, JSON-LD LocalBusiness schema
```

**Rule: no content in components.** Every string — business name, phone,
services, reviews, suburbs, FAQs, section headings — lives in
[`src/data/data.ts`](src/data/data.ts) as typed exports. Components only
render what they're given.

## ✅ Re-skin for a new client in under 1 hour

### 1. Content — `src/data/data.ts` (~30 min)
- [ ] `business` — name, tagline (+ `taglineAccent` highlight substring), phone
      (**both** `phone` display string and `phoneHref` tel: value), email,
      licence, ABN, hours, top-bar text, Google rating/review count, footer blurb
- [ ] `services` — 6 services: title, description, `priceHint`, icon
      (pick from `components/Icon.tsx`, or add a new 24×24 path there)
- [ ] `serviceAreas` — regions + suburbs
- [ ] `reviews` — names, suburbs, ratings, text
- [ ] `whyChooseUs`, `processSteps`, `faqs`, `quoteSection`, `sectionCopy`

### 2. Theme — `src/index.css` (~10 min)
- [ ] Swap the three brand tokens in `@theme`:
      `--color-navy`, `--color-orange`, `--color-offwhite`
      (and `--color-orange-ink` — must stay ≥4.5:1 contrast on the new accent)
- [ ] Optional: swap fonts in `index.html` Google Fonts URL + `--font-display`/`--font-sans`

### 3. Images & brand (~10 min)
- [ ] Replace `public/hero-plumber.webp` (square, ~1200×1200, WebP ≤100 KB)
- [ ] Update `business.heroImage.alt`
- [ ] Replace the logo `<svg>` in `components/Header.tsx` and `public/favicon.svg`

### 4. SEO & schema — `index.html` (~10 min)
- [ ] `<title>` and `<meta name="description">`
- [ ] JSON-LD block: business name, phone (E.164), email, `areaServed`,
      rating, licence. Change `@type` if not a plumber (e.g. `Electrician`,
      `HVACBusiness` — see schema.org)
- [ ] `public/404.html`: title, phone number, colors

### 5. Verify (~5 min)
- [ ] `npm run build` passes
- [ ] Click every `tel:` link, submit the quote form, open FAQ items
- [ ] Lighthouse: Performance ≥95, Accessibility ≥95

## Accessibility & performance notes

- Tap targets are ≥44px (`min-h-11`) on all links/buttons
- Text on the orange accent uses `--color-orange-ink` (#5C2000, 5.4:1) — don't
  revert it to white, which fails WCAG AA at 3.0:1
- Animations respect `prefers-reduced-motion`
- Hero image is preloaded WebP with explicit dimensions; fonts use `display=swap`

## Deploy (Vercel)

```bash
npm i -g vercel
vercel          # first deploy — accept Vite auto-detection
vercel --prod   # production
```

Or connect the Git repo at vercel.com — zero config, auto-deploys on push.
