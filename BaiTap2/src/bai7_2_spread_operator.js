const cloneDeep = (obj) => JSON.parse(JSON.stringify(obj));

const mergeArraysUnique = (...arrays) => {
  return [...new Set([].concat(...arrays))];
};

const updateNestedObject = (obj, path, value) => {
  // Simple implementation for specific level or using recursion logic
  // For simplicity here, assuming path is 'a.b.c'
  const keys = path.split('.');
  const newObj = { ...obj };
  let current = newObj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = { ...current[keys[i]] };
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
  return newObj;
};

const arrayOperations = {
  push: (arr, item) => [...arr, item],
  pop: (arr) => arr.slice(0, -1),
  shift: (arr) => arr.slice(1),
  unshift: (arr, item) => [item, ...arr]
};

module.exports = {
  cloneDeep,
  mergeArraysUnique,
  updateNestedObject,
  arrayOperations
};