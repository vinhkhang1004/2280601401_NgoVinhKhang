const api = require('../src/bai9_2_api_integration');

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([])
}));

describe('Bài 9.2: API Integration', () => {
  test('getAllUsers calls correct endpoint', async () => {
    await api.getAllUsers();
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/users'),
      expect.objectContaining({ method: 'GET' })
    );
  });

  test('createUser calls POST', async () => {
    await api.createUser({ name: 'Test' });
    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ method: 'POST' })
    );
  });
});