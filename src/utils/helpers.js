export const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, " ");
};

export const formatNumberToFourDigits = (num) => {
  return num.toString().padStart(4, "0");
};
