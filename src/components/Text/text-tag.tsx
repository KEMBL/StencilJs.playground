import { Component, Prop } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "text-tag",
  styleUrl: "text-tag.css",
  shadow: true
})
export class TextTag {
  @Prop() wrap: boolean;
  @Prop() semiTransparent: boolean;
  @Prop() cssStyle: { [key: string]: string };

  render() {
    const classes = classNames(
      "textLine--normal",
      {
        "textLine--noWrap": !this.wrap
      },
      {
        "textLine--semiTransparent": this.semiTransparent
      }
    );

    return (
      <span class={classes} style={this.cssStyle}>
        <slot />
      </span>
    );
  }
}
