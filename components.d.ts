/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ListOption {
    'onOptionSelected': (option: string) => void;
    'option': string;
  }
  interface ListOptionAttributes extends StencilHTMLAttributes {
    'onOptionSelected'?: (option: string) => void;
    'option'?: string;
  }

  interface OptionsList {
    'header': string;
    'onOptionSelected': (option: string) => void;
    'options': string[];
  }
  interface OptionsListAttributes extends StencilHTMLAttributes {
    'header'?: string;
    'onOptionSelected'?: (option: string) => void;
    'options'?: string[];
  }

  interface PopupWindow {
    'isVisible': boolean;
  }
  interface PopupWindowAttributes extends StencilHTMLAttributes {
    'isVisible'?: boolean;
  }

  interface TextTag {
    'cssStyle': { [key: string]: string };
    'semiTransparent': boolean;
    'wrap': boolean;
  }
  interface TextTagAttributes extends StencilHTMLAttributes {
    'cssStyle'?: { [key: string]: string };
    'semiTransparent'?: boolean;
    'wrap'?: boolean;
  }

  interface DefaultButton {
    'onClick': () => void;
  }
  interface DefaultButtonAttributes extends StencilHTMLAttributes {
    'onClick'?: () => void;
  }

  interface ArrowIcon {
    'color': string;
    'cssStyle': { [key: string]: string };
    'height': number;
    'viewBox': string;
    'width': number;
  }
  interface ArrowIconAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'cssStyle'?: { [key: string]: string };
    'height'?: number;
    'viewBox'?: string;
    'width'?: number;
  }

  interface ButtonWithPopup {}
  interface ButtonWithPopupAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'ListOption': Components.ListOption;
    'OptionsList': Components.OptionsList;
    'PopupWindow': Components.PopupWindow;
    'TextTag': Components.TextTag;
    'DefaultButton': Components.DefaultButton;
    'ArrowIcon': Components.ArrowIcon;
    'ButtonWithPopup': Components.ButtonWithPopup;
  }

  interface StencilIntrinsicElements {
    'list-option': Components.ListOptionAttributes;
    'options-list': Components.OptionsListAttributes;
    'popup-window': Components.PopupWindowAttributes;
    'text-tag': Components.TextTagAttributes;
    'default-button': Components.DefaultButtonAttributes;
    'arrow-icon': Components.ArrowIconAttributes;
    'button-with-popup': Components.ButtonWithPopupAttributes;
  }


  interface HTMLListOptionElement extends Components.ListOption, HTMLStencilElement {}
  var HTMLListOptionElement: {
    prototype: HTMLListOptionElement;
    new (): HTMLListOptionElement;
  };

  interface HTMLOptionsListElement extends Components.OptionsList, HTMLStencilElement {}
  var HTMLOptionsListElement: {
    prototype: HTMLOptionsListElement;
    new (): HTMLOptionsListElement;
  };

  interface HTMLPopupWindowElement extends Components.PopupWindow, HTMLStencilElement {}
  var HTMLPopupWindowElement: {
    prototype: HTMLPopupWindowElement;
    new (): HTMLPopupWindowElement;
  };

  interface HTMLTextTagElement extends Components.TextTag, HTMLStencilElement {}
  var HTMLTextTagElement: {
    prototype: HTMLTextTagElement;
    new (): HTMLTextTagElement;
  };

  interface HTMLDefaultButtonElement extends Components.DefaultButton, HTMLStencilElement {}
  var HTMLDefaultButtonElement: {
    prototype: HTMLDefaultButtonElement;
    new (): HTMLDefaultButtonElement;
  };

  interface HTMLArrowIconElement extends Components.ArrowIcon, HTMLStencilElement {}
  var HTMLArrowIconElement: {
    prototype: HTMLArrowIconElement;
    new (): HTMLArrowIconElement;
  };

  interface HTMLButtonWithPopupElement extends Components.ButtonWithPopup, HTMLStencilElement {}
  var HTMLButtonWithPopupElement: {
    prototype: HTMLButtonWithPopupElement;
    new (): HTMLButtonWithPopupElement;
  };

  interface HTMLElementTagNameMap {
    'list-option': HTMLListOptionElement
    'options-list': HTMLOptionsListElement
    'popup-window': HTMLPopupWindowElement
    'text-tag': HTMLTextTagElement
    'default-button': HTMLDefaultButtonElement
    'arrow-icon': HTMLArrowIconElement
    'button-with-popup': HTMLButtonWithPopupElement
  }

  interface ElementTagNameMap {
    'list-option': HTMLListOptionElement;
    'options-list': HTMLOptionsListElement;
    'popup-window': HTMLPopupWindowElement;
    'text-tag': HTMLTextTagElement;
    'default-button': HTMLDefaultButtonElement;
    'arrow-icon': HTMLArrowIconElement;
    'button-with-popup': HTMLButtonWithPopupElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
