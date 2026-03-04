const { mergeArraysUnique, arrayOperations } = require('../src/bai7_2_spread_operator');

describe('Bài 7.2: Spread Operator', () => {
  test('mergeArraysUnique gộp và xóa trùng lặp', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    expect(mergeArraysUnique(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('arrayOperations thực hiện immutable', () => {
    const arr = [1, 2, 3];
    const newArr = arrayOperations.push(arr, 4);
    expect(newArr).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3]); 
  });
});