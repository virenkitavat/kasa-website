// Everything about Kasa that appears in more than one place.
// Change it here and it changes across the whole site.

export const site = {
  name: 'Kasa Café',
  tagline: 'The café you can book',
  description:
    'Kasa is a specialty café in Fitzrovia that you can hire for events: celebrations, workshops, supper clubs, run clubs, launches and DJ nights. 30 seated, 50 standing.',
  address: {
    street: '150 New Cavendish Street',
    area: 'Fitzrovia',
    city: 'London',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kasa+Cafe+150+New+Cavendish+Street+London',
  },
  email: 'events@kasacafelondon.com',
  instagram: {
    handle: '@kasacafelondon',
    url: 'https://www.instagram.com/kasacafelondon',
  },
  capacity: { seated: 30, standing: 50 },
  // Café opening hours.
  hours: [
    { days: 'Monday to Thursday', time: '8am – 6pm' },
    { days: 'Friday', time: '8am – 5pm' },
    { days: 'Saturday', time: '11am – 5pm' },
    { days: 'Sunday', time: '11am – 4pm' },
  ],
  eventHours: '7am – 11pm, every day',
  // Where the enquiry form sends its messages (a Formspree form URL, for example
  // https://formspree.io/f/abcdwxyz). Leave it empty and the form opens the
  // visitor's email app with their enquiry written out, addressed to `email`.
  formEndpoint: '',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
