import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import shoppingBag from '../../images/shopping-bag.png';

export default function LowerNavbar() {
    const loc = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Electronics', path: '/electronics' },
        { name: "Men's Wear", path: '/menclothing' },
        { name: "Women's Wear", path: '/womenclothing' },
        { name: 'Order History', path: '/order-history' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => {
        return loc.pathname === path ? 'text-primary-600 dark:text-primary-600' : 'text-textColor dark:text-textColorDark';
    };

    return (
        <nav className="bg-gray-50 dark:bg-gray-700 w-full flex drop-shadow-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
                <div className="flex sm:order-2">
                    <button 
                        data-collapse-toggle="navbar-sticky"
                        type="button" 
                        onClick={() => { document.getElementById('navbar-sticky').classList.toggle('hidden') }}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-sticky" 
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-center hidden w-full sm:flex sm:w-auto sm:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 w-full sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 sm:space-x-8 sm:flex-row sm:mt-0 sm:border-0 sm:bg-gray-50 dark:bg-gray-700 sm:dark:bg-gray-700 dark:border-gray-700">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={`block py-2 px-3 rounded sm:bg-transparent sm:p-0 ${isActive(item.path)} hover:text-primary-600 dark:hover:text-primary-400`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}