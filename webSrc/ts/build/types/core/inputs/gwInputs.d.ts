import { GwRegisteredSystem } from "../util/GwRegisteredSystem";
import { GwClassIdTagOrNode, GwDomNode, GwInputElement, GwMap, GwTypedMap, GwValueWidgetElement, HTMLCheckboxElement, HTMLCheckboxOrRadioElement, HTMLRadioElement, HTMLTextInputElement } from "../../types/gwTypes";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare type GwInputValue = string[] | string | number | undefined | boolean | null;
export declare class GwInputs extends GwRegisteredSystem {
    getSystemName(): string;
    isReadOnlyValueWidget(valueWidget: GwDomNode): boolean;
    isSelect(el: GwInputElement): el is HTMLSelectElement;
    isCheckbox(el: GwInputElement): el is HTMLCheckboxElement;
    isRadio(el: GwInputElement): el is HTMLRadioElement;
    isCheckboxOrRadio(el: GwInputElement | HTMLOptionElement): el is HTMLCheckboxOrRadioElement;
    isTextInput(el: HTMLElement): el is HTMLTextInputElement;
    isTextInputOrTextArea(el: GwDomNode): el is HTMLTextAreaElement | HTMLTextInputElement;
    getDefaultValueForInputElement(el: GwInputElement): GwInputValue;
    private getSelectSingleDefaultValue(el);
    private getSelectMultipleDefaultValue(el);
    /**
     * Search the page for the input with the given name. If found, return its DOM node. Otherwise return null
     */
    getInputByName(name: string): GwInputElement | null;
    clearInputById(el: GwDomNode, args: GwMap): void;
    /** Exposed as gw.api.Util.getValue, see gw.api */
    getValueById(widgetIdOrElement: string | GwValueWidgetElement): GwInputValue;
    /** Exposed as gw.api.Util.getValues, see gw.api */
    getValuesByIds(ids: string[]): GwInputValue[];
    /** Exposed as gw.api.Util.setValue, see gw.api */
    setValueById(widgetIdOrElement: string | GwDomNode, value: GwInputValue, forceChangeEvent?: boolean): boolean;
    /** Exposed as gw.api.Util.setValues, see gw.api */
    setValuesByIds(valuesById: GwMap, forceChangeEvent?: boolean): boolean;
    getValuesByIdsAsMap(ids: string[]): GwTypedMap<GwInputValue>;
    private validateSetValuesConfig(valuesById);
    private getValueFromReadOnlyValueWidget(valueWidget);
    private getValueFromEditableTextInputWidget(valueWidget);
    private getValueFromEditableSelectWidget(valueWidget);
    private getValuesFromEditableMultiSelectWidget(valueWidget);
    private getCheckedFromEditableCheckboxWidget(valueWidget);
    private getValuesFromEditableCheckboxGroupWidget(valueWidget);
    private getCheckedFromEditableRadioWidget(valueWidget);
    private getValueFromEditableDateWidget(valueWidget);
    private getValueFromEditableFileWidget(valueWidget);
    private getCheckedFromEditableRadioAsCheckboxWidget(valueWidget);
    private setValueForReadonlyWidget(valueWidget, val);
    private setValueForEditableTextInputWidget(valueWidget, value, fireChangeEvent?);
    private setValueForEditableSelectWidget(valueWidget, value, fireChangeEvent?);
    private setValuesForEditableMultiSelectWidget(valueWidget, value, fireChangeEvent?);
    private setCheckedForEditableCheckboxWidget(valueWidget, checked, fireChangeEvent?);
    private setValuesForEditableCheckboxGroupWidget(valueWidget, values, fireChangeEvent?);
    private setValueForEditableRadioWidget(valueWidget, value, fireChangeEvent?);
    private setValueForEditableDateWidget(valueWidget, value, fireChangeEvent?);
    private setValueForEditableFileWidget(valueWidget, value, fireChangeEvent?);
    private setCheckedForEditableRadioAsCheckboxWidget(valueWidget, checked, fireChangeEvent?);
    private setValueForPrivacyWidget(valueWidget, value, fireChangeEvent?);
    setValueOnTextInputElement(el: HTMLTextInputElement | HTMLTextAreaElement, val: string | null, cursorPos?: number, fireChangeEvent?: boolean, notificationSystemToIgnore?: string | null): boolean;
    setValueOnSelect(classIdTagOrNode: GwClassIdTagOrNode, valStr: string | string[], fireChangeEvent?: boolean): boolean;
    setValuesOnMultiSelect(el: HTMLSelectElement, values: string[] | string, fireChangeEvent?: boolean): boolean;
    enableRangeRadio(widgetEl: GwDomNode, enabled?: boolean): void;
    enableCheckboxGroup(widgetEl: GwDomNode, enabled?: boolean): void;
}
export declare const gwInputs: GwInputs;
