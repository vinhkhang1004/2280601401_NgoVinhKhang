const { orderOfExecution } = require('../src/bai11_1_event_loop');

describe('Bài 11.1: Event Loop', () => {
  test('thứ tự thực thi: Sync -> Micro -> Macro', async () => {
    const log = await orderOfExecution();
    
    expect(log[0]).toBe('sync 1');
   expect(log[1]).toBe('sync 2');
    expect(log[2]).toBe('microtask 1');
    expect(log[3]).toBe('macrotask 1');
  });
});