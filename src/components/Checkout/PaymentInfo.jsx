import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import ThanksMesg from '../ThanksMesg/ThanksMesg';

const PaymentInfo = ({ selectedStep, handleBack }) => {
    const [showThanks, setShowThanks] = useState(false);

    const handleSubmission = () => {
        console.log('Payment Submitted');

        setShowThanks(true);
    };

    const validationSchema = Yup.object({
        cardNumber: Yup.string()
            .required('Card Number is required')
            .matches(/^\d{16}$/, 'Card Number must be exactly 16 digits'),
        expirationDate: Yup.string()
            .required('Expiration Date is required')
            .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Expiration Date must be in MM/YY format'),
        cvv: Yup.string()
            .required('CVV is required')
            .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
    });

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expirationDate: '',
            cvv: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Data:', values);
        }
    });

    return (
        <div className="flex flex-col space-y-5 items-center justify-center py-14 bg-gray-100 dark:bg-gray-800">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Payment Information</h2>
                <div className="grid gap-4 mb-4 grid-cols-1">
                    <div className="col-span-1">
                        <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Card Number
                        </label>
                        <input
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.cardNumber && formik.errors.cardNumber ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your card number"
                        />
                        {formik.touched.cardNumber && formik.errors.cardNumber ? (
                            <div className="text-red-500 text-sm">{formik.errors.cardNumber}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="expirationDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Expiration Date (MM/YY)
                        </label>
                        <input
                            type="text"
                            name="expirationDate"
                            id="expirationDate"
                            value={formik.values.expirationDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.expirationDate && formik.errors.expirationDate ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="MM/YY"
                        />
                        {formik.touched.expirationDate && formik.errors.expirationDate ? (
                            <div className="text-red-500 text-sm">{formik.errors.expirationDate}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            CVV
                        </label>
                        <input
                            type="text"
                            name="cvv"
                            id="cvv"
                            value={formik.values.cvv}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.cvv && formik.errors.cvv ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your CVV"
                        />
                        {formik.touched.cvv && formik.errors.cvv ? (
                            <div className="text-red-500 text-sm">{formik.errors.cvv}</div>
                        ) : null}
                    </div>
                </div>
                { selectedStep == 3 &&
                    <button
                        type="submit"
                        onClick={handleSubmission}
                        disabled={!(formik.isValid && formik.dirty)}
                        className="w-full flex items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
                    >
                        Submit Payment <FaArrowAltCircleRight className="ml-2" />
                    </button>
                }
            </form>

            {selectedStep > 1 && (
                <button
                    onClick={handleBack}
                    className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-600 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 text-white font-medium rounded-full text-sm px-4 py-2 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                >
                    <FaArrowAltCircleLeft className="mr-2 w-5 h-5" />
                    Back
                </button>
            )}

            {
                showThanks && <ThanksMesg />
            }
        </div>
    );
};

export default PaymentInfo;