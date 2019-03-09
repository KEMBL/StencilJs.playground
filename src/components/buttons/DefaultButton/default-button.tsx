import { Component, Prop } from "@stencil/core";
import classNames from "classnames";

declare type ButtonState = "notActive" | "Active";

@Component({
  tag: "default-button",
  styleUrl: "default-button.css",
  shadow: true
})
export class DefaultButton {
  @Prop() className: string;

  // @Prop() buttonState: ButtonState = "notActive";

  buttonState: ButtonState;

  handleClick(event: UIEvent) {
    alert("Received the button click: " + event.type);
  }

  // it is not too good solution to put svg in any Icon but for now it is caused by
  // that issue https://github.com/ionic-team/stencil/issues/1408
  render() {
    const classes = classNames(
      "defaultButton",
      {
        "defaultButton--active": this.buttonState === "Active"
      },
      this.className
    );

    return (
      <button
        onClick={(event: UIEvent) => this.handleClick(event)}
        class={classes}
      >
        <text-tag className="textLine--semiTransparent">
          Add .gitignore:
        </text-tag>{" "}
        <text-tag textStyle={{ "font-weight": "500" }}>None</text-tag>{" "}
        <arrow-icon />
      </button>
    );
  }
}
