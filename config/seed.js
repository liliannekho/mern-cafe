require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Local Roast Coffee', items: [], sortOrder: 10},
    {name: 'Cafe/The', items: [], sortOrder: 20},
    {name: 'Pastaries', items: [], sortOrder: 30},
    {name: 'Lunch', items: [], sortOrder: 40},
    {name: 'Shop local', items: [], sortOrder: 50},
    {name: 'Merch', items: [], sortOrder: 60},
    {name: 'Gift Card', items: [], sortOrder: 70},
  ]);

  await Item.deleteMany({});

  const items = await Item.create([
  { name: 'Melange A Espresso', emoji:'/images/espresso.jpg' , category: categories[0], price: 18.00 },
  { name: 'Winter Seasonal Blend', emoji: '/images/winterBlend.png', category: categories[0], price: 17.95 },
  { name: 'Nicaragua San Juan', emoji: '/images/sanJuan.jpg', category: categories[0], price: 17.95 },
  { name: 'Polaris Espresso', emoji: '/images/espresso.jpg', category: categories[0], price: 18.00 },
  { name: 'Cafe Latte', emoji: '/images/latte.jpg' ,category: categories[1], price: 5.25 },
  { name: 'Cappuccino', emoji: '/images/cap.jpg', category: categories[1], price: 5.25 },
  { name: 'Solo Espresso', emoji: '/images/espressoShot.jpg', category: categories[1], price: 3.95 },
  { name: 'Flat White', emoji: '/images/flatWhite.jpg', category: categories[1], price: 6.40 },
  { name: 'Tea', emoji: '/images/tea.jpg', category: categories[1], price: 3.95 },
  { name: 'Croissant', emoji: '/images/croissant.jpg', category: categories[2], price: 5.95 },
  { name: 'Pain au Chocolat', emoji: '/images/painChoc.jpg', category: categories[2], price: 4.95 },
  { name: 'Mille Feuille', emoji: '/images/mille_feuille.jpg', category: categories[2], price: 4.95 },
  { name: 'Madeleine', emoji: '/images/madeleine.jpg', category: categories[2], price: 4.95 },
  { name: 'Cannele', emoji: '/images/Canneles.jpg', category: categories[2], price: 4.95 },
  { name: 'Croque Madame', emoji: '/images/croque.jpg', category: categories[3], price: 6.95 },
  { name: 'Caprese Sandwich', emoji: '/images/caprese.jpg', category: categories[3], price: 7.95 },
  { name: 'Nicoise Salad', emoji: '/images/salad.jpg', category: categories[3], price: 8.95 },
  { name: '100% pure Canadian Maple Syrup', emoji: '/images/maple.jpg', category: categories[4], price: 13.95 },
  { name: 'Honey roasted cashews', emoji: '/images/cashews.jpg', category: categories[4], price: 6.75 },
  { name: 'Red Pepper Chutney', emoji: '/images/jam.jpg', category: categories[4], price: 6.75 },
  { name: 'Tapas Olives noires Antona', emoji: '/images/olives.jpg', category: categories[4], price: 8.95 },
  { name: 'Smoked Olive Oil', emoji: '/images/Oil.jpg', category: categories[4], price: 18.00 },
  { name: 'LPD hat', emoji: '/images/hat.jpg', category: categories[5], price: 12.00 },
  { name: 'Reusable ceramic cup LPD', emoji: '/images/ceramic.jpg', category: categories[5], price: 35.00 },
  { name: 'Cup LPD', emoji: '/images/mug.png', category: categories[5], price: 15.00 },
  { name: 'Water Bottle LPD', emoji: '/images/bottle.jpg', category: categories[5], price: 20.00 },
  { name: 'Virtual Gift Card - $20', emoji: '/images/giftCard.jpg', category: categories[6], price: 20.00 },
  { name: 'Virtual Gift Card - $40', emoji: '/images/giftCard.jpg', category: categories[6], price: 40.00 },
  { name: 'Virtual Gift Card - $50', emoji: '/images/giftCard.jpg', category: categories[6], price: 50.00 },
  { name: 'Virtual Gift Card - $75', emoji: '/images/giftCard.jpg', category: categories[6], price: 75.00 },
  { name: 'Virtual Gift Card - $100', emoji: '/images/giftCard.jpg', category: categories[6], price: 100.00 }
]);

  console.log(items)

 
  process.exit();

})();