import './Skills.css';
import { motion } from "framer-motion";

function Skills() {
  const animationConfig = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 0, 0],
    borderRadius: ["20px", "20px", "50px", "50px", "20px"],
    transition: {
      duration: 5, // Slow down the animation to 5 seconds
      ease: "easeInOut",
    }
  };

  return (
    <div className="skills-container">
      <h1>Technologies</h1>
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
        alt="HTML5"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
        alt="CSS3"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"
        alt="Bootstrap"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=Tailwind-CSS&logoColor=white"
        alt="Tailwind CSS"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
        alt="JavaScript"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black"
        alt="React"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"
        alt="Vite"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-MUI-007FFF?style=flat-square&logo=mui&logoColor=white"
        alt="MUI"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
        alt="Node.js"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=Express&logoColor=white"
        alt="Express.js"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"
        alt="MongoDB"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
        alt="MySQL"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white"
        alt="Redux"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-C-A8B9CC?style=flat-square&logo=C&logoColor=white"
        alt="C"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white"
        alt="Java"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white"
        alt="Python"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
        alt="Git"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
      <motion.img
        className="skill-icon"
        src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white"
        alt="GitHub"
        animate={animationConfig}
        whileHover={{ rotate: 360 }}
      />
    </div>
  );
}

export default Skills;
