// Purpose: Defines the Ingredient class, which represents an ingredient in a recipe (meal).
class Ingredient {
    name: string; // Name of the ingredient
    photo: string; // URL of the photo of the ingredient
    quantity: number; // Quantity of the ingredient
    quantityType: QuantityType; // Defines the type of quantity (grams, liters, pieces)


    // Constructor for the Ingredient class
    constructor(name: string, photo: string, quantity: number, quantityType: QuantityType) {
        this.name = name;
        this.photo = photo;
        this.quantity = quantity;
        this.quantityType = quantityType;
    }

    // Returns a string representation of the ingredient
    toString() {
        return `${this.quantity} ${QuantityType[this.quantityType]} of ${this.name}`;
    }
}