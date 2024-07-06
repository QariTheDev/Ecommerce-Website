import React from 'react';
import womenShopping from '../../images/womenShopping.png';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Banner() {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between py-10 px-4 sm:px-8 md:px-12 lg:px-20'>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='drop-shadow-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out mb-6 md:mb-0'>
                    <img src={womenShopping} alt="Women Shopping" className='w-full h-auto max-w-md mx-auto md:max-w-none' />
                </motion.div>

                <div className='flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12 lg:px-20 text-center md:text-left'>
                    <h2 className='text-textColor dark:text-textColorDark text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4'>
                        Get 50% Off
                    </h2>
                    <p className='text-textColor dark:text-textColorDark text-base sm:text-lg lg:text-xl mb-6'>
                        Get a bumper discount of up to 50% on all products!
                    </p>

                    <ul className='flex flex-col space-y-4'>
                        <li className='flex items-center'>
                            <MdOutlineProductionQuantityLimits className='bg-secondary-400 w-8 h-auto rounded-full p-1 mr-3' />
                            <span className='text-textColor dark:text-textColorDark text-lg'>Quality Products</span>
                        </li>
                        <li className='flex items-center'>
                            <CiDeliveryTruck className='bg-pink-400 w-8 h-auto rounded-full p-1 mr-3' />
                            <span className='text-textColor dark:text-textColorDark text-lg'>Fast & Efficient Delivery</span>
                        </li>
                        <li className='flex items-center'>
                            <MdOutlinePayment className='bg-primary-400 w-8 h-auto rounded-full p-1 mr-3' />
                            <span className='text-textColor dark:text-textColorDark text-lg'>Easy Payment Methods</span>
                        </li>
                        <li className='flex items-center'>
                            <MdLocalOffer className='bg-cyan-400 w-8 h-auto rounded-full p-1 mr-3' />
                            <span className='text-textColor dark:text-textColorDark text-lg'>Exclusive Offers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}