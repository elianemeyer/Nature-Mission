// Class Product

class Product{
    constructor (id, name, price, category, shippingCost, description, image) {
        this.id = id;
        this.name = name;
        this.price  = parseFloat(price);
        this.category = category;
        this.shippingCost = shippingCost;
        this.description = description;
        this.image = image;
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

export const products = [];

// Canvas
const tigre      = new Product(0, "Tigre", 250, "canvas", 0, "", "lienzo-tigre.jpg");
products.push(tigre);

const margaritas = new Product(1, "Margaritas", 135, "canvas", 0, "", "lienzo-margaritas.jpg" );
products.push(margaritas);

const mandalas   = new Product(2, "Mandalas", 185, "canvas", 0, "", "lienzo-mandalas.jpg");
products.push(mandalas);

const cienpies   = new Product(3, "Cienpiés", 135, "canvas", 0, "", "lienzo-cienpies.jpg");
products.push(cienpies);

const circulo    = new Product(4, "Círculo", 155, "canvas", 0, "", "lienzo-circulo.jpg");
products.push(circulo);

const atardecer  = new Product(5, "Atardecer", 185, "canvas", 0, "", "lienzo-hojas-agua.jpg");
products.push(atardecer);

// Deco
const cushion        = new Product(6, "Cushion", 95, "deco", 0, "", "cojin-hojas.jpg");
products.push(cushion);

const cushionMandala = new Product(7, "Cushion Mandala", 115, "deco", 0, "", "cojin-mandala.jpg");
products.push(cushionMandala);

// Clothing
const tShirt1 = new Product(8, "T-shirt 1", 50, "clothing", 0, "", "camiseta-1.jpg");
products.push(tShirt1);

const tShirt2 = new Product(9, "T-shirt 2", 50, "clothing", 0, "", "camiseta-2.jpg");
products.push(tShirt2);

const tShirt3 = new Product(10, "T-shirt 3", 50, "clothing", 0, "", "camiseta-3.jpg");
products.push(tShirt3);

const hut     = new Product(11, "Hut", 65, "clothing", 0, "", "sombrero.jpg");
products.push(hut);

//console.log( products );

// Products array by category
/*
const canvas = ["Tigre" , "Margaritas" , "Mandalas" , "Cienpiés" , "Círculo" , "Atardecer"];
const deco = ["Cushion" , "Cushion Mandala"];
const clothing= ["T-shirt 1" , "T-shirt 2" , "T-shirt 3" , "Hut"];

console.log("All canvas products are: " + canvas);
console.log("All deco products are: " + deco);
console.log("All clothing products are: " + clothing);


// New array with all products

const allProdsByCat = canvas.concat(deco).concat(clothing);

//console.log( allProdsByCat );
*/



// Save all products in localStorage and stringify (-> JSON)

const productsLocal = (key, value) => { localStorage.setItem(key, value) }
productsLocal("jsonProducts", JSON.stringify(products));

// Parse JSON products

export const productsList = JSON.parse(localStorage.getItem("jsonProducts"));

// Show products dynamically in DOM

const prodDiv = document.getElementById("products");

for (const product of productsList) {

    //HTML for each product added - Warning!! Use += 
    prodDiv.innerHTML += `<!--Grid column-->
                            <div class="col-lg-3 col-md-6 mb-4">
                               <!--Card-->
                               <div class="card product-item" id="prod-${product.id}">
                                  <!--Card image-->
                                  <div class="product-image-container">
                                     <img src="./img/shop/${product.image}" class="product-image card-img-top" alt="">
                                  </div>
                                  <!--Card image-->
                                  <!--Card content-->
                                  <div class="card-body text-center">
                                     <!--Category & Title-->
                                     <a href="" class="grey-text">
                                        <strong>
                                           <h5 class="product-name">${product.name}</h5>
                                        </strong>
                                     </a>
                                     <h5 class="small product-description">
                                        <a href="" class="text-muted">Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art</a>
                                     </h5>
                                     <h4 class="product-price">
                                        €${product.price}               
                                     </h4>
                                     <button id="${product.id}" name="${product.name}" class="btn btn-sm btn-azul"><i class="fa fa-shopping-cart"></i> Add to cart</button>
                                  </div>
                                  <!--Card content-->
                               </div>
                               <!--Card-->
                            </div>
                            <!--Grid column-->`;
}

/*
// Delete products local storage button for testing

const btnDeleteStorage = document.getElementById("cleanStorage");

btnDeleteStorage.addEventListener("click", deleteStorage)

function deleteStorage(e){ 
    localStorage.clear()
    location.reload();
}
*/

// Shop Cart

export const shopCart = [];
const cartAlertsDiv = document.getElementById("cartAlerts");
const cartIconMenu = document.getElementById("prodsInCart");
// Add to cart function

prodDiv.addEventListener("click", addToCart);

function addToCart(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let clickedProd = e.target
    let idclickedProd = e.target.id
    let nameClickedProd = e.target.name

    if (clickedProd.tagName === "BUTTON") {
        shopCart.push(idclickedProd); 

        const cantprodCart = shopCart.length;
        
    cartAlertsDiv.innerHTML += `<div class="alert alert-primary fade show" role="alert">
    ${nameClickedProd} product added to shopping cart!
  </div>`;

    cartIconMenu.innerHTML = `<span>${cantprodCart}</span>
    </div>`;
    }
    console.log(shopCart);
}


/*
//var div = document.getElementById("parent"); OSEA ESTE SERIA EL CONTENEDOR DE LOS PRODUCTOS QUE YA LO DECLARÉ

prodDiv.addEventListener("click", function(event) {
  var btnAddToCartProd = event.target;
  // here you can get el.id and el.name and do whatever you want
  if (btnAddToCartProd.tagName.toLowerCase() === "select")
    alert(btnAddToCartProd.id);
});
*/

/*
// Quantity by category 

let cantCanvas = canvas.length;
let cantDeco = deco.length;
let cantClothing = clothing.length;

console.log( 'Total quantity of canvas products: ' + cantCanvas + '\nTotal quantity of  deco products: ' +   cantDeco + '\nTotal quantity of clothing products: ' + cantClothing);


// Total quantity of products

let quantityAllProd = allProdsByCat.length;

console.log( 'Total quantity of products: ' + quantityAllProd );


// "Shopping Cart" functions


// Calculate IVA
tigre.addIVA();

// Purchased product
cienpies.purchase();

// Show detailed total product price
hut.totalPrice(); 

*/
