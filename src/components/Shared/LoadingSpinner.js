import React from 'react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 animate-fade-in-up">
      <div className="relative">
        <div className={`loading-spinner ${sizeClasses[size]} border-blue-500`}></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-300 animate-spin" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-purple-400 animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
      </div>
      {text && (
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-medium animate-pulse-soft">{text}</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-white animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;