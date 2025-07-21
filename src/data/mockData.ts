import { Order, SalesData, Metric } from '../types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'Sarah Johnson',
    status: 'delivered',
    amount: 249.99,
    paymentMethod: 'credit_card',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Michael Chen',
    status: 'processing',
    amount: 149.50,
    paymentMethod: 'paypal',
    date: '2024-01-15'
  },
  {
    id: 'ORD-003',
    customer: 'Emma Wilson',
    status: 'shipped',
    amount: 89.99,
    paymentMethod: 'credit_card',
    date: '2024-01-14'
  },
  {
    id: 'ORD-004',
    customer: 'David Brown',
    status: 'pending',
    amount: 329.99,
    paymentMethod: 'bank_transfer',
    date: '2024-01-14'
  },
  {
    id: 'ORD-005',
    customer: 'Lisa Garcia',
    status: 'delivered',
    amount: 199.99,
    paymentMethod: 'credit_card',
    date: '2024-01-13'
  },
  {
    id: 'ORD-006',
    customer: 'James Smith',
    status: 'cancelled',
    amount: 79.99,
    paymentMethod: 'paypal',
    date: '2024-01-13'
  }
];

export const mockSalesData: SalesData[] = [
  { day: 'Mon', sales: 1200 },
  { day: 'Tue', sales: 1900 },
  { day: 'Wed', sales: 1600 },
  { day: 'Thu', sales: 2100 },
  { day: 'Fri', sales: 2800 },
  { day: 'Sat', sales: 3200 },
  { day: 'Sun', sales: 2400 }
];

export const mockMetrics: Metric[] = [
  {
    label: 'Total Orders',
    value: '1,234',
    change: 12.5,
    icon: 'ShoppingBag'
  },
  {
    label: 'Revenue Today',
    value: '$12,450',
    change: 8.2,
    icon: 'DollarSign'
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: -2.1,
    icon: 'TrendingUp'
  },
  {
    label: 'Top Product',
    value: 'Wireless Headphones',
    change: 15.3,
    icon: 'Award'
  }
];