import { prodDiv } from "./shop.js"

// SHOP CART

export const shopCart = JSON.parse(localStorage.getItem("shopCartLocal")) || [];
export const shopCartLocal = localStorage.getItem("shopCartLocal", shopCart);
export const shopCartJSON = JSON.stringify(shopCartLocal);

export const totalProdCart = shopCart.length;
export const totalProdCartLocal = localStorage.getItem("totalProdCartLocal", totalProdCart);
export const totalProdCartJSON = JSON.stringify(totalProdCartLocal);

//DOM
const cartIconMenu = document.getElementById("prodsInCart");


// Products in menu cart icon

function showProdCartMenu(){
    cartIconMenu.innerHTML = `<span>${totalProdCart}</span>`;
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

        //Add product ID to array & local
        shopCart.push(idclickedProd); 
        localStorage.setItem("shopCartLocal", JSON.stringify(shopCart));

        //Update total cart value & local
        const totalProdCart = shopCart.length;
        localStorage.setItem("totalProdCartLocal", JSON.stringify(shopCart.length));
        //const totalProdCartJSON = JSON.stringify(totalProdCartLocal);

        // Alert user of product added
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${nameClickedProd} product added to shopping cart!`,
            showConfirmButton: false,
            timer: 1500
          })

        // Show cart lenght in menu shop icon  
        cartIconMenu.innerHTML = `<span>${totalProdCart}</span>`;
    }
}