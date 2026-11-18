# Pending website changes

Noted only. Nothing here is applied until the owner says so.

1. **Logo: remove "café".** The header logo reads "kasa café"; change it to "kasa".
   Where: `src/layouts/Base.astro` (the `.logo` link). Header logo only; page titles,
   footer and body copy keep "Kasa Café".

2. **"What happens here" section: fit it in one screen.** Make the section more concise so the
   whole thing (heading, intro line, list of event types and the open preview) fits within the
   viewport height. Where: `src/pages/index.astro` (section 3, `.formats`).
   Measured on the live site, 18 Nov: 1459px tall on a 1440×900 desktop, 1350px on a
   1280×720 laptop, 1307px on an 834×1112 tablet, 1429px on a 390×844 phone. On every size
   it is taller than the screen.

3. **Booking options: three ways to book.** Replaces how the site presents booking today
   (per person / by the hour / flat rate, from the events deck).
   Owner's model, 18 Nov:
   - **Hourly (packages):** £6 space only · £10.50 space + drink · £12.50 space + drink + pastry ·
     £18.50 space + drink + sandwich · £22.50 space + drink + sandwich + cookie.
   - **Semi-private:** space only (deck price £120/hour, coffee bar stays open to the public).
   - **Fully private:** space only (deck price £150/hour, the whole café).
   - **Flat rate** (£440 half day, £960 full day): space only.
   - Semi-private, private and flat rate are space only; the customer can opt for add-ons.
   **Still open:** whether the hourly prices are per guest per hour or per guest for a
   2-hour booking (the deck says the latter); which of the three the flat rate belongs to;
   what the add-ons are and what they cost.
   Affects: `src/data/pricing.ts`, the pricing section and the "Imagine yours" estimator
   (`src/pages/index.astro`), the FAQ (`src/data/events.ts`), contact form "How private?"
   options (`src/pages/contact.astro`), the menu page's event-pricing line.
