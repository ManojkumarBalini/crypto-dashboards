export const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://api.coingecko.com/api/v3',
    DEFAULT_CURRENCY: 'usd',
    DEFAULT_PER_PAGE: 50,
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  };
  
  export const SORT_OPTIONS = {
    MARKET_CAP_DESC: 'market_cap_desc',
    MARKET_CAP_ASC: 'market_cap_asc',
    VOLUME_DESC: 'volume_desc',
    VOLUME_ASC: 'volume_asc',
    ID_ASC: 'id_asc',
    ID_DESC: 'id_desc',
    PRICE_ASC: 'price_asc',
    PRICE_DESC: 'price_desc',
  };
  
  export const HIGHLIGHT_TYPES = {
    TOP_GAINERS: 'top_gainers',
    TOP_LOSERS: 'top_losers',
    HIGHEST_VOLUME: 'highest_volume',
    TRENDING: 'trending',
  };