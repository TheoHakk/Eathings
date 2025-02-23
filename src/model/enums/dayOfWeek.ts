// Purpose: Defines an enum for the days of the week.
export enum DayOfWeek {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

// To have the translation of the enum value
export const DayOfWeekTranslations: Record<DayOfWeek, string> = {
    [DayOfWeek.MONDAY]: "Lundi",
    [DayOfWeek.TUESDAY]: "Mardi",
    [DayOfWeek.WEDNESDAY]: "Mercredi",
    [DayOfWeek.THURSDAY]: "Jeudi",
    [DayOfWeek.FRIDAY]: "Vendredi",
    [DayOfWeek.SATURDAY]: "Samedi",
    [DayOfWeek.SUNDAY]: "Dimanche"
}
