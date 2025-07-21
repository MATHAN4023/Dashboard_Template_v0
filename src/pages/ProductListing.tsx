import React, { useState } from 'react';
import { Grid, List, Package, Filter, Search, SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/Products/ProductCard';
import { ProductFilters } from '../components/Products/ProductFilters';
import { Pagination } from '../components/Products/Pagination';
import { useProducts } from '../hooks/useProducts';

export const ProductListing: React.FC = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const {
    products,
    loading,
    filters,
    updateFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    totalProducts,
    categories
  } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Package className="w-8 h-8 text-white" />
          </div>
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-gray-700">Loading amazing products...</p>
          <p className="text-sm text-gray-500 mt-1">Please wait while we fetch the latest items</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="p-4 md:p-8">
        {/* Full-width Header */}
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Discover Products ✨
              </h1>
              <p className="text-gray-600">Find the perfect items from our curated collection</p>
            </div>
            {/* Mobile Search */}
            <div className="md:hidden">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Header Controls */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Package className="w-5 h-5 mr-2" />
                      <span className="text-sm font-semibold">
                        {totalProducts.toLocaleString()} products found
                      </span>
                    </div>
                    
                    {/* Desktop Search */}
                    <div className="hidden md:block">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search products..."
                          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm w-64"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end mb-4">
                    <button
                      onClick={() => setShowMobileFilters(true)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Open Filters"
                    >
                      <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8 w-full">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Package className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No products found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We couldn't find any products matching your current filters. Try adjusting your search criteria.
                  </p>
                  <button
                    onClick={() => updateFilters({
                      category: 'all',
                      priceRange: [0, 1000],
                      availability: 'all',
                      sortBy: 'popularity'
                    })}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Filters Overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)}></div>
              <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <ProductFilters
                    filters={filters}
                    onFiltersChange={updateFilters}
                    categories={categories}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};