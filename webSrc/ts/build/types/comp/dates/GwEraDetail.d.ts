import { GwMap } from "../../types/gwTypes";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare class GwEraDetail {
    readonly name: string;
    readonly order: number;
    readonly delta: number;
    readonly start: Date;
    readonly startYear: number;
    readonly startMonth: number;
    readonly startDay: number;
    readonly total: number;
    constructor(era: GwMap);
}
