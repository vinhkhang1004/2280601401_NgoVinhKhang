const { parseTemplate, parseQueryString } = require('../src/bai14_2_string_parsing');

describe('Bài 14.2: Parsing', () => {
  test('parseTemplate', () => {
    expect(parseTemplate('Hello {{name}}', { name: 'Nam' })).toBe('Hello Nam');
  });
  test('parseQueryString', () => {
    expect(parseQueryString('site.com?q=hello&page=1')).toEqual({ q: 'hello', page: '1' });
  });
});