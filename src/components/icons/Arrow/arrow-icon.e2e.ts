import { newE2EPage } from "@stencil/core/testing";

describe("arrow-icon component", () => {
  it("should be rendered", async () => {
    const page = await newE2EPage();

    await page.setContent("<arrow-icon></arrow-icon>");
    const element = await page.find("arrow-icon");
    expect(element).toHaveClass("hydrated");
  });

  it("should have SVG tag inside", async () => {
    const page = await newE2EPage();

    await page.setContent("<arrow-icon></arrow-icon>");
    const component = await page.find("arrow-icon");
    const element = await component.find("svg");
    expect(element).toBeDefined();
  });
});
