const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const rafThrottle = (fn) => {
  let locked = false;
  const requestAnim = (typeof window !== 'undefined' && window.requestAnimationFrame) 
    ? window.requestAnimationFrame 
    : (cb) => setTimeout(cb, 16);

  return (...args) => {
    if (locked) return;
    locked = true;
    requestAnim(() => {
      fn(...args);
      locked = false;
    });
  };
};

module.exports = { debounce, throttle, rafThrottle };