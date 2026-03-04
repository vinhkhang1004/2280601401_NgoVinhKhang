class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  emit(event, data) {
    if (this.events[event]) this.events[event].forEach(fn => fn(data));
  }
}

class PaymentStrategy {
  constructor(strategy) { this.strategy = strategy; }
  pay(amount) { return this.strategy(amount); }
}

module.exports = { EventEmitter, PaymentStrategy };