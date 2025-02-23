//Purpose : Define the enum for the period of the day where we could have a meal

export enum PeriodOfDay {
    BREAKFAST = 1,
    LUNCH = 2,
    APERITIF = 3,
    DINNER = 4
}

// To have the translation of the enum value
export const PeriodOfDayTranslations: Record<PeriodOfDay, string> = {
    [PeriodOfDay.BREAKFAST]: "Petit déjeuner",
    [PeriodOfDay.LUNCH]: "Déjeuner",
    [PeriodOfDay.APERITIF]: "Apéritif",
    [PeriodOfDay.DINNER]: "Dîner"
};
