const delayedGreeting = (name, delay, callback) => {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, delay);
};

const readFileSimulation = (filename, callback) => {
  setTimeout(() => {
    if (filename === 'error.txt') {
      callback(new Error('File not found'), null);
    } else {
      callback(null, 'File content');
    }
  }, 100);
};

const callbackHell = (callback) => {
  setTimeout(() => {
    const step1 = 'Step 1';
    setTimeout(() => {
      const step2 = 'Step 2';
      setTimeout(() => {
        const step3 = 'Step 3';
        callback([step1, step2, step3]);
      }, 10);
    }, 10);
  }, 10);
};

module.exports = { delayedGreeting, readFileSimulation, callbackHell };