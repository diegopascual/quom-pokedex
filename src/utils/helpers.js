export const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
