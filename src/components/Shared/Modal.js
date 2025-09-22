import React, { useEffect } from 'react';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const Modal = ({ isOpen, onClose, coin }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !coin) return null;

  const isPositiveChange = coin.price_change_percentage_24h >= 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Premium Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-bounce-in premium-card border border-gray-200">
        {/* Animated Header */}
        <div className="relative p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img src={coin.image} alt={coin.name} className="w-16 h-16 rounded-xl shadow-lg" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full pulse-live border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{coin.name}</h2>
              <p className="text-gray-600 uppercase font-semibold">{coin.symbol}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Animated Price Display */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 animate-pulse-soft">
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {formatCurrency(coin.current_price)}
            </p>
            <div className={`inline-flex items-center text-lg font-bold px-4 py-2 rounded-full ${
              isPositiveChange 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
            }`}>
              <span className="mr-2">{isPositiveChange ? '↗' : '↘'}</span>
              {formatPercentage(coin.price_change_percentage_24h)}
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center hover-lift">
              <p className="text-gray-600 text-sm mb-1">Market Rank</p>
              <p className="text-gray-900 font-bold text-lg">#{coin.market_cap_rank || 'N/A'}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center hover-lift">
              <p className="text-gray-600 text-sm mb-1">Market Cap</p>
              <p className="text-gray-900 font-bold text-lg">{formatCurrency(coin.market_cap)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center hover-lift">
              <p className="text-gray-600 text-sm mb-1">24h Volume</p>
              <p className="text-gray-900 font-bold text-lg">{formatCurrency(coin.total_volume)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center hover-lift">
              <p className="text-gray-600 text-sm mb-1">All-Time High</p>
              <p className="text-gray-900 font-bold text-lg">{formatCurrency(coin.ath)}</p>
            </div>
          </div>

          {/* Additional Info with Animation */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-gray-600 text-sm mb-2">24h Performance</p>
            <p className={`text-lg font-semibold ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(coin.price_change_24h)} ({formatPercentage(coin.price_change_percentage_24h)})
            </p>
          </div>
        </div>
        
        {/* Enhanced Footer */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <button
            onClick={onClose}
            className="w-full btn-premium py-3 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;