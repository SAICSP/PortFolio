import './Contact.css';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const contactsRef = useRef(null);
  const isInView = useInView(contactsRef, { once: true });

  // Stagger animation for each contact icon
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each icon
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 }, // Slide up from below
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="container-fluid contact mt-5">
      <motion.div 
        className="f-infosocials"
        ref={contactsRef}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.a 
          href="https://www.linkedin.com/in/c%CA%9C%E1%B4%87%C9%B4%C9%B4%E1%B4%80-s%E1%B4%80%C9%AA-p%CA%80%E1%B4%80%E1%B4%8B%E1%B4%80s%CA%9C-b930a0256/" 
          className="linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={item}
        >
          <i className="fa-brands fa-linkedin"></i>
        </motion.a>

        <motion.a 
          href="mailto:chennasaicsp@gmail.com" 
          className="email" 
          variants={item}
        >
          <i className="fa-solid fa-envelope"></i>
        </motion.a>

        <motion.a 
          href="https://x.com/Sa1Prakash444" 
          className="twitter" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={item}
        >
          <i className="fa-brands fa-twitter"></i>
        </motion.a>

        <motion.a 
          href="https://www.instagram.com/__the.2003__/" 
          className="instagram" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={item}
        >
          <i className="fa-brands fa-instagram"></i>
        </motion.a>

        <motion.a 
          href="https://www.facebook.com/sai.chenna.1420" 
          className="facebook" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={item}
        >
          <i className="fa-brands fa-square-facebook"></i>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
