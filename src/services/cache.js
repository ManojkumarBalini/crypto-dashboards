import { API_CONFIG } from '../utils/constants';

class APICache {
  constructor() {
    this.cache = new Map();
  }

  set(key, data, duration = API_CONFIG.CACHE_DURATION) {
    const expiry = Date.now() + duration;
    this.cache.set(key, { data, expiry });
  }

  get(key) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  delete(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

export const apiCache = new APICache();