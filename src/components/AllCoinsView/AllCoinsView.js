import React, { useState, useMemo } from 'react';
import useApi from '../../hooks/useApi';
import useDebounce from '../../hooks/useDebounce';
import { coinGeckoAPI } from '../../services/api';
import { sortCoins } from '../../utils/helpers';
import CoinTable from './CoinTable';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import Pagination from './Pagination';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ErrorMessage from '../Shared/ErrorMessage';
import EmptyState from '../Shared/EmptyState';

const AllCoinsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { data: coins, loading, error, refetch } = useApi(
    coinGeckoAPI.getCoinsMarkets,
    { 
      page: currentPage,
      per_page: 50 
    },
    [currentPage],
    `coins-page-${currentPage}`
  );

  const filteredAndSortedCoins = useMemo(() => {
    if (!coins) return [];

    let filtered = coins;
    
    if (debouncedSearchTerm) {
      filtered = coins.filter(coin =>
        coin.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    const sortFieldMap = {
      'market_cap_desc': 'market_cap',
      'market_cap_asc': 'market_cap',
      'price_desc': 'price',
      'price_asc': 'price',
      'volume_desc': 'volume',
      'volume_asc': 'volume',
      'change_desc': 'change',
      'change_asc': 'change',
    };

    const sortField = sortFieldMap[sortBy];
    const ascending = sortBy.includes('_asc');
    
    return sortCoins(filtered, sortField, ascending);
  }, [coins, debouncedSearchTerm, sortBy]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  if (loading) return (
    <div className="animate-fade-in">
      <LoadingSpinner text="Loading cryptocurrency data..." />
    </div>
  );
  
  if (error) return (
    <div className="animate-fade-in">
      <ErrorMessage message={error} onRetry={refetch} />
    </div>
  );

  return (
    <div className="animate-slide-up">
      <div className="card p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Cryptocurrencies</h2>
            <p className="text-gray-600">Explore the complete cryptocurrency market</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={handleSearch}
            />
            <SortDropdown 
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
          </div>
        </div>

        {filteredAndSortedCoins.length === 0 ? (
          <EmptyState 
            message="No cryptocurrencies found"
            subMessage={searchTerm ? "Try adjusting your search term" : "Please try again later"}
          />
        ) : (
          <>
            <CoinTable coins={filteredAndSortedCoins} />
            <Pagination 
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AllCoinsView;