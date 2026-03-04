const { asyncFetchUser, sequentialFetch, parallelFetch, handleErrors } = require('../src/bai4_3_async_await');

describe('Bài 4.3: Async/Await', () => {
  test('asyncFetchUser trả về data', async () => {
    const user = await asyncFetchUser(1);
    expect(user.name).toBe('User 1');
  });

  test('sequentialFetch chạy tuần tự', async () => {
    const users = await sequentialFetch([1, 2]);
    expect(users).toHaveLength(2);
  });

  test('handleErrors bắt lỗi an toàn', async () => {
    const result = await handleErrors(-1); // ID lỗi
    expect(result).toBe('Error handled');
  });
});