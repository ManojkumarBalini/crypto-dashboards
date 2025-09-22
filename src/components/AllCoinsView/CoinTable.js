import React from 'react';
import CoinRow from './CoinRow';

const CoinTable = ({ coins }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="coin-table min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Change
            </th>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Volume
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {coins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;