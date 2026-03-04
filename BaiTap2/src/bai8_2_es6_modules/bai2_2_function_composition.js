/**
 * @file bai2_2_function_composition.js
 */

/**
 * Compose functions from right to left
 * @param  {...Function} fns
 * @returns {Function}
 */
function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((result, fn, index) => {
      if (index === fns.length - 1) {
        // Function cuối cùng nhận nhiều tham số
        return fn(...result);
      }
      return fn(result);
    }, args);
  };
}

/**
 * Pipe functions from left to right
 * @param  {...Function} fns
 * @returns {Function}
 */
function pipe(...fns) {
  return function (...args) {
    return fns.reduce((result, fn, index) => {
      if (index === 0) {
        return fn(...result);
      }
      return fn(result);
    }, args);
  };
}

/**
 * Curry a function
 * @param {Function} fn
 * @returns {Function}
 */
function curry(fn) {
  return function curried(...args) {

    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

/**
 * Partial application
 * @param {Function} fn
 * @param  {...any} presetArgs
 * @returns {Function}
 */
function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

module.exports = {
  compose,
  pipe,
  curry,
  partial
};
