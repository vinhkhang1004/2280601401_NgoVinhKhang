const Calculator = (() => {
  const history = [];

  const _validate = (num) => {
    if (typeof num !== 'number') throw new Error('Input must be a number');
  };

  const _addHistory = (op, a, b, res) => {
    history.push(`${a} ${op} ${b} = ${res}`);
  };

  return {
    add: (a, b) => {
      _validate(a); _validate(b);
      const res = a + b;
      _addHistory('+', a, b, res);
      return res;
    },
    subtract: (a, b) => {
      _validate(a); _validate(b);
      const res = a - b;
      _addHistory('-', a, b, res);
      return res;
    },
    multiply: (a, b) => {
        _validate(a); _validate(b);
        const res = a * b;
        _addHistory('*', a, b, res);
        return res;
    },
    divide: (a, b) => {
        _validate(a); _validate(b);
        if (b === 0) throw new Error('Cannot divide by zero');
        const res = a / b;
        _addHistory('/', a, b, res);
        return res;
    },
    getHistory: () => [...history],
    clearHistory: () => { history.length = 0; }
  };
})();

module.exports = Calculator;