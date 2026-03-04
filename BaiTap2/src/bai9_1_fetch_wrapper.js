class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.interceptors = { request: [], response: [] };
  }

  addRequestInterceptor(fn) { this.interceptors.request.push(fn); }
  addResponseInterceptor(fn) { this.interceptors.response.push(fn); }

  async _fetch(endpoint, options) {
    let config = { ...options, url: this.baseUrl + endpoint };
    
    // Run request interceptors
    for (const fn of this.interceptors.request) {
      config = fn(config);
    }

    // Mock fetch nếu không tồn tại (cho environment test)
    const fetchFn = global.fetch || (() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: 'mock data' })
    }));

    const response = await fetchFn(config.url, config);
    
    let result = {
      ok: response.ok,
      status: response.status,
      data: await response.json()
    };

    // Run response interceptors
    for (const fn of this.interceptors.response) {
      result = fn(result);
    }

    if (!result.ok) throw new Error(`Request failed: ${result.status}`);
    return result.data;
  }

  get(url) { return this._fetch(url, { method: 'GET' }); }
  post(url, data) { return this._fetch(url, { method: 'POST', body: JSON.stringify(data) }); }
  put(url, data) { return this._fetch(url, { method: 'PUT', body: JSON.stringify(data) }); }
  delete(url) { return this._fetch(url, { method: 'DELETE' }); }
}

module.exports = HttpClient;