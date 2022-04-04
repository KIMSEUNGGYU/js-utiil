// arr.map(callback(currentValue[, index[, array]])[, thisArg])

const arr = [1, 2, 3, 4, 5];
const result = arr.map((x) => x * 2);
console.log('map', result);

Array.prototype._map = function (callback, thisArg) {
  const mappedArray = [];

  for (let i = 0; i < this.length; i++) {
    // currentValue, index, array
    // 추후에 gloabl 제거 (브라우저는 Window, node 는 gloabl)
    const mappedValue = callback.call(thisArg || global || Window, this[i], i, this);
    mappedArray.push(mappedValue);
  }

  return mappedArray;
};

const _result = arr._map((x) => x * 2);
console.log('custom map', _result);
