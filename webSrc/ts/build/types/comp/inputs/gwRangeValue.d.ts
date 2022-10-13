import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
import { GwClassIdTagOrNode, GwDomNode, GwMap } from "../../types/gwTypes";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare class GwRangeValue extends GwRegisteredSystem {
    getSystemName(): string;
    private getShuttleBoxInputs(classIdTagOrNode);
    private updateHidden(shuttleBoxInfo, node, selectedState);
    setOptions(widget: GwDomNode, options: GwMap[]): void;
    isMultiple(classIdTagOrNode: GwClassIdTagOrNode): boolean;
    private updateButtons(shuttleBoxInfo);
    moveRight(buttonEl: GwDomNode): void;
    moveLeft(buttonEl: GwDomNode): void;
    private needsRefresh(classIdTagOrNode);
}
export declare const gwRangeValue: GwRangeValue;
