import { getRGB, isBrightColor } from "./color";

describe("test color module", () => {
  it("should parse hex color string into { r, g, b }", () => {
    expect(getRGB("#000000")).toMatchObject({ r: 0, g: 0, b: 0 });
    expect(getRGB("#ffffff")).toMatchObject({ r: 255, g: 255, b: 255 });
    expect(getRGB("##010203")).toMatchObject({ r: 1, g: 2, b: 3 });
  });

  it("should detect dark color", () => {
    expect(isBrightColor("#000000")).not.toBeTruthy();
    expect(isBrightColor("#261201")).not.toBeTruthy();
  });

  it("should detect bright color", () => {
    expect(isBrightColor("#ffffff")).toBeTruthy();
    expect(isBrightColor("#ffc5c5")).toBeTruthy();
    expect(isBrightColor("#ffd8b2")).toBeTruthy();
    expect(isBrightColor("#ffe063")).toBeTruthy();
    expect(isBrightColor("#c0eac4")).toBeTruthy();
    expect(isBrightColor("#bcdcff")).toBeTruthy();
    expect(isBrightColor("#d8bcff")).toBeTruthy();
  });
});
