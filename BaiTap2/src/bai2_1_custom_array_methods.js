/**
 * Custom map implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @returns {Array}
 */
const customMap = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

/**
 * Custom filter implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @returns {Array}
 */
const customFilter = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

/**
 * Custom reduce implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @param {*} initialValue 
 * @returns {*}
 */
const customReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    if (array.length === 0) throw new TypeError('Reduce of empty array with no initial value');
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

/**
 * Custom find implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @returns {*|undefined}
 */
const customFind = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};

/**
 * Custom every implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @returns {boolean}
 */
const customEvery = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

/**
 * Custom some implementation.
 * @param {Array} array 
 * @param {Function} callback 
 * @returns {boolean}
 */
const customSome = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

module.exports = {
  customMap,
  customFilter,
  customReduce,
  customFind,
  customEvery,
  customSome
};