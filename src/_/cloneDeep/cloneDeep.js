const _ = require('lodash');

// _.cloneDeep(value)
function cloneDeep(value) {
  const result = {};

  if (typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      result[key] = cloneDeep(value[key]);
    });
  } else {
    return value;
  }

  return result;
}

module.exports = {
  cloneDeep,
};

// main
const object = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

// time test
// console.time("test");
// for (let i = 0; i < 10000; i++) {
//   const copyObject = cloneDeep(object);
// }
// console.timeEnd("test");

const copyObject = cloneDeep(object);
console.assert(object !== copyObject);
console.assert(object.a === copyObject.a);
console.assert(object.c !== copyObject.c);
