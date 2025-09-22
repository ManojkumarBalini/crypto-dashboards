import React from 'react';
import useApi from '../../hooks/useApi';
import { coinGeckoAPI } from '../../services/api';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ErrorMessage from '../Shared/ErrorMessage';
import { useApp } from '../../contexts/AppContext';

const TrendingCoins = () => {
  const { data, loading, error } = useApi(
    coinGeckoAPI.getTrending,
    {},
    [],
    'trending-coins'
  );
  const { openCoinDetails } = useApp();

  if (loading) return (
    <div className="card equal-height">
      <div className="p-6 flex items-center justify-center h-full">
        <LoadingSpinner size="small" text="Loading trends..." />
      </div>
    </div>
  );
  
  if (error) return (
    <div className="card equal-height">
      <div className="p-6">
        <ErrorMessage message={error} />
      </div>
    </div>
  );

  const trendingCoins = data?.coins?.slice(0, 5) || [];

  return (
    <div className="card equal-height hover-lift">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">🔥 Trending Now</h3>
          <div className="w-2 h-2 bg-green-500 rounded-full pulse-live"></div>
        </div>
        
        <div className="space-y-3 flex-1">
          {trendingCoins.map((item, index) => (
            <div 
              key={item.item.id}
              onClick={() => openCoinDetails(item.item)}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-orange-500 to-red-500">
                  {index + 1}
                </div>
                <img src={item.item.thumb} alt={item.item.name} className="w-8 h-8 rounded-full" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 truncate">{item.item.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{item.item.symbol}</p>
                </div>
              </div>
              
              <div className="text-right ml-3">
                <p className="text-sm text-gray-600 font-medium">
                  Rank #{item.item.market_cap_rank || 'N/A'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;