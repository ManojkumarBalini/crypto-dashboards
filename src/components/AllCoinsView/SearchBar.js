import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative group animate-fade-in-down" style={{animationDelay: '0.3s'}}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search cryptocurrencies..."
        className="pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64 text-gray-900 placeholder-gray-500 transition-all duration-300 group-hover:border-blue-400 shadow-sm focus:shadow-lg"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center animate-fade-in"
        >
          <svg className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;