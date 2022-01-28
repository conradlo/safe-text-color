import { isBrightColor } from "./color";
const LIGHT_CONTENT_COLOR = "#FFFFFF";
const DARK_CONTENT_COLOR = "#000000";
const getSafeTextColor = (color: string) =>
  isBrightColor(color) ? DARK_CONTENT_COLOR : LIGHT_CONTENT_COLOR;

export { getSafeTextColor, LIGHT_CONTENT_COLOR, DARK_CONTENT_COLOR };
