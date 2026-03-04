const createValidatedObject = (schema) => {
  return new Proxy({}, {
    set(target, prop, value) {
      if (schema[prop] && typeof value !== schema[prop]) {
        throw new Error(`Invalid type for ${prop}`);
      }
      target[prop] = value;
      return true;
    }
  });
};

const createPrivateProxy = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop.startsWith('_')) throw new Error('Access denied');
      return target[prop];
    },
    set(target, prop, value) {
      if (prop.startsWith('_')) throw new Error('Access denied');
      target[prop] = value;
      return true;
    }
  });
};

module.exports = { createValidatedObject, createPrivateProxy };