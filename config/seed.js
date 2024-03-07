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
  { name: 'Melange A Espresso', emoji: '/public/images/GiftCard.png', category: categories[0], price: 18.00 },
  { name: 'Winter Seasonal Blend', emoji: '🌿', category: categories[0], price: 17.95 },
  { name: 'Nicaragua San Juan', emoji: '🍃', category: categories[0], price: 17.95 },
  { name: 'Polaris Espresso', emoji: '🌱', category: categories[0], price: 18.00 },
  { name: 'Cafe Latte', emoji: '' ,category: categories[1], price: 5.25 },
  { name: 'Cappuccino', emoji: '☕️', category: categories[1], price: 5.25 },
  { name: 'Cortado', emoji: '☕️', category: categories[1], price: 4.90 },
  { name: 'Solo Espresso', emoji: '☕️', category: categories[1], price: 3.95 },
  { name: 'Flat White', emoji: '☕️', category: categories[1], price: 6.40 },
  { name: 'Tea', emoji: '☕️', category: categories[1], price: 3.95 },
  { name: 'Croissant', emoji: '🥐', category: categories[2], price: 5.95 },
  { name: 'Pain au Chocolat', emoji: '🥐', category: categories[2], price: 4.95 },
  { name: 'Mille Feuille', emoji: '🥐', category: categories[2], price: 4.95 },
  { name: 'Madeleine', emoji: '🥐', category: categories[2], price: 4.95 },
  { name: 'Cannele', emoji: '🥐', category: categories[2], price: 4.95 },
  { name: 'Croque Madame', emoji: '🥪', category: categories[3], price: 6.95 },
  { name: 'Caprese Sandwich', emoji: '🥪', category: categories[3], price: 7.95 },
  { name: 'Nicoise Salad', emoji: '🥗', category: categories[3], price: 8.95 },
  { name: '100% pure Canadian Maple Syrup', emoji: '🍁', category: categories[4], price: 13.95 },
  { name: 'Honey roasted cashews', emoji: '🥜', category: categories[4], price: 6.75 },
  { name: 'Red Pepper Jam', emoji: '🌶️', category: categories[4], price: 6.75 },
  { name: 'Tapas Olives noires Antona', emoji: '🫒', category: categories[4], price: 8.95 },
  { name: 'Smoked Olive Oil', emoji: '🫒', category: categories[4], price: 18.00 },
  { name: 'LPD hat', emoji: '🎩', category: categories[5], price: 12.00 },
  { name: 'Reusable ceramic cup LPD', emoji: '🥤', category: categories[5], price: 35.00 },
  { name: 'Cup LPD', emoji: '☕️', category: categories[5], price: 15.00 },
  { name: 'Water Bottle LPD', emoji: '🧊', category: categories[5], price: 20.00 },
  { name: 'Virtual Gift Card - $20', emoji: '💳', category: categories[6], price: 20.00 },
  { name: 'Virtual Gift Card - $40', emoji: '💳', category: categories[6], price: 40.00 },
  { name: 'Virtual Gift Card - $50', emoji: '💳', category: categories[6], price: 50.00 },
  { name: 'Virtual Gift Card - $75', emoji: '💳', category: categories[6], price: 75.00 },
  { name: 'Virtual Gift Card - $100', emoji: '💳', category: categories[6], price: 100.00 }
]);

  console.log(items)

 
  process.exit();

})();