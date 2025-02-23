//Purpose: Enum for the food types.
export enum FoodCategory {
    GRAINS = "Grains",
    FRUITS = "Fruits",
    VEGETABLES = "Vegetables",
    MEAT = "Meat",
    SEAFOOD = "Seafood",
    DAIRY = "Dairy",
    NUTS_AND_SEEDS = "Nuts and Seeds",
    LEGUMES = "Legumes",
    SWEETS = "Sweets",
    BEVERAGES = "Beverages",
    OILS_AND_FATS = "Oils and Fats",
    SPICES_AND_HERBS = "Spices and Herbs",
}

// To have the translation of the enum value
export const FoodCategoryTranslations: Record<FoodCategory, string> = {
    [FoodCategory.GRAINS]: "Féculents",
    [FoodCategory.FRUITS]: "Fruits",
    [FoodCategory.VEGETABLES]: "Légumes",
    [FoodCategory.MEAT]: "Viande",
    [FoodCategory.SEAFOOD]: "Fruits de mer",
    [FoodCategory.DAIRY]: "Produits laitiers",
    [FoodCategory.NUTS_AND_SEEDS]: "Noix et graines",
    [FoodCategory.LEGUMES]: "Légumineuses",
    [FoodCategory.SWEETS]: "Produits sucrés",
    [FoodCategory.BEVERAGES]: "Boissons",
    [FoodCategory.OILS_AND_FATS]: "Huiles et matières grasses",
    [FoodCategory.SPICES_AND_HERBS]: "Épices et herbes",
};

