import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Slices/Cart/CartSlice';
import AddToCartPopUp from '../components/PopUp/AddToCartPopUp';
import { useState } from 'react';

export default function DetailedProduct() {
    const location = useLocation();
    const { product } = location.state || {};
    const dispatch = useDispatch();
    const [buttonClicked, setButtonClicked] = useState(false);

    const FirstLetterCapital = (text) => {
        return text[0].toUpperCase() + text.slice(1);
    }

    const handleAddToCart = () => {
        console.log(product);
        dispatch(addToCart(product));
        setButtonClicked(true);

        setTimeout(() => {
            setButtonClicked(false);
        }, 2000);
    }

    return (
        <>
            <section className='relative flex flex-col bg-white dark:bg-black items-center justify-center overflow-hidden'>
                <div className="container mx-auto p-5">
                    <div className="flex flex-col md:flex-row md:space-x-3 space-y-3">
                        <div className="md:w-1/2 border-2 drop-shadow-lg">
                            <img src={product.image} alt="product" className="w-full h-96 object-cover" />
                        </div>
                        <div className="md:w-1/2 p-5 space-y-3">
                            <div className='flex items-center justify-center'>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                <p className='text-lg text-gray-600 dark:text-gray-300 ml-2'><strong>{product.rating.rate}</strong></p>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{FirstLetterCapital(product.title)}</h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">{FirstLetterCapital(product.category)}</p>
                            <p className="text-base text-gray-600 dark:text-gray-300">{FirstLetterCapital(product.description)}</p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 font-bold mt-5">${product.price}</p>
                            <button onClick={handleAddToCart} className="bg-primary-600 text-white p-2 rounded-lg mt-5 hover:bg-primary-400 duration-300 transition-all ease-in-out">Add to Cart</button>
                            {   buttonClicked &&
                                <AddToCartPopUp />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
