const {
  ValidationError,
  NetworkError,
  AuthenticationError,
  validateUser,
  handleError
} = require('../src/bai6_1_custom_errors');

describe('Bài 6.1: Custom Errors', () => {
  test('validateUser throws ValidationError', () => {
    expect(() => validateUser({})).toThrow(ValidationError);
    expect(() => validateUser({ username: 'Nam', age: -5 })).toThrow('Invalid age');
  });

  test('handleError returns correct object format', () => {
    const validErr = new ValidationError('Bad input');
    expect(handleError(validErr)).toEqual({
      type: 'validation',
      statusCode: 400,
      message: 'Bad input'
    });

    const netErr = new NetworkError('Server down', 503);
    expect(handleError(netErr)).toEqual({
      type: 'network',
      statusCode: 503,
      message: 'Server down'
    });

    const authErr = new AuthenticationError('Login failed');
    expect(handleError(authErr)).toEqual({
      type: 'authentication',
      statusCode: 401,
      message: 'Login failed'
    });
  });
});