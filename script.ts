"use strict"

// Create inputs for a new product
// Add a submit button that takes the inputs and adds it to the table
// Calculate the cost (divide price by serving; multiply by consumption per day)
// Save 'products' to local storage
class Product{
    name:string;
    price:number;
    servings:number;

    constructor(productName:string,price:number,totalServings:number){
        this.name = productName;
        this.price = price
        this.servings = totalServings
    }
}

let inputs = document.getElementById("inputs")

let productName = document.createElement("input");
productName.id = "productName"
productName.setAttribute("name","inputBox")
productName.placeholder = "Product";
inputs!.appendChild(productName);

let price = document.createElement("input")
price.id="price"
price.setAttribute("name","inputBox")
price.placeholder = "Price";
inputs!.appendChild(price)

let servings = document.createElement("input")
servings.id = "servings"    
servings.setAttribute("name","inputBox")

servings.placeholder = "Servings";
inputs!.appendChild(servings)

let addProduct = document.createElement("button")
addProduct.addEventListener("click", createProduct)
addProduct.innerText = "Add"
inputs!.appendChild(addProduct)

let products:[] = []

let coffee = new Product("Coffee", 5, 150);
products.push(coffee)

let Tea = new Product("Tea",10,200)

products = JSON.parse(localStorage.getItem("products")!)

function createProduct(){
    
    let newProduct = document.createElement("div")
    document.body.appendChild(newProduct!)

    let newProductName = document.createElement("h1")
    newProductName.innerText = (`Name: ${productName.value}`);
    newProduct!.appendChild(newProductName);

    let newPrice = document.createElement("p")
    newPrice.innerText = `Price:  £${price.value}`;
    newProduct!.appendChild(newPrice)

    let newServings = document.createElement("p")
    newServings.innerText = `${servings.value} servings`;
    newProduct!.appendChild(newServings)

    let newDrink={name:newProductName,price:newPrice,servings:newServings}
    products.push(newDrink)

    saveProduct()
}

function saveProduct(){
    let productString=JSON.stringify(products)
    localStorage.setItem("products", productString)
}

//teacher's consumption per day
// let make=(<HTMLInputElement>document.getElementById("make")).value
// let model=(<HTMLInputElement>document.getElementById("model")).value
// let mileage:number=parseInt((<HTMLInputElement>document.getElementById("mileage")).value)
// let price=parseInt((<HTMLInputElement>document.getElementById("price")).value)

// let newCar={make:make,model:model,mileage:mileage,price:price}
//     cars.push(newCar)

//     let newDrink={name:name,}


// let cars:Car[]=[]
// cars.push(new Car("BMW", "X2", "Silver", 100000, 25000))
// cars = JSON.parse(localStorage.getItem("cars")!)
// console.log(cars)
// if (cars == null){
//     cars=generateRandomCars(makes,20)
//     saveCars()


//calculate the cost