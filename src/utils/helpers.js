export const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, " ");
};

export const formatNumberToFourDigits = (num) => {
  return num.toString().padStart(4, "0");
};

export const getContrastColor = (hex) => {
  // Algoritmo de luminosidad simple
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#242424" : "#ffffff";
};
