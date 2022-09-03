import { Product } from "./data/productClass.js"


export const products = [];


export const prodDiv = document.getElementById("products")


// Ask for Products

const askProducts = async () => {
    const resp = await fetch('app/data/data.JSON')
    const data = await resp.json() // Parsear
   
    data.forEach((product) => {
        
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
    })

    products.push(data);
}

askProducts()

console.log(products)