// Acciones




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


