import {PeriodOfDay} from "./enums/periodOfDay";
import {Meal} from "./meal";

export class DayOfEating {
    //Creating tuples of PeriodOfDay and Meal
    mealsOfDay: [PeriodOfDay, Meal][]
    date: Date

    constructor(date: Date) {
        this.mealsOfDay = []
        this.date = date
    }

    //Adding a meal to the mealsOfDay array, only if the periodOfDay is not already in the array
    addMeal(periodOfDay: PeriodOfDay, meal: Meal) {
        for (let i = 0; i < this.mealsOfDay.length; i++) {
            if(this.mealsOfDay[i][0] == periodOfDay) {
                this.mealsOfDay[i][1] = meal
                return
            } else {
                throw new Error("This period of the day is already taken")
            }
        }
    }

    getMeal(periodOfDay: PeriodOfDay) {
        for(let i = 0; i < this.mealsOfDay.length; i++) {
            if(this.mealsOfDay[i][0] == periodOfDay) {
                return this.mealsOfDay[i][1]
            }
        }
        throw new Error("This period of the day is not in the array")
    }

    changeMeal(periodOfDay: PeriodOfDay, meal: Meal) {
        for(let i = 0; i < this.mealsOfDay.length; i++) {
            if(this.mealsOfDay[i][0] == periodOfDay) {
                this.mealsOfDay[i][1] = meal
                return
            }
        }
        throw new Error("This period of the day is not in the array")
    }





}