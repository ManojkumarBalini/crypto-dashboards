export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  export const isPositive = (value) => {
    return parseFloat(value) >= 0;
  };
  
  export const sortCoins = (coins, sortBy, ascending = false) => {
    const sorted = [...coins];
    
    switch (sortBy) {
      case 'price':
        sorted.sort((a, b) => (a.current_price - b.current_price) * (ascending ? 1 : -1));
        break;
      case 'market_cap':
        sorted.sort((a, b) => (a.market_cap - b.market_cap) * (ascending ? 1 : -1));
        break;
      case 'volume':
        sorted.sort((a, b) => (a.total_volume - b.total_volume) * (ascending ? 1 : -1));
        break;
      case 'change':
        sorted.sort((a, b) => (a.price_change_percentage_24h - b.price_change_percentage_24h) * (ascending ? 1 : -1));
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1 : -1));
        break;
      default:
        break;
    }
    
    return sorted;
  };