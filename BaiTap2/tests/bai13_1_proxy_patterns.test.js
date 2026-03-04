const { createValidatedObject, createPrivateProxy } = require('../src/bai13_1_proxy_patterns');

describe('Bài 13.1: Proxy Patterns', () => {
  test('Validation Proxy', () => {
    const person = createValidatedObject({ age: 'number' });
    person.age = 25;
    expect(() => person.age = 'abc').toThrow();
  });

  test('Private Proxy', () => {
    const data = createPrivateProxy({ _secret: 'xxx', public: 'ok' });
    expect(data.public).toBe('ok');
    expect(() => data._secret).toThrow('Access denied');
  });
});