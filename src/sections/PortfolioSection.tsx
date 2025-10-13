// src/sections/PortfolioSection.tsx
import React from 'react';

interface SectionProps {
  id: string; // "portafolio"
}

const PortfolioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="portfolio-section-container">
      <h2 className="section-title">PORTAFOLIO</h2>
      {/* Contenido de portafolio aquí */}
    </section>
  );
};

export default PortfolioSection;