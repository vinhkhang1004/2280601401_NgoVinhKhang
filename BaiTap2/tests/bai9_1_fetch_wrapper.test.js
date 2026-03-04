const HttpClient = require('../src/bai9_1_fetch_wrapper');

describe('Bài 9.1: Fetch Wrapper', () => {
  let client;
  
  beforeEach(() => {
    client = new HttpClient('https://api.test.com');
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: 1 })
    }));
  });

  test('get request', async () => {
    const data = await client.get('/users');
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.test.com/users', 
      expect.objectContaining({ method: 'GET' })
    );
    expect(data).toEqual({ id: 1 });
  });

  test('interceptors modification', async () => {
    client.addRequestInterceptor(config => ({ ...config, headers: { Auth: 'token' } }));
    await client.get('/protected');
    
    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ headers: { Auth: 'token' } })
    );
  });
});