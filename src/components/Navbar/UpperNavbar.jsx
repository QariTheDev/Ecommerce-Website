import React, { useState } from 'react';
import shoppingBag from '../../images/shopping-bag.png';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { FaCartShopping } from "react-icons/fa6";
import Cart from '../Cart/Cart';
import { BsIncognito } from "react-icons/bs";
import { useNavigate, Link } from 'react-router-dom';

export default function UpperNavbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const handleAdminPanelClick = () => {
        <Link to="/admin-panel"></Link>
    }

    return (
        <>
            <nav className="bg-primary-300 dark:bg-primary-600 w-full outline-none">
                <div className="max-w-screen-xl flex items-center justify-between p-2 mx-auto pl-4 pr-4">
                    <div className="flex items-center space-x-3">
                        <img src={shoppingBag} alt="logo" className="w-8 h-8" />
                        <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-primary-700 dark:text-textColor">
                            Iqbal Fabrics
                        </span>
                    </div>

                    <div className="flex space-x-1 sm:space-x-3 items-center">
                        <form className="sm:flex items-center max-w-sm mx-auto hidden">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 py-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search"
                                    required
                                />
                            </div>
                        </form>

                        <button
                            type="button"
                            onClick={handleCartClick}
                            className="text-white drop-shadow-lg bg-gradient-to-r from-buttonColor to-primary-400 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 focus:ring-primary-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-3 sm:px-4 py-2"
                        >
                            <FaCartShopping />
                        </button>

                        <DarkModeSwitch />

                        <Link to="/admin-panel">
                            <button
                                type="button"
                                className="text-white drop-shadow-lg bg-gradient-to-r from-buttonColor to-primary-400 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 focus:ring-primary-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-3 sm:px-4 py-2">
                                <BsIncognito />
                            </button>
                        </Link>

                    </div>
                </div>
            </nav>

            {isCartOpen && <Cart isOpen={isCartOpen} onClose={handleCloseCart} />}
        </>
    );
}