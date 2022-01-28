import {
  getSafeTextColor,
  DARK_CONTENT_COLOR,
  LIGHT_CONTENT_COLOR,
} from "./index";

describe("test index", () => {
  it("should get high contrast face color", () => {
    expect(getSafeTextColor("#000000")).toBe(LIGHT_CONTENT_COLOR);
    expect(getSafeTextColor("#ffffff")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#261201")).toBe(LIGHT_CONTENT_COLOR);
    expect(getSafeTextColor("#ffc5c5")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#ffd8b2")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#ffe063")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#c0eac4")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#bcdcff")).toBe(DARK_CONTENT_COLOR);
    expect(getSafeTextColor("#d8bcff")).toBe(DARK_CONTENT_COLOR);
  });
});
