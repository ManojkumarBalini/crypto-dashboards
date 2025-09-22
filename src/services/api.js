import axios from 'axios';
import { API_CONFIG } from '../utils/constants';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
});

// Request interceptor to add API key
api.interceptors.request.use((config) => {
  const apiKey = process.env.REACT_APP_COINGECKO_API_KEY;
  if (apiKey) {
    config.params = {
      ...config.params,
      x_cg_demo_api_key: apiKey,
    };
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    throw error;
  }
);

export const coinGeckoAPI = {
  // Get coins markets data with pagination
  getCoinsMarkets: (params = {}) => {
    const defaultParams = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 50,
      page: 1,
      price_change_percentage: '24h',
      sparkline: false,
    };
    
    return api.get('/coins/markets', {
      params: { ...defaultParams, ...params },
    });
  },

  // Get trending coins
  getTrending: () => {
    return api.get('/search/trending');
  },

  // Get single coin details
  getCoinById: (id) => {
    return api.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    });
  },
};

export default api;