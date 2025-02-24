import {Recipe} from "./recipe";
import {PeriodOfDay} from "./enums/periodOfDay";

export class Meal {
    recipe: Recipe; // Recipe of the meal
    numberOfPeople: number; // Number of people for which the meal is scheduled
    periodOfDay : PeriodOfDay; // Period of the day when the meal is scheduled

    constructor(recipe: Recipe, numberOfPeople: number,  periodOfDay: PeriodOfDay) {
        this.recipe = recipe;
        this.numberOfPeople = numberOfPeople;
        this.periodOfDay = periodOfDay;
    }
}