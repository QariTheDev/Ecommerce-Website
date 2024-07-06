import React from 'react';

export default function Contact() {
    return (
        <section className="text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-900 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-white dark:bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        title="map" 
                        className="absolute inset-0" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0" 
                        scrolling="no" 
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108896.65475208563!2d74.1911591078084!3d31.468623317018903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x391903824641710d%3A0x216633957700308d!2s147%20M%2C%20Block%20M%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab%2054000!3m2!1d31.4686497!2d74.2735604!5e0!3m2!1sen!2s!4v1719368304996!5m2!1sen!2s"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}>
                    </iframe>
                    <div className="bg-white dark:bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">147 M, Block M Phase 2 Johar Town, Lahore, Punjab 54000</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:talhaiqbal7272@email.com" className="text-yellow-500 dark:text-yellow-400 leading-relaxed">talhaiqbal7272@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-900 h-32 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg transition-colors duration-200 ease-in-out">Submit</button>
                </div>
            </div>
        </section>
    );
}
