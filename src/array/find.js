const array1 = [5, 12, 8, 130, 44]; // 12
// const array1 = [1, 2, 3, 4, 5]; // undefined
const found = array1.find((element) => element > 10);
console.log('find', found);

Array.prototype._find = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const result = callback.call(thisArg || global || Window, this[i], i, this);
    if (result) {
      return this[i];
    }
  }

  return undefined;
};

const result = array1._find((element) => element > 10);
console.log('custom find', result);
