require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  // await Category.deleteMany({});
  // const categories = await Category.create([
  //   {name: 'Sandwiches', sortOrder: 10},
  //   {name: 'Seafood', sortOrder: 20},
  //   {name: 'Mexican', sortOrder: 30},
  //   {name: 'Italian', sortOrder: 40},
  //   {name: 'Sides', sortOrder: 50},
  //   {name: 'Desserts', sortOrder: 60},
  //   {name: 'Drinks', sortOrder: 70},
  // ]);

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Local Roast Coffee', sortOrder: 10},
    {name: 'Cafe/The', sortOrder: 20},
    {name: 'Pastaries', sortOrder: 30},
    {name: 'Lunch', sortOrder: 40},
    {name: 'Shop local', sortOrder: 50},
    {name: 'Merch', sortOrder: 60},
    {name: 'Gift Card', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
  //   {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
  //   {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
  //   {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
  //   {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
  //   {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
  //   {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
  //   {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
  //   {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
  //   {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
  //   {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
  //   {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
  //   {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
  //   {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
  //   {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
  //   {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
  //   {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
  //   {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
  //   {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
  //   {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
  //   {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
  //   {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
  //   {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  // ]);

  { name: 'Melange A Espresso', emoji: '🌱', category: categories[0], price: 18.00 },
  { name: 'Winter Seasonal Blend', emoji: '🌿', category: categories[0], price: 17.95 },
  { name: 'Nicaragua San Juan', emoji: '🍃', category: categories[0], price: 17.95 },
  { name: 'Polaris Espresso', emoji: '🌱', category: categories[0], price: 18.00 },
  { name: 'Cafe Latte', emoji: '☕️', category: categories[1], price: 5.25 },
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
  { name: 'LPD Touque', emoji: '🎩', category: categories[5], price: 12.00 },
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