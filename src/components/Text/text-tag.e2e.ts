import { newE2EPage } from "@stencil/core/testing";

describe("text-tag component", () => {
  it("should be rendered", async () => {
    const page = await newE2EPage();

    await page.setContent("<text-tag></text-tag>");
    const element = await page.find("text-tag");
    expect(element).toHaveClass("hydrated");

    const span = await page.find("text-tag >>> span");
    expect(span).toHaveClass("textLine--normal");
    expect(span).toHaveClass("textLine--noWrap");
    expect(span).not.toHaveClass("textLine--semiTransparent");
  });

  it("should contain text", async () => {
    const textExample = "IamTextExample";
    const page = await newE2EPage();
    await page.setContent(`<text-tag>${textExample}</text-tag>`);
    const element = await page.find("text-tag");
    expect(element.textContent).toContain(textExample);
  });

  it("text should be semiTransparent", async () => {
    const page = await newE2EPage();

    await page.setContent("<text-tag></text-tag>");
    const element = await page.find("text-tag");
    await element.setProperty("semiTransparent", true);
    await page.waitForChanges();

    const span = await page.find("text-tag >>> span");
    expect(span).toHaveClass("textLine--normal");
    expect(span).toHaveClass("textLine--semiTransparent");
  });

  it("text should be wrapped", async () => {
    const page = await newE2EPage();

    await page.setContent("<text-tag></text-tag>");
    const element = await page.find("text-tag");
    await element.setProperty("wrap", true);
    await page.waitForChanges();

    const span = await page.find("text-tag >>> span");
    expect(span).toHaveClass("textLine--normal");
    expect(span).not.toHaveClass("textLine--noWrap");
  });
});
