const extractUserInfo = (user) => {
  const { 
    id, 
    profile: { name, email }, 
    roles: [primaryRole] 
  } = user;
  return { id, name, email, primaryRole };
};

const swapValues = (a, b) => {
  return [b, a];
};

const getFirstAndRest = (array) => {
  const [first, ...rest] = array;
  return { first, rest };
};

const mergeObjects = (...objects) => {
  return Object.assign({}, ...objects);
};

const removeProperty = (obj, prop) => {
  const { [prop]: removed, ...rest } = obj;
  return rest;
};

module.exports = {
  extractUserInfo,
  swapValues,
  getFirstAndRest,
  mergeObjects,
  removeProperty
};