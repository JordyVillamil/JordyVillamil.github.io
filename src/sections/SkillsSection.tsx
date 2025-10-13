// src/sections/SkillsSection.tsx
import React from 'react';
import '../styles/SkillsSection.css'; // Crear este archivo
import htmllogo from '../assets/logos/html-logo.png'; 
import csslogo from '../assets/logos/css-logo.png';
import jslogo from '../assets/logos/js-logo.png';
import dockerlogo from '../assets/logos/docker-logo.png';
import angularlogo from '../assets/logos/angular-logo.png';
import reactlogo from '../assets/logos/react-logo.png';
import githublogo from '../assets/logos/github-logo.png';
import pythonlogo from '../assets/logos/python-logo.png';
import djangologo from '../assets/logos/django-logo.png';
import devopslogo from '../assets/logos/devops-logo.png';
import cybersecuritylogo from '../assets/logos/cybersecurity-logo.png';

interface SectionProps {
  id: string; // "habilidades"
}

const SkillsSection: React.FC<SectionProps> = ({ id }) => {
  // Datos de tus habilidades (Front-end, Back-end, etc.)
  const skills = [
    { name: 'HTML', icon: htmllogo },
    { name: 'CSS', icon: csslogo },
    { name: 'JAVASCRIPT', icon: jslogo },
    { name: 'DevOps', icon: devopslogo },
    { name: 'DOCKER', icon: dockerlogo },
    { name: 'ANGULAR', icon: angularlogo },
    { name: 'REACT', icon: reactlogo },
    { name: 'GITHUB', icon: githublogo },
    { name: 'PYTHON', icon: pythonlogo },
    { name: 'DJANGO', icon: djangologo },
    { name: 'CIBERSECURITY', icon: cybersecuritylogo },
    // Aquí puedes usar íconos SVG o FontAwesome/íconos CSS
  ];

  return (
  <section id={id} className="skills-section-container">
    <div className="section-content">
      <h2 className="section-title">Mis Habilidades</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">

            {/* --- INICIO DEL CAMBIO --- */}
            <div className="skill-icon">
              <img 
                src={skill.icon} 
                alt={`Logo de ${skill.name}`} 
                className="skill-logo" 
              />
            </div>
            {/* --- FIN DEL CAMBIO --- */}

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="skills-pagination">
        {/* Indicadores de paginación (simulados con puntos) */}
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  </section>
);
};

export default SkillsSection;