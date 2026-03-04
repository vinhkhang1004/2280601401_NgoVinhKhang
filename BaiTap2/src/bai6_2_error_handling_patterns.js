const tryCatch = async (fn) => {
  try {
    const data = await fn();
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

const safeJsonParse = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};

const withRetry = async (fn, retries = 3, delay = 100) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw lastError;
};

const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), ms);
  });
  return Promise.race([promise, timeout]);
};

module.exports = { tryCatch, safeJsonParse, withRetry, withTimeout };