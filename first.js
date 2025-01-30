const fs = require('fs');
const restaurant = [];
const image = ["first", "second", "third", "fourth", "fifth"];
const rest_name = [
    "The Gourmet Kitchen",
    "Spice Symphony",
    "Sushi World",
    "Grill and Chill",
    "Green Bites",
    "Taste of China",
    "Burger Hub",
    "Pasta Paradise",
    "Seafood Shack",
    "Urban Eatery",
    "Pizza Heaven",
    "Tandoor Treats",
    "Cafe Bliss",
    "Steakhouse Prime",
    "Healthy Harvest",
    "Dessert Delights",
    "The Curry House",
    "Fusion Bistro",
    "Bistro Aroma",
    "Royal Feast"
];
const foodTypes = [
    "Italian",
    "Chinese",
    "Indian",
    "Japanese",
    "Barbecue",
    "Vegan",
    "Seafood",
    "Continental",
    "Fast Food",
    "Desserts"
];
const locations = [
    "Sector 17",
    "Sector 22",
    "Sector 35",
    "chandigadh university",
    "Punjab University",
    "Kharar",
    "Sector 43",
    "Industrial Area Phase 1",
    "Manimajra",
    "Mohali"
];
for (let i = 0; i < 100; i++) {
    const obj = {};
    obj["image"] = image[Math.floor(Math.random() * 5)];
    obj["Rest_name"] = rest_name[Math.floor(Math.random() * 20)];
    obj["rating"] = Math.floor(Math.random() * 5 + 1);
    obj["foodTypes"] = foodTypes[Math.floor(Math.random() * 10)];
    obj["Price_for_two"] = Math.floor(Math.random() * 2401 + 100);
    obj["locations"] = locations[Math.floor(Math.random() * 10)]; // Fixed the typo
    obj["offers"] = Math.floor(Math.random() * 30);
    obj["alcohol"] = Math.random() > 0.7;
    obj["Restaurant_open_time"] = Math.floor(Math.random() * 24);
    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"] + 12) % 12;
    restaurant.push(obj);
}
console.log(restaurant);

const jsonData = JSON.stringify(restaurant, null, 4);
fs.writeFileSync('arrayData.json', jsonData, 'utf8');
