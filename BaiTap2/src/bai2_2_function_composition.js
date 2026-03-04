/**
 * Thực hiện function composition (từ phải sang trái).
 * @param {...Function} fns 
 * @returns {Function}
 */
const compose = (...fns) => (initialValue) => 
  fns.reduceRight((value, fn) => fn(value), initialValue);

/**
 * Thực hiện function piping (từ trái sang phải).
 * @param {...Function} fns 
 * @returns {Function}
 */
const pipe = (...fns) => (initialValue) => 
  fns.reduce((value, fn) => fn(value), initialValue);

/**
 * Curry function.
 * @param {Function} fn 
 * @returns {Function}
 */
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  };
};

/**
 * Partial application.
 * @param {Function} fn 
 * @param {...*} args 
 * @returns {Function}
 */
const partial = (fn, ...fixedArgs) => {
  return (...remainingArgs) => fn(...fixedArgs, ...remainingArgs);
};

module.exports = { compose, pipe, curry, partial };