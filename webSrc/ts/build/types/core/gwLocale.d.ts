import { GwOrderDependentInitializableSystem } from "./util/GwOrderDependentInitializableSystem";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare class GwLocale extends GwOrderDependentInitializableSystem {
    getSystemName(): string;
    private localeCode;
    orderSpecificInit(): void;
    getDecimalSymbol(): string;
    getThousandsSymbol(): string;
    getMinWeekdays(): string[];
    getShortWeekdays(): string[];
    getWeekdays(): string[];
    getShortMonths(): string[];
    getMonths(): string[];
    getPeriods(): string[];
}
export declare const gwLocale: GwLocale;
