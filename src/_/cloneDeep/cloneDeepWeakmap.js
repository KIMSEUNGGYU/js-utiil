//  WeakMap
function deepCloneWeakMap(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }

    map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = deepCloneWeakMap(target[key], map);
    }

    return cloneTarget;
  } else {
    return target;
  }
}

module.exports = {
  deepCloneWeakMap,
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
};
target.target = target; // 순환참조, 하지만 map 으로 처리
const cloneTarget3 = deepCloneWeakMap(target);
// console.log('target', target, 'cloneTarget3', cloneTarget3);
console.assert(target !== cloneTarget3);
console.assert(target.field1 === cloneTarget3.field1);
console.assert(target.field2 === cloneTarget3.field2);
console.assert(target.field3 !== cloneTarget3.field3);
console.assert(target.field4 !== cloneTarget3.field4);
