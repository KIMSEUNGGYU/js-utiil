function isArray(value) {
  return Array.isArray(value);
}

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isString(value) {
  return typeof value === 'string';
}

function isBoolean(value) {
  return value === true || value === false;
}

function isUndefiend(value) {
  return value === undefined;
}

function isNull(value) {
  return value === null;
}

function isObject(value) {
  return value instanceof Object;
}

module.exports = {
  isArray,
  isNumber,
  isString,
  isBoolean,
  isUndefiend,
  isNull,
  isObject,
};
