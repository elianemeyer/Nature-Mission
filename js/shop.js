// Class Product

class Product{
    constructor (id, name, price, category, shippingCost) {
        this.id = id;
        this.name = name;
        this.price  = parseFloat(price);
        this.category = category;
        //this.image = image;
        //this.description = description;
        this.shippingCost = shippingCost;
        this.sold = false;
    }
    calculateIVA() {
        this.price = this.price * 0.21;
        console.log("'" + this.name + "' product price with IVA is: €" + this.price);
    }
    addIVA() {
        this.price = this.price + this.price * 0.21;
        console.log("'" + this.name + "' product price with IVA is: €" + this.price);
    }
    totalPrice() {
        this.price = this.price + this.price * 0.21 + this.shippingCost;
        console.log("'" + this.name + "' IVA is: €" + this.price * 0.21);
        console.log("'" + this.name + "' shipping cost is: €" + this.shippingCost);
        console.log("'" + this.name + "' total product price with shipping cost and IVA is: €" + this.price);
    }
    purchase() {
        this.sold = true;
        console.log("The product '" + this.name + "' has been purchased.");
    }
}

// Products 

// Canvas
const tigre      = new Product(0, "Tigre", 250, "canvas", 0);
const margaritas = new Product(1, "Margaritas", 135, "canvas", 0);
const mandalas   = new Product(2, "Mandalas", 185, "canvas", 0);
const cienpies   = new Product(3, "Cienpiés", 135, "canvas", 0);
const circulo    = new Product(4, "Círculo", 155, "canvas", 0);
const atardecer  = new Product(5, "Atardecer", 185, "canvas", 0);

// Deco
const cushion        = new Product(6, "Cushion", 95, "deco", 0);
const cushionMandala = new Product(7, "Cushion Mandala", 115, "deco", 0);

// Clothing
const tShirt1 = new Product(8, "T-shirt 1", 50, "clothing", 0);
const tShirt2 = new Product(9, "T-shirt 2", 50, "clothing", 0);
const tShirt3 = new Product(10, "T-shirt 3", 50, "clothing", 0);
const hut     = new Product(11, "Hut", 65, "clothing", 0);

// Products array by category

const canvas = ["Tigre" , "Margaritas" , "Mandalas" , "Cienpiés" , "Círculo" , "Atardecer"];
const deco = ["Cushion" , "Cushion Mandala"];
const clothing= ["T-shirt 1" , "T-shirt 2" , "T-shirt 3" , "Hut"];
/*
console.log("All canvas products are: " + canvas);
console.log("All deco products are: " + deco);
console.log("All clothing products are: " + clothing);
*/


// New array with all products

let allProds = canvas.concat(deco).concat(clothing);

/*
console.log( allProds );
*/

// Quantity by category 
/*
let cantCanvas = canvas.length;
let cantDeco = deco.length;
let cantClothing = clothing.length;

console.log( 'Total quantity of canvas products: ' + cantCanvas + '\nTotal quantity of  deco products: ' +   cantDeco + '\nTotal quantity of clothing products: ' + cantClothing);
*/

// Total quantity of products
/*
let quantityAllProd = allProds.length;

console.log( 'Total quantity of products: ' + quantityAllProd );
*/

// "Shopping Cart" functions

/*
// Calculate IVA
tigre.addIVA();

// Purchased product
cienpies.purchase();

// Show detailed total product price
hut.totalPrice(); 
*/


// Promo 10%OFF

function promo1() {

    for (let i = 0; i < 1; i++) {   
        let quantityProds = parseInt(prompt("How many products are you buying? \nUse numbers")); 

        // 0 Products
        if (quantityProds == 0){
            alert("That's good, just buy what you really like. \n I hope you find something you love from my shop next time :)");
        }
        
        // 1 Product
        else if (quantityProds == 1){ 
            alert("Pss! You can access to a 10% OFF if you buy 2 or more products.");
        }
        
        // More than 1 Product
        else if (quantityProds > 1){ 
            let totalProds = parseInt(prompt("Cool! Buying " + quantityProds + " products you have a 10% OFF! \n" + "How much is the total of your shop?"));      
            let totalProdsOff = totalProds * 0.9
        
            alert("The total with the disccount is $" + totalProdsOff + " Enjoy :)");
        }    
        else {
            alert("Try again answering just with numbers, please! ;)");
        }   
    }     

}
//promo1();


/* Billing Information Form */

let userName    = document.getElementById("billName");
let userEmail   = document.getElementById("billEmail");
let userAddress = document.getElementById("billAddress");
let userZip     = document.getElementById("billZip");
let userCity    = document.getElementById("billCity");
let userCountry = document.getElementById("billCountry");

// Save info in local storage
const btnSaveBillInfo = document.getElementById("save-billing-info");

btnSaveBillInfo.addEventListener("click", saveInfo)

function saveInfo(e){
    e.preventDefault();
    const userInfo = [userName.value, userEmail.value, userAddress.value, userZip.value, userCity.value, userCountry.value];
    const userInfoJSON = localStorage.setItem('infoUser', userInfo);

    console.log(userInfo)
}

// Show info in DOM

const userDetails = document.getElementById("detail-billing-info");

btnSaveBillInfo.addEventListener("click", showInfo)

function showInfo(e){
    e.preventDefault();
    userDetails.innerHTML = "<h4>Your billing information is: </h4><br/><ul><li>Name: " +userName.value+ "<li>E-mail: " +userEmail.value+ "</li><li>Address: " +userAddress.value+ "</li><li>ZIP Code: " +userZip.value+ "</li><li>City: " +userCity.value+ "</li><li>Country: " +userCountry.value+ "</li></ul>";
}

// Delete info local storage & DOM

const btnDeleteBillInfo = document.getElementById("delete-billing-info");

btnDeleteBillInfo.addEventListener("click", deleteInfo)

function deleteInfo(e){ 
    userDetails.innerHTML = "";
    localStorage.clear()
    //location.reload();
}
