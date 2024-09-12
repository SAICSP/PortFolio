import './Projects.css';
import { useEffect, useRef, useState } from 'react';

function Projects() {
    const [visible, setVisible] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const leftPosition = leftRef.current.getBoundingClientRect().top;
            const rightPosition = rightRef.current.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (leftPosition < screenPosition) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="projects mt-5">
            <h1 className="text-center mb-5">Featured Projects</h1>
            <div className="row">
                <div className="col-6">
                    <div
                        ref={leftRef}
                        className={`pjbox left ${visible ? 'visible' : ''}`}
                    >
                        <img
                            src="/wiki.png"
                            alt="wiki image"
                            style={{ height: '200px', width: '50%', borderRadius: '20px' }}
                        />
                        <h3 style={{ color: '#fff' }} className="mt-3">
                            WikiPedia
                        </h3>
                        <p className="project-description">
                            Developed a comprehensive Wikipedia-like web application that tackles
                            issues related to text size, color, and font styling...
                        </p>
                        <h6>
                            Demo:{' '}
                            <a
                                href="https://wikieditedbysai.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Live Demo
                            </a>
                        </h6>
                    </div>
                </div>
                <div className="col-6">
                    <div
                        ref={rightRef}
                        className={`pjbox right ${visible ? 'visible' : ''}`}
                    >
                        <img
                            src="/app.png"
                            alt="app image"
                            style={{ height: '200px', width: '50%', borderRadius: '20px' }}
                        />
                        <h3 style={{ color: '#fff' }} className="mt-3">
                            Weather App
                        </h3>
                        <p className="project-description">
                            React-based Weather App providing real-time weather details such as
                            temperature, humidity, and more...
                        </p>
                        <h6>
                            Link:{' '}
                            <a
                                href="https://github.com/SAICSP/WeatherApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
