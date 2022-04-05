const array1 = [5, 12, 8, 130, 44]; // 3
// const array1 = [1, 2, 3, 4, 5]; // -1
const found = array1.findIndex((element) => element > 13);
console.log('find', found);

Array.prototype._findIndex = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const result = callback.call(thisArg || global || Window, this[i], i, this);
    if (result) {
      return i;
    }
  }

  return -1;
};

const result = array1._findIndex((element) => element > 13);
console.log('custom find', result);
