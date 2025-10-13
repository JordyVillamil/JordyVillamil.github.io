// src/App.tsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import './styles/global.css'; // Estilos globales

const App: React.FC = () => {
  return (
    <div className="portfolio-spa-container">
      {/* El Navbar va fijo en la parte superior */}
      <Navbar />

      {/* Todas las secciones van una tras otra para permitir el scroll */}
      <HomeSection id="inicio" />
      <AboutSection id="acerca-de-mi" />
      <SkillsSection id="habilidades" />
      <PortfolioSection id="portafolio" />
      <ContactSection id="contactame" />
      
      {/* Opcional: Footer */}
    </div>
  );
};

export default App;