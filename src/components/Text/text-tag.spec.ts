import { TextTag } from "./text-tag";

describe("text component", () => {
  it("should build", () => {
    expect(new TextTag()).toBeTruthy();
  });
});
