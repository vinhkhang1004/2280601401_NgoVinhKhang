const utils = require('../src/bai14_1_regex_utilities');

describe('Bài 14.1: Regex', () => {
  test('validatePhone', () => {
    expect(utils.validatePhone('0912345678')).toBe(true);
    expect(utils.validatePhone('123')).toBe(false);
  });
  test('extractUrls', () => {
    expect(utils.extractUrls('Visit https://google.com now')).toEqual(['https://google.com']);
  });
});