const { memoize } = require('./memoize');
const { memoize2 } = require('./memoize2');

describe('memozie', () => {
  it('단일 데이터, test', () => {
    const object = { a: 1, b: 2 };
    const other = { c: 3, d: 4 };
    const values = memoize(Object.values);
    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);

    object.a = 99;
    other.c = 99;

    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);
  });
});


describe('memozie2', () => {
  describe('단일 인자인 경우', () => {
    it('object', () => {
      const object = { a: 1, b: 2 };
      const other = { c: 3, d: 4 };
      const values = memoize2(Object.values);
      expect(values(object)).toEqual([1, 2]);
      expect(values(other)).toEqual([3, 4]);
  
      object.a = 99;
      other.c = 99;
  
      expect(values(object)).toEqual([1, 2]);
      expect(values(other)).toEqual([3, 4]);
    });
  
    // 🔥 캐시 지우는 거 까지 검증할 수 있도록
    it('cache 데이터 삭제', () => {
      const object = { a: 1, b: 2 };
      const values = memoize2(Object.values);
      expect(values(object)).toEqual([1, 2]);
  
      values.cache.delete(object)
  
      expect(values.cache.get(object)).toBe(undefined);
    })
  })

  describe('여러 인자인 경우', () => {
    it('sum test', () => {
      const _sum = (num1, num2) => num1 + num2;
      const sum = memoize2(_sum);

      expect(sum(1, 2)).toBe(3);
    })
  })
});