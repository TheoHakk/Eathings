
class Meal {
    dayOfWeek: DayOfWeek; // Day of the week where the meal is scheduled
    periodOfDay: PeriodOfDay; // Period of the day where the meal is scheduled
    recipe: Recipe; // Recipe of the meal
    numberOfPeople: number; // Number of people for which the meal is scheduled
    date: Date; // Date of the meal

    constructor(dayOfWeek: DayOfWeek, periodOfDay: PeriodOfDay, recipe: Recipe, numberOfPeople: number, date: Date) {
        this.dayOfWeek = dayOfWeek;
        this.periodOfDay = periodOfDay;
        this.recipe = recipe;
        this.numberOfPeople = numberOfPeople;
        this.date = date;
    }


}