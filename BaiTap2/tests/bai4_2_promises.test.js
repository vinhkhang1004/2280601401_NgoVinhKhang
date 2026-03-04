const { 
  wait, 
  fetchUserData, 
  fetchMultipleUsers, 
  fetchFirstUser, 
  retryOperation 
} = require('../src/bai4_2_promises');

describe('Bài 4.2: Promises', () => {
  test('wait resolve sau thời gian', async () => {
    const start = Date.now();
    await wait(100);
    const diff = Date.now() - start;
    expect(diff).toBeGreaterThanOrEqual(90);
  });

  test('fetchUserData success và error', async () => {
    await expect(fetchUserData(1)).resolves.toEqual({ id: 1, name: 'User 1' });
    await expect(fetchUserData(-1)).rejects.toThrow('Invalid User ID');
  });

  test('fetchMultipleUsers lấy tất cả', async () => {
    const users = await fetchMultipleUsers([1, 2]);
    expect(users).toHaveLength(2);
    expect(users[0].id).toBe(1);
  });

  test('retryOperation thử lại khi fail', async () => {
    const mockFn = jest.fn()
      .mockRejectedValueOnce(new Error('Fail 1'))
      .mockRejectedValueOnce(new Error('Fail 2'))
      .mockResolvedValue('Success');

    const result = await retryOperation(mockFn, 3);
    expect(result).toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});