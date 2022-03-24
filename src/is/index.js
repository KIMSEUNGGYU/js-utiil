function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

module.exports = { isArray, isNumber };
