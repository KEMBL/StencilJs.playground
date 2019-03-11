import { newE2EPage } from "@stencil/core/testing";

describe("popup-window component", () => {
  it("should be rendered but hidden", async () => {
    const page = await newE2EPage();

    await page.setContent("<popup-window></popup-window>");
    const element = await page.find("popup-window");
    expect(element).toHaveClass("hydrated");

    const window = await page.find("popup-window >>> div");
    expect(window).not.toHaveClass("popupWindow--visible");
  });

  it("should be visible", async () => {
    const page = await newE2EPage();

    await page.setContent("<popup-window></popup-window>");
    const element = await page.find("popup-window");
    await element.setProperty("isVisible", true);
    await page.waitForChanges();

    const window = await page.find("popup-window >>> div");
    expect(window).toHaveClass("popupWindow--visible");
  });
});
