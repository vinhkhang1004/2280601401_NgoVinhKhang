const demonstrateMicrotasks = () => {
  return Promise.resolve().then(() => 'microtask');
};

const demonstrateMacrotasks = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('macrotask'), 0);
  });
};

const orderOfExecution = async () => {
  const result = [];
  result.push('sync 1');
  
  Promise.resolve().then(() => result.push('microtask 1'));
  
  setTimeout(() => result.push('macrotask 1'), 0);
  
  result.push('sync 2');
  
  await new Promise(r => setTimeout(r, 10));
  return result;
};

const preventBlockingUI = async (items) => {
  let sum = 0;
  for (const item of items) {
    sum += item;
    if (item % 100 === 0) await new Promise(r => setTimeout(r, 0));
  }
  return sum;
};

module.exports = { demonstrateMicrotasks, demonstrateMacrotasks, orderOfExecution, preventBlockingUI };