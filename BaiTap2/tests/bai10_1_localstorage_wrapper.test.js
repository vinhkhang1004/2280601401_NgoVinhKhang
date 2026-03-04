const StorageManager = require('../src/bai10_1_localstorage_wrapper');

describe('Bài 10.1: LocalStorage Wrapper', () => {
  let storage;
  beforeEach(() => { storage = new StorageManager(); storage.clear(); });

  test('set & get data', () => {
    storage.set('user', { name: 'Nam' });
    expect(storage.get('user')).toEqual({ name: 'Nam' });
  });

  test('expiry logic', async () => {
    storage.set('temp', 123, 10); 
    expect(storage.get('temp')).toBe(123);
    
    await new Promise(r => setTimeout(r, 20));
    expect(storage.get('temp')).toBeNull();
  });
});