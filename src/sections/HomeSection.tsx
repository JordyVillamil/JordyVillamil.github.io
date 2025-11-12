// src/sections/HomeSection.tsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import '../styles/HomeSection.css'; 

interface SectionProps {
  id: string;
}

const HomeSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="home-section-container">
      {/* Video Hero Background */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-hero"
        >
          <source src="/video-home-section.mp4" type="video/mp4" />
          <source src="/video-home-section.webm" type="video/webm" />
          {/* Fallback para navegadores que no soporten video */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="video-overlay"></div>
      </div>

      {/* Contenido Principal */}
      <motion.div 
        className="presentation-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          type: "spring", 
          stiffness: 80,
          delay: 0.2 
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'Ethical Hacker',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="p"
            className="subtitle"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.h1 
          className="name-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          JORDY FABIAN
        </motion.h1>

        <motion.h2 
          className="fullstack-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          VILLAMIL LETRADO
        </motion.h2>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HomeSection;