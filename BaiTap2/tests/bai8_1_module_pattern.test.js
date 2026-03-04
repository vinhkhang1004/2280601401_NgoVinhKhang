const Calculator = require('../src/bai8_1_module_pattern');

describe('Bài 8.1: Module Pattern', () => {
  beforeEach(() => {
    Calculator.clearHistory();
  });

  test('tính toán đúng', () => {
    expect(Calculator.add(2, 3)).toBe(5);
    expect(Calculator.subtract(5, 2)).toBe(3);
  });

  test('lưu lịch sử', () => {
    Calculator.add(1, 1);
    Calculator.multiply(2, 2);
    expect(Calculator.getHistory()).toHaveLength(2);
    expect(Calculator.getHistory()[0]).toContain('1 + 1 = 2');
  });

  test('encapsulation: không thể truy cập private', () => {
    expect(Calculator._validate).toBeUndefined();
    expect(Calculator.history).toBeUndefined();
  });
});