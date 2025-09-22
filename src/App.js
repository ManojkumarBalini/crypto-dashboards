import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Layout/Header';
import Highlights from './components/Highlights/Highlights';
import AllCoinsView from './components/AllCoinsView/AllCoinsView';
import Modal from './components/Shared/Modal';
import { useApp } from './contexts/AppContext';
import './App.css';

function AppContent() {
  const { isModalOpen, selectedCoin, closeCoinDetails } = useApp();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center animate-bounce-in">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white text-2xl font-bold">₿</span>
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">CryptoDashboard</h1>
          <p className="text-gray-600">Loading premium experience...</p>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4 overflow-hidden">
            <div className="h-full bg-white animate-pulse" style={{width: '70%'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10% left-5% w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-60% right-5% w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-30% left-40% w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Header />
      <main className="relative z-10 pt-4">
        <div className="container mx-auto px-4 py-6">
          <Highlights />
          <AllCoinsView />
        </div>
      </main>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeCoinDetails} 
        coin={selectedCoin} 
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;