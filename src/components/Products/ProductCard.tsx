import React from 'react';
import { Star, ShoppingCart, Eye, Heart, Zap } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-sm font-sans max-w-xs mx-auto">
      {/* Product Image */}
      <div className="relative w-full h-32 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-28 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
              <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500 transition-colors" />
            </button>
          </div>
        </div>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {!product.inStock && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
              Out of Stock
            </span>
          )}
          {product.rating.rate >= 4.5 && (
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Bestseller
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-2">
        {/* Category */}
        <div className="mb-1">
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        {/* Rating & Reviews */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(product.rating.rate)}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-xs text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
        
        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>
          
          <button
            disabled={!product.inStock}
            className={`px-3 py-2 rounded font-medium text-xs transition-all duration-200 flex items-center space-x-1 border ${
              product.inStock
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-3 h-3" />
            <span>{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};