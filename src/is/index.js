function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isString(value) {
  return typeof value === "string";
}

module.exports = { isArray, isNumber, isString };
