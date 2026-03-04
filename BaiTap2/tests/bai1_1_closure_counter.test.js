const { createCounter } = require('../src/bai1_1_closure_counter');

describe('createCounter', () => {
  let counter;
  beforeEach(() => { counter = createCounter(); });

  test('starts at 0', () => 
    expect(counter.getValue()).toBe(0));
  test('increment increases by 1', () => { 
    counter.increment(); 
    expect(counter.getValue()).toBe(1); });
  test('multiple increments', () => { 
    counter.increment(); 
    counter.increment(); 
    counter.increment(); 
    expect(counter.getValue()).toBe(3); });
  test('decrement decreases by 1', () => { 
    counter.increment(); 
    counter.increment(); 
    counter.decrement(); 
    expect(counter.getValue()).toBe(1); });
  test('decrement below 0', () => { 
    counter.decrement(); 
    expect(counter.getValue()).toBe(-1); });
  test('reset returns to 0', () => { 
    counter.increment(); 
    counter.increment(); 
    counter.reset(); 
    expect(counter.getValue()).toBe(0); });
  test('private: count not directly accessible', () => {
    counter.increment();
    expect(counter.count).toBeUndefined();
  });
  test('independent counters', () => {
    const c2 = createCounter();
    counter.increment();
    expect(c2.getValue()).toBe(0);
  });
});