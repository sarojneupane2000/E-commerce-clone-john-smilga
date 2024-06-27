import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from './product'; 

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor', 'Bathroom'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products
        .filter(product => 
            (selectedCategory === 'All' || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div className='mx-24 my-10'>
            <div className='flex items-center mb-8'>
                <input
                    type="text"
                    className='bg-slate-200 text-black rounded-md w-64 h-10 mr-4'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <i className="bi bi-grid-fill text-2xl ml-4"></i>
                <i className="bi bi-list text-3xl ml-4"></i>
                <p className='mx-5 text-xl'>{filteredProducts.length} Products Found</p>
                <div className="flex-grow h-px bg-gray-300 ml-4"></div>
                <div className='ml-4'>
                    <span>Sort By </span>
                    <select className='ml-2'>
                        <option>Price (Highest)</option>
                        <option>Price (Lowest)</option>
                        <option>Name (A-Z)</option>
                        <option>Name (Z-A)</option>
                    </select>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-16 w-1/5'>
                    <h2 className='font-bold mb-4'>Category</h2>
                    <ul className='space-y-2'>
                        {categories.map(category => (
                            <li
                                key={category}
                                className={`cursor-pointer ${selectedCategory === category ? 'font-bold underline text-orange-600' : 'text-black'}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                    <h2 className='font-bold mt-6 mb-4'>Company</h2>
                    <select className='bg-slate-200 text-black rounded-md w-full h-10'>
                        <option>all</option>
                        <option>ikea</option>
                        <option>liddy</option>
                        <option>marcos</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-x-10 gap-y-16 w-4/5'>
                    {filteredProducts.slice(0,22).map(product => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <div className='relative group'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-auto rounded object-cover transition duration-300 ease-in-out transform group-hover:scale-105'
                                    style={{ width: '400px', height: '230px' }}
                                />
                                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out rounded'></div>
                                <Link to={`/products/${product.id}`} className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                                    <i className="bi bi-search text-4xl text-white"></i>
                                </Link>
                            </div>
                            <p className='flex justify-between w-full mt-4 text-lg'>
                                <span className='font-medium text-gray-700'>{product.name}</span>
                                <span className='text-orange-600 font-bold'>{product.price}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
