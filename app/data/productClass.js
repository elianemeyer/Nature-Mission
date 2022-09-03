// Class Product

export class Product{
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