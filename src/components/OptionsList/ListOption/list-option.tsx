import { Component, Prop } from "@stencil/core";

@Component({
  tag: "list-option",
  styleUrl: "list-option.css",
  shadow: true
})
export class ListOption {
  @Prop() option: string;
  @Prop() onOptionSelected: (option: string) => void;

  private onOptionSelectedHandler = (option: string) => {
    if (this.onOptionSelected) {
      this.onOptionSelected(option);
    }
  };

  render() {
    return (
      <div
        class="listOption"
        onClick={() => this.onOptionSelectedHandler(this.option)}
      >
        <text-tag cssStyle={{ "font-weight": "400" }}>{this.option}</text-tag>
      </div>
    );
  }
}
