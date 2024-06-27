import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import { CartProvider } from './CartContext'; // Importing CartProvider
import Login from './Login';
import Singnup from './Signup';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Singnup />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
