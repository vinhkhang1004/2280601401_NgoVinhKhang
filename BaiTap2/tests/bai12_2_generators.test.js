const { fibonacci, paginate } = require('../src/bai12_2_generators');

describe('Bài 12.2: Generators', () => {
  test('fibonacci generator', () => {
    const gen = fibonacci(5);
    expect([...gen]).toEqual([0, 1, 1, 2, 3]);
  });

  test('paginate generator', () => {
    const items = [1, 2, 3, 4, 5];
    const gen = paginate(items, 2);
    expect(gen.next().value).toEqual([1, 2]);
    expect(gen.next().value).toEqual([3, 4]);
    expect(gen.next().value).toEqual([5]);
  });
});