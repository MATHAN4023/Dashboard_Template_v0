import React from 'react';
import { MetricsPanel } from '../components/Dashboard/MetricsPanel';
import { SalesChart } from '../components/Dashboard/SalesChart';
import { OrdersTable } from '../components/Dashboard/OrdersTable';
import { Clock, Users, Package, TrendingUp, Calendar, Star } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="p-4 md:p-8">
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-gray-600">Here's what's happening with your store today.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Today, Jan 15</span>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Export Report
              </button>
            </div>
          </div>
        </div>
        
        <MetricsPanel />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="space-y-6">
            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-700">New Customers</span>
                  </div>
                  <span className="font-bold text-blue-600">47</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-xl">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="text-sm text-gray-700">Pending Orders</span>
                  </div>
                  <span className="font-bold text-amber-600">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
                  <div className="flex items-center">
                    <Package className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm text-gray-700">Low Stock Items</span>
                  </div>
                  <span className="font-bold text-red-600">5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-emerald-500 mr-2" />
                    <span className="text-sm text-gray-700">Return Requests</span>
                  </div>
                  <span className="font-bold text-emerald-600">3</span>
                </div>
              </div>
            </div>

            {/* Top Products Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Top Products</h3>
              <div className="space-y-4">
                {[
                  { name: 'Wireless Headphones', sales: 234, trend: '+12%' },
                  { name: 'Smart Watch', sales: 189, trend: '+8%' },
                  { name: 'Laptop Stand', sales: 156, trend: '+15%' }
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} sales</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {product.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <OrdersTable />
      </div>
    </div>
  );
};