import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const App = () => {
  const [cart,setCart] =useState([]);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path ='/cart' element={<Cart cartItems={cart}/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
