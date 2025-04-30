
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="h-12 w-12 rounded-full border-4 border-t-zoom-blue border-gray-200 animate-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
