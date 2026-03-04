const { delayedGreeting, readFileSimulation, callbackHell } = require('../src/bai4_1_callbacks');

describe('Bài 4.1: Callbacks', () => {
  test('delayedGreeting gọi callback sau delay', (done) => {
    delayedGreeting('World', 10, (msg) => {
      expect(msg).toBe('Hello, World!');
      done();
    });
  });

  test('readFileSimulation trả về data', (done) => {
    readFileSimulation('test.txt', (err, data) => {
      expect(err).toBeNull();
      expect(data).toBe('File content');
      done();
    });
  });

  test('readFileSimulation trả về error', (done) => {
    readFileSimulation('error.txt', (err, data) => {
      expect(err).toBeInstanceOf(Error);
      expect(data).toBeNull();
      done();
    });
  });

  test('callbackHell chạy đúng thứ tự', (done) => {
    callbackHell((results) => {
      expect(results).toEqual(['Step 1', 'Step 2', 'Step 3']);
      done();
    });
  });
});