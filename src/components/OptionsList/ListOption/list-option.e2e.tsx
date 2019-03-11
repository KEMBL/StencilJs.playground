import { newE2EPage } from "@stencil/core/testing";

describe("list-option component", () => {
  it("should be rendered", async () => {
    const page = await newE2EPage();

    await page.setContent("<list-option></list-option>");
    const element = await page.find("list-option");
    expect(element).toHaveClass("hydrated");
  });

  it("click should return option value", async () => {
    const optionToReturn = "ClickedOption";

    const page = await newE2EPage();
    const mockCallBack = jest.fn();

    await page.setContent(
      `<list-option option='${optionToReturn}'></list-option>`
    );

    await page.exposeFunction("functionToInject", mockCallBack);
    await page.$eval("list-option", (elm: any) => {
      elm.onOptionSelected = this.functionToInject;
    });
    await page.waitForChanges();

    const element = await page.find("list-option");
    await element.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack.mock.calls[0][0]).toBe(optionToReturn);
  });
});
