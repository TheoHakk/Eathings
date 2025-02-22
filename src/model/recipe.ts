// Purpose: Contains the Recipe class, which represents a recipe in the application.
class Recipe {
    ingredients: Ingredient[]; // List of ingredients
    name: string; // Name of the meal
    photo: string; // URL of the photo of the meal

    constructor(name: string, photo: string, ingredients: Ingredient[]) {
        this.name = name;
        this.photo = photo;
        this.ingredients = ingredients;
    }

    // Returns a string representation of the meal
    toString() {
        return `Meal: ${this.name}\nIngredients: ${this.ingredients.map(ingredient => ingredient.toString()).join(', ')}`;
    }
}
