const { memoize } = require('./memoize');

describe('memozie', () => {
  it('단일 데이터, test', () => {
    const object = { a: 1, b: 2 };
    const other = { c: 3, d: 4 };
    const values = memoize(Object.values);
    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);

    object.a = 2;
    other.c = 33;

    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);
  });
});
