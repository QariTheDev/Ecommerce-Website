import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../Redux/Slices/Cart/CartSlice';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(cartItems);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCheckout = () => {
        navigate('/Checkout');
        dispatch(clearCart());
    }

    return (
        <div className="drop-shadow-lg border-2 p-5">
            <h1 className="text-2xl font-bold mb-5 flex justify-center items-center gap-3">Shopping Cart <FaCartShopping /></h1>
            {cartItems.length > 0 ? (
                <div className="space-y-3">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-3">
                            <div className="flex items-center space-x-3">
                                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
                                <div>
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-5">
                        <button
                            onClick={handleClearCart}
                            className="text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg"
                        >
                            Clear Cart
                        </button>

                        <div className='flex justify-center items-center space-x-4'>
                            <span className="text-lg font-bold">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                            <button
                            onClick={handleCheckout} 
                            className='text-white bg-primary-400 hover:bg-primary-600 px-3 py-2 rounded-lg'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;