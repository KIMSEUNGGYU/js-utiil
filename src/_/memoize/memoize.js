// TODO GYU: resolver 기능 구현
// multiple 인자 처리

// const cache = new Map(); // error

// _.memoize(func, [resolver])
function memoize(func) {
  const cache = new Map(); // 클로저..

  // args 를 키로 생성
  return function (args) {
    // ...args // multi
    if (cache.has(args)) {
      return cache.get(args);
    }

    const result = func.call(null, args);
    cache.set(args, result);

    return func.call(null, args);
  };
}

module.exports = {
  memoize,
};

// _.memoize(func, [resolver])
var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };

// const mF = memoize(Object.values);
// console.log("mF", mF);
// console.log(mF(object)); // [1, 2]
// object.a = 2;
// console.log(mF(object)); // [1, 2]

// console.log(mF(other)); // [3, 4]
// other.c = 99;
// console.log(mF(other)); // [3, 4]
