import React from 'react';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'market_cap_desc', label: 'Market Cap (High to Low)' },
    { value: 'market_cap_asc', label: 'Market Cap (Low to High)' },
    { value: 'price_desc', label: 'Price (High to Low)' },
    { value: 'price_asc', label: 'Price (Low to High)' },
    { value: 'volume_desc', label: 'Volume (High to Low)' },
    { value: 'volume_asc', label: 'Volume (Low to High)' },
    { value: 'change_desc', label: '24h Change (High to Low)' },
    { value: 'change_asc', label: '24h Change (Low to High)' },
  ];

  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;