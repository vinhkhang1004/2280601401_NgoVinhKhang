const { tryCatch, safeJsonParse, withRetry, withTimeout } = require('../src/bai6_2_error_handling_patterns');

describe('Bài 6.2: Patterns', () => {
  test('tryCatch handles async errors gracefully', async () => {
    const successFn = async () => 'ok';
    const failFn = async () => { throw new Error('fail'); };

    const [err1, data1] = await tryCatch(successFn);
    expect(err1).toBeNull();
    expect(data1).toBe('ok');

    const [err2, data2] = await tryCatch(failFn);
    expect(err2).toBeInstanceOf(Error);
    expect(data2).toBeNull();
  });

  test('safeJsonParse returns null on invalid JSON', () => {
    expect(safeJsonParse('{"a":1}')).toEqual({ a: 1 });
    expect(safeJsonParse('invalid')).toBeNull();
  });

  test('withRetry retries specified times', async () => {
    const mockFn = jest.fn()
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockResolvedValue('success');
    
    const result = await withRetry(mockFn, 3, 10);
    expect(result).toBe('success');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('withTimeout throws on timeout', async () => {
    const slowPromise = new Promise(r => setTimeout(r, 100));
    await expect(withTimeout(slowPromise, 50)).rejects.toThrow('Timeout');
  });
});