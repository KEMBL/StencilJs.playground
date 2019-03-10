import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "options-list",
  styleUrl: "options-list.css",
  shadow: true
})
export class OptionsList {
  @Prop() header: string;
  @Prop() onOptionSelected: (option: string) => void;
  @Prop() options: string[] = [
    "None",
    "Actionscript",
    "Ada",
    "Agda",
    "Android",
    "AppEngine",
    "AppceleratorTitanium",
    "ArchLinuxPackages",
    "Autotools",
    "C",
    "C++",
    "CFWheels",
    "CMake",
    "CUDA",
    "CakePHP",
    "ChefCookbook",
    "Clojure",
    "CodeIgniter",
    "CommonLisp",
    "Composer"
  ];

  @State() private filter: string;

  inputChanged(event) {
    this.filter = event.target.value;
  }

  render() {
    return (
      <div class="optionsList">
        <div class="optionsList__header">
          <text-tag cssStyle={{ "font-weight": "600" }}>{this.header}</text-tag>
        </div>
        <div class="optionsList__search">
          <div class="optionsList__searchInputArea">
            <input
              type="text"
              class="optionsList__searchInput"
              placeholder="Filter ignores…"
              autofocus=""
              onInput={(event: UIEvent) => this.inputChanged(event)}
            />
          </div>
        </div>
        <div class="optionsList__languages">
          {this.options
            .filter(item =>
              this.filter
                ? item.toLowerCase().indexOf(this.filter.toLowerCase()) > -1
                : true
            )
            .map(item => (
              <list-option
                onOptionSelected={this.onOptionSelected}
                option={item}
              />
            ))}
        </div>
      </div>
    );
  }
}
