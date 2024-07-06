import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ContactInfo = ({ selectedStep, handleContinue }) => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        firstName: Yup.string()
            .required('First Name is required')
            .min(2, 'Name must be at least 2 characters long'),
        lastName: Yup.string()
            .required('Last Name is required')
            .min(2, 'Name must be at least 2 characters long'),
        phone: Yup.string()
            .required('Phone is required')
            .min(10, 'Phone must be at least 10 characters long')
            .max(15, 'Phone must be at most 15 characters long'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Data:', values);
            handleContinue();
        }
    });

    return (
        <div className="flex items-center justify-center py-16 bg-gray-100 dark:bg-gray-800">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Contact Information</h2>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Type your email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Type your first name"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Type your last name"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`bg-gray-50 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            placeholder="Type your phone number"
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                        ) : null}
                    </div>
                </div>
                {selectedStep < 3 &&
                    <button
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        className={`mt-4 w-full flex items-center justify-center py-2 px-4 rounded-lg focus:ring-4 focus:ring-primary-300 ${formik.isValid && formik.dirty ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Next Step <FaArrowAltCircleRight className="inline ml-2" />
                    </button>
                }
            </form>
        </div>
    );
};

export default ContactInfo;