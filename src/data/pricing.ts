// The only place prices live. The pricing section and the
// "Imagine yours" estimator both read from this file.
// All prices are in pounds and include VAT.

export const perPerson = {
  title: 'Per person',
  note: 'For a two-hour booking during café hours.',
  tiers: [
    { price: 6, includes: 'The space only' },
    { price: 10.5, includes: 'One drink' },
    { price: 12.5, includes: 'One pastry and one drink', detail: 'Pick any three pastries from the menu for your group.' },
    { price: 18.5, includes: 'One sandwich and one drink' },
    { price: 22.5, includes: 'One sandwich, one drink and a homemade cookie' },
  ],
};

export const hourly = {
  title: 'By the hour',
  options: [
    {
      id: 'semi',
      price: 120,
      name: 'Semi-private',
      when: 'During café hours',
      detail: 'The coffee bar stays open to the public.',
    },
    {
      id: 'private',
      price: 150,
      name: 'Private',
      when: 'During or outside café hours',
      detail: 'The whole café, coffee bar included, is yours.',
    },
  ],
};

export const flat = {
  title: 'Flat rate',
  note: 'During café hours.',
  options: [
    { id: 'half', price: 440, name: 'Half day', detail: '4 hours' },
    { id: 'full', price: 960, name: 'Full day', detail: 'Up to 9 hours' },
  ],
};

export const included = [
  'Play your own music',
  'Dedicated baristas on hand',
  'Somewhere to store your equipment',
];

export const extras = [
  {
    title: 'Bring your own',
    text: 'With private hire you can bring food and drink from outside the café.',
  },
  {
    title: 'In-house catering',
    text: 'Add platters, pastries and focaccia sandwiches from our kitchen. Order at least 5 days ahead.',
  },
];

export const formatPrice = (n: number) =>
  '£' + (Number.isInteger(n) ? n.toString() : n.toFixed(2));
