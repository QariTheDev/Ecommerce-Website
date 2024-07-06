import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Slices/Products/MenWearSlice';
import { useNavigate } from 'react-router-dom';

export default function MenClothing() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, loading, error } = useSelector(state => state.menWear);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <>
            <div className='relative flex flex-col bg-white dark:bg-black items-center justify-center overflow-hidden'>
                <h1 className='text-4xl font-bold text-textColor dark:text-textColorDark mb-3 pt-3'>Men's Wear</h1>

                {loading ? (
                    <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 py-10 px-4 sm:px-8 lg:px-12 xl:px-24">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                                {products.map((product, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                                        <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{product.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-1">{product.description.length > 35 ? product.description.slice(0, 35) + '...' : product.description}</p>
                                            <p className='text-gray-600 dark:text-gray-300 mb-1 font-bold'>${product.price}</p>
                                            <button 
                                            onClick={() => handleProductClick(product)}
                                            className='my-4 text-white bg-gradient-to-r from-buttonColor to-primary-400 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 focus:ring-primary-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-3 sm:px-4 sm:py-2'>
                                                Order Now
                                            </button>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-1">
                                                    <FaStar className="text-yellow-400" />
                                                    <span className="text-gray-600 dark:text-gray-300">{product.rating.rate}</span>
                                                </div>
                                                <span className="text-gray-600 dark:text-gray-300">({product.rating.count})</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
}