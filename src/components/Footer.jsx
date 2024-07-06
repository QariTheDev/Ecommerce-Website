import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/shopping-bag.png'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-primary-400 to-secondary-400 dark:from-primary-600 dark:to-secondary-600 text-white">
            <div className="bg-black bg-opacity-60 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 flex items-center space-x-4">
                            <img src={logo} alt="logo" className="w-8 h-8" />
                            <span className="text-2xl font-semibold">Iqbal Fabrics</span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/index" className="hover:underline">Iqbal Fabrics</Link>
                                    </li>
                                    <li>
                                        <a href="https://www.expedia.com/" className="hover:underline">Expedia</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="https://github.com/themesberg/Iqbal Fabrics" className="hover:underline">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-white sm:mx-auto" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center">© 2023 <Link to="/index" className="hover:underline">Iqbal Fabrics™</Link>. All Rights Reserved.</span>
                        <div className="flex space-x-6 mt-4 sm:mt-0">
                            <a href="#" className="text-white-500 hover:text-white">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-white-500 hover:text-white">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-white-500 hover:text-white">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fillRule="evenodd" d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-white-500 hover:text-white">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0Zm0 18.182a8.182 8.182 0 1 1 0-16.364 8.182 8.182 0 0 1 0 16.364Zm-1.818-7.273c-.814 0-1.477-.663-1.477-1.477s.663-1.477 1.477-1.477 1.477.663 1.477 1.477-.663 1.477-1.477 1.477Zm5.092 0c-.814 0-1.477-.663-1.477-1.477s.663-1.477 1.477-1.477 1.477.663 1.477 1.477-.663 1.477-1.477 1.477ZM8.49 12.327c.36-.378 1.096-.678 1.51-.787a6.145 6.145 0 0 0 1.818 0c.414.109 1.149.409 1.51.787a.624.624 0 0 0 .028-.044c.03-.047.076-.131.076-.261 0-.906-1.477-1.636-3.125-1.636S6.875 11.42 6.875 12.327c0 .13.046.214.076.261a.625.625 0 0 0 .028.044c.36-.378 1.096-.678 1.51-.787a6.144 6.144 0 0 0 1.818 0c.414.109 1.149.409 1.51.787a.625.625 0 0 0 .028-.044c.03-.047.076-.131.076-.261 0-.906-1.477-1.636-3.125-1.636S6.875 11.42 6.875 12.327c0 .13.046.214.076.261a.625.625 0 0 0 .028.044Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#" className="text-white-500 hover:text-white">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm0 18.182a8.182 8.182 0 1 1 0-16.364 8.182 8.182 0 0 1 0 16.364Zm-3.158-8.182A1.182 1.182 0 1 0 10 9a1.182 1.182 0 0 0-3.158 0Zm6.316 0A1.182 1.182 0 1 0 10 9a1.182 1.182 0 0 0 3.158 0ZM10 14.182c-2.07 0-3.75-1.568-3.75-3.5S7.93 7.182 10 7.182s3.75 1.568 3.75 3.5-1.68 3.5-3.75 3.5Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}