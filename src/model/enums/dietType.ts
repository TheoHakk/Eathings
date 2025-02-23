// purpose : Enum for meal type (vegan, vegetarian, etc.)
export enum DietType {
    VEGAN = "Vegan",
    VEGETARIAN = "Vegetarian",
    PESCETARIAN = "Pescetarian",
    FLEXITARIAN = "Flexitarian",
    OMNIVORE = "Omnivore"
}

// To have the translation of the enum value
export const MealTypeTranslations: Record<DietType, string> = {
    [DietType.VEGAN]: "Végétalien",
    [DietType.VEGETARIAN]: "Végétarien",
    [DietType.PESCETARIAN]: "Pescétarien",
    [DietType.FLEXITARIAN]: "Flexitarien",
    [DietType.OMNIVORE]: "Omnivore"
};