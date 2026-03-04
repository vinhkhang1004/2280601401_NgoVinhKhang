const StorageManager = require('./bai10_1_localstorage_wrapper');

class SessionManager {
  constructor() {
    this.storage = new StorageManager();
    this.SESSION_KEY = 'auth_session';
  }

  createSession(userData) {
    
    this.storage.set(this.SESSION_KEY, userData, 30 * 60 * 1000);
  }

  getSession() {
    return this.storage.get(this.SESSION_KEY);
  }

  updateSession(newData) {
    const current = this.getSession();
    if (!current) throw new Error('No active session');
    this.createSession({ ...current, ...newData });
  }

  destroySession() {
    this.storage.remove(this.SESSION_KEY);
  }

  isSessionValid() {
    return !!this.getSession();
  }
}

module.exports = SessionManager;