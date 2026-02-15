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
    - [~] **Fill Gaps (Manual/Scrape):**
        - [ ] Pricing (Ceník) - **MISSING** (Currently "Doplnit").
        - [x] Calendar/Holidays - Implemented `Calendar.astro`.
    - [x] **Assemble Pages:**
        - [x] **Home:** Hero + Philosophy.
        - [x] **The Story:** "Day in the Forest" (**MISSING Timeline**).
        - [x] **Logistics:** "Praktické informace".
- [x] Implement simplified Navigation.

## Phase 2.5: The Golden Content Polish (Wonka's Orders)
- [ ] **Eliminate "Doplnit":**
    - [ ] Fill Pricing with realistic dummy data.
    - [ ] Add Phone/Map placeholders to Contact.
- [ ] **"Fear Busters" Module (FAQ):**
    - [ ] Add section handling: Rain, Ticks, Toilets, Food.
- [ ] **"Day in the Forest" Timeline:**
    - [ ] Create a visual schedule in `pribeh.md` or `index.astro`.
- [ ] **Emotional Copywriting:**
    - [ ] Rewrite `pribeh.md` intro to be warmer.

## Phase 3: The Leaves (Visuals & Experience)
- [x] **Asset Upgrade (CRITICAL):**
    - [x] Existing photos (e.g., `home.jpg` is 640px) are too low res.
    - [x] Sourcing Strategy: Use high-quality nature stock photos (Unsplash) as placeholders OR scrape higher-res from live site if available.
- [x] Implement "Masonry Gallery" (Visual proof of happiness).
- [x] Implement "Static Calendar" component.
- [x] Polish UI/UX (Animations, Hover states).
- [x] Mobile responsiveness check.

## Phase 4: The Harvest (Deploy)
- [ ] Final Content Review.
- [ ] Build & Optimization check (Lighthouse score).
- [ ] Deploy to Static Hosting (GitHub Pages/Cloudflare).
