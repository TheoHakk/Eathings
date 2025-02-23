import {DayOfEating} from "./dayOfEating";

export class CalenderOfEating {
    daysOfEating: DayOfEating[]

    constructor() {
        this.daysOfEating = []
    }

    addDayOfEating(dayOfEating: DayOfEating) {
        this.daysOfEating.push(dayOfEating)
    }

    getDayOfEating(date: Date) {
        for(let i = 0; i < this.daysOfEating.length; i++) {
            if(this.daysOfEating[i].date == date) {
                return this.daysOfEating[i]
            }
        }
        throw new Error("This date is not in the array")
    }

    changeDayOfEating(date: Date, dayOfEating: DayOfEating) {
        for(let i = 0; i < this.daysOfEating.length; i++) {
            if(this.daysOfEating[i].date == date) {
                this.daysOfEating[i] = dayOfEating
                return
            }
        }
        throw new Error("This date is not in the array")
    }
}