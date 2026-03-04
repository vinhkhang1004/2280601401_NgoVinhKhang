const { compose, pipe, curry, partial } = require('../src/bai2_2_function_composition');

describe('Bài 2.2: Function Composition', () => {
  const add1 = x => x + 1;
  const double = x => x * 2;
  const add = (a, b, c) => a + b + c;

  test('compose() chạy từ phải sang trái', () => {
    // double(2) = 4 -> add1(4) = 5
    const fn = compose(add1, double);
    expect(fn(2)).toBe(5);
  });

  test('pipe() chạy từ trái sang phải', () => {
    // add1(2) = 3 -> double(3) = 6
    const fn = pipe(add1, double);
    expect(fn(2)).toBe(6);
  });

  test('curry() chuyển đổi function', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
  });

  test('partial() cố định tham số', () => {
    const add5And6 = partial(add, 5, 6);
    // 5 + 6 + 7 = 18
    expect(add5And6(7)).toBe(18);
  });
});