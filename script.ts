"use strict"

// Create inputs for a new product
// Add a submit button that takes the inputs and adds it to the table
// Calculate the cost (divide price by serving; multiply by consumption per day)
// Save 'new products' to local storage
class Product{
    name:string;
    price:number;
    servings:number;

    constructor(productName:string,price:number,totalServings:number){
        this.name = productName;
        this.price = price
        this.servings = totalServings
    }
    
    createHTML(){
        
    }
}

let row1 = document.getElementById("row1")
document.body.appendChild(row1!)

let productName = document.createElement("input");
productName.placeholder = "Product";
row1!.appendChild(productName);

let price = document.createElement("input")
price.placeholder = "Price";
row1!.appendChild(price)

let servings = document.createElement("input")
servings.placeholder = "Servings";
row1!.appendChild(servings)


function createProduct(){
    let newRow = document.createElement("div")
    document.body.appendChild(newRow!)

    let productName = document.createElement("input");
    productName.placeholder = "Product";
    newRow!.appendChild(productName);

    let price = document.createElement("input")
    price.placeholder = "Price";
    newRow!.appendChild(price)

    let servings = document.createElement("input")
    servings.placeholder = "Servings";
    newRow!.appendChild(servings)

    let addProduct = document.createElement("button")
    addProduct.addEventListener("click", createProduct)
    addProduct.innerText = "Add"
    newRow!.appendChild(addProduct)
}

let addProduct = document.createElement("button")
addProduct.addEventListener("click", createProduct)
addProduct.innerText = "Add"
row1!.appendChild(addProduct)