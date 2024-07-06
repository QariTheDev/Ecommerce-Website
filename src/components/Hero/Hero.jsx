import React from 'react';
import heroImages from '../../utilities/HeroSource/HeroSource';
import Slider from 'react-slick';

export default function Hero() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    }

    return (
        <div className="min-h-550 relative overflow-hidden">
            <div className="absolute w-700 h-700 bg-primary-300 dark:bg-primary-600 -top-1/2 rotate-45 right-0 rounded-lg z-0"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between p-6 lg:p-12">
                    {heroImages.map((image) => (
                        <div key={image.id} className="flex flex-col justify-center items-center text-center sm:text-left mb-8 sm:mb-0 sm:mr-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-textColor dark:text-textColorDark">{image.title}</h1>
                            <p className="mt-4 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl text-textColor dark:text-textColorDark">{image.description}</p>
                            <button className="mt-6 text-white bg-gradient-to-r from-buttonColor to-primary-400 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 focus:ring-primary-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-3 sm:px-4 sm:py-2">
                                Order Now
                            </button>
                        </div>
                    ))}

                <div className="w-auto h-auto">
                    {heroImages.map((image) => (
                        <img key={image.id} src={image.src} alt={image.alt} width={image.width} height={image.height} className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out" />
                    ))}
                </div>
            </div>
        </div >
    );
}
