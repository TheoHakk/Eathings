//Define how the quantity is measured
export enum QuantityType {
    GRAMS = 1,
    LITERS = 2,
    PIECES = 3
}

// To have the translation of the enum value
export const QuantityTypeTranslations: Record<QuantityType, string> = {
    [QuantityType.GRAMS]: "Grammes",
    [QuantityType.LITERS]: "Litres",
    [QuantityType.PIECES]: "Pièces"
};