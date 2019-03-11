import { newE2EPage } from "@stencil/core/testing";

describe("options-list component", () => {
  it("should be rendered", async () => {
    const page = await newE2EPage();

    await page.setContent("<options-list></options-list>");
    const element = await page.find("options-list");
    expect(element).toHaveClass("hydrated");
  });

  it("should set header", async () => {
    const headerValue = "IamHeader";

    const page = await newE2EPage();
    await page.setContent(
      `<options-list header='${headerValue}'></options-list>`
    );

    const element = await page.find("options-list >>> text-tag");
    expect(element.textContent).toEqual(headerValue);
  });

  it("should have search input", async () => {
    const page = await newE2EPage();
    await page.setContent(`<options-list header='IamHeader'></options-list>`);

    const element = await page.find("options-list");
    const inputElement = element.shadowRoot.querySelectorAll("input");
    expect(inputElement.length).toEqual(1);
  });

  it("should have list-options", async () => {
    const listOptions = ["Option1", "Option2", "Option3"];

    const page = await newE2EPage();
    await page.setContent(`<options-list header='IamHeader'></options-list>`);

    const optionsList = await page.find("options-list");
    optionsList.setProperty("options", listOptions);
    await page.waitForChanges();

    const listedOptions = optionsList.shadowRoot.querySelectorAll(
      "list-option"
    );
    expect(listedOptions.length).toEqual(listOptions.length);
  });

  it("should search options", async () => {
    const listOptions = ["Option1", "Option2", "Option3"];

    const page = await newE2EPage();
    await page.setContent(`<options-list header='IamHeader'></options-list>`);

    const optionsList = await page.find("options-list");
    optionsList.setProperty("options", listOptions);
    await page.waitForChanges();

    const inputElement = await page.find("options-list >>> input");
    let value = await inputElement.getProperty("value");
    expect(value).toBe("");

    await inputElement.press("3"); // i.e. leave only Option3
    await page.waitForChanges();
    const listedOptions = optionsList.shadowRoot.querySelectorAll(
      "list-option"
    );
    expect(listedOptions.length).toEqual(1);
  });
});
