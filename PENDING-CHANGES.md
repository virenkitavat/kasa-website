# Website changes

Changes are noted here first and applied only when the owner says so.

## Applied 18 Nov 2026

Changes 1 to 4 below were applied on the owner's go-ahead and published.

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
   (per person / by the hour / flat rate, from the events deck). Owner's model, 18 Nov:
   - **Hourly (per guest):** packages priced per guest for the first 2 hours:
     £6 space only · £10.50 space + drink · £12.50 space + drink + pastry ·
     £18.50 space + drink + sandwich · £22.50 space + drink + sandwich + cookie.
     Each extra hour adds £3 per guest (space is £3 per guest per hour).
     Price = (package price + £3 × (hours − 2)) × guests.
     Example: 20 guests, 3 hours, space + drink = (£10.50 + £3) × 20 = £270.
     2 hours is the minimum (owner confirmed 18 Nov).
   - **Semi-private:** £120/hour, space only, coffee bar stays open to the public.
   - **Fully private:** £150/hour, space only, the whole café. Also offered as a flat rate:
     £440 half day (4 hours), £960 full day (up to 9 hours).
   - **Add-ons** (semi-private and fully private): any item from the menu at menu prices.
   Affects: `src/data/pricing.ts`, the pricing section and the "Imagine yours" estimator
   (`src/pages/index.astro`), the FAQ (`src/data/events.ts`), contact form "How private?"
   options (`src/pages/contact.astro`), the menu page's event-pricing line.

4. **Booking page: "Book direct" button.** Add a button labelled **Book direct** linking to
   https://occasia.io/venue/kasa-cafe . Where: `src/pages/booking.astro`.
   Keep the "Online booking opens here soon" wording: Kasa will embed its own booking
   system on this page later (owner, 18 Nov).
   Proposed (owner to confirm when applying): make Book direct the main button, with
   "Send an enquiry" and the email as the alternatives; open Occasia in a new tab.
