import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white/80 backdrop-blur-sm py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 animate-fade-in-down">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover-lift">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full pulse-live border-2 border-white"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">CryptoDashboard</h1>
              <p className="text-gray-600 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-live"></span>
                Live cryptocurrency tracker • {currentTime.toLocaleTimeString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
            <div className="hidden lg:flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">Market Cap: $2.1T</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">24h Vol: $142B</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg px-4 py-2 border border-gray-300">
              <span className="text-gray-700 text-sm font-medium">Powered by CoinGecko API</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;