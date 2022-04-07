const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  // 0 + 1 + 2 + 3 + 4
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue,
);
console.log('reduce', sumWithInitial); // 10

// arr.reduce(callback[, initialValue])
Array.prototype._reduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback.call(null, accumulator, this[i], i, this);
  }

  return accumulator;
};

const sumWithInitial2 = array1._reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue,
);
console.log('custom reducer', sumWithInitial2); // 10
console.log();

// test 2
var votes = ['kim', 'hong', 'lee', 'hong', 'lee', 'lee', 'hong'];
var reducer = function (accumulator, value, index, array) {
  if (accumulator.hasOwnProperty(value)) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }
  return accumulator;
};

let initialValue2 = {};
const result = votes.reduce(reducer, initialValue2);
console.log('reduce2', result); // { kim: 1, hong: 3, lee: 3 }

initialValue2 = {};
console.log('custom reduce2', votes._reduce(reducer, initialValue2)); // { kim: 1, hong: 3, lee: 3 }
