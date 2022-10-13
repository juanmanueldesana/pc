import { HTMLTextInputElement } from "../../types/gwTypes";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare class GwDateInfo {
    private static infoCounter;
    readonly uuid: string;
    readonly $input: JQuery;
    readonly inputEl: HTMLTextInputElement;
    readonly $inputParent: JQuery;
    readonly dateIconEl: HTMLDivElement;
    currentDay: number;
    currentMonth: number;
    currentYear: number;
    selectedDay: number;
    selectedMonth: number;
    selectedYear: number;
    drawMonth: number;
    drawYear: number;
    isJIC: boolean;
    eraYear: number;
    lastVal: string | null;
    disableDaysAfter: number | null;
    disableDaysBefore: number | null;
    disableTestFoundDate1: number;
    constructor(inputEl: HTMLTextInputElement);
}
