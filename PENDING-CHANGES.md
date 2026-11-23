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
   New menu received 23 Nov: `docs/reference/kasa-standard-menu.pdf` (two pages, Drinks and
   Food). Transcribed below; use it word for word, including the dietary tags.
   Tags: VG vegan · PB plant based · H halal · LG very low gluten · SF sugar free · NEW.

   **Drinks** (speciality coffee, ceremonial matcha and whole-leaf teas)
   - Speciality Coffee — *Sweet, balanced & complex, from Brazil*: Espresso · Long Black ·
     Macchiato £3.50; Americano · Cortado · Piccolo £4.00; Flat White · Cappuccino · Latte
     £4.50; Cinnamon & Brown Sugar Latte · Pistachio Latte · Spanish Latte £5.00; Mocha £5.00;
     V60 Pour Over £6.50. +£1: make it a Nutella, White or Pink Chocolate Mocha.
   - Matcha — *100% organic ceremonial matcha, from Uji, Japan*: Classic £4.50; Agave · Dirty
     Matcha · White Chocolate £5.00; Blueberry · Honeycomb · Strawberry £5.00; Mango ·
     Passionfruit · Peach £6.50.
   - Chai & Chocolate — *Slow-spiced and rich*: Chai Latte · Masala Chai £4.50; Dirty Chai ·
     Pumpkin Spice Chai £5.50; Classic Hot Chocolate £4.00. +£1: make it a Nutella, White or
     Pink Hot Chocolate.
   - Teas & Iced Teas — *Whole leaf, sustainably sourced*: Whole-leaf Tea £3.50 (English
     Breakfast, Earl Grey, Green, Hibiscus, Jasmine, Lemongrass & Ginger, Peppermint,
     Chamomile, Decaf English Breakfast); London Fog £4.50; Home-brewed Iced Tea [SF] £4.50
     (Peach, Mango, Strawberry, Passionfruit, Rose).
   - Extras: Iced · Large · Syrup £0.50; Decaf · Milk Alternative (Almond, Coconut, Soy &
     Oatly) £0.30; Extra Espresso Shot £0.60.

   **Food** (artisan sandwiches, pastries & cookies)
   - Artisan Sandwiches — *Filled with the finest ingredients*: Classic Caprese £7.00 (Italian
     mozzarella, cherry tomato, fresh basil, oregano); Crispy Tuna [H] £7.50 (tuna, mayo,
     lettuce, tomato); Mediterranean Garden [VG] £8.00 (aubergine, fresh basil, hummus, cherry
     tomato); Truffle Ham £8.00 (Italian ham, truffle, ricotta, taleggio cheese); Truffle
     Turkey [H] [NEW] £8.00 (sliced turkey, truffle, ricotta, taleggio cheese); Turkey
     Florentine [H] £7.50 (sliced turkey, Italian egg mayo, lettuce, tomato).
   - Sweet Treats, Pastries: Almond Croissant £3.20; Chocolate Twist £3.50; Croissant [VG]
     £2.00; Hazelnut Croissant £3.00; Maple Pecan Plait £3.50; Pain au Chocolat [VG] £2.50.
   - Sweet Treats, Cookies & Blondies: Chocolate Fudge Brownie [PB] [LG] £4.50; Lemon &
     Pistachio Blondie £4.50; Maple Pecan Pie Bar [PB] £4.50; Morello Cherry Blondie £4.50;
     Pistachio Crème Brookie £4.50; Tiramisu Blondie £4.50.

   Differences from the current site worth knowing: sandwiches are now "artisan" (no longer
   "focaccia"), Classic Caprese is £7.00 (was £6.50), the pastry and cake lists are new, and
   cakes are replaced by cookies & blondies. Also update the menu page's intro and event line,
   which mention "hot focaccia sandwiches".
   **Open question:** the £22.50 hourly package includes "a homemade cookie", but the new menu
   has no plain cookie (brownies, blondies, a pie bar and a brookie instead). Keep "cookie"
   in the package, or change it (e.g. "a sweet treat")?

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
   Link (owner, 23 Nov): https://kasacafelondon.beehiiv.com/ (Beehiiv). Opens in a new tab.
   Placement, Claude's proposal unless the owner says otherwise: homepage, a short
   newsletter band just before the closing "Got something in mind?" section; About page,
   directly after the three pillars. Wording drafted by Claude, e.g. "Hear about events
   first" with a "Subscribe to our newsletter" button.

9. **"Join our community" section: a wall of client logos ("wall of fame").**
   On the homepage, replacing the small "Brands we've hosted" logo strip in the proof
   section, which is the same idea and is currently hidden until real logos exist
   (`src/data/proof.ts`, `logos`).
   Logo files received 23 Nov, saved in `public/images/clients/` (not yet used on the site):
   - `chitchat-club-london.png` (ChitChat Club London)
   - `art-with-eesha.webp` (Art with Eesha)
   - `coffee-culture.webp` (Coffee Culture)
   - `awaan.png` (Awaan)
   - `the-thrivewell-hub.png` (The ThriveWell Hub)
   - `her-aura.png` (Her Aura) — added 23 Nov
   - `matcha-mixers.webp` (Matcha Mixers) — added 23 Nov
   - `stickers-and-scribbles.png` (Stickers & Scribbles) — added 23 Nov
   All eight are light (white or cream) on a transparent background, so the section needs a
   dark background (the site's dark green) for them to show.
   Placement: homepage (owner, 23 Nov). Permission to show all eight brands: confirmed by the
   owner, 23 Nov. Ready to apply.
