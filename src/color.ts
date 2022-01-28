const getRGB = (color: string) => {
  const hex = color.replace(/#/g, "");
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};

const getLuma = (color: string) => {
  const { r, g, b } = getRGB(color);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

const isBrightColor = (color: string) => getLuma(color) > 0.5;

export { getRGB, isBrightColor };
