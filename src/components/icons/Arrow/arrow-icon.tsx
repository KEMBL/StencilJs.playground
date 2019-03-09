import { Component, Prop } from "@stencil/core";

@Component({
  tag: "arrow-icon"
})
export class ArrowIcon {
  @Prop() width: number = 9;
  @Prop() height: number = 5;
  @Prop() color: string = "black";

  render() {
    return (
      <svg-icon width={this.width} height={this.height} fill={this.color}>
        <path d="M0 0L4.00245 5L8.00489 0H0Z" />
      </svg-icon>
    );
  }
}
