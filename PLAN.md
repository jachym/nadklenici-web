# PLAN: "Digitální Les" Roadmap

## Phase 1: The Soil (Preparation)
- [x] Initialize project repository.
- [x] Setup **Astro** with **Tailwind CSS**.
- [x] Create basic layouts (Header, Footer, Base Layout).
- [x] Define color palette (Earth tones: Greens, Browns, Creams) and Typography.

## Phase 2: The Trunk (Structure & Content Distillation)
- [x] Create content collections/layouts for: `landing-page`, `static-page`.
- [x] **Content Transformation (Source: Local `web-old-copy` + Migration):**
    - [x] **Audit & Extract Local Text:**
        - [x] Extract "Philosophy" text from `web-old-copy/index.md`.
        - [x] Check `web-old-copy/_pages/about.md` for story details.
        - [x] Extract Contact info from `web-old-copy/_pages/contact.md`.
    - [x] **Fill Gaps (Manual/Scrape):**
        - [x] Pricing (Ceník) - likely missing in old copy.
        - [x] Calendar/Holidays - needs fresh data.
    - [x] **Assemble Pages:**
        - [x] **Home:** Hero + Philosophy + Testimonials?
        - [x] **The Story:** "Day in the Forest".
        - [x] **Logistics:** "Praktické informace".
- [x] Implement simplified Navigation.

## Phase 3: The Leaves (Visuals & Experience)
- [ ] **Asset Upgrade (CRITICAL):**
    - [ ] Existing photos (e.g., `home.jpg` is 640px) are too low res.
    - [ ] Sourcing Strategy: Use high-quality nature stock photos (Unsplash) as placeholders OR scrape higher-res from live site if available.
- [ ] Implement "Masonry Gallery" (Visual proof of happiness).
- [ ] Implement "Static Calendar" component.
- [ ] Polish UI/UX (Animations, Hover states).
- [ ] Mobile responsiveness check.

## Phase 4: The Harvest (Deploy)
- [ ] Final Content Review.
- [ ] Build & Optimization check (Lighthouse score).
- [ ] Deploy to Static Hosting (GitHub Pages/Cloudflare).
