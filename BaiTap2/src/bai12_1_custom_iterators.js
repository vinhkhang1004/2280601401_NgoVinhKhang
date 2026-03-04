class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
}

const createIterator = (array) => {
  let index = 0;
  return {
    next: () => index < array.length 
      ? { value: array[index++], done: false } 
      : { done: true }
  };
};

module.exports = { Range, createIterator };