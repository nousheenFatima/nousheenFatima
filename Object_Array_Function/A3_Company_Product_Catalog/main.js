// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var inventory = {
    products: []
};
var product1 = {
    name: "microwave",
    model: "543-XD",
    cost: 65000,
    quantity: 50
};
var product2 = {
    name: "fridge",
    model: "DW-739NI",
    cost: 147000,
    quantity: 30
};
var product3 = {
    name: "dishWasher",
    model: "521-PEL-54",
    cost: 160999,
    quantity: 25
};
//Add these product objects to the inventory array using push method
inventory.products.push(product1, product2, product3);
//Access and log the quantity property of  third product in the inventory array.
var prd3qty = inventory.products[2].quantity;
console.log(prd3qty);
// Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var produt4 = {
    name: "chopper",
    model: "876-LK-II",
    cost: 22000,
    quantity: 59
};
//Adding product4 into inventory array
inventory.products.push(produt4);
// accessing more elements within the inventory array
var prd4cost = inventory.products[3].cost;
console.log(prd4cost);
