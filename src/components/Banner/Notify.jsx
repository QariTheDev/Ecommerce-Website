import React from 'react'

export default function Notify() {
    return (
        <>
            <section style={{ "height": "50%" }} className='bg-gradient-to-r from-primary-400 dark:from-primary-600 to-secondary-400 dark:to-secondary-600 max-w-full text-textColor py-8 body-font'>
                <div className='flex flex-col items-center justify-center space-y-5'>
                    <h1 className='font-bold text-4xl'>Get Notified By Our Products</h1>
                    <div className='flex flex-row justify-center items-center'>
                        <form className="sm:flex items-center max-w-sm mx-auto hidden">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 py-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            </div>
                        </form>
                        <button className='bg-primary-400 text-textColor dark:text-textColorDark p-2 rounded-r-lg'>Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    )
}