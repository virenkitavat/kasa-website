// Proof that needs real content from you.
// Until `ready` is true, a section shows placeholders in previews
// and is hidden on the live site, so visitors never see made-up proof.

export const testimonials = {
  ready: false,
  items: [
    { quote: 'A real quote from a host goes here: what they held, and what the room did for it.', name: 'Host name', event: 'Type of event' },
    { quote: 'A second quote. Short ones about the team and the atmosphere work best.', name: 'Host name', event: 'Type of event' },
    { quote: 'A third quote, ideally from a company or brand you have worked with.', name: 'Host name', event: 'Type of event' },
  ],
};

// Brands and communities shown on the homepage "Join our community" wall.
// Originals are in public/images/clients/; the site uses the trimmed copies in
// public/images/clients/site/. Permission to show all of these: confirmed 23 Nov 2026.
export const clients = [
  { name: 'ChitChat Club London', file: 'chitchat-club-london.webp', w: 320, h: 367 },
  { name: 'Art with Eesha', file: 'art-with-eesha.webp', w: 595, h: 640 },
  { name: 'Coffee Culture', file: 'coffee-culture.webp', w: 640, h: 421 },
  { name: 'Awaan', file: 'awaan.webp', w: 592, h: 215 },
  { name: 'The ThriveWell Hub', file: 'the-thrivewell-hub.webp', w: 640, h: 385 },
  { name: 'Her Aura', file: 'her-aura.webp', w: 640, h: 364 },
  { name: 'Matcha Mixers', file: 'matcha-mixers.webp', w: 640, h: 337 },
  { name: 'Stickers & Scribbles', file: 'stickers-and-scribbles.webp', w: 640, h: 634 },
];

export const pastEvents = {
  ready: false,
  items: [
    { title: 'Event title', date: 'Month 2025', format: 'sip-and-paint' },
    { title: 'Event title', date: 'Month 2025', format: 'run-club' },
    { title: 'Event title', date: 'Month 2025', format: 'celebrations' },
    { title: 'Event title', date: 'Month 2025', format: 'supper-club' },
    { title: 'Event title', date: 'Month 2025', format: 'dj-music' },
    { title: 'Event title', date: 'Month 2025', format: 'pop-up-shopping' },
  ],
};

export const showPlaceholders =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === 'true';
