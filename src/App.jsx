import React from 'react';
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import OrderHistory from './pages/OrderHistory';
import AdminPanel from './pages/AdminPanel';
import Contact from './pages/Contact';
import ProductDetail from './pages/DetailedProduct';
import Checkout from './pages/Checkout';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/menclothing" element={<MenClothing />} />
          <Route path="/womenclothing" element={<WomenClothing />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  )
}