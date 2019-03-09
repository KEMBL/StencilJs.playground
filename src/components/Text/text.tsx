import { Component, Prop } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "text-tag",
  styleUrl: "text.css",
  shadow: true
})
export class Text {
  @Prop() className: string;
  @Prop() wrap: boolean;
  @Prop() textStyle: { [key: string]: string };

  render() {
    const classes = classNames(
      "textLine--normal",
      {
        "textLine--noWrap": !this.wrap
      },
      this.className
    );

    return (
      <span class={classes} style={this.textStyle}>
        <slot />
      </span>
    );
  }
}
