import React from 'react';
import { Filter, X, Sliders, Star } from 'lucide-react';
import { FilterState } from '../../types';

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  categories: string[];
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  categories
}) => {
  const handlePriceRangeChange = (index: number, value: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    newRange[index] = value;
    onFiltersChange({ priceRange: newRange });
  };

  const resetFilters = () => {
    onFiltersChange({
      category: 'all',
      priceRange: [0, 1000],
      availability: 'all',
      sortBy: 'popularity'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
            <Sliders className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center font-semibold hover:bg-blue-50 px-3 py-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 mr-1" />
          Reset
        </button>
      </div>
      <div className="space-y-8">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-4">
            Category
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                value="all"
                checked={filters.category === 'all'}
                onChange={(e) => onFiltersChange({ category: e.target.value })}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                filters.category === 'all' 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-300 group-hover:border-blue-300'
              }`}>
                {filters.category === 'all' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className={`text-sm transition-colors ${
                filters.category === 'all' ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}>
                All Categories
              </span>
            </label>
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => onFiltersChange({ category: e.target.value })}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                  filters.category === category 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-300 group-hover:border-blue-300'
                }`}>
                  {filters.category === category && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className={`text-sm transition-colors ${
                  filters.category === category ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-4">
            Price Range
          </label>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="w-4 h-px bg-gray-300"></div>
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full relative">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <div 
                className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                style={{
                  left: `${(filters.priceRange[0] / 1000) * 100}%`,
                  width: `${((filters.priceRange[1] - filters.priceRange[0]) / 1000) * 100}%`
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 font-medium">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-4">
            Availability
          </label>
          <div className="space-y-3">
            {[
              { value: 'all', label: 'All Products', count: '1,234' },
              { value: 'in_stock', label: 'In Stock Only', count: '987' },
              { value: 'out_stock', label: 'Out of Stock', count: '247' }
            ].map((option) => (
              <label key={option.value} className="flex items-center justify-between cursor-pointer group p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value={option.value}
                    checked={filters.availability === option.value}
                    onChange={(e) => onFiltersChange({ availability: e.target.value as any })}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                    filters.availability === option.value 
                      ? 'border-blue-500 bg-blue-500' 
                      : 'border-gray-300 group-hover:border-blue-300'
                  }`}>
                    {filters.availability === option.value && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className={`text-sm transition-colors ${
                    filters.availability === option.value ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{option.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-4">
            Customer Rating
          </label>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center justify-between cursor-pointer group p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only"
                  />
                  <div className="flex items-center mr-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-700">& Up</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {rating === 5 ? '234' : rating === 4 ? '567' : rating === 3 ? '123' : rating === 2 ? '45' : '12'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-4">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFiltersChange({ sortBy: e.target.value as any })}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm font-medium"
          >
            <option value="popularity">Most Popular</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};