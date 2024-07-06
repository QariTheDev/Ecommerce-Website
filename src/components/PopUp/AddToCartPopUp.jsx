import React from 'react'
import { GiCheckMark } from "react-icons/gi";

export default function AddToCartPopUp() {

    return (
        <>
            <div className='absolute top-12 right-0 transition-all duration-300 z-10'>
                <div className='bg-primary-400 dark:bg-primary-500 border-l-4 border-green-600 px-2 py-3 flex justify-center rounded-md transition-all duration-300 z-10'>
                    <p>Added To Cart Successfully</p>
                    <GiCheckMark size={20} className='text-green-600 ml-2 cursor-pointer' />
                </div>
            </div>
        </>
    )
}