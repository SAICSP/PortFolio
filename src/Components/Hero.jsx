import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
    const texts = ["Hi, I'm Sai Prakash", "I am a web developer"];
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // Typing speed

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[textIndex];

            if (!isDeleting) {
                setCurrentText(currentFullText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                setSpeed(150); 
            } else {
                setCurrentText(currentFullText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                setSpeed(100); 
            }

            if (!isDeleting && currentText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before starting to delete
            }

            if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
                setCharIndex(0); // Reset typing index
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, speed, currentText, textIndex, texts]);

    // Image animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">{currentText}<span className="cursor">|</span></h1>
                <motion.a 
                    href="https://github.com/SAICSP"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <motion.img
                        src="/sp-Photoroom.png"
                        alt="Sai Prakash"
                        className="hero-image mb-5"
                    />
                </motion.a> <br />
                <a href="/cv.pdf" download="CSP.pdf">
                    <button className='btn btn-info mt-5'>Download CV</button>
                </a>
            </div>
        </div>
    );
}

export default Hero;
