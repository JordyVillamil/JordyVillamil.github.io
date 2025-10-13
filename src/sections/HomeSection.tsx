// src/sections/HomeSection.tsx
import React from 'react';
import StarryBackground from '../components/background/StarryBackground';
import { motion } from 'framer-motion'; // Para las animaciones
import '../styles/HomeSection.css'; 

interface SectionProps {
  id: string; // Para el scroll-to-id
}

const HomeSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="home-section-container">
      <StarryBackground />
      
      <motion.div 
        className="presentation-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <p className="subtitle">Desarrollador fullstack y ethical hacker</p>
        <h1 className="name-title">
          JORDY FABIAN
        </h1>
        <h2 className="fullstack-title">
          VILLAMIL LETRADO
        </h2>
      </motion.div>
      
      {/* Aquí puedes añadir los íconos de redes sociales */}
      <div className="social-links">
        {/* ... */}
      </div>
    </section>
  );
};

export default HomeSection;

