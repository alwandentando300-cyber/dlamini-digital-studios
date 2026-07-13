# Dlamini Web Studio — Website Plan

A premium, conversion-focused marketing site for a South African web design agency. Multi-route TanStack Start build with SEO baked in from day one.

## Design system

Set in `src/styles.css` as design tokens (no hardcoded colors in components):

- Navy `#0F172A` — primary text / dark sections
- Royal Blue `#2563EB` — primary CTAs, links, accents
- Emerald `#10B981` — success accents, secondary highlights
- White `#FFFFFF` — base background
- Light Grey `#F8FAFC` — alt section backgrounds
- Poppins (headings) + Inter (body) loaded via `<link>` in `__root.tsx`
- Soft shadows, rounded-2xl corners, generous spacing, subtle fade/slide-in animations on scroll

## Routes (each with unique SEO metadata)

Separate route files under `src/routes/` — no hash-anchor SPA:

- `/` — Home
- `/services` — Services
- `/portfolio` — Portfolio
- `/about` — About
- `/faq` — FAQ (with FAQPage JSON-LD)
- `/contact` — Contact

Each route gets its own `head()` with title, description, og:title, og:description, og:url, and canonical. Root `__root.tsx` holds sitewide defaults + Organization JSON-LD.

## Shared shell

- Sticky top nav (logo left, links right, "Get a Free Quote" button)
- Mobile hamburger menu
- Footer: brand blurb, quick links, contact info, social, copyright

## Homepage sections

1. **Hero** — Headline "Professional Websites That Help Businesses Grow", subheading, two CTAs (Get a Free Quote → /contact, View Portfolio → /portfolio), abstract tech/workspace hero image
2. **Trust bar** — "Trusted by South African small businesses" + logo placeholders
3. **Services preview** — 3–4 cards (Web Design, SEO, E-commerce, Maintenance) linking to /services
4. **Why choose us** — 4 value props with icons (Fast, SEO-ready, Mobile-first, Local support)
5. **Process** — 4 steps (Discover → Design → Build → Launch)
6. **Portfolio preview** — 3 featured projects linking to /portfolio
7. **Testimonials** — 2–3 client quotes
8. **CTA section** — "Ready to grow your business online?" + Get a Free Quote button
9. **Footer**

## Other pages (summary)

- **Services** — Detailed cards for each offering with features + pricing tiers (Starter / Business / Premium)
- **Portfolio** — Grid of project cards (image, name, category, brief)
- **About** — Story, mission, values, founder blurb
- **FAQ** — Accordion of 8–10 common questions + JSON-LD FAQPage schema
- **Contact** — Contact form (name, email, phone, message), business email/phone, response-time note. Form is UI-only for now (no backend)

## SEO baseline

- Unique `<title>` and meta description per route
- Open Graph + Twitter card tags per route
- Canonical URLs (relative, self-referencing)
- Organization JSON-LD in `__root.tsx`; FAQPage JSON-LD on `/faq`
- Semantic HTML (single `h1` per page, proper heading hierarchy)
- Alt text on all images, lazy loading
- `public/robots.txt` and `public/sitemap.xml`

## Technical notes

- TanStack Start file-based routing under `src/routes/`
- Tailwind v4 tokens in `src/styles.css` under `@theme inline`
- Poppins + Inter loaded via Google Fonts `<link>` in `__root.tsx` head (not `@import`)
- Hero + portfolio images generated via imagegen and saved to `src/assets/`
- Contact form: client-side validation only; wire to Lovable Cloud later if you want submissions stored/emailed
- No auth, no database in this pass

## Out of scope for this pass

- Backend (form submissions, CMS, blog) — can add Lovable Cloud later
- Booking/scheduling integrations
- Analytics wiring
- Blog route
