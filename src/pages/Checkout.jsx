import React, { useState } from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled } from "react-icons/tb";
import ContactInfo from '../components/Checkout/ContactInfo';
import ShippingInfo from '../components/Checkout/ShippingInfo';
import PaymentInfo from '../components/Checkout/PaymentInfo';

const ProductModal = () => {
    const [selectedStep, setSelectedStep] = useState(1);

    const handleContinue = () => {
        setSelectedStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    const handleBack = () => {
        setSelectedStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    return (
        <div className='bg-white dark:bg-gray-900'>
            <div>
                <div className='flex flex-col items-center justify-center pt-4 space-y-3 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20 xl:space-x-40'>
                    <div className='flex flex-col justify-center items-center'>
                        {selectedStep === 1 ? <TbCircleNumber1Filled className='text-primary-600 dark:text-primary-400 w-10 h-10' /> :
                            <TbCircleNumber1 className='text-primary-600 dark:text-primary-400 w-10 h-10' />}
                        <h2 className={`font-semibold text-lg ${selectedStep === 1 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`}>Contact</h2>
                        <p className='text-base text-slate-400 pb-3'>Your Billing Info</p>
                        {selectedStep === 1 && <div className='w-28 h-1 bg-primary-600 dark:bg-primary-400' />}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        {selectedStep === 2 ? <TbCircleNumber2Filled className='text-primary-600 dark:text-primary-400 w-10 h-10' /> :
                            <TbCircleNumber2 className='text-primary-600 dark:text-primary-400 w-10 h-10' />}
                        <h2 className={`font-semibold text-lg ${selectedStep === 2 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`}>Shipping</h2>
                        <p className='text-base text-slate-400 pb-3'>Where Should We Ship To</p>
                        {selectedStep === 2 && <div className='w-28 h-1 bg-primary-600 dark:bg-primary-400' />}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        {selectedStep === 3 ? <TbCircleNumber3Filled className='text-primary-600 dark:text-primary-400 w-10 h-10' /> :
                            <TbCircleNumber3 className='text-primary-600 dark:text-primary-400 w-10 h-10' />}
                        <h2 className={`font-semibold text-lg ${selectedStep === 3 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`}>Payment</h2>
                        <p className='text-base text-slate-400 pb-3'>Confirm Your Order</p>
                        {selectedStep === 3 && <div className='w-28 h-1 bg-primary-600 dark:bg-primary-400' />}
                    </div>
                </div>

                {selectedStep === 1 && <ContactInfo selectedStep={selectedStep} handleContinue={handleContinue} />}
                {selectedStep === 2 && <ShippingInfo selectedStep={selectedStep} handleBack={handleBack} handleContinue={handleContinue} />}
                {selectedStep === 3 && <PaymentInfo  selectedStep={selectedStep} handleBack={handleBack} />}
            </div>
        </div>
    );
};

export default ProductModal;
