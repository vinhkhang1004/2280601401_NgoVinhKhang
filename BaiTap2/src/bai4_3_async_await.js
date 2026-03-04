const { fetchUserData } = require('./bai4_2_promises');

const asyncFetchUser = async (userId) => {
  try {
    const user = await fetchUserData(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const sequentialFetch = async (userIds) => {
  const results = [];
  for (const id of userIds) {
    const user = await fetchUserData(id);
    results.push(user);
  }
  return results;
};

const parallelFetch = async (userIds) => {
  const promises = userIds.map(id => fetchUserData(id));
  return await Promise.all(promises);
};

const handleErrors = async (userId) => {
  try {
    await fetchUserData(userId);
    return 'Success';
  } catch (error) {
    return 'Error handled';
  }
};

module.exports = { asyncFetchUser, sequentialFetch, parallelFetch, handleErrors };