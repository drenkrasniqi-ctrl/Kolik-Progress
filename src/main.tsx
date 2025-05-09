import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Categories from './pages/Categories';
import Supermarkets from './pages/Supermarkets';
import HowToCreateAccount from './pages/HowToCreateAccount';
import AccountSettings from './pages/AccountSettings';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext'; // ✅ Import Cart Context
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/supermarkets" element={<Supermarkets />} />
            <Route path="/how-to-create-account" element={<HowToCreateAccount />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
