import { Component, State } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "default-button",
  styleUrl: "default-button.css",
  shadow: true
})
export class DefaultButton {
  @State() private buttonState: boolean;

  private handleClick = () => {
    this.buttonState = !this.buttonState;
  };

  render() {
    const classes = classNames("defaultButton", {
      "defaultButton--active": this.buttonState
    });

    return (
      <button onClick={this.handleClick} class={classes}>
        <slot />
      </button>
    );
  }
}
