// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const getPathName = () => {
        switch(location.pathname) {
            case '/':
                return 'HOME';
            case '/about':
                return 'HOME / ABOUT';
            case '/products':
                return 'HOME / PRODUCTS';
            default:
                return 'HOME';
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center py-2 px-16'>
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="logo" />
                <ul className='flex gap-5 text-xl items-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
                <div className='flex gap-5 text-2xl items-center relative'>
                    <div className='relative'>
                        <p className='flex items-center'>
                            Cart <i className="bi bi-cart-plus-fill"></i>
                            <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>0</span>
                        </p>
                    </div>
                    <p>Login <i className="bi bi-person-fill-add"></i></p>
                </div>
            </div>
            <div className='bg-orange-200 p-6'>
                <h1 className='font-bold text-3xl mx-16 my-20 text-gray-400'>{getPathName()}</h1>
            </div>
        </div>
    );
}

export default Header;
