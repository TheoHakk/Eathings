// Purpose: Contains the Recipe class, which represents a recipe in the application.
import {Ingredient} from "./ingredient";
import {DietType} from "./enums/dietType";

export class Recipe {
    ingredients: Ingredient[]; // List of ingredients
    name: string; // Name of the meal
    photo: string; // URL of the photo of the meal
    dietType: DietType; // Type of diet (vegan, vegetarian, etc.)

    constructor(name: string, photo: string, ingredients: Ingredient[], dietType: DietType) {
        this.name = name;
        this.photo = photo;
        this.ingredients = ingredients;
        this.dietType = dietType;
    }

    // Returns a string representation of the meal
    toString() {
        return `Meal: ${this.name}\n Diet type : ${this.dietType}\n Ingredients: ${this.ingredients.map(ingredient => ingredient.toString()).join(', ')}`;
    }
}
