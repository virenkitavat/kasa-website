// The café menu, from the Kasa standard menu (docs/reference/kasa-standard-menu.pdf).
// Each item is a list of names that share a price.

export type Tag = 'VG' | 'PB' | 'H' | 'LG' | 'SF' | 'NEW';
export type MenuItem = { names: string[]; price: number; detail?: string; tags?: Tag[] };
export type MenuSection = { id: string; group: 'Drinks' | 'Food'; name: string; note?: string; items: MenuItem[]; footnote?: string };

export const tagNames: Record<Tag, string> = {
  VG: 'Vegan',
  PB: 'Plant based',
  H: 'Halal',
  LG: 'Very low gluten',
  SF: 'Sugar free',
  NEW: 'New',
};

export const menu: MenuSection[] = [
  {
    id: 'coffee', group: 'Drinks', name: 'Speciality Coffee', note: 'Sweet, balanced & complex, from Brazil',
    items: [
      { names: ['Espresso', 'Long Black', 'Macchiato'], price: 3.5 },
      { names: ['Americano', 'Cortado', 'Piccolo'], price: 4 },
      { names: ['Flat White', 'Cappuccino', 'Latte'], price: 4.5 },
      { names: ['Cinnamon & Brown Sugar Latte', 'Pistachio Latte', 'Spanish Latte'], price: 5 },
      { names: ['Mocha'], price: 5 },
      { names: ['V60 Pour Over'], price: 6.5 },
    ],
    footnote: 'Make it a Nutella, White or Pink Chocolate Mocha for £1 more.',
  },
  {
    id: 'matcha', group: 'Drinks', name: 'Matcha', note: '100% organic ceremonial matcha, from Uji, Japan',
    items: [
      { names: ['Classic'], price: 4.5 },
      { names: ['Agave', 'Dirty Matcha', 'White Chocolate'], price: 5 },
      { names: ['Blueberry', 'Honeycomb', 'Strawberry'], price: 5 },
      { names: ['Mango', 'Passionfruit', 'Peach'], price: 6.5 },
    ],
  },
  {
    id: 'chai', group: 'Drinks', name: 'Chai & Chocolate', note: 'Slow-spiced and rich',
    items: [
      { names: ['Chai Latte', 'Masala Chai'], price: 4.5 },
      { names: ['Dirty Chai', 'Pumpkin Spice Chai'], price: 5.5 },
      { names: ['Classic Hot Chocolate'], price: 4 },
    ],
    footnote: 'Make it a Nutella, White or Pink Hot Chocolate for £1 more.',
  },
  {
    id: 'tea', group: 'Drinks', name: 'Teas & Iced Teas', note: 'Whole leaf, sustainably sourced',
    items: [
      { names: ['Whole-leaf Tea'], price: 3.5, detail: 'English Breakfast, Earl Grey, Green, Hibiscus, Jasmine, Lemongrass & Ginger, Peppermint, Chamomile, Decaf English Breakfast' },
      { names: ['London Fog'], price: 4.5 },
      { names: ['Home-brewed Iced Tea'], price: 4.5, tags: ['SF'], detail: 'Peach, Mango, Strawberry, Passionfruit, Rose' },
    ],
  },
  {
    id: 'extras', group: 'Drinks', name: 'Extras',
    items: [
      { names: ['Iced', 'Large', 'Syrup'], price: 0.5 },
      { names: ['Decaf', 'Milk Alternative'], price: 0.3, detail: 'Almond, Coconut, Soy & Oatly' },
      { names: ['Extra Espresso Shot'], price: 0.6 },
    ],
  },
  {
    id: 'sandwiches', group: 'Food', name: 'Artisan Sandwiches', note: 'Filled with the finest ingredients',
    items: [
      { names: ['Classic Caprese'], price: 7, detail: 'Italian mozzarella, cherry tomato, fresh basil, oregano' },
      { names: ['Crispy Tuna'], price: 7.5, tags: ['H'], detail: 'Tuna, mayo, lettuce, tomato' },
      { names: ['Mediterranean Garden'], price: 8, tags: ['VG'], detail: 'Aubergine, fresh basil, hummus, cherry tomato' },
      { names: ['Truffle Ham'], price: 8, detail: 'Italian ham, truffle, ricotta, taleggio cheese' },
      { names: ['Truffle Turkey'], price: 8, tags: ['H', 'NEW'], detail: 'Sliced turkey, truffle, ricotta, taleggio cheese' },
      { names: ['Turkey Florentine'], price: 7.5, tags: ['H'], detail: 'Sliced turkey, Italian egg mayo, lettuce, tomato' },
    ],
  },
  {
    id: 'pastries', group: 'Food', name: 'Pastries',
    items: [
      { names: ['Almond Croissant'], price: 3.2 },
      { names: ['Chocolate Twist'], price: 3.5 },
      { names: ['Croissant'], price: 2, tags: ['VG'] },
      { names: ['Hazelnut Croissant'], price: 3 },
      { names: ['Maple Pecan Plait'], price: 3.5 },
      { names: ['Pain au Chocolat'], price: 2.5, tags: ['VG'] },
    ],
  },
  {
    id: 'blondies', group: 'Food', name: 'Cookies & Blondies',
    items: [
      { names: ['Chocolate Fudge Brownie'], price: 4.5, tags: ['PB', 'LG'] },
      { names: ['Lemon & Pistachio Blondie'], price: 4.5 },
      { names: ['Maple Pecan Pie Bar'], price: 4.5, tags: ['PB'] },
      { names: ['Morello Cherry Blondie'], price: 4.5 },
      { names: ['Pistachio Crème Brookie'], price: 4.5 },
      { names: ['Tiramisu Blondie'], price: 4.5 },
    ],
  },
];
