// The space, the kinds of events Kasa hosts, and the categories used to filter them.

export const zones = [
  { id: 'dining-table', name: 'The dining table', text: 'One long, beautifully set table. The centre of supper clubs, birthdays and tastings.' },
  { id: 'roundtables', name: 'Eight round tables', text: 'Terrazzo tables seating two or three each. Push them together or keep them apart.' },
  { id: 'sofa-area', name: 'The sofa area', text: 'Plush sofas in the quieter back of the café, beside a small pantry for setup and catering.' },
  { id: 'coffee-bar', name: 'The coffee bar', text: 'At the front, with your baristas behind it. It stays open for takeaway unless you hire the café privately.' },
  { id: 'counter', name: 'Counter seating', text: 'High stools along the wall for laptops, name badges and people who like to perch.' },
  { id: 'outdoor', name: 'Outdoor seating', text: 'A few tables out front on New Cavendish Street for arrivals and a breath of air.' },
];

export const categories = [
  { id: 'celebrations', name: 'Celebrations', tone: 'brown' },
  { id: 'workshops', name: 'Workshops', tone: 'terracotta' },
  { id: 'community', name: 'Community', tone: 'sage' },
  { id: 'food-music', name: 'Food and music', tone: 'brown' },
  { id: 'brands', name: 'Brands and business', tone: 'terracotta' },
] as const;

export const formats = [
  { id: 'celebrations', name: 'Celebrations', category: 'celebrations', text: 'Birthdays, engagement parties and showers, with the long table dressed for you.' },
  { id: 'sip-and-paint', name: 'Sip and paint', category: 'workshops', text: 'Easels on the round tables, a drink in hand, and nobody judging the result.' },
  { id: 'charm-bracelets', name: 'Charm bracelet making', category: 'workshops', text: 'Craft workshops around the dining table, with room to lay everything out.' },
  { id: 'run-club', name: 'Run club', category: 'community', text: 'Start and finish at the door. Coffee and pastries are waiting when you are back.' },
  { id: 'networking', name: 'Networking', category: 'community', text: 'Small enough that people actually talk. Baristas keep the cups full.' },
  { id: 'games-night', name: 'Games night', category: 'community', text: 'Board games across every table, and the sofas for whoever is knocked out first.' },
  { id: 'supper-club', name: 'Supper club', category: 'food-music', text: 'Bring your chef or use our kitchen. The pantry at the back handles the plating.' },
  { id: 'dj-music', name: 'DJ and music nights', category: 'food-music', text: 'Decks by the coffee bar and a room that fills quickly. Play your own music.' },
  { id: 'pop-up-shopping', name: 'Pop-up shopping', category: 'brands', text: 'Set out your products, bring your signage and meet customers over coffee.' },
  { id: 'launches-meetings', name: 'Launches and meetings', category: 'brands', text: 'Product launches, team meetings and offsites, a short walk from Oxford Circus.' },
] as const;

export const collaborations = [
  { name: 'Branded cup stickers', text: 'Your sticker on our takeaway cups. It travels through London in the hands of our regulars.' },
  { name: 'Mirror peel-offs', text: 'Removable branded stickers on our mirrors, made for selfies and stories.' },
  { name: 'Standees', text: 'Your signage inside the café or at the entrance on New Cavendish Street.' },
];

export const bookingSteps = [
  { title: 'Share your idea', text: 'Big or small, tell us what you have in mind.' },
  { title: 'Check the date', text: 'We confirm availability with you. The earlier you ask, the better.' },
  { title: 'Plan it together', text: 'We talk through layout, food and timings, then send your invoice.' },
];

export const faqs = [
  {
    q: 'How do I secure my booking?',
    a: 'Full payment secures your date. Once we send the invoice, it needs to be paid within 24 hours, otherwise we may offer the space to someone else. Any extra food or drink ordered on the day is billed after the event.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Cancel at least 72 hours before your event and you get a full refund. Cancellations within 72 hours of the event are non-refundable.',
  },
  {
    q: 'How is an hourly booking priced?',
    a: 'Per guest. Packages cover the first 2 hours, from £6 a guest for the space to £22.50 with a drink, sandwich and blondie. Each extra hour is £3 per guest. 2 hours is the minimum.',
  },
  {
    q: 'What can I add to a semi-private or fully private booking?',
    a: 'Both are priced for the space only. Add anything from our menu at menu prices.',
  },
  {
    q: 'When do I need to order food?',
    a: 'Platters and catering need to be ordered at least 5 days before the event. You can buy more food and drink on the day, subject to what the café has available.',
  },
  {
    q: 'Can I bring my own food and drink?',
    a: 'Yes, with fully private hire. With hourly and semi-private bookings, food and drink come from our menu.',
  },
  {
    q: 'When can events run?',
    a: 'Any day between 7am and 11pm. Your booked time includes setting up and clearing down. If you run over, it is £15 for every 15 minutes.',
  },
  {
    q: 'Will the café be open to the public during my event?',
    a: 'With hourly and semi-private bookings the front coffee bar stays open to the public. With fully private hire the whole café, coffee bar included, is yours.',
  },
  {
    q: 'What am I responsible for as the host?',
    a: 'Your guests following our house policies, including noise levels, and the cost of any damage to the venue or its equipment.',
  },
  {
    q: 'Can I use Kasa cups for my workshop?',
    a: 'Yes. Cups are 40p each.',
  },
];
