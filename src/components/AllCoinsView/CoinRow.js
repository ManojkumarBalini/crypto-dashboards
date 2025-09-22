import React from 'react';
import { formatCurrency, formatPercentage, formatNumber } from '../../utils/formatters';
import { useApp } from '../../contexts/AppContext';

const CoinRow = ({ coin, index }) => {
  const { openCoinDetails } = useApp();

  const isPositiveChange = coin.price_change_percentage_24h >= 0;

  return (
    <tr 
      onClick={() => openCoinDetails(coin)}
      className="table-row-hover group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-1 rounded-lg font-semibold">
            #{coin.market_cap_rank || '-'}
          </span>
          {coin.market_cap_rank <= 10 && (
            <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-bold transform group-hover:scale-110 transition-transform">
              🔥 Top 10
            </span>
          )}
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img className="h-10 w-10 rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-sm" src={coin.image} alt={coin.name} />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full pulse-live border-2 border-white"></div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{coin.name}</div>
            <div className="text-sm text-gray-500 uppercase font-medium">{coin.symbol}</div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold truncate-number max-w-[150px]">
        {formatCurrency(coin.current_price)}
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-bold transition-all duration-300 transform group-hover:scale-105 ${
          isPositiveChange 
            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
            : 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg'
        }`}>
          <span className="mr-1">{isPositiveChange ? '↗' : '↘'}</span>
          {formatPercentage(coin.price_change_percentage_24h)}
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold truncate-number max-w-[150px]">
        {formatNumber(coin.market_cap)}
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium truncate-number max-w-[150px]">
        {formatNumber(coin.total_volume)}
      </td>
    </tr>
  );
};

export default CoinRow;