const app = require('../src/bai8_2_es6_modules/index');

describe('Bài 8.2: ES6 Modules Structure', () => {
  test('import constant', () => {
    expect(app.constants.PI).toBeCloseTo(3.14159);
  });
  
  test('import math utils', () => {
    expect(app.math.add(1, 2)).toBe(3);
  });

  test('import string utils', () => {
    expect(app.string.capitalize('hello')).toBe('Hello');
  });

  test('import array utils', () => {
    expect(app.array.unique([1, 1, 2])).toEqual([1, 2]);
  });
});