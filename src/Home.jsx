import React from 'react';
import { products } from './product';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='flex bg-gray-100 py-20'>
                <div className='mx-20'>
                    <h1 className='font-bold text-5xl'>Design Your <br />
                        Comfort Zone</h1>
                    <p className='text-gray-500 text-lg leading-loose my-10'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <button className='bg-red-700 px-10 py-3 rounded-md text-white'>SHOP NOW</button>
                </div>
                <div className='relative'>
                    <img
                        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
                        className='rounded-xl'
                        style={{ width: '1100px', height: '700px' }}
                        alt="Hero Background"
                    />
                    <img
                        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"
                        className='absolute -bottom-0 right-56 rounded-xl shadow-lg'
                        style={{ width: '400px', height: '230px' }}
                        alt="Hero Background 2"
                    />
                </div>
            </div>

            {/* Featured Products */}
            <div className='bg-gray-200 py-20'>
                <h1 className='font-bold text-4xl text-center'>
                    Featured Products
                    <span className='block w-24 h-1 bg-orange-500 mt-2 mx-auto'></span>
                </h1>
                <div className='grid grid-cols-3 gap-x-10 gap-y-16 w-4/5 my-20 mx-auto'>
                    {products.slice(0, 3).map(product => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <div className='relative'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-auto rounded object-cover'
                                    style={{ width: '500px', height: '300px' }}
                                />
                                <div className='absolute top-2 right-2 bg-white p-1 rounded-full shadow'>
                                    <i className="bi bi-search text-xl"></i>
                                </div>
                            </div>
                            <p className='flex justify-between w-full mt-4 text-lg'>
                                <span className='font-medium text-gray-700'>{product.name}</span>
                                <span className='text-orange-600 font-bold'>{product.price}</span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-red-700 px-10 py-3 rounded-md text-white'>ALL PRODUCTS</button>
                </div>
            </div>

            {/* Custom Furniture Section */}
            <div className='bg-red-100 py-20 px-24'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-3xl my-10'>
                        Custom Furniture <br />
                        Built Only For You
                    </h1>
                    <p className='text-gray-900 text-lg leading-loose my-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis <br /> consectetur
                        reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                    </p>
                </div>
                <div className='flex justify-around items-center h-full w-full p-0'>
                    <div className='bg-red-400 h-full w-1/3 p-6 flex flex-col items-center m-2 rounded-lg'>
                        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4'>
                            <i className="bi bi-bullseye text-3xl"></i>
                        </div>
                        <h2 className='font-bold text-2xl text-center mb-4'>Mission</h2>
                        <p className='text-center leading-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus itaque minima quae asperiores laudantium cupiditate dolor laborum dolorem enim provident libero porro ad ducimus.
                        </p>
                    </div>
                    <div className='bg-blue-400 h-full w-1/3 p-6 flex flex-col items-center m-2 rounded-lg'>
                        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4'>
                            <i className="bi bi-lightbulb text-3xl"></i>
                        </div>
                        <h2 className='font-bold text-2xl text-center mb-4'>Vision</h2>
                        <p className='text-center leading-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus itaque minima quae asperiores laudantium cupiditate dolor laborum dolorem enim provident libero porro ad ducimus.
                        </p>
                    </div>
                    <div className='bg-green-400 h-full w-1/3 p-6 flex flex-col items-center m-2 rounded-lg'>
                        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4'>
                            <i className="bi bi-award text-3xl"></i>
                        </div>
                        <h2 className='font-bold text-2xl text-center mb-4'>Values</h2>
                        <p className='text-center leading-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus itaque minima quae asperiores laudantium cupiditate dolor laborum dolorem enim provident libero porro ad ducimus.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mx-20 my-10 bg-gray-100 p-8 rounded-lg shadow-lg'>
    <div className='mb-6 md:mb-0 md:mr-6'>
        <h2 className='font-bold text-3xl mb-2'>Join our newsletter and get 20% off</h2>
        <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam velit minus in. Voluptatum ullam, quos adipisci delectus similique aut repudiandae ipsam, eius ipsum praesentium sequi porro molestiae nobis quam.
        </p>
    </div>
    <div className='flex w-full md:w-auto'>
        <input 
            type="email" 
            name="email" 
            placeholder='Enter Email' 
            className='w-full md:w-auto px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500' 
        />
        <button className='bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 transition duration-300'>
            Subscribe
        </button>
    </div>
</div>

        </div>
    );
}

export default Home;
