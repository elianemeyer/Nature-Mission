import { prodDiv } from "./shop.js"

// SHOP CART

export const shopCart = [];

const cartIconMenu = document.getElementById("prodsInCart");
const numProdCart = "0";


// Products in cart in menu
const numProdCartLocal = localStorage.setItem("numProdCart", numProdCart);

function showProdCartMenu(){
    cartIconMenu.innerHTML = `<span>${numProdCartLocal}</span>`;
}

showProdCartMenu();


// Add to cart function

prodDiv.addEventListener("click", addToCart);

function addToCart(e){

    e.preventDefault();

    //Get clicked element
    let clickedProd = e.target
    let idclickedProd = e.target.id
    let nameClickedProd = e.target.name

    if (clickedProd.tagName === "BUTTON") {
        shopCart.push(idclickedProd); 

        localStorage.setItem("shopCart", shopCart);

        const numProdCart = shopCart.length;
        const numProdCartLocal = localStorage.setItem("numProdCart", numProdCart);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${nameClickedProd} product added to shopping cart!`,
            showConfirmButton: false,
            timer: 1500
          })

        cartIconMenu.innerHTML = `<span>${numProdCart}</span>`;
    }
    console.log(shopCart);
}

