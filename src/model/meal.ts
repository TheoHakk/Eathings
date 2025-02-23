import {Recipe} from "./recipe";

export class Meal {
    recipe: Recipe; // Recipe of the meal
    numberOfPeople: number; // Number of people for which the meal is scheduled

    constructor(recipe: Recipe, numberOfPeople: number) {
        this.recipe = recipe;
        this.numberOfPeople = numberOfPeople;
    }
}