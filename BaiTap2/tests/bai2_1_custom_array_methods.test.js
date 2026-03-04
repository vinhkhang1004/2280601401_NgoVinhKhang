const {
  customMap,
  customFilter,
  customReduce,
  customFind,
  customEvery,
  customSome
} = require('../src/bai2_1_custom_array_methods');

describe('Bài 2.1: Custom Array Methods', () => {
  const arr = [1, 2, 3, 4, 5];

  test('customMap()', () => {
    const double = x => x * 2;
    expect(customMap(arr, double)).toEqual([2, 4, 6, 8, 10]);
  });

  test('customFilter()', () => {
    const isEven = x => x % 2 === 0;
    expect(customFilter(arr, isEven)).toEqual([2, 4]);
  });

  test('customReduce()', () => {
    const sum = (acc, cur) => acc + cur;
    expect(customReduce(arr, sum, 0)).toBe(15);
    expect(customReduce(arr, sum)).toBe(15); 
  });

  test('customFind()', () => {
    const isThree = x => x === 3;
    expect(customFind(arr, isThree)).toBe(3);
    expect(customFind(arr, x => x === 99)).toBeUndefined();
  });

  test('customEvery()', () => {
    expect(customEvery(arr, x => x > 0)).toBe(true);
    expect(customEvery(arr, x => x > 3)).toBe(false);
  });

  test('customSome()', () => {
    expect(customSome(arr, x => x > 4)).toBe(true);
    expect(customSome(arr, x => x > 10)).toBe(false);
  });
});