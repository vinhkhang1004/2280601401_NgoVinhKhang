const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0 && userId < 100) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject(new Error('Invalid User ID'));
      }
    }, 50);
  });
};

const fetchMultipleUsers = (userIds) => {
  return Promise.all(userIds.map(id => fetchUserData(id)));
};

const fetchFirstUser = (userIds) => {
  return Promise.race(userIds.map(id => fetchUserData(id)));
};

const retryOperation = (operation, maxRetries) => {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const execute = () => {
      attempts++;
      operation()
        .then(resolve)
        .catch(err => {
          if (attempts >= maxRetries) {
            reject(err);
          } else {
            execute();
          }
        });
    };
    execute();
  });
};

module.exports = { 
  wait, 
  fetchUserData, 
  fetchMultipleUsers, 
  fetchFirstUser, 
  retryOperation 
};