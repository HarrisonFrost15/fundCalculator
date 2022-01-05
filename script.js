"use strict";
// Create inputs for a new product
// Add a submit button that takes the inputs and adds it to the table
// Calculate the cost (divide price by serving; multiply by consumption per day)
// Save 'products' to local storage
class Product {
    constructor(productName, price, totalServings) {
        this.name = productName;
        this.price = price;
        this.servings = totalServings;
    }
}
let inputs = document.getElementById("inputs");
let productName = document.createElement("input");
productName.id = "productName";
productName.setAttribute("name", "inputBox");
productName.placeholder = "Product";
inputs.appendChild(productName);
let price = document.createElement("input");
price.id = "price";
price.setAttribute("name", "inputBox");
price.placeholder = "Price";
inputs.appendChild(price);
let servings = document.createElement("input");
servings.id = "servings";
servings.setAttribute("name", "inputBox");
servings.placeholder = "Servings";
inputs.appendChild(servings);
let addProduct = document.createElement("button");
addProduct.addEventListener("click", createProduct);
addProduct.innerText = "Add";
inputs.appendChild(addProduct);
let products = [];
let coffee = new Product("Coffee", 5, 150);
products.push(coffee);
let Tea = new Product("Tea", 10, 200);
products = JSON.parse(localStorage.getItem("products"));
function createProduct() {
    let newProduct = document.createElement("div");
    document.body.appendChild(newProduct);
    let newProductName = document.createElement("h1");
    newProductName.innerText = (`Name: ${productName.value}`);
    newProduct.appendChild(newProductName);
    let newPrice = document.createElement("p");
    newPrice.innerText = `Price:  £${price.value}`;
    newProduct.appendChild(newPrice);
    let newServings = document.createElement("p");
    newServings.innerText = `${servings.value} servings`;
    newProduct.appendChild(newServings);
    let newDrink = { name: newProductName, price: newPrice, servings: newServings };
    products.push(newDrink);
    saveProduct();
}
function saveProduct() {
    let productString = JSON.stringify(products);
    localStorage.setItem("products", productString);
}
//# sourceMappingURL=script.js.map