module.exports = {
  unique: (arr) => [...new Set(arr)],
  flatten: (arr) => arr.flat(Infinity)
};