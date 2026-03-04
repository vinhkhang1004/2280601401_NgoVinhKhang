const { debounce, throttle } = require('../src/bai11_2_debounce_throttle');

describe('Bài 11.2: Debounce & Throttle', () => {
  jest.useFakeTimers();

  test('debounce chỉ chạy lần cuối', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    debounced();
    debounced();

    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('throttle giới hạn số lần chạy', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled(); // Lần này bị bỏ qua
    throttled(); // Lần này bị bỏ qua

    expect(func).toHaveBeenCalledTimes(1);
    
    jest.advanceTimersByTime(1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });
});