const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log('bison', beasts.indexOf('bison')); // 1
console.log('bison 2', beasts.indexOf('bison', 2)); // 4
console.log('bison 10', beasts.indexOf('bison', 10)); // -1
console.log('giraffe', beasts.indexOf('giraffe')); // -1
console.log('');

// arr.indexOf(searchElement[, fromIndex])
Array.prototype._indexOf = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

console.log('bison', beasts._indexOf('bison')); // 1
console.log('bison 2', beasts._indexOf('bison', 2)); // 4
console.log('bison 10', beasts._indexOf('bison', 10)); // -1
console.log('giraffe', beasts._indexOf('giraffe')); // -1
