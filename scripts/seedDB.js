const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whats-in-store"
);

const categorySeed = [
    { name: 'Appliances' },
    { name: 'Arts & Crafts' },
    { name: 'Automotive & Parts' },
    { name: 'Baby' },
    { name: 'Beauty' },
    { name: 'Books' },
    { name: 'Business' },
    { name: 'Cameras & Photo' },
    { name: 'Cell Phones & Accessories' },
    { name: 'Clothing, Shoes, & Accessories' },
    { name: 'Collectibles & Fine Art' },
    { name: 'Courses' },
    { name: 'Digital Music' },
    { name: 'Electronics' },
    { name: 'Gardening' },
    { name: 'Health' },
    { name: 'Home' },
    { name: 'Industrial' },
    { name: 'Jewelry & Watches' },
    { name: 'Music' },
    { name: 'Musical Instruments & Gear' },
    { name: 'Office' },
    { name: 'Outdoors' },
    { name: 'Pet' },
    { name: 'Pottery & Glass' },
    { name: 'Software' },
    { name: 'Specialty Services' },
    { name: 'Sporting Goods' },
    { name: 'Sports Mem, Cards, & Fan Shop' },
    { name: 'Tools & Home Improvement' },
    { name: 'Toys, Hobbies, & Games' },
    { name: 'Vehicles' },
    { name: 'Video Games & Consoles' } 
]

const subcategorySeed = 
[{
  // name: "Appliances",
  sub_category: [
    {
      _id: 2,
      name: "Microwaves",
    },
    {
      _id: 3,
      name: "Toaster",
    },
  ]
}]
[{
  // name: "Arts & Crafts",
  sub_category: [
    {
      _id: 2,
      name: "Hats",
    },
    {
      _id: 3,
      name: "Mittens",
    },
  ]
}]
[{
  // name: "Automotive & Parts",
  sub_category: [
    {
      _id: 2,
      name: "Windshield Wipers",
    },
    {
      _id: 3,
      name: "Oil Change",
    },
  ]
}]
[{
  // name: "Baby",
  sub_category: [
    {
      _id: 2,
      name: "Strollers",
    },
    {
      _id: 3,
      name: "Bounce Seats",
    },
  ]
}]
[{
  // name: "Beauty",
  sub_category: [
    {
      _id: 2,
      name: "Masks",
    },
    {
      _id: 3,
      name: "Exfolient",
    },
  ]
}]
[{
  // name: "Books",
  sub_category: [
    {
      _id: 2,
      name: "New",
    },
    {
      _id: 3,
      name: "Used",
    },
  ]
}]
[{
  // name: "Business",
  sub_category: [
    {
      _id: 2,
      name: "Consultations",
    },
    {
      _id: 3,
      name: "Home ",
    },
  ]
}]
[{
  // name: "Cameras & Photo",
  sub_category: [
    {
      _id: 2,
      name: "Local Photography",
    },
    {
      _id: 3,
      name: "World Photography",
    },
  ]
}]
[{
  // name: "Cell Phones & Accessories",
  sub_category: [
    {
      _id: 2,
      name: "New",
    },
    {
      _id: 3,
      name: "Used",
    },
  ]
}]
[{
  // name: "Clothing, Shoes, & Accessories",
  sub_category: [
    {
      _id: 2,
      name: "XS",
    },
    {
      _id: 3,
      name: "S",
    },
    {
      _id: 3,
      name: "M",
    },
    {
      _id: 3,
      name: "L",
    },
    {
      _id: 3,
      name: "XL",
    },
    {
      _id: 3,
      name: "XXL",
    },
  ]
}]
[{
  // name: "Collectibles & Fine Art",
  sub_category: [
    {
      _id: 2,
      name: "Antiques",
    },
    {
      _id: 3,
      name: "Art",
    },
  ]
}]
[{
  // name: "Courses",
  sub_category: [
    {
      _id: 2,
      name: "Online",
    },
    {
      _id: 3,
      name: "In-Person",
    },
  ]
}]
[{
  // name: "Digital Music",
  sub_category: [
    {
      _id: 2,
      name: "Tracks",
    },
    {
      _id: 3,
      name: "EPs",
    },
  ]
}]
[{
  // name: "Electronics",
  sub_category: [
    {
      _id: 2,
      name: "New",
    },
    {
      _id: 3,
      name: "Used",
    },
  ]
}]
[{
  // name: "Gardening",
  sub_category: [
    {
      _id: 2,
      name: "Plants",
    },
    {
      _id: 3,
      name: "Flowers",
    },
    {
      _id: 3,
      name: "Tools",
    },
  ]
}]
[{
  // name: "Health",
  sub_category: [
    {
      _id: 2,
      name: "Supplements",
    },
    {
      _id: 3,
      name: "Tools",
    },
  ]
}]
[{
  // name: "Home",
  sub_category: [
    {
      _id: 2,
      name: "New",
    },
    {
      _id: 3,
      name: "Used",
    },
  ]
}]
// THIS LIST IS NOT DONE... STOPS AT CATEGORY HOME... 
// THIS WILL EITHER BE CUT DOWN OR EXPANDED, DEPENDING HOW WE DECIDE

db.Book
  .remove({})
  .then(() => {
      db.Category.collection.insertMany(categorySeed);
      db.Subcategory.collection.insertMany(subcategorySeed);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });