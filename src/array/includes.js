const array1 = [1, 2, 3];
console.log('includes', array1.includes(2)); // true
console.log('includes', array1.includes(2, 2)); // false
const pets = ['cat', 'dog', 'bat'];
console.log('includes', pets.includes('cat')); // true
console.log('includes', pets.includes('at')); // false
console.log('');

// arr.includes(valueToFind[, fromIndex])
Array.prototype._includes = function (valueToFind, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (valueToFind === this[i]) {
      return true;
    }
  }

  return false;
};

console.log('custom includes', array1._includes(2)); // true
console.log('custom includes', array1._includes(2, 2)); // false
console.log('custom includes', pets._includes('cat')); // true
console.log('custom includes', pets._includes('at')); // false
