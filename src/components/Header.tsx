
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <img 
            src="/lovable-uploads/406ff2fc-1017-491e-9ca5-d45e9a4eba43.png" 
            alt="Zoom Logo" 
            className="h-10" 
          />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Support
          </a>
          <div className="flex items-center text-sm text-blue-500 hover:underline cursor-pointer">
            <span>English</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
