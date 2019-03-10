import { Component, State } from "@stencil/core";
import Fragment from 'stencil-fragment'

declare type ButtonState = "notActive" | "Active";

@Component({
  tag: "button-with-popup",
  shadow: true
})
export class ButtonWithPopup {
  @State() buttonState: ButtonState = "notActive";
  @State() selectedOption: string = "None";

  private handleButtonClick = () => {
    this.buttonState = this.isButtonActive ? "notActive" : "Active";
  };

  private get isButtonActive(): boolean {
    return this.buttonState === "Active";
  }

  private onOptionSelectedHandler = (option: string) => {
    this.selectedOption = option;
    this.handleButtonClick();
  };

  render() {
    return (
      <Fragment>
        <default-button onClick={() => this.handleButtonClick()}>
          <text-tag semiTransparent={true}>Add .gitignore:</text-tag>{" "}
          <text-tag cssStyle={{ "font-weight": "500" }}>
            {this.selectedOption}
          </text-tag>{" "}
          <arrow-icon height={5} cssStyle={{ "margin-bottom": "1px" }} />
        </default-button>
        <popup-window isVisible={this.isButtonActive}>
          <options-list
            header=".gitignore"
            onOptionSelected={this.onOptionSelectedHandler}
          />
        </popup-window>
      </Fragment>
    );
  }
}
