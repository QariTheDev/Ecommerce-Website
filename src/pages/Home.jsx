import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Notify from '../components/Banner/Notify';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {

    return (
        <>
            <section className="relative flex flex-col bg-white dark:bg-black items-center justify-center h-screen overflow-hidden">
                <Hero />
            </section>

            <section className='flex flex-col bg-white dark:bg-black items-center justify-center py-5 overflow-hidden'>
                <TopProducts />
            </section>

            <section className='pb-10 px-32 bg-white dark:bg-black'>
                <Banner />
            </section>

            <Notify />

            <Testimonials />
        </>
    );
}