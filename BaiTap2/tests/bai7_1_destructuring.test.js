const { extractUserInfo, swapValues, removeProperty } = require('../src/bai7_1_destructuring');

describe('Bài 7.1: Destructuring', () => {
  test('extractUserInfo lấy đúng thông tin nested', () => {
    const user = {
      id: 1,
      profile: { name: 'John', email: 'john@example.com' },
      roles: ['admin', 'editor']
    };
    const extracted = extractUserInfo(user);
    expect(extracted).toEqual({
      id: 1,
      name: 'John',
      email: 'john@example.com',
      primaryRole: 'admin'
    });
  });

  test('swapValues hoán đổi biến', () => {
    const [a, b] = swapValues(1, 2);
    expect(a).toBe(2);
    expect(b).toBe(1);
  });

  test('removeProperty xóa key mà không đổi object gốc', () => {
    const obj = { a: 1, b: 2 };
    const newObj = removeProperty(obj, 'b');
    expect(newObj).toEqual({ a: 1 });
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});