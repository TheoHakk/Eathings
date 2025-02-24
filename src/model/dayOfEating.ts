import {PeriodOfDay} from "./enums/periodOfDay";
import {Meal} from "./meal";

export class DayOfEating {
    //Creating tuples of PeriodOfDay and Meal
    mealsOfDay: [Meal][]
    date : Date

    constructor(date: Date) {
        this.mealsOfDay = []
        this.date = date
    }

    //Adding a meal to the mealsOfDay array, only if the periodOfDay is not already in the array
    addMeal(meal: Meal) {
        let alreadyMealForPeriod: boolean = false
        for (let i = 0; i < this.mealsOfDay.length; i++) {
            if (this.mealsOfDay[i][0].periodOfDay == meal.periodOfDay) {
                alreadyMealForPeriod = true
            }
        }
        if (!alreadyMealForPeriod) {
            this.mealsOfDay.push([meal])
        }
    }

    getMeal(periodOfDay: PeriodOfDay) {
        for(let i = 0; i < this.mealsOfDay.length; i++) {
            if (this.mealsOfDay[i][0].periodOfDay == periodOfDay) {
                return this.mealsOfDay[i]
            }
        }
        throw new Error("This period of the day is not in the array")
    }
}