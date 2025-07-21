import { useState, useEffect } from 'react';
import { Product, FilterState } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 1000],
    availability: 'all',
    sortBy: 'popularity'
  });

  const itemsPerPage = 12;

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, filters]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      
      // Add mock inStock property and enhance data
      const enhancedData = data.map((product: any) => ({
        ...product,
        inStock: Math.random() > 0.2, // 80% chance of being in stock
        rating: {
          ...product.rating,
          rate: Math.round(product.rating.rate * 10) / 10
        }
      }));
      
      setProducts(enhancedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Availability filter
    if (filters.availability === 'in_stock') {
      filtered = filtered.filter(product => product.inStock);
    } else if (filters.availability === 'out_stock') {
      filtered = filtered.filter(product => !product.inStock);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price_low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'popularity':
        filtered.sort((a, b) => b.rating.count - a.rating.count);
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = [...new Set(products.map(p => p.category))];

  return {
    products: currentProducts,
    loading,
    filters,
    updateFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    totalProducts: filteredProducts.length,
    categories
  };
};