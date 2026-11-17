# Kasa Café website

A static website built with Astro. Design notes are in `docs/superpowers/specs/`.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` creates the finished site in `dist/`.

## Change the content

Everything you are likely to edit is in `src/data/`:

| File | What it holds |
|---|---|
| `site.ts` | Address, email, Instagram, opening hours |
| `pricing.ts` | Every price. The pricing section and the estimator both read from here |
| `menu.ts` | The café menu |
| `events.ts` | Areas of the space, event types, brand collaborations, booking steps, FAQs |
| `proof.ts` | Testimonials, brand logos and past events |

## Add your photos, video and logo

Each grey or coloured box on the site names the photo it is waiting for and the size to supply.
Put image files in `public/images/` and replace the matching `<Placeholder ... />` in the page
with `<img src="/images/your-file.jpg" alt="Describe the photo" />`.

The logo is the text "kasa café" in `src/layouts/Base.astro` (search for `LOGO`).

## Testimonials, logos and past events

These show as placeholders while you preview, and are hidden on the live site.
When you have real ones, add them in `src/data/proof.ts` and set `ready: true`.

## Booking page

`src/pages/booking.astro` is a placeholder. Every "Book an event" button points to `/booking`.

## Contact form

Until a form service is set up, pressing Send opens the visitor's own email app with their
enquiry already written out, addressed to the email in `src/data/site.ts`.

To have enquiries sent straight from the page instead, create a free form at https://formspree.io,
then paste its address (it looks like `https://formspree.io/f/abcdwxyz`) into `formEndpoint`
in `src/data/site.ts`.

## Hosting

The site is hosted on Vercel. Every push to the `main` branch on GitHub publishes a new version.
Preview deployments show the placeholder testimonials, logos and past events; the live site hides them.

## Before going live

- Review the draft privacy page (`src/pages/privacy.astro`).
- Set the real web address in `astro.config.mjs`.
