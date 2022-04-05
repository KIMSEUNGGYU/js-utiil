const array = [1, 2, 3, 4, 5];
// const array = [];
const even = (element) => element % 2 === 0;
console.log('some', array.some(even));

Array.prototype._some = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const result = callback.call(thisArg || global || Window, this[i], i, this);
    if (result) {
      return true;
    }
  }

  return false;
};

console.log('custom some', array._some(even));
