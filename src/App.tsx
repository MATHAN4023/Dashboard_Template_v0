import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { ProductListing } from './pages/ProductListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="orders" element={<div className="p-6"><h1 className="text-2xl font-bold">Orders</h1><p className="text-gray-600 mt-2">Orders page coming soon...</p></div>} />
          <Route path="customers" element={<div className="p-6"><h1 className="text-2xl font-bold">Customers</h1><p className="text-gray-600 mt-2">Customers page coming soon...</p></div>} />
          <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics</h1><p className="text-gray-600 mt-2">Analytics page coming soon...</p></div>} />
          <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600 mt-2">Settings page coming soon...</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;