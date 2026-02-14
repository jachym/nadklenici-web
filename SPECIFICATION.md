# SPECIFICATION: Project "Digitální Les" (Forest Kindergarten Web)

## 1. Product Vision (The Hook)
We are NOT building a generic school portal. We are building a **Marketing Brochure** and a **Trust Generator**.
The website's sole purpose is to convert a worried parent into an excited applicant. It must radiate safety, joy, and connection with nature. It must answer the question: "Why should my child grow up here?"

## 2. Target Audience (The Guests)
*   **Primary (90%): Prospective Parents.**
    *   *Needs:* Emotional reassurance (photos of happy kids), Rational validation (price, opening hours, philosophy), Fear mitigation (safety, hygiene, weather).
    *   *Behavior:* They scan quickly. They need visual hooks and clear "Call to Actions" (Přijďte se podívat).
*   **Secondary (10%): Current Parents.**
    *   *Needs:* Fact-checking. "When does the summer break start?", "How much is the tuition?", "What is the account number?".
    *   *Behavior:* In and out. They need a "Quick Links" footer or a dedicated "Pro rodiče" static page.

## 3. Technology Stack (The Ingredients)
*   **Core:** [Astro](https://astro.build) (Perfect for static, high-performance marketing sites).
*   **Styling:** Tailwind CSS (Custom design to evoke nature).
*   **CMS:** Not strictly needed if content rarely changes. We will use Markdown files directly in the repo for easy edits by admins (or a super simple Decap CMS later).
*   **Hosting:** Cloudflare Pages / GitHub Pages.

## 4. Key Content Blocks (The Experience)
Instead of generic pages, we structure the flow:

1.  **Hero Section (Home):** High-quality emotional photo/video. Tagline. Primary CTA ("Přijďte mezi nás").
2.  **The Story ("Jeden den v lese"):** A visual timeline or section describing the daily rhythm. Shows balance of play and learning.
3.  **The Philosophy ("Proč les?"):** Brief, punchy benefits. Health, independence, resilience.
4.  **Fear Busters (FAQ):** Explicitly addressing: "Co když prší?", "Co toalety?", "Co klíšťata?".
5.  **The Logistics (The Boring Stuff):**
    *   **Ceník:** Clear pricing table.
    *   **Kalendář:** Static list of holidays and breaks (replaces dynamic "News").
    *   **Kontakt:** Map, Phone, Email.

## 5. Design Guidelines
*   **Visuals:** Big images, earthy colors, readable typography.
*   **Navigation:** Simple. "O nás", "Jeden den v lese", "Praktické info" (Ceník+Kalendář), "Kontakt".
*   **Mobile:** Must be perfect on mobile. This is where parents browse at night.

## 6. Migration Strategy
*   Discard old "News" archives.
*   Extract "Etický kodex" and "Stanovy" into downloadable PDFs or collapsed sections (don't clutter the main flow).
*   Refine "Ceník" and "Provoz" into a single cohesive "Praktické informace" page.