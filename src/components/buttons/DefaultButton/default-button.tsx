import { Component, Prop, State } from "@stencil/core";
import classNames from "classnames";

declare type ButtonState = "notActive" | "Active";

@Component({
  tag: "default-button",
  styleUrl: "default-button.css",
  shadow: true
})
export class DefaultButton {
  @Prop() className: string;

  @State() buttonState: ButtonState = "notActive";
  @State() selectedOption: string = "None";

  private handleClick = () => {
    this.buttonState = this.isActive ? "notActive" : "Active";
  };

  private get isActive(): boolean {
    return this.buttonState === "Active";
  }

  private onOptionSelectedHandler = (option: string) => {
    this.selectedOption = option;
    this.handleClick();
  };

  render() {
    const classes = classNames(
      "defaultButton",
      {
        "defaultButton--active": this.isActive
      },
      this.className
    );

    return (
      <div>
        <button onClick={() => this.handleClick()} class={classes}>
          <text-tag className="textLine--semiTransparent">
            Add .gitignore:
          </text-tag>{" "}
          <text-tag cssStyle={{ "font-weight": "500" }}>
            {this.selectedOption}
          </text-tag>{" "}
          <arrow-icon height={5} cssStyle={{ "margin-bottom": "1px" }} />
        </button>
        <popup-window isVisible={this.isActive}>
          <options-list
            header=".gitignore"
            onOptionSelected={this.onOptionSelectedHandler}
          />
        </popup-window>
      </div>
    );
  }
}
