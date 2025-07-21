import React from 'react';
import { Search, Bell, MessageSquare, Calendar } from 'lucide-react';
import { UserProfileDropdown } from './UserProfileDropdown';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 px-4 lg:px-8 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Search - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl ml-0 lg:ml-0">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm shadow-sm"
            />
          </div>
        </div>

        {/* Mobile: Just show the right side actions */}
        <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
          {/* Mobile Search Button */}
          <button className="md:hidden p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200">
            <Search className="w-5 h-5" />
          </button>

          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hidden sm:block">
            <Calendar className="w-5 h-5" />
          </button>
          
          <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
              2
            </span>
          </button>
          
          <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
              3
            </span>
          </button>
          
          <div className="w-px h-8 bg-gray-200 mx-2 hidden sm:block"></div>
          
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
};