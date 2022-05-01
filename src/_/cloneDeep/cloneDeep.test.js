const _ = require('lodash');

const { cloneDeep } = require('./cloneDeep');
const { deepCloneWeakMap } = require('./cloneDeepWeakmap');

// ncc - babel 같이 playground 설정 돕는 tool

// expect.extend({
//   deepEqual(received, expected) {
//     console.log(this);
//     return this.equals(received, expected)
//   }
// })

describe('cloneDeep', () => {
  it('object', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        // d: 3,
        d: {},
      },
    };

    const copyObject = cloneDeep(object);

    // shallow copy test 코드 같음
    // shallow copy 에도 동작할 거 같음! ()

    // expect(object).d
    expect(object).not.toBe(copyObject);
    expect(object.a).toBe(copyObject.a);
    expect(object.c).not.toBe(copyObject.c);
    expect(object.c.d).not.toBe(copyObject.c.d); // 방법 1 deep copy test


    // const a = { b: 1 }
    // const b = { b: 1 }
    // expect(a).toBe(b)
    // expect(object).toEqual(copyObject)
    // expect(a).toEqual(b)
    // expect(object).deepEqual(object, copyObject)
    // 방법 2
    // https://jestjs.io/docs/expect#thisequalsa-b
    // this - equal
  });

  it('object - this.equals', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        // d: 3,
        d: {},
      },
    };

    const copyObject = cloneDeep(object);
    expect(copyObject).eq
  })

  it('object - weakMap', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        d: 3,
      },
    };

    const copyObject = deepCloneWeakMap(object);

    expect(object).not.toBe(copyObject);
    expect(object.a).toBe(copyObject.a);
    expect(object.c).not.toBe(copyObject.c);
  });
});
