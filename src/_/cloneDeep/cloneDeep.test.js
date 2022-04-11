const _ = require('lodash');

const { cloneDeep } = require('./cloneDeep');
const { deepCloneWeakMap } = require('./cloneDeepWeakmap');

describe('cloneDeep', () => {
  it('object', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        d: 3,
      },
    };

    const copyObject = cloneDeep(object);

    expect(object).not.toBe(copyObject);
    expect(object.a).toBe(copyObject.a);
    expect(object.c).not.toBe(copyObject.c);
  });

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
