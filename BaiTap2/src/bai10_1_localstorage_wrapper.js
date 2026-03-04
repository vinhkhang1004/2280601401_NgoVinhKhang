class StorageManager {
  constructor() {
    // Mock localStorage cho môi trường Node.js (Jest)
    this.storage = typeof window !== 'undefined' ? window.localStorage : {
      _data: {},
      setItem(k, v) { this._data[k] = String(v); },
      getItem(k) { return this._data[k] || null; },
      removeItem(k) { delete this._data[k]; },
      clear() { this._data = {}; },
      get length() { return Object.keys(this._data).length; },
      key(i) { return Object.keys(this._data)[i]; }
    };
  }

  set(key, value, ttl = null) {
    const item = {
      value,
      expiry: ttl ? Date.now() + ttl : null
    };
    this.storage.setItem(key, JSON.stringify(item));
  }

  get(key) {
    const itemStr = this.storage.getItem(key);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr);
      if (item.expiry && Date.now() > item.expiry) {
        this.storage.removeItem(key);
        return null;
      }
      return item.value;
    } catch (e) {
      return null;
    }
  }

  remove(key) { this.storage.removeItem(key); }
  clear() { this.storage.clear(); }
  
  getAll() {
    const all = {};
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      all[key] = this.get(key);
    }
    return all;
  }
}

module.exports = StorageManager;