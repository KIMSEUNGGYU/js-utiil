function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isString(value) {
  return typeof value === "string";
}

function isBoolean(value) {
  return value === true || value === false
}

module.exports = { isArray, isNumber, isString, isBoolean };
