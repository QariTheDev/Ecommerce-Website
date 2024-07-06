import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThanksMesg() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        } 
        else {
            navigate('/');
        }
    }, [countdown, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16 text-yellow-500 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V9a2 2 0 114 0v2M9 15h6m2 4H7a2 2 0 01-2-2v-5a2 2 0 012-2h2a2 2 0 002-2V9a4 4 0 118 0v2a2 2 0 002 2h2a2 2 0 012 2v5a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg">We appreciate your feedback. Your response has been successfully recorded.</p>
                <p className='text-base mt-4'>
                    Redirecting to Home Page in {countdown} seconds...
                </p>
            </div>
        </div>
    );
}
