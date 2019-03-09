import { Component, Prop } from "@stencil/core";

@Component({
  tag: "svg-icon"
})
export class SvgIcon {
  @Prop() width: number = 16;
  @Prop() height: number = 16;
  @Prop() fill: string = "black";
  @Prop() viewBox: string = "0 0 9 5";

  render() {
    return (
      <svg
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        width={this.width}
        height={this.height}
        viewBox={this.viewBox}
        fill={this.fill}
      >
        <slot />
      </svg>
    );
  }

  getPath = () => {
    return <path d="M0 0L4.00245 5L8.00489 0H0Z" />;
  };
}
