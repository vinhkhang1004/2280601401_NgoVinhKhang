const { Range, createIterator } = require('../src/bai12_1_custom_iterators');

describe('Bài 12.1: Custom Iterators', () => {
  test('Range iterator', () => {
    const range = new Range(1, 3);
    const result = [...range];
    expect(result).toEqual([1, 2, 3]);
  });

  test('createIterator', () => {
    const it = createIterator(['a', 'b']);
    expect(it.next().value).toBe('a');
    expect(it.next().value).toBe('b');
    expect(it.next().done).toBe(true);
  });
});