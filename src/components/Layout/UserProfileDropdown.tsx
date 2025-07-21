import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Bell, ChevronDown, Crown, Shield } from 'lucide-react';

export const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
      >
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
            <Crown className="w-2 h-2 text-white" />
          </div>
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-semibold text-gray-900">John Doe</p>
          <div className="flex items-center">
            <Shield className="w-3 h-3 text-blue-500 mr-1" />
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
          <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@company.com</p>
                <div className="flex items-center mt-1">
                  <Crown className="w-3 h-3 text-yellow-500 mr-1" />
                  <span className="text-xs text-gray-600 font-medium">Premium Member</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-2">
            <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <User className="w-4 h-4 mr-3 text-gray-400" />
              Profile Settings
            </button>
            
            <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4 mr-3 text-gray-400" />
              Account Settings
            </button>
            
            <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Bell className="w-4 h-4 mr-3 text-gray-400" />
              Notifications
              <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          
          <div className="border-t border-gray-100 mt-2 pt-2">
            <button className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};