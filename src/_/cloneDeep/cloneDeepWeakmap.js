// const _ = require("lodash");

// // _.cloneDeep(value)
// const cache = new WeakMap();
// function cloneDeepWeakMap(value) {
//   const stack = [];
//   const result = {};
//   // console.log("Ss", value);
//   do {
//     const currentTarget = stack.pop() || {};
//     console.log(currentTarget);

//     if (typeof value === "object") {
//       Object.keys(value).forEach((key) => {
//         if (typeof value[key] === "object") {
//           stack.push(value[key]);
//         } else {
//           currentTarget[key] = value[key];
//         }
//         // console.log("aa", key, value[key]);
//         // // stack.push(value[key]);
//         // console.log(key);
//       });
//     }
//     console.log("s", stack);
//     console.log("currentTarget", currentTarget);
//     // stack.pop();
//   } while (stack.length > 0);

//   console.log("stack", stack);
//   console.log("result", result);
// }

// module.exports = {
//   cloneDeepWeakMap,
// };

// // main
// const object = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//   },
// };

// // Object.keys(object).forEach((key) => {
// //   console.log(key);
// //   console.log(cache.get(key));
// // });

// const a = cloneDeepWeakMap(object);

// // console.log(a.``);

// // time test
// // console.time("test");
// // for (let i = 0; i < 10000; i++) {
// //   const copyObject = cloneDeep(object);
// // }
// // console.timeEnd("test");

// // const copyObject = cloneDeepWeakMap(object);
// // console.assert(object !== copyObject);
// // console.assert(object.a === copyObject.a);
// // console.assert(object.c !== copyObject.c);
