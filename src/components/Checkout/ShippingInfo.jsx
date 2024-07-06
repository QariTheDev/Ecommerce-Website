import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ShippingInfo = ({ selectedStep, handleBack, handleContinue }) => {

    const validationSchema = Yup.object({
        address: Yup.string()
            .required('Address is required')
            .min(5, 'Address must be at least 5 characters long'),
        city: Yup.string()
            .required('City is required')
            .min(2, 'City must be at least 2 characters long')
            .max(30, 'City must be at most 30 characters long'),
        state: Yup.string()
            .required('State is required')
            .min(2, 'State must be at least 2 characters long')
            .max(30, 'State must be at most 30 characters long'),
        zip: Yup.string()
            .required('Zip is required')
            .matches(/^[0-9]*$/, 'Zip must be a number')
            .matches(/^\d{5}$/, 'Zip must be exactly 5 digits'),
        country: Yup.string()
            .required('Country is required')
            .min(2, 'Country must be at least 2 characters long')
            .max(30, 'Country must be at most 30 characters long'),
    });

    const formik = useFormik({
        initialValues: {
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Data:', values);
        }
    });

    return (
        <div className="flex flex-col space-y-5 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Shipping Information</h2>
                <div className="grid gap-4 mb-4 grid-cols-1">
                    <div className="col-span-1">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your address"
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="text-red-500 text-sm">{formik.errors.address}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.city && formik.errors.city ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your city"
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="text-red-500 text-sm">{formik.errors.city}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.state && formik.errors.state ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your state"
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <div className="text-red-500 text-sm">{formik.errors.state}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Zip Code
                        </label>
                        <input
                            type="text"
                            name="zip"
                            id="zip"
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.zip && formik.errors.zip ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your zip code"
                        />
                        {formik.touched.zip && formik.errors.zip ? (
                            <div className="text-red-500 text-sm">{formik.errors.zip}</div>
                        ) : null}
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.country && formik.errors.country ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Enter your country"
                        />
                        {formik.touched.country && formik.errors.country ? (
                            <div className="text-red-500 text-sm">{formik.errors.country}</div>
                        ) : null}
                    </div>
                </div>
                {selectedStep < 3 &&
                    <button
                        type="submit"
                        onClick={handleContinue}
                        disabled={!(formik.isValid && formik.dirty)}
                        className="mt-4 w-full flex items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
                    >
                        Next Step <FaArrowAltCircleRight className="inline ml-2" />
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
        </div>
    );
};

export default ShippingInfo;