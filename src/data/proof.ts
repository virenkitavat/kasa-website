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

export const logos = {
  ready: false,
  items: ['Brand logo', 'Brand logo', 'Brand logo', 'Brand logo', 'Brand logo', 'Brand logo'],
};

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
