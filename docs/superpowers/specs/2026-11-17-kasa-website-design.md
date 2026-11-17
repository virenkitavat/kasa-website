# Kasa Café website — design

Date: 2026-11-17
Status: draft, awaiting owner approval

Reference material (in `docs/reference/`):
- `kasa-events-deck.pdf` — the owner's events deck. Source of truth for all facts, prices, policies and menu.
- `kasatest1-DESIGN.md`, `kasatest1-design-tokens.json` — design language extracted from the owner's Wix Studio page https://vzviren.wixstudio.com/kasatest1. Source of the visual constraints.

---

## 1. Intent

Kasa is a specialty café at 150 New Cavendish Street, Fitzrovia, London. Most people know it as a café. The owner wants a complete new website whose **first job is to make people understand that Kasa is also a bookable event space**, and whose single conversion is **booking an event or enquiring to book one**.

The site should feel premium and warm ("your home away from home"), be heavily animated on the homepage, and work equally well on phone, tablet and desktop.

### Success looks like
- A first-time visitor understands within the first screen that Kasa hosts events, not only coffee.
- Every page offers a route to "Book an event" or "Enquire" without scrolling far.
- Visitors can self-qualify (capacity, prices, what's included, policies) before enquiring, so enquiries are better quality.

### Goals
- Position Kasa as café + event venue.
- Drive bookings (to the booking page) and enquiries (contact form, email, Instagram).
- Show the space, the range of events, proof, prices and what's included.
- Secondary: brand collaboration enquiries; menu discovery.

### Non-goals
- Online booking / payment / availability calendar. The owner will build the booking page themselves later; this project ships a placeholder.
- Online ordering for the café.
- A CMS with an admin UI. Content lives in files (see §7).
- Blog / news.

### Anti-goals (would be a failure even if it works)
- Reading as "just a café website" with events buried.
- Animation that hides content, delays the first screen, or makes the site feel slow on a phone.
- Invented facts: no made-up testimonials, client names, or statistics ("120+ events"). Only facts from the deck, or clearly marked placeholders.
- A generic template look that loses the kasatest1 personality.

## 2. Audience (priority order)

1. **Celebrations** — birthdays, engagement parties, showers. Care about atmosphere, price, date, food.
2. **Workshop & community hosts** — sip & paint, charm-bracelet making, run clubs, book clubs, supper clubs, games nights, DJ nights. Care about layout, music, equipment storage, per-person pricing.
3. **Corporate** — work meetings, networking, product launches. Care about capacity, privacy, catering, invoicing.
4. **Brands** — pop-up shopping, collaborations (cup stickers, mirror peel-offs, standees).
5. **Locals / café regulars** — menu and hours; the site should plant the "you can host here" idea.

## 3. Offer and messaging

**Promise:** a Fitzrovia café that feels like home and becomes your venue — styled, 30+ seated / 50 standing, transparent prices from £6 per person, baristas included.

**Primary CTA:** "Book an event" → `/booking`.
**Secondary CTA:** "Enquire" → `/contact` (form), plus email `events@kasacafelondon.com` and Instagram `@kasacafelondon`.

**Messaging hierarchy (every page follows it in miniature):**
1. Kasa is an event space as well as a café.
2. It fits your event — the space, the formats, the proof.
3. It's easy — clear prices, everything included, three steps.
4. Book / enquire.

**Voice:** warm, friendly, concise, second person ("you"). Reuse the deck's language: "home away from home", "community, culture and connection", "Whatever your event needs, we're here to make it happen", "Got something in mind? We'd love to hear it."

Prices are shown publicly (owner decision).

## 4. Facts (from the deck — use verbatim where possible)

- Address: 150 New Cavendish Street, Fitzrovia, London. Instagram: @kasacafelondon (deck also writes @KasaCafeLondon). Email: events@kasacafelondon.com.
- Capacity: 30+ guests seated, up to 50 standing. Private or semi-private hire.
- Zones: Coffee Bar, Dining Table, 8 Roundtables (2–3 people each), Outdoor Seating, Counter Seating, Sofa Area. A more private dining area at the back with sofa area and small pantry for setup/catering. Coffee bar with individual seating at the front.
- Event formats shown in the deck (10 with photos): Sip & Paint, Run Club, Celebrations, Charm Bracelet Making, Networking Events, Supper Club, Pop-up Shopping, DJ / Music Events, Games Night. Also mentioned in text: work meetings, engagement parties, workshops, book clubs, product launches, wine tastings.
  - Site groups them into five filter categories: **Celebrations** (celebrations, engagement, birthdays), **Workshops** (sip & paint, charm bracelets, book club, wine tasting), **Community** (run club, games night, networking), **Food & Music** (supper club, DJ/music), **Brands & Business** (pop-up shopping, product launches, work meetings). *Builder's call to refine.*

### Pricing (all prices include VAT)
1. **Per person packages** — per person, 2-hour booking during operating hours, starting at:
   - £6 — space only
   - £10.50 — includes one drink
   - £12.50 — one pastry + one drink (pick any 3 pastries from the menu and order)
   - £18.50 — one sandwich + one drink
   - £22.50 — one sandwich + one drink + homemade cookie
2. **Hourly private hire**
   - £120/hour — during operating hours, semi-private (coffee bar stays open to the public)
   - £150/hour — during or outside operating hours, private venue (coffee bar private to you)
3. **Flat rate options** (during working hours)
   - £440 — half day (4 hours)
   - £960 — full day (up to 9 hours)

### All packages include
*(Owner decision: "Exclusive use of the space" is removed from the site, and per-person packages are not tied to semi-private hire.)*
Play your own music · Dedicated baristas on hand · Storing equipment.
- Private hire only: you can bring your own food & drinks from outside.
- In-house catering available for private or semi-private events — contact the team.

### How to book (3 steps)
1. Share your ideas — big or small, we're all ears.
2. Check our availability with our team — the earlier the better.
3. Chat with us about how we can bring your vision to life.

### Collaborate with us (brands)
- Branded cup stickers — on takeaway cups, travels through London in regulars' hands.
- Mirror peel-offs — removable branded stickers on mirrors; photogenic, selfie-friendly.
- Standees inside or outside the café.
- "Want something more bespoke? … Let's co-create something memorable."

### Policies (for the FAQ)
- **Booking & payment:** 100% payment is required to secure a booking and must be paid within 24 hours of the invoice, otherwise Kasa may cancel and offer the space to another party. Any additional food or drink ordered on the day is billed after the event. *(Owner confirmed 100%; the deck's "50% deposit" line is wrong.)*
- **Cancellation:** cancel at least 72 hours before the event for a full refund. Within 72 hours: non-refundable.
- **Food & beverage orders:** platters/catering at least 5 days before the event. Extra food and drink can be bought on the day, subject to availability.
- **Venue use:** client is responsible for guests following Kasa's policies (noise, decorum); damage is charged. Set-up and set-down fall within the booked time. Overstay: £15 per 15 minutes. The front coffee bar stays open for takeaway unless the space is fully privatised (speak to the team; extra charges may apply).
- **Cups:** Kasa cups for workshops £0.40 each.
- By booking you agree to these terms.

### Hours
- Café: Mon–Thu 8:00–18:00 · Fri 8:00–17:00 · Sat 11:00–17:00 · Sun 11:00–16:00.
- Events: available 7:00–23:00 through the week.

### Menu
Full menu in Appendix A. Matcha note: 100% ceremonial grade matcha from Uji, Japan.

## 5. Pages

Shared on every page:
- **Header:** logo (placeholder), nav (Home, Events, Menu, About, Contact), persistent "Book an event" button. Mobile: hamburger → full-screen menu.
- **Mobile bottom bar:** sticky "Book" + "Enquire", appears after the first screen, hidden on the Booking and Contact pages.
- **Footer:** closing CTA, address, hours, email, Instagram, nav.

### 5.1 Home (`/`)
Order is the owner's:
1. **Discover (hero).** Headline in the spirit of "Your home away from home — and your next event." Sub-line naming formats. CTAs: Book an event / See the space. Background: video or photo placeholder.
2. **The space.** Six zones as a scroll-driven horizontal tour (swipe carousel on touch). Big-number capacity: 30+ seated / 50 standing. Private vs semi-private explained.
3. **What happens here.** Event-format cards with coloured label bars (terracotta / sage / brown, as on deck page 5). Hover/tap reveals a one-line description. Links to Events page filtered by category.
4. **Imagine yours.** Four-step picker: event type → guest count → private or semi-private → length (2 hours / half day / full day / evening, i.e. outside opening hours). Output: one "from £X" estimate **per applicable pricing group** (per person, hourly, flat rate), computed from the pricing data, with the cheapest highlighted; groups that don't apply (e.g. per-person and flat rate outside operating hours, where only £150/hour private applies) are hidden. Event type changes copy and the pre-filled enquiry, not the price. CTA carries all selections to `/contact` via URL query parameters. Not a booking; estimate copy must say so ("estimate — the team confirms your quote"). *[Picker rules marked ⚑ in §4 Pricing depend on owner answers.]*
5. **What we provide.** Pricing: three package groups (per person / hourly / flat rate) with all prices, "all prices include VAT" badge. Four "all packages include" items. Catering / BYO notes.
6. **Proof.** Real event photo grid (placeholders), testimonial slots (placeholders, clearly marked), client/brand logo strip (placeholders). Factual stats only: "30+ seated", "50 standing", "10+ event formats", "7am–11pm event hours".
7. **How to book + enquire.** The three steps, then closing CTA panel: Book an event / Email us / Instagram.

### 5.2 Booking (`/booking`)
Placeholder page owned by the owner. Shows a short heading, "Booking opens here soon", and routes to the enquiry form / email in the meantime. All "Book" CTAs point here. Must be trivially replaceable.

### 5.3 Events (`/events`)
- Intro: "Our events at Kasa café".
- Filter chips by the five categories (+ All). Grid of past events: image, title, date, category. Opening a card shows a short write-up and gallery (modal or detail panel — builder's call), ending with "Host something like this" → `/contact?type=<category>`.
- Seed data: one placeholder entry per deck format (10), marked as placeholder content for the owner to replace.
- **Collaborate with us** section for brands (three formats from §4), CTA to enquire with type "Brand collaboration".

### 5.4 Menu (`/menu`)
- Intro and matcha highlight.
- Full menu from Appendix A, grouped by category with prices, variants shown as in the deck ("Espresso | Long Black | Macchiato"), add-on notes in italics. In-page category jump links.
- "Catering for your event" panel linking to pricing (home §5) and enquiry.

### 5.5 About (`/about`)
Story from deck pages 2–3 (home away from home; Fitzrovia; community, culture and connection; specialty coffee, fresh pastries, focaccia). Team placeholder. Values. Closing CTA.

### 5.6 Contact (`/contact`)
- Enquiry form (the site's only form). Fields: name*, email*, phone, event type* (select: the five categories + "Brand collaboration" + "Other"), preferred date, guest count, private or semi-private (select), message*. Accepts pre-fill from query params (`type`, `guests`, `hire`). Clear success and error states. Spam protection (honeypot).
- Direct contact: email, Instagram, address with map (embed or static map + "Open in Google Maps" link — builder's call), café hours and event hours.
- FAQ (accordion): the policies from §4.

## 6. Visual design — constraints

Derived from kasatest1 and confirmed by the deck (both use the same palette).

### Colour
| Token | Value | Use |
|---|---|---|
| `bg` | `#f2eeea` (deck warm off-white) | default page background |
| `surface` | `#ffffff` / `#f9f7f4` | cards |
| `cream` | `#ebded4` | alternating section band |
| `mist` | `#cfd8cd` | alternating section band |
| `ink` | `#0a2006` | text |
| `terracotta` | `#d58469` | primary — buttons, highlights, accents |
| `terracotta-deep` | `#9e553d` | links and small text on light backgrounds (AA) |
| `brown` | `#8a6851` | secondary surfaces, label bars, white text allowed |
| `sage` | `#a4b792` | label bars, accents |
Rules: text on terracotta is `ink`, never white (white fails contrast). White text is allowed on `brown`. Wix's `#116dff` is excluded. All text pairs meet WCAG AA.

### Type
- Display headings: **Fraunces** (light/regular), oversized, poster-like — kasatest1's defining trait. Fluid sizes via `clamp()`.
- Labels, eyebrows, nav, buttons: **Oswald**, uppercase, tracked.
- Body: **Nunito Sans**, 17–18px, line-height ~1.6, measure ≤ 70ch.
- DIN Neuzeit Grotesk (paid) is replaced by **Barlow** where a grotesk is needed.
- kasatest1's two custom uploaded fonts are not used; Fraunces covers display.
- All fonts self-hosted (no Google Fonts runtime request).

### Shape & depth
Radius 8px (small), 24px (cards, images), full (buttons, chips). One soft shadow: `0 2px 12px rgba(164,168,192,.2)`. Spacing on a 4px base.

### Imagery
Rounded-corner photo grids like the deck. Coloured label bars under images (deck page 4–5 pattern).

## 7. Approaches considered

| Approach | Trade-off | Decision |
|---|---|---|
| **A. Coded static site (Astro + GSAP), content in files, Vercel** | Full control over premium animation and performance; owner edits content in files or asks for help | **Chosen** (builder's/Claude's call; owner delegated the technical approach) |
| B. Rebuild in Wix Studio | Owner can edit visually; animation limited to Wix interactions; less performance control | Rejected — animated homepage is a stated priority |
| C. Plain HTML/CSS/JS, no framework | Simplest tooling; repeated markup across 6 pages, harder to keep content in data files | Rejected — Astro gives components + content collections at no runtime cost |

Owner delegated the technical approach; approving this doc confirms A.

### Technical shape (A)
- Astro static output, TypeScript, vanilla CSS with custom properties (tokens from §6). No CSS framework required (builder's call).
- GSAP + ScrollTrigger for scroll animation; small vanilla JS for the picker, filters, accordion, menus.
- Content as files in `src/content/` / `src/data/`: `pricing`, `menu`, `events`, `zones`, `formats`, `testimonials`, `site` (contact, hours, socials). Prices appear in exactly one file and both the pricing section and the picker read from it.
- Contact form: posts to a form service set in `site.formEndpoint` (e.g. Formspree). Until one is set, Send opens the visitor's email app with the enquiry written out. *(Changed from Netlify Forms when hosting moved to Vercel.)*
- Hosting: Vercel (owner's choice), deployed from GitHub. Domain: owner's (not decided; out of scope).
- Launch readiness: proof sections whose content is still placeholder (testimonials, client logos, past events) each have a `show` flag in content. They render with placeholders in preview and are hidden in the live build until real content exists, so the public site never shows fake proof. *(Claude's call.)*
- Analytics: none at launch, so no cookie banner. A cookieless option (e.g. Vercel Web Analytics or Plausible) can be added later without a banner. *(Claude's call.)*
- Privacy: a short `/privacy` page (linked from footer and form) with drafted UK GDPR notice for enquiry data, marked for owner review. *(Claude's call.)*
- Placeholders: a single `Placeholder` media component showing the intended asset, aspect ratio and recommended pixel size, styled on-brand so the site looks intentional before assets arrive. Swapping in a real image means changing one path in content.
- SEO basics: per-page titles/descriptions, Open Graph, `LocalBusiness`/`CafeOrCoffeeShop` structured data with address and hours.

## 8. Interaction & motion

Homepage:
- Hero headline reveals word by word; hero media slow-zooms on scroll.
- Space tour pinned horizontal scroll (desktop/tablet); native swipe carousel on touch.
- Event cards: lift + description reveal on hover; tap to reveal on touch.
- Picker: animated step transitions, live price update.
- Proof: stats count up on entry; logo strip marquee.
- Sections fade/slide in on entry.
- Book button: subtle magnetic effect on desktop pointer devices only.

Site-wide: page-load fade, header shrinks on scroll, accordion and filter transitions.

Rules:
- Respect `prefers-reduced-motion`: disable scroll-jacking, marquee, magnetic and count-up; show final states.
- Content is visible and usable without JavaScript; animation only enhances.
- No animation delays the first screen's text; hero text visible on first paint.
- Target Lighthouse performance ≥ 90 on mobile with placeholders.

## 9. Responsive behaviour

Mobile-first. Breakpoints roughly 640 / 1024 / 1440 (builder's call). Fluid type. Grids 1 → 2 → 3/4 columns. Tap targets ≥ 44px. Horizontal tour becomes swipe carousel below 1024px. Full-screen nav below 1024px. Sticky mobile bottom bar below 640px. Test at 375, 768, 1024, 1440 widths.

## 10. Assets (owner to supply; placeholders until then)

Logo (light + dark, SVG preferred) and favicon · hero video (MP4, ~10–20s, muted loop) and poster image · one photo per zone (6) · one photo per event format (10) · past-event photos with titles/dates · food & drink photos · team photos · testimonials with names (real only) · client/brand logos (with permission) · Open Graph share image.

The deck's photos may be used as the owner's starting assets if the owner provides originals.

## 11. Left to the builder
- Exact copy beyond the deck's wording (mark drafted copy for owner review).
- Event category mapping refinement, card detail pattern (modal vs panel), map embed choice.
- Component breakdown, file structure, breakpoints, animation timings.
- Test tooling.

## 12. Open items (not blocking)
- Domain name.
- Which email address receives form submissions (default: events@kasacafelondon.com).
- Real testimonials, client logos, event history.

---

## Appendix A — Menu (from deck pages 13–14)

**Speciality Coffee** — *Sweet, balanced & complex from Brazil*
- Espresso | Long Black | Macchiato — £3.50
- Americano | Cortado | Piccolo — £4.00
- Flat White | Cappuccino | Latte — £4.50
- Cinnamon & Brown Sugar Latte | Pistachio Latte | Spanish Latte — £5.00
- Mocha — £5.00
- V60 Pour Over — £6.50
- *Make it a Nutella, White or Pink Chocolate Mocha for +£1*

**Matcha** — *100% organic ceremonial matcha from Uji, Japan*
- Classic — £4.50
- Agave | Dirty Matcha | White Chocolate — £5.00
- Blueberry | Honeycomb | Strawberry — £5.00
- Mango | Passionfruit | Peach — £6.50

**Chai & Chocolate**
- Chai Latte | Masala Chai — £4.50
- Dirty Chai | Pumpkin Spice Chai — £5.50
- Classic Hot Chocolate — £4.00
- *Make it Nutella, White or Pink Hot Chocolate for +£1*

**Teas & Iced Teas** — *Whole leaf, sustainably sourced tea*
- English Breakfast | Earl Grey | Green | Hibiscus | Jasmine | Lemongrass & Ginger | Peppermint | Chamomile | Decaf English Breakfast — £3.50
- London Fog — £4.50
- Home-brewed Iced Teas — £4.50 — *Peach, Mango, Strawberry, Passionfruit, Rose (Sugar Free)*

**Extras**
- Iced | Large | Syrup — £0.50
- Decaf | Milk Alternatives (Almond, Coconut, Soy & Oatly) — £0.30
- Extra Espresso Shot — £0.60

**Focaccia Sandwiches** — *Filled with the finest ingredients.*
- Classic Caprese — £6.50 — Italian mozzarella, cherry tomato, fresh basil, oregano
- Crispy Tuna (Halal) — £7.50 — Tuna, mayo, lettuce, tomato
- Turkey Florentine (Halal) — £7.50 — Sliced turkey, Italian egg mayo, lettuce, tomato
- Mediterranean Garden (Vegan) — £8.00 — Aubergine, fresh basil, hummus, cherry tomato
- Truffle Ham — £8.00 — Italian ham, truffle, ricotta, taleggio cheese
- Truffle Turkey (Halal – NEW!) — £8.00 — Sliced turkey, truffle, ricotta, taleggio cheese

**Freshly Baked Pastries** — *Crafted daily and baked fresh from the oven.*
- Butter Croissant | Vegan Croissant — £2.00
- Pain Aux Chocolat — £2.50
- Almond Croissant — £3.20
- Pistachio Croissant | Strawberry Jam Croissant | Nutella Croissant — £4.00

**Cakes & Cookies** — *Indulgent, sweet cakes and cookies baked to perfection*
- Cookie Dough Bites (gf) — £2.00
- White Chocolate Cookie — £3.50
- Blueberry Muffin | Banana Bread — £5.50
- Lemon Drizzle — £4.00
- Salted Caramel Brownie (gf) — £5.00
- Carrot Cake | Cappuccino Cake (gf) | Red Velvet Cake — £6.50
