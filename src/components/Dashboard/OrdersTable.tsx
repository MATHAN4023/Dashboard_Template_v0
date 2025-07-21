import React, { useState } from 'react';
import { ChevronDown, Filter, Search, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import { mockOrders } from '../../data/mockData';
import { Order } from '../../types';

export const OrdersTable: React.FC = () => {
  const [sortField, setSortField] = useState<keyof Order>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      processing: 'bg-blue-50 text-blue-700 border-blue-200',
      shipped: 'bg-purple-50 text-purple-700 border-purple-200',
      delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cancelled: 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[status];
  };

  const getPaymentMethodDisplay = (method: Order['paymentMethod']) => {
    const methods = {
      credit_card: 'Credit Card',
      paypal: 'PayPal',
      bank_transfer: 'Bank Transfer',
      cash: 'Cash'
    };
    return methods[method];
  };

  const filteredAndSortedOrders = mockOrders
    .filter(order => statusFilter === 'all' || order.status === statusFilter)
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const handleSort = (field: keyof Order) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Orders</h2>
            <p className="text-gray-600">Track and manage your latest orders</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm w-64"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            <button className="flex items-center px-4 py-3 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors bg-white shadow-sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50/50">
            <tr>
              <th 
                className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center">
                  Order ID
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </div>
              </th>
              <th 
                className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('customer')}
              >
                <div className="flex items-center">
                  Customer
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </div>
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th 
                className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center">
                  Amount
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </div>
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Payment Method
              </th>
              <th 
                className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">
                  Date
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </div>
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredAndSortedOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{order.customer}</span>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-900">${order.amount.toFixed(2)}</span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="text-sm text-gray-600">{getPaymentMethodDisplay(order.paymentMethod)}</span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === order.id ? null : order.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                    
                    {activeDropdown === order.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-10">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4 mr-3" />
                          View Details
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                          <Edit className="w-4 h-4 mr-3" />
                          Edit Order
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                          <Trash2 className="w-4 h-4 mr-3" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};