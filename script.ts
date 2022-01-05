"use strict"

// Create inputs for a new product
// Add a submit button that takes the inputs and adds it to the table
// Calculate the cost (divide price by serving; multiply by consumption per day)
// Save 'products' to local storage
class Product{
    name:string;
    price:number;
    servings:number;
    consumption:number;

    constructor(productName:string,price:number,totalServings:number,consumption:number){
        this.name = productName;
        this.price = price
        this.servings = totalServings
        this.consumption = consumption
    }
    render(){
        let newProduct = document.createElement("div")
        document.body.appendChild(newProduct!)

        let newProductName = document.createElement("h1")
        newProductName.innerText = (`Name: ${this.name}`);
        newProduct!.appendChild(newProductName);

        let newPrice = document.createElement("p")
        newPrice.innerText = `Price:  £${this.price}`;
        newProduct!.appendChild(newPrice)

        let newServings = document.createElement("p")
        newServings.innerText = `${this.servings} servings`;
        newProduct!.appendChild(newServings)

        let consumption = document.createElement("p")
        // consumption.innerText = `${this.servings} servings`;
        consumption.innerText = `Consumption: ${this.consumption}`
        newProduct!.appendChild(consumption)
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

let consumption = document.createElement("input")
consumption.id = "consumption"    
consumption.setAttribute("name","inputBox")
consumption.placeholder = "consumption";
inputs!.appendChild(consumption)

let addButton = document.createElement("button")
addButton.addEventListener("click", createProduct)
addButton.innerText = "Add"
inputs!.appendChild(addButton)

let products:Product[] = []

let prd = JSON.parse(localStorage.products)
for(let i = 0;i < prd.length;i++){
    products.push(new Product(prd[i].name,prd[i].price,prd[i].servings,prd[i].consumption))
}

displayProducts();

function displayProducts(){
    for(let i = 0;i < products.length;i++){
        products[i].render();
    }
}

function createProduct(){

    let newProductName = (<HTMLInputElement>document.getElementById("productName")).value
    let newPrice:number = parseInt((<HTMLInputElement>document.getElementById("price")).value)
    let newServings:number = parseInt((<HTMLInputElement>document.getElementById("servings")).value)

    let newItem = new Product(newProductName,newPrice,newServings,0)
    products.push(newItem)

    saveProduct()
    displayProducts()
}

function saveProduct(){
    let productString=JSON.stringify(products)
    localStorage.setItem("products", productString)
}

//teacher's consumption per day - coffee,  tea, milk, sugar, days per term
let consumptionInputs = document.getElementById("consumptionInputs")

// let teacherCoffee = document.createElement("input");
// teacherCoffee.id = "coffee"
// teacherCoffee.setAttribute("coffee","inputBox")
// teacherCoffee.placeholder = "Coffee Consumption";
// consumption!.appendChild(teacherCoffee);

// let tea = document.createElement("input");
// tea.id = "tea"
// tea.setAttribute("tea","inputBox")
// tea.placeholder = "Tea Consumption";
// consumption!.appendChild(tea);

// let milk = document.createElement("input");
// milk.id = "milk"
// milk.setAttribute("milk","inputBox")
// milk.placeholder = "Milk Consumption";
// consumption!.appendChild(milk);

// let sugar = document.createElement("input");
// sugar.id = "sugar"
// sugar.setAttribute("sugar","inputBox")
// sugar.placeholder = "Sugar Consumption";
// consumption!.appendChild(sugar);


let daysPerTerm = document.createElement("input");
daysPerTerm.id = "days"
daysPerTerm.setAttribute("days","inputBox")
daysPerTerm.placeholder = "Days Per Term";
consumptionInputs!.appendChild(daysPerTerm);
let bottomLine = document.createElement("h2")
document.body.appendChild(bottomLine)

let calculateButton= document.createElement("button")
calculateButton.innerText="Calculate"
consumptionInputs?.appendChild(calculateButton)
calculateButton.addEventListener("click",function(){bottomLine.innerText=calculateTheCost().toString()})

function calculateTheCost(){

    let totalCost = 0
    let daysValue = parseInt((<HTMLInputElement>document.getElementById("days"))!.value)
    for(let i = 0;i < products.length;i++){
        let consumption = products[i].consumption
        let cost:number = (products[i].price/products[i].servings) * daysValue * products[i].consumption
        totalCost += cost
    }
    return totalCost
}