import React from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Award,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { mockMetrics } from '../../data/mockData';

const iconMap = {
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Award
};

const gradients = [
  'from-blue-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-500',
  'from-violet-500 to-purple-600'
];

export const MetricsPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {mockMetrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap];
        const isPositive = metric.change > 0;
        const gradient = gradients[index % gradients.length];
        
        return (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`flex items-center text-sm font-semibold px-3 py-1 rounded-full ${
                  isPositive 
                    ? 'text-emerald-700 bg-emerald-50' 
                    : 'text-red-700 bg-red-50'
                }`}>
                  {isPositive ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">{metric.label}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-xs text-gray-400">vs last month</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};