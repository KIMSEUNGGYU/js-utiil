const _ = require('lodash');

const { chunk } = require('./');

describe('chuck', () => {
  it('compare chuck and lodash??', () => {
    const array = ['a', 'b', 'c', 'd'];
    const sizes = [1, 2, 3];

    sizes.forEach((size) => {
      expect(chunk(array, size)).toEqual(_.chunk(['a', 'b', 'c', 'd'], size));
    });
  });

  it('복잡한 케이스', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(chunk(array, 8)).toEqual(_.chunk(array, 8));
    expect(chunk(array, 4)).toEqual(_.chunk(array, 4));
  });

  it('복잡한 케이스 2', () => {
    const array = [1, 2, 3, 4, 5];

    expect(chunk(array, 8)).toEqual(_.chunk(array, 8));
    expect(chunk(array, 4)).toEqual(_.chunk(array, 4));
  });

  it('복잡한 케이스 3', () => {
    const array = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ];

    expect(chunk(array, 8)).toEqual(_.chunk(array, 8));
    expect(chunk(array, 4)).toEqual(_.chunk(array, 4));
  });
});
