import { Component, Prop } from "@stencil/core";

@Component({
  tag: "arrow-icon"
})
export class ArrowIcon {
  @Prop() width: number = 9;
  @Prop() height: number = 5;
  @Prop() color: string = "black";
  @Prop() viewBox: string = "0 0 9 5";
  @Prop() cssStyle: { [key: string]: string };

  // it is not too good solution to put svg in any Icon but for now it is caused by
  // that issue https://github.com/ionic-team/stencil/issues/1408
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={this.width}
        height={this.height}
        viewBox={this.viewBox}
        fill={this.color}
        style={this.cssStyle}
      >
        <path d="M0 0L4.00245 5L8.00489 0H0Z" />
      </svg>
    );
  }
}
