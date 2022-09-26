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




// Disable buttons of products in card

setTimeout(()=> {
   const prodBtns = document.getElementsByClassName("btn-shop"); //HTMLCollection
   const arrayProdBtns = [].slice.call(prodBtns); //NodeList Array
   const arrayProdBtnsIds = []; //Array of buttons .btn-shop ids

   // Get IDs and add them to array
   for(var i = 0; i < arrayProdBtns.length; i++){ 
           let btnId = arrayProdBtns[i].id
           arrayProdBtnsIds.push(btnId)
    }

   const prodsHide = []; // Array of buttons to hide

   // Buttons have same id as products. So check if button id is in shopCartLocal add it to array of buttons to hide
   for(var i = 0; i < arrayProdBtnsIds.length; i++){ 
        if (shopCartLocal.includes([i])) {
            let btnIds = arrayProdBtnsIds[i]
            prodsHide.push(btnIds)
            
        } else {

        }
    }

    // Look in DOM for buttons with the IDs to hide and add class to hide them
    for(var i = 0; i < prodsHide.length; i++){ 
        let idsButtonHide = prodsHide[i];
        document.getElementById(idsButtonHide).classList.add("d-none");
        console.log("Borrar boton con id: " + idsButtonHide)
     }
    
}, 1000)


// Add to cart function

prodDiv.addEventListener("click", addToCart);

function addToCart(e){

    e.preventDefault();

    //Get clicked element
    let clickedProd = e.target
    let idclickedProd = e.target.id
    let nameClickedProd = e.target.name

    if (clickedProd.tagName === "BUTTON") {

        //Hide button of added to cart product
        clickedProd.style.display = "none";

        //Add product ID to array & local
        shopCart.push(idclickedProd); 
        localStorage.setItem("shopCartLocal", JSON.stringify(shopCart));

        //Update total cart value & local
        const totalProdCart = shopCart.length;
        localStorage.setItem("totalProdCartLocal", JSON.stringify(shopCart.length));

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