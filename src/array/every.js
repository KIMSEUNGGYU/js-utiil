const array = [1, 30, 39, 29, 10, 13];
const result = array.every((x) => x < 40);
console.log('every', result);

// every(callback(currentValue[, index[, array]])[, thisArg])
Array.prototype._filter = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const callbackResult = callback.call(thisArg || global || Window, this[i], i, this);
    if (!callbackResult) {
      return false;
    }
  }

  return true;
};

const _result = array._filter((x) => x < 40);
console.log('custom every', _result);
