# RetailHub E-commerce Dashboard Template

A modern, responsive, and customizable e-commerce dashboard template built with React, TypeScript, Vite, and Tailwind CSS. Includes beautiful UI components, real data fetching, and a clean codebase for rapid prototyping or production use.

---

## ✨ Features

- **Dashboard Overview**: Metrics panel, sales chart, quick stats, and top products
- **Product Listing**: Grid/list views, filters, search, pagination, and real API integration
- **Orders Table**: Sortable, filterable, and searchable recent orders
- **Responsive Layout**: Sidebar navigation, sticky header, and mobile support
- **User Profile Dropdown**: Account actions and notifications
- **Modern UI**: Tailwind CSS, gradients, icons (Lucide), and smooth animations
- **TypeScript**: Full type safety across the codebase
- **Easy Customization**: Modular components and clear folder structure

---

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   # or
yarn
   ```

2. **Run the development server**
   ```bash
   npm run dev
   # or
yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**
   ```bash
   npm run build
   # or
yarn build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   # or
yarn preview
   ```

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/) (for charts)
- [React Router v6](https://reactrouter.com/)

---

## 📁 Folder Structure

```
src/
  components/
    Dashboard/      # MetricsPanel, SalesChart, OrdersTable
    Layout/         # Header, Sidebar, Layout, UserProfileDropdown
    Products/       # ProductCard, ProductFilters, Pagination
  data/             # mockData.ts (metrics, orders, sales)
  hooks/            # useProducts.ts (fetches products from fakestoreapi)
  pages/            # Dashboard.tsx, ProductListing.tsx
  types/            # TypeScript types
  index.css         # Tailwind base styles
  main.tsx          # App entry point
```

---

## 🧩 Customization

- **Styling**: Tweak Tailwind classes or extend the config in `tailwind.config.js`.
- **Data**: Replace `src/data/mockData.ts` or connect to your own API.
- **Components**: All UI is modular—swap, extend, or add new ones easily.
- **Routing**: Add new pages via `src/pages/` and update `src/App.tsx`.

---

## 📦 Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

---

## 📄 License

MIT. Free for personal and commercial use. Attribution appreciated but not required.

---

## 🙌 Credits

- [Fake Store API](https://fakestoreapi.com/) for demo product data
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---

## 💡 Screenshots

> Add your own screenshots or GIFs here to showcase the UI!
