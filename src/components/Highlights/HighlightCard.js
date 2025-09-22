import React from 'react';
import { formatCurrency, formatPercentage, formatNumber } from '../../utils/formatters';
import { useApp } from '../../contexts/AppContext';

const HighlightCard = ({ title, coins, type, gradient, delay = 0 }) => {
  const { openCoinDetails } = useApp();

  const getValueColor = (coin) => {
    if (type === 'gainers') return 'text-green-600';
    if (type === 'losers') return 'text-red-600';
    return 'text-blue-600';
  };

  const getIconColor = (index) => {
    if (index === 0) return 'bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg';
    if (index === 1) return 'bg-gradient-to-br from-gray-400 to-gray-500 shadow-lg';
    if (index === 2) return 'bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg';
    return 'bg-gradient-to-br from-gray-300 to-gray-400';
  };

  const formatValue = (coin) => {
    switch (type) {
      case 'gainers':
      case 'losers':
        return formatPercentage(coin.price_change_percentage_24h);
      case 'volume':
        return formatNumber(coin.total_volume);
      default:
        return formatCurrency(coin.current_price);
    }
  };

  return (
    <div className={`premium-card equal-height animate-fade-in-up`} style={{animationDelay: `${delay * 0.1}s`}}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full pulse-live"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
        
        <div className="space-y-3 flex-1">
          {coins.map((coin, index) => (
            <div 
              key={coin.id}
              onClick={() => openCoinDetails(coin)}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-cyan-50 cursor-pointer transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover-lift"
              style={{animationDelay: `${(delay + index) * 0.1}s`}}
            >
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${getIconColor(index)} transform group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <img 
                  src={coin.image} 
                  alt={coin.name} 
                  className="w-8 h-8 rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-sm" 
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{coin.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{coin.symbol}</p>
                </div>
              </div>
              
              <div className="text-right ml-3">
                <p className={`font-bold truncate-number max-w-[120px] ${getValueColor(coin)} transform group-hover:scale-105 transition-transform duration-300`}>
                  {formatValue(coin)}
                </p>
                {type !== 'volume' && (
                  <p className="text-xs text-gray-600 truncate-number max-w-[120px]">
                    {formatCurrency(coin.current_price)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;