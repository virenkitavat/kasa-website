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

## Pending (noted 23 Nov 2026, not applied)

5. **Menu: replace with the new menu.** Owner will provide the new menu.
   Where: `src/data/menu.ts` (all sections, items and prices). Check the hourly package
   wording and the matcha/coffee notes still match the new menu.
   **Waiting on:** the new menu from the owner.

6. **Menu page: add an "About our coffee" section above "About our matcha".**
   Where: `src/pages/menu.astro`, a new band directly before the matcha band, in the same
   style (photo placeholder beside a heading and short text). Mirror the matcha section's
   layout, with the photo on the opposite side so the two don't look identical.
   **Waiting on:** coffee details from the owner (origin, roaster, what makes it special).
   The current menu only says "Sweet, balanced and complex, from Brazil"; Claude can draft
   from that if the owner prefers.

7. **About page: new descriptions for the three pillars** (Community, Culture, Connection).
   Where: `values` in `src/pages/about.astro`.
   Text from the owner (23 Nov, from the "Our Three Pillars" card), to use word for word:
   - **Community:** A home for regulars, one-timers, thinkers, dreamers, and creators to meet,
     learn and build together.
   - **Culture:** A space that celebrates food, music, art, diverse talent, different thinking
     and stories from around the world.
   - **Connection:** We amplify voices, actively listen and build bridges between people,
     brands and ideas.
   Swap the descriptions only: no new heading or subtitle (owner, 23 Nov). Ready to apply.

8. **Newsletter sign-up link on the homepage and the About page.**
   Where: `src/pages/index.astro`, `src/pages/about.astro`; store the link once in
   `src/data/site.ts` so both pages (and later the footer) use the same address.
   **Waiting on:** the sign-up link (e.g. a Mailchimp, Substack or Klaviyo sign-up page),
   and where on each page it should sit.

9. **"Join our community" section: a wall of client logos ("wall of fame").**
   Placement to decide: the homepage or another page. Claude's proposal: on the homepage,
   replacing the small "Brands we've hosted" logo strip in the proof section, which is the
   same idea and is currently hidden until real logos exist (`src/data/proof.ts`, `logos`).
   **Waiting on:** placement decision, client logo files (SVG or PNG on a transparent
   background is best) with the brand names, and confirmation Kasa may show each brand.
