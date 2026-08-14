# Add Finsyc-style motion to the GTU-ITR site

Keep the current GTU look (navy/red, layout, content) exactly as is. Only borrow the **animation language** from the uploaded Finsyc template.

## Motion language taken from the template

- Section entrances: fade + rise (`opacity 0 -> 1`, `y 30 -> 0`), 0.8s, easing `[0.21, 0.47, 0.32, 0.98]`, triggered once when scrolled into view.
- Staggered children: cards/list items animate in sequence with ~0.1s delay steps.
- Hero/top-of-page: fade-in on mount with delayed cascade (badge -> heading -> text -> button).
- Buttons and cards: smooth 300ms hover transitions (subtle lift, arrow/icon slide, color shift).
- Mobile menu: spring slide-in from the right (`damping 25, stiffness 200`) with staggered links.
- Counters: numbers count up from 0 when the stats band enters view.
- Marquee: continuous linear loop (already present, kept).
- Respect `prefers-reduced-motion`: animations collapse to instant.

## Where it gets applied

- Homepage: banner slider caption fade, "What We Have" feature cards stagger, news panel, stats band (count-up), testimonial cards.
- Page shell (all ~42 inner pages): header band and body content fade-rise on mount.
- Site header: nav mount animation, spring mobile drawer, hover effects on menu/CTA.
- Site footer: fade-rise on view.
- Admin panel: kept static except light fade on table/section mount.

## Technical notes

- Install `motion` (Motion for React, the current framer-motion package) via bun.
- Add `src/components/motion/` with small shared primitives: `FadeIn` (in-view fade+rise with delay prop), `Stagger` (container + item variants), and `CountUp` for the stats.
- Timing/easing constants live in one file so the whole site stays consistent.
- No changes to data fetching, routes, database, or admin logic.
