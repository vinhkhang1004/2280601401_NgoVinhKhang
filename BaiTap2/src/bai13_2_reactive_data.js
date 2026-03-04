const reactive = (obj) => {
  const listeners = new Map();

  const data = new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      if (listeners.has(prop)) {
        listeners.get(prop).forEach(fn => fn(value));
      }
      return true;
    }
  });

  data.watch = (prop, callback) => {
    if (!listeners.has(prop)) listeners.set(prop, []);
    listeners.get(prop).push(callback);
  };

  return data;
};

module.exports = { reactive };