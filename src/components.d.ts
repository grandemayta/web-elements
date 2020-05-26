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
<<<<<<< HEAD
    interface WeDivider {
=======
    interface WeChips {
        "isSelectable": boolean;
        "label": string;
        "removeLeft": boolean;
        "removeRight": boolean;
        "srcImgLeft": string;
        "srcImgRight": string;
    }
    interface WeChipsGroup {
>>>>>>> develop
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
    interface WeTextarea {
        "autofocus": boolean;
        "cols": any;
        "disabled": boolean;
        "maxlength": number;
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "row": any;
        "text": string;
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
<<<<<<< HEAD
    interface HTMLWeDividerElement extends Components.WeDivider, HTMLStencilElement {
    }
    var HTMLWeDividerElement: {
        prototype: HTMLWeDividerElement;
        new (): HTMLWeDividerElement;
=======
    interface HTMLWeChipsElement extends Components.WeChips, HTMLStencilElement {
    }
    var HTMLWeChipsElement: {
        prototype: HTMLWeChipsElement;
        new (): HTMLWeChipsElement;
    };
    interface HTMLWeChipsGroupElement extends Components.WeChipsGroup, HTMLStencilElement {
    }
    var HTMLWeChipsGroupElement: {
        prototype: HTMLWeChipsGroupElement;
        new (): HTMLWeChipsGroupElement;
>>>>>>> develop
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
    interface HTMLWeTextareaElement extends Components.WeTextarea, HTMLStencilElement {
    }
    var HTMLWeTextareaElement: {
        prototype: HTMLWeTextareaElement;
        new (): HTMLWeTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "we-accordion": HTMLWeAccordionElement;
        "we-accordion-group": HTMLWeAccordionGroupElement;
        "we-checkbox": HTMLWeCheckboxElement;
        "we-checkbox-group": HTMLWeCheckboxGroupElement;
<<<<<<< HEAD
        "we-divider": HTMLWeDividerElement;
=======
        "we-chips": HTMLWeChipsElement;
        "we-chips-group": HTMLWeChipsGroupElement;
>>>>>>> develop
        "we-radio": HTMLWeRadioElement;
        "we-radio-group": HTMLWeRadioGroupElement;
        "we-slider": HTMLWeSliderElement;
        "we-textarea": HTMLWeTextareaElement;
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
<<<<<<< HEAD
    interface WeDivider {
=======
    interface WeChips {
        "isSelectable"?: boolean;
        "label"?: string;
        "onRemoveCallback"?: (event: CustomEvent<any>) => void;
        "onSelectCallback"?: (event: CustomEvent<any>) => void;
        "removeLeft"?: boolean;
        "removeRight"?: boolean;
        "srcImgLeft"?: string;
        "srcImgRight"?: string;
    }
    interface WeChipsGroup {
>>>>>>> develop
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
    interface WeTextarea {
        "autofocus"?: boolean;
        "cols"?: any;
        "disabled"?: boolean;
        "maxlength"?: number;
        "name"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "row"?: any;
        "text"?: string;
    }
    interface IntrinsicElements {
        "we-accordion": WeAccordion;
        "we-accordion-group": WeAccordionGroup;
        "we-checkbox": WeCheckbox;
        "we-checkbox-group": WeCheckboxGroup;
<<<<<<< HEAD
        "we-divider": WeDivider;
=======
        "we-chips": WeChips;
        "we-chips-group": WeChipsGroup;
>>>>>>> develop
        "we-radio": WeRadio;
        "we-radio-group": WeRadioGroup;
        "we-slider": WeSlider;
        "we-textarea": WeTextarea;
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
<<<<<<< HEAD
            "we-divider": LocalJSX.WeDivider & JSXBase.HTMLAttributes<HTMLWeDividerElement>;
=======
            "we-chips": LocalJSX.WeChips & JSXBase.HTMLAttributes<HTMLWeChipsElement>;
            "we-chips-group": LocalJSX.WeChipsGroup & JSXBase.HTMLAttributes<HTMLWeChipsGroupElement>;
>>>>>>> develop
            "we-radio": LocalJSX.WeRadio & JSXBase.HTMLAttributes<HTMLWeRadioElement>;
            "we-radio-group": LocalJSX.WeRadioGroup & JSXBase.HTMLAttributes<HTMLWeRadioGroupElement>;
            "we-slider": LocalJSX.WeSlider & JSXBase.HTMLAttributes<HTMLWeSliderElement>;
            "we-textarea": LocalJSX.WeTextarea & JSXBase.HTMLAttributes<HTMLWeTextareaElement>;
        }
    }
}
