// The only place prices live. The pricing section, the "Imagine yours" estimator
// and the menu page all read from this file.
// All prices are in pounds and include VAT.

// 1. Hourly: priced per guest. Package prices cover the first 2 hours (the minimum);
// each extra hour adds the space rate per guest.
export const hourly = {
  id: 'hourly',
  title: 'Hourly',
  minHours: 2,
  extraHourPerGuest: 3,
  note: 'Per guest, for the first 2 hours during café hours. Each extra hour is £3 per guest.',
  tiers: [
    { price: 6, includes: 'Space only' },
    { price: 10.5, includes: 'Space and a drink' },
    { price: 12.5, includes: 'Space, a drink and a pastry', detail: 'Pick any three pastries from the menu for your group.' },
    { price: 18.5, includes: 'Space, a drink and a sandwich' },
    { price: 22.5, includes: 'Space, a drink, a sandwich and a blondie' },
  ],
};

// 2. Semi-private: the space by the hour; the coffee bar stays open to the public.
export const semiPrivate = {
  id: 'semi',
  title: 'Semi-private',
  perHour: 120,
  when: 'During café hours',
  detail: 'Space only. The coffee bar at the front stays open to the public.',
};

// 3. Fully private: the whole café by the hour, or at a flat rate during café hours.
export const fullyPrivate = {
  id: 'private',
  title: 'Fully private',
  perHour: 150,
  when: 'During or outside café hours',
  detail: 'Space only. The whole café, coffee bar included, is yours.',
  flat: [
    { id: 'half', name: 'Half day', hours: 4, price: 440, detail: '4 hours, during café hours' },
    { id: 'full', name: 'Full day', hours: 9, price: 960, detail: 'Up to 9 hours, during café hours' },
  ],
};

export const addOns = 'With semi-private and fully private hire, add anything from our menu at menu prices.';

export const included = [
  'Play your own music',
  'Dedicated baristas on hand',
  'Somewhere to store your equipment',
];

export const extras = [
  {
    title: 'Add-ons from the menu',
    text: `${addOns} For platters and catering, order at least 5 days ahead.`,
  },
  {
    title: 'Bring your own',
    text: 'With fully private hire you can bring food and drink from outside the café.',
  },
];

export const formatPrice = (n: number) =>
  '£' + (Number.isInteger(n) ? n.toLocaleString('en-GB') : n.toFixed(2));
