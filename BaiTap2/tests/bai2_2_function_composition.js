const {
  compose,
  pipe,
  curry,
  partial
} = require('../src/bai2_2_function_composition');

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = x => x * x;

// Compose
const composed = compose(square, add);
console.log(composed(2, 3)); // 25

// Pipe
const piped = pipe(add, square);
console.log(piped(2, 3)); // 25

// Curry
const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // 5

// Partial
const add5 = partial(add, 5);
console.log(add5(10)); // 15
