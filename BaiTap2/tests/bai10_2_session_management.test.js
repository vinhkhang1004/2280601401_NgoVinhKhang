const SessionManager = require('../src/bai10_2_session_management');

describe('Bài 10.2: Session Management', () => {
  let sm;
  beforeEach(() => { sm = new SessionManager(); sm.destroySession(); });

  test('create and get session', () => {
    sm.createSession({ id: 1 });
    expect(sm.isSessionValid()).toBe(true);
    expect(sm.getSession().id).toBe(1);
  });

  test('destroy session', () => {
    sm.createSession({ id: 1 });
    sm.destroySession();
    expect(sm.isSessionValid()).toBe(false);
  });
});