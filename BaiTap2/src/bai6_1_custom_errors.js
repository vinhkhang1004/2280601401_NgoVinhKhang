class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

const validateUser = (user) => {
  if (!user || !user.username) {
    throw new ValidationError('Missing username');
  }
  if (user.age < 0) {
    throw new ValidationError('Invalid age');
  }
  return true;
};

const handleError = (error) => {
  if (error instanceof ValidationError) {
    return { type: 'validation', statusCode: 400, message: error.message };
  }
  if (error instanceof NetworkError) {
    return { type: 'network', statusCode: error.statusCode, message: error.message };
  }
  if (error instanceof AuthenticationError) {
    return { type: 'authentication', statusCode: 401, message: error.message };
  }
  return { type: 'unknown', statusCode: 500, message: 'An unknown error occurred' };
};

module.exports = {
  ValidationError,
  NetworkError,
  AuthenticationError,
  validateUser,
  handleError
};