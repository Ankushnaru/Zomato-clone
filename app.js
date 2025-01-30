
const restaurants = [
    {
        "image": "fourth",
        "Rest_name": "Healthy Harvest",
        "rating": 2,
        "foodTypes": "Barbecue",
        "Price_for_two": 2428,
        "locations": "Sector 22",
        "offers": 7,
        "alcohol": false,
        "Restaurant_open_time": 2,
        "Restaurant_close_time": 2
    },
    {
        "image": "fifth",
        "Rest_name": "Sushi World",
        "rating": 2,
        "foodTypes": "Fast Food",
        "Price_for_two": 874,
        "locations": "Sector 43",
        "offers": 1,
        "alcohol": false,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 1
    },
    {
        "image": "third",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 2,
        "foodTypes": "Chinese",
        "Price_for_two": 1443,
        "locations": "Sector 17",
        "offers": 22,
        "alcohol": false,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "first",
        "Rest_name": "Pasta Paradise",
        "rating": 1,
        "foodTypes": "Barbecue",
        "Price_for_two": 1446,
        "locations": "Sector 43",
        "offers": 5,
        "alcohol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "fifth",
        "Rest_name": "Seafood Shack",
        "rating": 4,
        "foodTypes": "Japanese",
        "Price_for_two": 194,
        "locations": "Sector 35",
        "offers": 12,
        "alcohol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 0
    },
    {
        "image": "first",
        "Rest_name": "Spice Symphony",
        "rating": 2,
        "foodTypes": "Vegan",
        "Price_for_two": 155,
        "locations": "Sector 43",
        "offers": 7,
        "alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "third",
        "Rest_name": "Burger Hub",
        "rating": 1,
        "foodTypes": "Chinese",
        "Price_for_two": 2077,
        "locations": "Sector 22",
        "offers": 4,
        "alcohol": true,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "fourth",
        "Rest_name": "Fusion Bistro",
        "rating": 5,
        "foodTypes": "Chinese",
        "Price_for_two": 592,
        "locations": "Mohali",
        "offers": 4,
        "alcohol": false,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "second",
        "Rest_name": "Urban Eatery",
        "rating": 4,
        "foodTypes": "Fast Food",
        "Price_for_two": 1919,
        "locations": "Sector 35",
        "offers": 22,
        "alcohol": true,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 11
    },
    {
        "image": "second",
        "Rest_name": "Pasta Paradise",
        "rating": 1,
        "foodTypes": "Desserts",
        "Price_for_two": 1854,
        "locations": "Industrial Area Phase 1",
        "offers": 19,
        "alcohol": true,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "first",
        "Rest_name": "Steakhouse Prime",
        "rating": 1,
        "foodTypes": "Barbecue",
        "Price_for_two": 1085,
        "locations": "Sector 17",
        "offers": 15,
        "alcohol": false,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "fourth",
        "Rest_name": "Cafe Bliss",
        "rating": 5,
        "foodTypes": "Desserts",
        "Price_for_two": 2047,
        "locations": "Mohali",
        "offers": 6,
        "alcohol": true,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "fourth",
        "Rest_name": "The Curry House",
        "rating": 3,
        "foodTypes": "Vegan",
        "Price_for_two": 1548,
        "locations": "Sector 17",
        "offers": 2,
        "alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 3
    },
    {
        "image": "third",
        "Rest_name": "Bistro Aroma",
        "rating": 3,
        "foodTypes": "Vegan",
        "Price_for_two": 2461,
        "locations": "Sector 43",
        "offers": 24,
        "alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "second",
        "Rest_name": "Royal Feast",
        "rating": 4,
        "foodTypes": "Italian",
        "Price_for_two": 2470,
        "locations": "Sector 17",
        "offers": 29,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "fifth",
        "Rest_name": "Healthy Harvest",
        "rating": 3,
        "foodTypes": "Indian",
        "Price_for_two": 1382,
        "locations": "Sector 35",
        "offers": 4,
        "alcohol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "Rest_name": "Bistro Aroma",
        "rating": 4,
        "foodTypes": "Japanese",
        "Price_for_two": 896,
        "locations": "Sector 35",
        "offers": 14,
        "alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "first",
        "Rest_name": "Fusion Bistro",
        "rating": 3,
        "foodTypes": "Continental",
        "Price_for_two": 2031,
        "locations": "Kharar",
        "offers": 14,
        "alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "first",
        "Rest_name": "Pasta Paradise",
        "rating": 3,
        "foodTypes": "Continental",
        "Price_for_two": 1237,
        "locations": "Sector 17",
        "offers": 5,
        "alcohol": true,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "third",
        "Rest_name": "Seafood Shack",
        "rating": 2,
        "foodTypes": "Vegan",
        "Price_for_two": 2286,
        "locations": "Industrial Area Phase 1",
        "offers": 1,
        "alcohol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 11
    },
    {
        "image": "first",
        "Rest_name": "Dessert Delights",
        "rating": 2,
        "foodTypes": "Seafood",
        "Price_for_two": 2067,
        "locations": "Sector 35",
        "offers": 10,
        "alcohol": true,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "second",
        "Rest_name": "Sushi World",
        "rating": 2,
        "foodTypes": "Continental",
        "Price_for_two": 248,
        "locations": "Sector 17",
        "offers": 1,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "second",
        "Rest_name": "Pasta Paradise",
        "rating": 2,
        "foodTypes": "Fast Food",
        "Price_for_two": 1570,
        "locations": "Industrial Area Phase 1",
        "offers": 15,
        "alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "fifth",
        "Rest_name": "Bistro Aroma",
        "rating": 2,
        "foodTypes": "Chinese",
        "Price_for_two": 2336,
        "locations": "Sector 22",
        "offers": 15,
        "alcohol": true,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 9
    },
    {
        "image": "fifth",
        "Rest_name": "Green Bites",
        "rating": 2,
        "foodTypes": "Continental",
        "Price_for_two": 2486,
        "locations": "Sector 43",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "fourth",
        "Rest_name": "Steakhouse Prime",
        "rating": 2,
        "foodTypes": "Indian",
        "Price_for_two": 462,
        "locations": "Sector 43",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 5
    },
    {
        "image": "first",
        "Rest_name": "Urban Eatery",
        "rating": 2,
        "foodTypes": "Barbecue",
        "Price_for_two": 1718,
        "locations": "Sector 22",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 1
    },
    {
        "image": "fourth",
        "Rest_name": "Steakhouse Prime",
        "rating": 4,
        "foodTypes": "Italian",
        "Price_for_two": 478,
        "locations": "chandigadh university",
        "offers": 9,
        "alcohol": true,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "second",
        "Rest_name": "Healthy Harvest",
        "rating": 3,
        "foodTypes": "Barbecue",
        "Price_for_two": 1832,
        "locations": "Sector 17",
        "offers": 19,
        "alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "fourth",
        "Rest_name": "Seafood Shack",
        "rating": 4,
        "foodTypes": "Seafood",
        "Price_for_two": 1174,
        "locations": "Sector 43",
        "offers": 3,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "fourth",
        "Rest_name": "Grill and Chill",
        "rating": 5,
        "foodTypes": "Fast Food",
        "Price_for_two": 1472,
        "locations": "Punjab University",
        "offers": 17,
        "alcohol": false,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "first",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 5,
        "foodTypes": "Seafood",
        "Price_for_two": 572,
        "locations": "chandigadh university",
        "offers": 19,
        "alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "third",
        "Rest_name": "Fusion Bistro",
        "rating": 5,
        "foodTypes": "Italian",
        "Price_for_two": 560,
        "locations": "Sector 17",
        "offers": 14,
        "alcohol": false,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "third",
        "Rest_name": "Bistro Aroma",
        "rating": 5,
        "foodTypes": "Japanese",
        "Price_for_two": 2491,
        "locations": "Kharar",
        "offers": 17,
        "alcohol": true,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "fourth",
        "Rest_name": "Cafe Bliss",
        "rating": 3,
        "foodTypes": "Barbecue",
        "Price_for_two": 1639,
        "locations": "Manimajra",
        "offers": 2,
        "alcohol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "fifth",
        "Rest_name": "Taste of China",
        "rating": 2,
        "foodTypes": "Fast Food",
        "Price_for_two": 2290,
        "locations": "Sector 35",
        "offers": 20,
        "alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "fifth",
        "Rest_name": "Royal Feast",
        "rating": 5,
        "foodTypes": "Japanese",
        "Price_for_two": 239,
        "locations": "Industrial Area Phase 1",
        "offers": 5,
        "alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "second",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 4,
        "foodTypes": "Seafood",
        "Price_for_two": 1583,
        "locations": "Punjab University",
        "offers": 20,
        "alcohol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 11
    },
    {
        "image": "third",
        "Rest_name": "Taste of China",
        "rating": 4,
        "foodTypes": "Barbecue",
        "Price_for_two": 1745,
        "locations": "Sector 43",
        "offers": 22,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "first",
        "Rest_name": "Cafe Bliss",
        "rating": 5,
        "foodTypes": "Barbecue",
        "Price_for_two": 1056,
        "locations": "Industrial Area Phase 1",
        "offers": 17,
        "alcohol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 11
    },
    {
        "image": "first",
        "Rest_name": "Grill and Chill",
        "rating": 5,
        "foodTypes": "Seafood",
        "Price_for_two": 1682,
        "locations": "Sector 43",
        "offers": 26,
        "alcohol": true,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "third",
        "Rest_name": "Pizza Heaven",
        "rating": 1,
        "foodTypes": "Fast Food",
        "Price_for_two": 1753,
        "locations": "Sector 22",
        "offers": 10,
        "alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "second",
        "Rest_name": "Fusion Bistro",
        "rating": 2,
        "foodTypes": "Italian",
        "Price_for_two": 449,
        "locations": "Mohali",
        "offers": 26,
        "alcohol": true,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 7
    },
    {
        "image": "second",
        "Rest_name": "Dessert Delights",
        "rating": 3,
        "foodTypes": "Desserts",
        "Price_for_two": 1685,
        "locations": "Sector 17",
        "offers": 8,
        "alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 7
    },
    {
        "image": "fifth",
        "Rest_name": "Spice Symphony",
        "rating": 5,
        "foodTypes": "Seafood",
        "Price_for_two": 1530,
        "locations": "Kharar",
        "offers": 9,
        "alcohol": true,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "third",
        "Rest_name": "Spice Symphony",
        "rating": 5,
        "foodTypes": "Japanese",
        "Price_for_two": 1239,
        "locations": "Manimajra",
        "offers": 18,
        "alcohol": true,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "fifth",
        "Rest_name": "Taste of China",
        "rating": 3,
        "foodTypes": "Seafood",
        "Price_for_two": 674,
        "locations": "Sector 43",
        "offers": 6,
        "alcohol": true,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "third",
        "Rest_name": "Spice Symphony",
        "rating": 3,
        "foodTypes": "Chinese",
        "Price_for_two": 1290,
        "locations": "Industrial Area Phase 1",
        "offers": 4,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "fifth",
        "Rest_name": "Urban Eatery",
        "rating": 1,
        "foodTypes": "Italian",
        "Price_for_two": 474,
        "locations": "Kharar",
        "offers": 0,
        "alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 7
    },
    {
        "image": "fifth",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 5,
        "foodTypes": "Continental",
        "Price_for_two": 1659,
        "locations": "Punjab University",
        "offers": 28,
        "alcohol": true,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 4
    },
    {
        "image": "fourth",
        "Rest_name": "Sushi World",
        "rating": 2,
        "foodTypes": "Italian",
        "Price_for_two": 901,
        "locations": "Sector 17",
        "offers": 26,
        "alcohol": true,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 7
    },
    {
        "image": "fourth",
        "Rest_name": "Fusion Bistro",
        "rating": 3,
        "foodTypes": "Chinese",
        "Price_for_two": 1874,
        "locations": "Mohali",
        "offers": 19,
        "alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 3
    },
    {
        "image": "first",
        "Rest_name": "Green Bites",
        "rating": 2,
        "foodTypes": "Italian",
        "Price_for_two": 1899,
        "locations": "Kharar",
        "offers": 3,
        "alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "Rest_name": "Taste of China",
        "rating": 1,
        "foodTypes": "Continental",
        "Price_for_two": 544,
        "locations": "Sector 17",
        "offers": 14,
        "alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "fifth",
        "Rest_name": "Dessert Delights",
        "rating": 4,
        "foodTypes": "Fast Food",
        "Price_for_two": 2373,
        "locations": "Punjab University",
        "offers": 8,
        "alcohol": true,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 5
    },
    {
        "image": "fourth",
        "Rest_name": "Seafood Shack",
        "rating": 2,
        "foodTypes": "Desserts",
        "Price_for_two": 2378,
        "locations": "Kharar",
        "offers": 4,
        "alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "Rest_name": "The Curry House",
        "rating": 2,
        "foodTypes": "Barbecue",
        "Price_for_two": 1647,
        "locations": "Industrial Area Phase 1",
        "offers": 1,
        "alcohol": true,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 4
    },
    {
        "image": "fourth",
        "Rest_name": "Taste of China",
        "rating": 3,
        "foodTypes": "Seafood",
        "Price_for_two": 768,
        "locations": "Punjab University",
        "offers": 11,
        "alcohol": false,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "second",
        "Rest_name": "Tandoor Treats",
        "rating": 2,
        "foodTypes": "Italian",
        "Price_for_two": 323,
        "locations": "Sector 17",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "second",
        "Rest_name": "Burger Hub",
        "rating": 3,
        "foodTypes": "Seafood",
        "Price_for_two": 2021,
        "locations": "Sector 22",
        "offers": 21,
        "alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 4
    },
    {
        "image": "fifth",
        "Rest_name": "Seafood Shack",
        "rating": 1,
        "foodTypes": "Indian",
        "Price_for_two": 885,
        "locations": "Sector 43",
        "offers": 22,
        "alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 3
    },
    {
        "image": "first",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 5,
        "foodTypes": "Japanese",
        "Price_for_two": 179,
        "locations": "Sector 22",
        "offers": 11,
        "alcohol": true,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 1
    },
    {
        "image": "fifth",
        "Rest_name": "Royal Feast",
        "rating": 4,
        "foodTypes": "Indian",
        "Price_for_two": 1813,
        "locations": "Sector 43",
        "offers": 11,
        "alcohol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 0
    },
    {
        "image": "second",
        "Rest_name": "Bistro Aroma",
        "rating": 2,
        "foodTypes": "Continental",
        "Price_for_two": 1519,
        "locations": "Sector 22",
        "offers": 6,
        "alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "second",
        "Rest_name": "Pizza Heaven",
        "rating": 4,
        "foodTypes": "Continental",
        "Price_for_two": 1708,
        "locations": "Sector 17",
        "offers": 8,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "third",
        "Rest_name": "Green Bites",
        "rating": 2,
        "foodTypes": "Vegan",
        "Price_for_two": 972,
        "locations": "chandigadh university",
        "offers": 1,
        "alcohol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 5
    },
    {
        "image": "first",
        "Rest_name": "Healthy Harvest",
        "rating": 3,
        "foodTypes": "Japanese",
        "Price_for_two": 130,
        "locations": "Kharar",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 2,
        "Restaurant_close_time": 2
    },
    {
        "image": "first",
        "Rest_name": "Steakhouse Prime",
        "rating": 5,
        "foodTypes": "Vegan",
        "Price_for_two": 1932,
        "locations": "Punjab University",
        "offers": 19,
        "alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "third",
        "Rest_name": "The Curry House",
        "rating": 4,
        "foodTypes": "Indian",
        "Price_for_two": 2176,
        "locations": "Manimajra",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 17,
        "Restaurant_close_time": 5
    },
    {
        "image": "fourth",
        "Rest_name": "Steakhouse Prime",
        "rating": 4,
        "foodTypes": "Vegan",
        "Price_for_two": 1680,
        "locations": "Manimajra",
        "offers": 18,
        "alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "third",
        "Rest_name": "Sushi World",
        "rating": 2,
        "foodTypes": "Italian",
        "Price_for_two": 2073,
        "locations": "Kharar",
        "offers": 9,
        "alcohol": true,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "second",
        "Rest_name": "Spice Symphony",
        "rating": 3,
        "foodTypes": "Vegan",
        "Price_for_two": 2424,
        "locations": "Manimajra",
        "offers": 26,
        "alcohol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "fourth",
        "Rest_name": "Urban Eatery",
        "rating": 2,
        "foodTypes": "Barbecue",
        "Price_for_two": 1796,
        "locations": "Kharar",
        "offers": 0,
        "alcohol": false,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "fifth",
        "Rest_name": "Tandoor Treats",
        "rating": 5,
        "foodTypes": "Italian",
        "Price_for_two": 1295,
        "locations": "Kharar",
        "offers": 7,
        "alcohol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "second",
        "Rest_name": "Pasta Paradise",
        "rating": 4,
        "foodTypes": "Indian",
        "Price_for_two": 162,
        "locations": "Kharar",
        "offers": 10,
        "alcohol": true,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 3
    },
    {
        "image": "fifth",
        "Rest_name": "Healthy Harvest",
        "rating": 5,
        "foodTypes": "Barbecue",
        "Price_for_two": 1778,
        "locations": "Sector 17",
        "offers": 4,
        "alcohol": true,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "fifth",
        "Rest_name": "Burger Hub",
        "rating": 1,
        "foodTypes": "Vegan",
        "Price_for_two": 1590,
        "locations": "Mohali",
        "offers": 4,
        "alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "fourth",
        "Rest_name": "Sushi World",
        "rating": 2,
        "foodTypes": "Japanese",
        "Price_for_two": 753,
        "locations": "Sector 35",
        "offers": 1,
        "alcohol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 6
    },
    {
        "image": "third",
        "Rest_name": "Green Bites",
        "rating": 5,
        "foodTypes": "Italian",
        "Price_for_two": 617,
        "locations": "Sector 22",
        "offers": 7,
        "alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 7
    },
    {
        "image": "first",
        "Rest_name": "Cafe Bliss",
        "rating": 5,
        "foodTypes": "Japanese",
        "Price_for_two": 399,
        "locations": "Manimajra",
        "offers": 23,
        "alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "third",
        "Rest_name": "Pasta Paradise",
        "rating": 2,
        "foodTypes": "Vegan",
        "Price_for_two": 123,
        "locations": "Industrial Area Phase 1",
        "offers": 14,
        "alcohol": true,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "first",
        "Rest_name": "The Gourmet Kitchen",
        "rating": 1,
        "foodTypes": "Barbecue",
        "Price_for_two": 1615,
        "locations": "Sector 22",
        "offers": 15,
        "alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 4
    },
    {
        "image": "third",
        "Rest_name": "Pasta Paradise",
        "rating": 5,
        "foodTypes": "Italian",
        "Price_for_two": 1582,
        "locations": "Sector 35",
        "offers": 5,
        "alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "third",
        "Rest_name": "Burger Hub",
        "rating": 1,
        "foodTypes": "Vegan",
        "Price_for_two": 1379,
        "locations": "Mohali",
        "offers": 17,
        "alcohol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "second",
        "Rest_name": "Seafood Shack",
        "rating": 2,
        "foodTypes": "Vegan",
        "Price_for_two": 1804,
        "locations": "Sector 35",
        "offers": 19,
        "alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "fourth",
        "Rest_name": "Urban Eatery",
        "rating": 4,
        "foodTypes": "Italian",
        "Price_for_two": 2063,
        "locations": "Sector 22",
        "offers": 29,
        "alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "first",
        "Rest_name": "Pizza Heaven",
        "rating": 3,
        "foodTypes": "Seafood",
        "Price_for_two": 1117,
        "locations": "Mohali",
        "offers": 0,
        "alcohol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 0
    },
    {
        "image": "third",
        "Rest_name": "Seafood Shack",
        "rating": 1,
        "foodTypes": "Fast Food",
        "Price_for_two": 1271,
        "locations": "Punjab University",
        "offers": 15,
        "alcohol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 5
    },
    {
        "image": "fifth",
        "Rest_name": "Healthy Harvest",
        "rating": 4,
        "foodTypes": "Japanese",
        "Price_for_two": 590,
        "locations": "Industrial Area Phase 1",
        "offers": 11,
        "alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 4
    },
    {
        "image": "fourth",
        "Rest_name": "Bistro Aroma",
        "rating": 5,
        "foodTypes": "Desserts",
        "Price_for_two": 2262,
        "locations": "Sector 35",
        "offers": 17,
        "alcohol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 0
    },
    {
        "image": "second",
        "Rest_name": "Urban Eatery",
        "rating": 4,
        "foodTypes": "Fast Food",
        "Price_for_two": 1434,
        "locations": "Sector 22",
        "offers": 18,
        "alcohol": true,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "first",
        "Rest_name": "Burger Hub",
        "rating": 1,
        "foodTypes": "Indian",
        "Price_for_two": 2361,
        "locations": "chandigadh university",
        "offers": 28,
        "alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "third",
        "Rest_name": "Urban Eatery",
        "rating": 1,
        "foodTypes": "Italian",
        "Price_for_two": 282,
        "locations": "Sector 17",
        "offers": 13,
        "alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "second",
        "Rest_name": "Burger Hub",
        "rating": 2,
        "foodTypes": "Seafood",
        "Price_for_two": 2355,
        "locations": "Punjab University",
        "offers": 4,
        "alcohol": false,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 8
    },
    {
        "image": "first",
        "Rest_name": "Steakhouse Prime",
        "rating": 4,
        "foodTypes": "Barbecue",
        "Price_for_two": 1303,
        "locations": "Sector 35",
        "offers": 16,
        "alcohol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 0
    },
    {
        "image": "first",
        "Rest_name": "Seafood Shack",
        "rating": 5,
        "foodTypes": "Continental",
        "Price_for_two": 665,
        "locations": "chandigadh university",
        "offers": 14,
        "alcohol": false,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 1
    },
    {
        "image": "second",
        "Rest_name": "Burger Hub",
        "rating": 2,
        "foodTypes": "Desserts",
        "Price_for_two": 1626,
        "locations": "Manimajra",
        "offers": 6,
        "alcohol": true,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 10
    },
    {
        "image": "fifth",
        "Rest_name": "Bistro Aroma",
        "rating": 5,
        "foodTypes": "Barbecue",
        "Price_for_two": 1536,
        "locations": "Industrial Area Phase 1",
        "offers": 11,
        "alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "second",
        "Rest_name": "Taste of China",
        "rating": 4,
        "foodTypes": "Chinese",
        "Price_for_two": 1544,
        "locations": "Punjab University",
        "offers": 5,
        "alcohol": false,
        "Restaurant_open_time": 2,
        "Restaurant_close_time": 2
    },
    {
        "image": "first",
        "Rest_name": "Seafood Shack",
        "rating": 4,
        "foodTypes": "Japanese",
        "Price_for_two": 427,
        "locations": "Sector 43",
        "offers": 28,
        "alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    }
]
function getrestaurant(restaurants) {
    const root = document.getElementById('root');
    root.innerHTML = ""; // Clear previous content
    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement("img");
        image.src = `images/${restaurant.image}.jpeg`;

        const Card_content = document.createElement('div');
        Card_content.classList.add('card-content');

        const Card_header = document.createElement('div');
        Card_header.classList.add('card-header');

        const h3 = document.createElement('h3');
        h3.textContent = restaurant.Rest_name; // Corrected key

        const rate = document.createElement('span');
        rate.textContent = "Rating: " + restaurant.rating;
        rate.classList.add('rating');

        Card_header.appendChild(h3);
        Card_header.appendChild(rate);

        

        const Card_footer = document.createElement('div');
        Card_footer.classList.add('card-footer');

        const food = document.createElement('span');
        food.textContent = restaurant.foodTypes; // Corrected key

        const price = document.createElement('span');
        price.textContent = "Rs " + restaurant.Price_for_two; // Corrected key

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);

        const Card_location = document.createElement('div');
        Card_location.classList.add('card-location');

        const location = document.createElement('span');
        location.textContent = restaurant.locations; // Corrected key

        Card_location.appendChild(location);

        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(Card_location);

        card.appendChild(image);
        card.appendChild(Card_content);

        root.appendChild(card);
    });
}

getrestaurant(restaurants);

document.getElementById("Alcohol").addEventListener('click', () => {
    const result = restaurants.filter(obj => obj.alcohol);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
});

document.getElementById("Rating").addEventListener('click', () => {
    const result = restaurants.filter(obj => obj.rating > 4.5);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
});

document.getElementById("Filters").addEventListener('click', () => {
    document.getElementById("filterpopup").classList.remove("hidden");
});

document.getElementById("applyFilter").addEventListener('click', () => {
    const element = document.querySelector('input[name="filterOption"]:checked');
    const answer = element.value;

    if (answer === "rating") {
        restaurants.sort((a, b) => b.rating - a.rating);
    } else if (answer === "highLow") {
        restaurants.sort((a, b) => b.Price_for_two - a.Price_for_two);
    } else if (answer === "CostLowHigh") {
        restaurants.sort((a, b) => a.Price_for_two - b.Price_for_two);
    }

    document.getElementById('root').replaceChildren();
    document.getElementById("filterpopup").classList.add("hidden");
    getrestaurant(restaurants);
});


