import './Skills.css';
import { useEffect, useRef, useState } from 'react';

function Skills() {
    const [visible, setVisible] = useState(false);
    const skillRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const firstSkillPosition = skillRefs.current[0]?.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (firstSkillPosition < screenPosition) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (visible) {
            skillRefs.current.forEach((ref, index) => {
                setTimeout(() => {
                    if (ref) ref.classList.add('visible');
                }, index * 200); // Sequential delay of 200ms for each skill
            });
        }
    }, [visible]);

    return (
        <div className="skills-container">
            <h1 className="text-center" style={{ color: '#fff' }}>Technologies</h1>
            <div className="skills-grid">
                {[
                    { src: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white", alt: "HTML5" },
                    { src: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white", alt: "CSS3" },
                    { src: "https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white", alt: "Bootstrap" },
                    { src: "https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=Tailwind-CSS&logoColor=white", alt: "Tailwind CSS" },
                    { src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black", alt: "JavaScript" },
                    { src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black", alt: "React" },
                    { src: "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white", alt: "Vite" },
                    { src: "https://img.shields.io/badge/-MUI-007FFF?style=flat-square&logo=mui&logoColor=white", alt: "MUI" },
                    { src: "https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white", alt: "Node.js" },
                    { src: "https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=Express&logoColor=white", alt: "Express.js" },
                    { src: "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white", alt: "MongoDB" },
                    { src: "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white", alt: "MySQL" },
                    { src: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white", alt: "Redux" },
                    { src: "https://img.shields.io/badge/-C-A8B9CC?style=flat-square&logo=C&logoColor=white", alt: "C" },
                    { src: "https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white", alt: "Java" },
                    { src: "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white", alt: "Python" },
                    { src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white", alt: "Git" },
                    { src: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white", alt: "GitHub" },
                ].map((skill, index) => (
                    <img
                        key={index}
                        className={`skill-icon ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                        src={skill.src}
                        alt={skill.alt}
                        ref={(el) => skillRefs.current[index] = el}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
