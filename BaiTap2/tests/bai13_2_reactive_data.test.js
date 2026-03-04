const { reactive } = require('../src/bai13_2_reactive_data');

describe('Bài 13.2: Reactive Data', () => {
  test('watch changes', () => {
    const state = reactive({ count: 0 });
    const spy = jest.fn();
    
    state.watch('count', spy);
    state.count = 1;
    
    expect(spy).toHaveBeenCalledWith(1);
  });
});