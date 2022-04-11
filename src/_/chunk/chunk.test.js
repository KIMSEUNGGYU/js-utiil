const _ = require('lodash');

const { chunk } = require('./chunk.js');

describe('chunk', () => {
  const array = ['a', 'b', 'c', 'd'];

  describe('string array test', () => {
    it.each([
      { array, size: 1, expectedResult: [['a'], ['b'], ['c'], ['d']] },
      {
        array,
        size: 2,
        expectedResult: [
          ['a', 'b'],
          ['c', 'd'],
        ],
      },
      { array, size: 3, expectedResult: [['a', 'b', 'c'], ['d']] },
      { array, size: 4, expectedResult: [['a', 'b', 'c', 'd']] },
      { array, size: 5, expectedResult: [['a', 'b', 'c', 'd']] },
      { array, size: undefined, expectedResult: [['a'], ['b'], ['c'], ['d']] },
    ])('chucnk string test, size=$size', ({ array, size, expectedResult }) => {
      expect(chunk(array, size)).toEqual(_.chunk(array, size));
      expect(chunk(array, size)).toEqual(expectedResult);
    });
  });

  describe('올바르지 않은 인자인 경우', () => {
    it('array 인자가 주어지지 않은 경우, 에러를 반환한다', () => {
      expect(() => chunk()).toThrow('array 인자는 필수입니다.');
    });

    it('array 인자가 아닌 경우', () => {
      expect(() => chunk(3)).toThrow('array 인자는 array 타입만 가능합니다');
      expect(() => chunk({})).toThrow('array 인자는 array 타입만 가능합니다');
      expect(() => chunk('ㅁㅁ')).toThrow('array 인자는 array 타입만 가능합니다');
    });
  });
});
