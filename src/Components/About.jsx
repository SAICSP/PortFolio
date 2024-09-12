import { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
    const [visible, setVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = aboutRef.current.getBoundingClientRect().top;
            const screenHeight = window.innerHeight / 1.5;

            if (position < screenHeight) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`about-container ${visible ? 'visible' : ''}`}
            ref={aboutRef}
        >
            <div className="about-content">
                <p className="about-text">
                    Hello! I'm Sai Prakash, a passionate and curious developer always eager to dive
                    deep into the world of coding and problem-solving. With a strong focus on the
                    MERN stack and a keen interest in data structures and algorithms, I am committed
                    to mastering the art of software development. My journey is driven by the
                    excitement of building innovative solutions and exploring the endless
                    possibilities of technology. I thrive on continuous learning and am always
                    looking for new challenges to expand my technical expertise and knowledge.
                </p>
            </div>
        </div>
    );
}

export default About;
