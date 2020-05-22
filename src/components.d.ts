/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WeAccordion {
        "open": boolean;
    }
    interface WeAccordionGroup {
        "multiple": boolean;
    }
    interface WeCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "value": string;
    }
    interface WeCheckboxGroup {
        "changeCallback": any;
        "name": any;
    }
    interface WeRadio {
        "checked": boolean;
        "disabled": boolean;
        "value": string;
    }
    interface WeRadioGroup {
        "changeCallback": any;
        "name": string;
    }
    interface WeSlider {
        "disabled": boolean;
        "max": number;
        "min": number;
        "onChange": any;
        "value": number;
    }
}
declare global {
    interface HTMLWeAccordionElement extends Components.WeAccordion, HTMLStencilElement {
    }
    var HTMLWeAccordionElement: {
        prototype: HTMLWeAccordionElement;
        new (): HTMLWeAccordionElement;
    };
    interface HTMLWeAccordionGroupElement extends Components.WeAccordionGroup, HTMLStencilElement {
    }
    var HTMLWeAccordionGroupElement: {
        prototype: HTMLWeAccordionGroupElement;
        new (): HTMLWeAccordionGroupElement;
    };
    interface HTMLWeCheckboxElement extends Components.WeCheckbox, HTMLStencilElement {
    }
    var HTMLWeCheckboxElement: {
        prototype: HTMLWeCheckboxElement;
        new (): HTMLWeCheckboxElement;
    };
    interface HTMLWeCheckboxGroupElement extends Components.WeCheckboxGroup, HTMLStencilElement {
    }
    var HTMLWeCheckboxGroupElement: {
        prototype: HTMLWeCheckboxGroupElement;
        new (): HTMLWeCheckboxGroupElement;
    };
    interface HTMLWeRadioElement extends Components.WeRadio, HTMLStencilElement {
    }
    var HTMLWeRadioElement: {
        prototype: HTMLWeRadioElement;
        new (): HTMLWeRadioElement;
    };
    interface HTMLWeRadioGroupElement extends Components.WeRadioGroup, HTMLStencilElement {
    }
    var HTMLWeRadioGroupElement: {
        prototype: HTMLWeRadioGroupElement;
        new (): HTMLWeRadioGroupElement;
    };
    interface HTMLWeSliderElement extends Components.WeSlider, HTMLStencilElement {
    }
    var HTMLWeSliderElement: {
        prototype: HTMLWeSliderElement;
        new (): HTMLWeSliderElement;
    };
    interface HTMLElementTagNameMap {
        "we-accordion": HTMLWeAccordionElement;
        "we-accordion-group": HTMLWeAccordionGroupElement;
        "we-checkbox": HTMLWeCheckboxElement;
        "we-checkbox-group": HTMLWeCheckboxGroupElement;
        "we-radio": HTMLWeRadioElement;
        "we-radio-group": HTMLWeRadioGroupElement;
        "we-slider": HTMLWeSliderElement;
    }
}
declare namespace LocalJSX {
    interface WeAccordion {
        "onAccordionCallback"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
    }
    interface WeAccordionGroup {
        "multiple"?: boolean;
    }
    interface WeCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onCheckboxCallback"?: (event: CustomEvent<any>) => void;
        "value": string;
    }
    interface WeCheckboxGroup {
        "changeCallback"?: any;
        "name": any;
    }
    interface WeRadio {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onRadioCallback"?: (event: CustomEvent<any>) => void;
        "value": string;
    }
    interface WeRadioGroup {
        "changeCallback"?: any;
        "name": string;
    }
    interface WeSlider {
        "disabled"?: boolean;
        "max"?: number;
        "min"?: number;
        "onChange"?: any;
        "value"?: number;
    }
    interface IntrinsicElements {
        "we-accordion": WeAccordion;
        "we-accordion-group": WeAccordionGroup;
        "we-checkbox": WeCheckbox;
        "we-checkbox-group": WeCheckboxGroup;
        "we-radio": WeRadio;
        "we-radio-group": WeRadioGroup;
        "we-slider": WeSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "we-accordion": LocalJSX.WeAccordion & JSXBase.HTMLAttributes<HTMLWeAccordionElement>;
            "we-accordion-group": LocalJSX.WeAccordionGroup & JSXBase.HTMLAttributes<HTMLWeAccordionGroupElement>;
            "we-checkbox": LocalJSX.WeCheckbox & JSXBase.HTMLAttributes<HTMLWeCheckboxElement>;
            "we-checkbox-group": LocalJSX.WeCheckboxGroup & JSXBase.HTMLAttributes<HTMLWeCheckboxGroupElement>;
            "we-radio": LocalJSX.WeRadio & JSXBase.HTMLAttributes<HTMLWeRadioElement>;
            "we-radio-group": LocalJSX.WeRadioGroup & JSXBase.HTMLAttributes<HTMLWeRadioGroupElement>;
            "we-slider": LocalJSX.WeSlider & JSXBase.HTMLAttributes<HTMLWeSliderElement>;
        }
    }
}
