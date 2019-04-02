// THIS IS OUR LIST OF SEEDS CATEGORIES.... 
// AT THE BOTTOM IS A FORMULA TO ORDER IT ALPHABETICALLY
// IF WE DECIDE TO ADD MORE CATEGORIES
// THIS LIST IS IN `seedDB.js` FILE

var myData = [ 
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

var results = myData.sort(function (a, b) {
    if(a.name < b.name) { return -1; }
   if(a.name > b.name) { return 1; }
//    0 is equal.... if equal, then do nothing
   return 0;
        });

console.log(results);
