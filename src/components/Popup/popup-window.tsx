import { Component, Prop } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "popup-window",
  styleUrl: "popup-window.css",
  shadow: true
})
export class PopupWindow {
  @Prop() className: string;
  @Prop() isVisible: boolean;

  render() {
    const classes = classNames(
      "popupWindow",
      {
        "popupWindow--visible": this.isVisible
      },
      this.className
    );

    return (
      <div class={classes}>
        <slot />
      </div>
    );
  }
}
