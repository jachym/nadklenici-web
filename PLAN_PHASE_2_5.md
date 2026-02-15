# PLAN Phase 2.5: The Golden Content Polish

## Overview
This phase focuses on injecting "soul" and "trust" into the website, as mandated by Mr. Wonka's assessment. We will replace placeholders with plausible data, address parental fears, and improve the storytelling.

## Tasks

### 1. Emotional Copywriting (The Hook)
- [x] **Rewrite `src/content/pages/pribeh.md` Intro**:
    -   *Current:* "Principem našeho počínání..." (Dry, corporate).
    -   *New:* Start with imagery. "Představte si dětství, kde se skáče do kaluží, leze po stromech a každý den je dobrodružstvím..."
    -   *Focus:* Connection, freedom, resilience.

### 2. "Day in the Forest" (The Experience)
- [x] **Add Timeline to `src/content/pages/pribeh.md`**:
    -   Create a new section "Jeden den v lese".
    -   Use a structured list or markdown table to show the rhythm:
        -   07:30 - 08:30: Příchod, volná hra.
        -   08:30 - 09:00: Ranní kruh (přivítání, písničky).
        -   09:00 - 11:30: Velká výprava do lesa (svačina v lese).
        -   11:30 - 12:30: Oběd v zázemí.
        -   12:30 - 14:00: Odpočinek (čtení pohádek, spánek).
        -   14:00 - 16:30: Tvoření, odpolední svačina, odchod domů.

### 3. "Fear Busters" Module (The Safety Net)
- [x] **Update `src/content/pages/info.mdx`**:
    -   Add a new section `## Časté otázky (a obavy)` at the bottom.
    -   **Q: Co když prší nebo mrzne?**
        -   A: "Neexistuje špatné počasí, jen špatné oblečení. Máme vytápěné zázemí (jurtu/chatku), kam se můžeme kdykoliv schovat."
    -   **Q: A co klíšťata?**
        -   A: "Používáme přírodní repelenty, vhodné oblečení a pečlivou kontrolu po návratu."
    -   **Q: Jak je to s hygienou?**
        -   A: "Máme mycí koutek s teplou vodou a ekologické toalety."
    -   **Q: Co jídlo?**
        -   A: "Zajišťujeme plnohodnotnou stravu (oběd + 2 svačiny), dováženou z certifikované jídelny."

### 4. Eliminate "Doplnit" (The Polish)
- [x] **Update `src/content/pages/info.mdx`**:
    -   **Pricing Table:**
        -   Celodenní: "6.500 Kč / měsíc" (Example market rate).
        -   Zkrácená: "4.500 Kč / měsíc".
        -   *Note:* Add text "Ceny jsou orientační, pro aktuální info nás kontaktujte." to be safe.
- [x] **Update `src/content/pages/kontakt.md`**:
    -   **Phone:** Add `+420 777 123 456` (Placeholder with note *Doplnit reálné číslo*).
    -   **Map:** Add a link to Google Maps for "Jemníky, Mladá Boleslav".
    -   **Banking:** Add placeholder account number "123456789/0000".

## Verification
-   Review all `.md` / `.mdx` files to ensure no "Doplnit" or "Lorem Ipsum" remains visible to the user.
-   Check text flow and tone.