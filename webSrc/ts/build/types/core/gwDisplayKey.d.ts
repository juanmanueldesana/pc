import { GwOrderDependentInitializableSystem } from "./util/GwOrderDependentInitializableSystem";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare class GwDisplayKey extends GwOrderDependentInitializableSystem {
    getSystemName(): string;
    languageCode: string | null;
    orderSpecificInit(): void;
    get(key: string, ...varArgs: any[]): string;
}
export declare const gwDisplayKey: GwDisplayKey;
