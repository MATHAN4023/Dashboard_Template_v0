export interface Order {
  id: string;
  customer: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  amount: number;
  paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer' | 'cash';
  date: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  inStock: boolean;
}

export interface Metric {
  label: string;
  value: string;
  change: number;
  icon: string;
}

export interface SalesData {
  day: string;
  sales: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  availability: 'all' | 'in_stock' | 'out_stock';
  sortBy: 'price_low' | 'price_high' | 'popularity' | 'rating';
}