import React from 'react';
import useApi from '../../hooks/useApi';
import { coinGeckoAPI } from '../../services/api';
import HighlightCard from './HighlightCard';
import TrendingCoins from './TrendingCoins';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ErrorMessage from '../Shared/ErrorMessage';

const Highlights = () => {
  const { data: coinsData, loading, error } = useApi(
    coinGeckoAPI.getCoinsMarkets,
    { per_page: 100 },
    [],
    'coins-highlights'
  );

  if (loading) return (
    <div className="animate-fade-in-up">
      <LoadingSpinner text="Loading market highlights..." />
    </div>
  );
  
  if (error) return (
    <div className="animate-fade-in-up">
      <ErrorMessage message={error} />
    </div>
  );
  
  if (!coinsData) return null;

  const topGainers = [...coinsData]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 5);

  const topLosers = [...coinsData]
    .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    .slice(0, 5);

  const highestVolume = [...coinsData]
    .sort((a, b) => b.total_volume - a.total_volume)
    .slice(0, 5);

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 animate-fade-in-up">
        <div>
          <h2 className="text-4xl font-bold gradient-text mb-3">Market Highlights</h2>
          <p className="text-gray-600 text-lg">Real-time cryptocurrency performance metrics and trends</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-6 py-3 shadow-lg mt-4 lg:mt-0">
          <span className="text-white font-semibold">Last Updated: Just now</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <HighlightCard 
            title="🚀 Top Gainers" 
            coins={topGainers} 
            type="gainers"
            gradient="from-green-500 to-emerald-600"
            delay={0}
          />
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <HighlightCard 
            title="📉 Top Losers" 
            coins={topLosers} 
            type="losers"
            gradient="from-red-500 to-rose-600"
            delay={1}
          />
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <HighlightCard 
            title="💎 Highest Volume" 
            coins={highestVolume} 
            type="volume"
            gradient="from-blue-500 to-cyan-600"
            delay={2}
          />
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default Highlights;