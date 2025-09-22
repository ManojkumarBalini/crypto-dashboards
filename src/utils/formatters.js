export const formatCurrency = (value, currency = 'USD') => {
    if (value === null || value === undefined) return '-';
    
    // For very large numbers, use abbreviated format
    if (value > 1e9) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'short'
      }).format(value);
    }
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
      minimumFractionDigits: value < 1 ? 4 : 2,
      maximumFractionDigits: value < 1 ? 6 : 2,
    }).format(value);
  };
  
  export const formatNumber = (value) => {
    if (value === null || value === undefined) return '-';
    
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 2
    }).format(value);
  };
  
  export const formatPercentage = (value) => {
    if (value === null || value === undefined) return '-';
    
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };