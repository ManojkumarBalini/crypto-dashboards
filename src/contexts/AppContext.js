import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCoinDetails = (coin) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };

  const closeCoinDetails = () => {
    setIsModalOpen(false);
    setSelectedCoin(null);
  };

  const value = {
    selectedCoin,
    isModalOpen,
    openCoinDetails,
    closeCoinDetails,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;