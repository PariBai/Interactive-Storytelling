import React, { useState, useEffect } from 'react';
import './style.css';

const images = [
    '/src/assets/image1.jpg',
    '/src/assets/image6.png',
    '/src/assets/image3.jpg'
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Set up an interval to change the slide every 3 seconds
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    return (
        <section className="hero-section">
            <div className="slider">
                <img src={images[current]} alt="slider image" className="slider-image" />
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
};

export default HeroSection;
