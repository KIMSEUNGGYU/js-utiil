const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = array.filter((x) => x % 2);
console.log('filter', result);

// arr.filter(callback(element[, index[, array]])[, thisArg])
Array.prototype._filter = function (callback, thisArg) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    const filteredValue = callback.call(thisArg || global || Window, this[i], i, this);
    if (filteredValue) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

const _result = array._filter((x) => x % 2);
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const _result = words._filter((x) => x.length > 6);
console.log('custom filter', _result);
