// Promoción 10%OFF

function promo1() {

    let cantProductos = parseInt(prompt("How many products are you buying? \nUse numbers")); 

        // 0 Productos
        if (cantProductos == 0){
            alert("That's good, just buy what you really like. \n I hope you find something you love from my shop next time :)");
        }
        
        // 1 Producto
        else if (cantProductos == 1){ 
            alert("Thank you! :) \n Pss! You can access to a 10% OFF if you buy 2 or more products.");
        }
        
        // Más de 1 Producto
        else if (cantProductos > 1){ 
            let totalProd = parseInt(prompt("Cool! Buying " + cantProductos + " products you have a 10% OFF! \n" + "How much is the total of your shop?"));      
            let totalProdDesc = totalProd * 0.9
        
            alert("The total with the disccount is $" + totalProdDesc + " Enjoy :)");
        }    
        else {
            alert("Refresh the page and try again answering just with numbers, please! ;)");
        }        

}

promo1();
