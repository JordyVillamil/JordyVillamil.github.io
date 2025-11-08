// src/sections/PortfolioSection.tsx
import React from 'react';
import '../styles/PortfolioSection.css'; 

// 🛑 PASO 1: IMPORTAR LA IMAGEN COMO MÓDULO.
// Vite convertirá esto en la URL de la imagen en tu carpeta 'dist/assets'.
import EduGestion360gif from '../assets/previews/EduGestion360.gif';
import TimePiecesgif from '../assets/previews/TimePieces.gif';
import EWEADNgif from '../assets/previews/EWEADN.gif';
import type { image } from 'framer-motion/client';

interface SectionProps {
  id: string; // "portafolio"
}

// 🛑 Array de Datos con Ruta Corregida 🛑
const projects = [
  {
    title: 'Proyecto #1: EduGestion360',
    description: 'plataforma web full-stack e integral de gestión académica, diseñada para centralizar y optimizar la comunicación y los procesos entre directivos, docentes y estudiantes. El proyecto está 100% contenedorizado con Docker.',
    tags: ['React', 'Django', 'Python', 'mySQL', 'Django REST Framework', 'Docker', 'tailwindcss'],
    githubLink: 'https://github.com/JordyVillamil/EduGestion360', 
    previewLink: 'https://github.com/JordyVillamil/EduGestion360', 
    
    // ✅ PASO 2: ASIGNAR LA VARIABLE IMPORTADA como la fuente de la imagen.
    image: EduGestion360gif // Usamos la variable importada arriba
  },

  {
    title: 'Proyecto #2: TimePieces',
    description: 'Un portafolio de relojes experimental que fusiona un diseño 3D interactivo (React-Three-Fiber) con un backend robusto (Django). El proyecto demuestra un flujo de trabajo DevOps completo, desde la containerización con Docker hasta el despliegue CI/CD automatizado en Vercel y Render.',
    tags: ['Next.js / React (App Router)', 'Django', 'Python', 'mySQL', 'Django REST Framework', 'Docker', 'tailwindcss', 'React-Three-Fiber', 'Three.js', 'Vercel', 'Render', 'CI/CD'],
    githubLink: 'https://github.com/JordyVillamil/timepieces-portfolio', 
    previewLink: 'https://github.com/JordyVillamil/timepieces-portfolio', 
    
    // ✅ PASO 2: ASIGNAR LA VARIABLE IMPORTADA como la fuente de la imagen.
    image: TimePiecesgif // Usamos la variable importada arriba
  },

   {
    title: 'Proyecto #3: EWEADN',
    description: 'Proyecto demo que demuestra la implementación de una landing page moderna con video de fondo (video hero), una de las tendencias más populares en diseño web actual. Desarrollado con las tecnologías más demandadas del mercado: React, TypeScript, Tailwind CSS v4 y Framer Motion.',
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Iconify', 'Lucide React', 'GitHub'],
    githubLink: 'https://github.com/JordyVillamil/EWEADN', 
    previewLink: 'https://github.com/JordyVillamil/EWEADN', 
    
    // ✅ PASO 2: ASIGNAR LA VARIABLE IMPORTADA como la fuente de la imagen.
    image: EWEADNgif // Usamos la variable importada arriba
  },

  
];

const PortfolioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="portfolio-section-container section-base">
      <h2 className="section-title">PORTAFOLIO</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={`Preview de ${project.title}`} 
                className="project-image"
              />
            </div>
            
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-item">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.previewLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-preview"
                >
                  Ver Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  Código Fuente
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;