import React, { useEffect } from 'react';
import LightMode from '../../images/DarkMode/light-mode-button.png';
import DarkMode from '../../images/DarkMode/dark-mode-button.png';
import { useState } from 'react';

export default function DarkModeSwitch() {

    const getInitialMode = () => {
        const savedMode = localStorage.getItem('color-mode');
        if (savedMode) {
            return savedMode === 'dark' ? DarkMode : LightMode;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DarkMode : LightMode;
    };

    const [image, setImage] = useState(getInitialMode);

    useEffect(() => {
        if(image === DarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('color-mode', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('color-mode', 'light');
        }
    }, [image]);

    const ToggleSwitch = () => {
        if (image === LightMode) {
            setImage(DarkMode);
        }
        else {
            setImage(LightMode);
        }
    };

    return (
        <>
            <img src={image}
            alt="DarkMode Switch" 
            className='w-16 cursor-pointer drop-shadow-lg transition-all duration-300 ease-in-out hover:scale-110'
            onClick={ToggleSwitch}/>
        </>
    )
}