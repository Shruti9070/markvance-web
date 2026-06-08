# MARKVANCE — Marketing Agency Website

A complete, production-ready marketing-agency website for **Markvance**, built
from the supplied wireframe. Editorial / brutalist aesthetic (Fraunces + Archivo
+ JetBrains Mono, warm paper-and-ink palette, hard borders, offset shadows,
signal-orange accent) with smooth Framer Motion animation throughout.

## Stack

- **React 18** + **Vite 5**
- **React Router 6** (multi-page routing)
- **Tailwind CSS 3** (design tokens in `tailwind.config.js`)
- **Framer Motion 11** (scroll reveals, staggered page loads, page transitions)

## Pages

| Route       | Page      | Highlights                                                                                   |
| ----------- | --------- | -------------------------------------------------------------------------------------------- |
| `/`         | Home      | Hero, trust stats, about preview, why-choose, services overview, process, work, testimonials, FAQ |
| `/about`    | About     | Brand story, pull quote, stats, Meet Mark, values, capabilities, founder/team card           |
| `/services` | Services  | Six alternating "Mark introduces" service rows + four-step process recap                     |
| `/work`     | Portfolio | Filterable case-study grid (animated) with metrics                                            |
| `/contact`  | Contact   | Validated contact form with success state + contact panel                                    |

## Project structure

```
markvance-agency/
├── index.html              # Fonts, SEO meta, JSON-LD, favicon
├── vite.config.js
├── tailwind.config.js      # Brand tokens, fonts, animations
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # Entry + BrowserRouter
    ├── App.jsx             # Routes, scroll restoration, page transitions
    ├── index.css          # Tailwind layers, base styles, grain texture
    ├── data.js            # Single source of all site content
    ├── lib/
    │   └── motion.js       # Shared Framer Motion variants
    ├── assets/
    │   ├── mark-mascot.jpg # Brand mascot (from wireframe)
    │   └── founder.jpg     # Team headshot (from wireframe)
    ├── components/
    │   ├── Logo.jsx
    │   ├── Header.jsx      # Sticky nav + animated mobile menu
    │   ├── Footer.jsx      # CTA band + link columns
    │   ├── PageHero.jsx    # Reusable inner-page hero
    │   ├── Marquee.jsx     # Looping marquee strip
    │   └── StatStrip.jsx   # 4-cell stat strip
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Portfolio.jsx
        └── Contact.jsx
```

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Notes

- All content lives in `src/data.js` — edit there to update copy site-wide.
- The contact form is front-end only; wire `onSubmit` in `pages/Contact.jsx` to
  your backend or a form service (Formspree, etc.).
- SEO: per-page `<title>`/meta can be added with `react-helmet-async` if needed;
  base meta, Open Graph, Twitter and Organization JSON-LD are in `index.html`.
- Respects `prefers-reduced-motion`.
