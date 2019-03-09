/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ArrowIcon {
    'color': string;
    'height': number;
    'viewBox': string;
    'width': number;
  }
  interface ArrowIconAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'height'?: number;
    'viewBox'?: string;
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ArrowIcon': Components.ArrowIcon;
  }

  interface StencilIntrinsicElements {
    'arrow-icon': Components.ArrowIconAttributes;
  }


  interface HTMLArrowIconElement extends Components.ArrowIcon, HTMLStencilElement {}
  var HTMLArrowIconElement: {
    prototype: HTMLArrowIconElement;
    new (): HTMLArrowIconElement;
  };

  interface HTMLElementTagNameMap {
    'arrow-icon': HTMLArrowIconElement
  }

  interface ElementTagNameMap {
    'arrow-icon': HTMLArrowIconElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
