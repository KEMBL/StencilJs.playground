import { newE2EPage } from "@stencil/core/testing";

describe("button-with-popup component", () => {
  it("should be rendered", async () => {
    const page = await newE2EPage();

    await page.setContent("<button-with-popup></button-with-popup>");
    const element = await page.find("button-with-popup");
    expect(element).toHaveClass("hydrated");
  });

  it("button should open / close popup onClick", async () => {
    const page = await newE2EPage();
    await page.setContent("<button-with-popup></button-with-popup>");
    const button = await page.find(
      "button-with-popup >>> div > default-button"
    );
    const div = await page.find("button-with-popup >>> div");
    const popup = await div.find("popup-window >>> .popupWindow");
    expect(popup).not.toHaveClass("popupWindow--visible");

    await button.click();
    await page.waitForChanges();
    expect(popup).toHaveClass("popupWindow--visible");
  });

  it("selected option should change title of button", async () => {
    const page = await newE2EPage();
    await page.setContent("<button-with-popup></button-with-popup>");
    const div = await page.find("button-with-popup >>> div");
    const button = await div.find("default-button");
    await button.click(); // open popup
    await page.waitForChanges();

    const options = await div.findAll(
      "popup-window > options-list >>> list-option"
    );

    await options[1].click(); // select option
    await page.waitForChanges();

    const optionTitle = options[1].shadowRoot.querySelector("text-tag")
      .textContent;
    const buttonTitle = (await button.findAll("text-tag"))[1].textContent;
    expect(optionTitle).toEqual(buttonTitle);
  });
});
