const { EventEmitter, PaymentStrategy } = require('../src/bai15_2_behavioral_patterns');

describe('Bài 15.2: Behavioral', () => {
  test('Observer', () => {
    const emitter = new EventEmitter();
    const spy = jest.fn();
    emitter.on('data', spy);
    emitter.emit('data', 'hello');
    expect(spy).toHaveBeenCalledWith('hello');
  });

  test('Strategy', () => {
    const payPaypal = amount => `Paid ${amount} via Paypal`;
    const payment = new PaymentStrategy(payPaypal);
    expect(payment.pay(100)).toBe('Paid 100 via Paypal');
  });
});