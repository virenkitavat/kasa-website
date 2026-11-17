// The café menu. Each item is a list of names that share a price.

export type MenuItem = { names: string[]; price: number; detail?: string };
export type MenuSection = { id: string; name: string; note?: string; items: MenuItem[]; footnote?: string };

export const menu: MenuSection[] = [
  {
    id: 'coffee', name: 'Speciality coffee', note: 'Sweet, balanced and complex, from Brazil.',
    items: [
      { names: ['Espresso', 'Long black', 'Macchiato'], price: 3.5 },
      { names: ['Americano', 'Cortado', 'Piccolo'], price: 4 },
      { names: ['Flat white', 'Cappuccino', 'Latte'], price: 4.5 },
      { names: ['Cinnamon and brown sugar latte', 'Pistachio latte', 'Spanish latte'], price: 5 },
      { names: ['Mocha'], price: 5 },
      { names: ['V60 pour over'], price: 6.5 },
    ],
    footnote: 'Make it a Nutella, white or pink chocolate mocha for £1 more.',
  },
  {
    id: 'matcha', name: 'Matcha', note: '100% organic ceremonial matcha from Uji, Japan.',
    items: [
      { names: ['Classic'], price: 4.5 },
      { names: ['Agave', 'Dirty matcha', 'White chocolate'], price: 5 },
      { names: ['Blueberry', 'Honeycomb', 'Strawberry'], price: 5 },
      { names: ['Mango', 'Passionfruit', 'Peach'], price: 6.5 },
    ],
  },
  {
    id: 'chai', name: 'Chai and chocolate',
    items: [
      { names: ['Chai latte', 'Masala chai'], price: 4.5 },
      { names: ['Dirty chai', 'Pumpkin spice chai'], price: 5.5 },
      { names: ['Classic hot chocolate'], price: 4 },
    ],
    footnote: 'Make it a Nutella, white or pink hot chocolate for £1 more.',
  },
  {
    id: 'tea', name: 'Teas and iced teas', note: 'Whole leaf, sustainably sourced.',
    items: [
      { names: ['English breakfast', 'Earl grey', 'Green', 'Hibiscus', 'Jasmine', 'Lemongrass and ginger', 'Peppermint', 'Chamomile', 'Decaf English breakfast'], price: 3.5 },
      { names: ['London fog'], price: 4.5 },
      { names: ['Home-brewed iced teas'], price: 4.5, detail: 'Peach, mango, strawberry, passionfruit or rose (sugar free).' },
    ],
  },
  {
    id: 'extras', name: 'Extras',
    items: [
      { names: ['Iced', 'Large', 'Syrup'], price: 0.5 },
      { names: ['Decaf', 'Milk alternatives'], price: 0.3, detail: 'Almond, coconut, soy and Oatly.' },
      { names: ['Extra espresso shot'], price: 0.6 },
    ],
  },
  {
    id: 'focaccia', name: 'Focaccia sandwiches', note: 'Filled with the finest ingredients.',
    items: [
      { names: ['Classic caprese'], price: 6.5, detail: 'Italian mozzarella, cherry tomato, fresh basil, oregano.' },
      { names: ['Crispy tuna (halal)'], price: 7.5, detail: 'Tuna, mayo, lettuce, tomato.' },
      { names: ['Turkey Florentine (halal)'], price: 7.5, detail: 'Sliced turkey, Italian egg mayo, lettuce, tomato.' },
      { names: ['Mediterranean garden (vegan)'], price: 8, detail: 'Aubergine, fresh basil, hummus, cherry tomato.' },
      { names: ['Truffle ham'], price: 8, detail: 'Italian ham, truffle, ricotta, taleggio.' },
      { names: ['Truffle turkey (halal, new)'], price: 8, detail: 'Sliced turkey, truffle, ricotta, taleggio.' },
    ],
  },
  {
    id: 'pastries', name: 'Freshly baked pastries', note: 'Baked fresh every day.',
    items: [
      { names: ['Butter croissant', 'Vegan croissant'], price: 2 },
      { names: ['Pain au chocolat'], price: 2.5 },
      { names: ['Almond croissant'], price: 3.2 },
      { names: ['Pistachio croissant', 'Strawberry jam croissant', 'Nutella croissant'], price: 4 },
    ],
  },
  {
    id: 'cakes', name: 'Cakes and cookies',
    items: [
      { names: ['Cookie dough bites (gf)'], price: 2 },
      { names: ['White chocolate cookie'], price: 3.5 },
      { names: ['Lemon drizzle'], price: 4 },
      { names: ['Salted caramel brownie (gf)'], price: 5 },
      { names: ['Blueberry muffin', 'Banana bread'], price: 5.5 },
      { names: ['Carrot cake', 'Cappuccino cake (gf)', 'Red velvet cake'], price: 6.5 },
    ],
  },
];
