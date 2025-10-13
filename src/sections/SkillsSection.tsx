// src/sections/SkillsSection.tsx
import React from 'react';
import '../styles/SkillsSection.css'; // Crear este archivo

interface SectionProps {
  id: string; // "habilidades"
}

const SkillsSection: React.FC<SectionProps> = ({ id }) => {
  // Datos de tus habilidades (Front-end, Back-end, etc.)
  const skills = [
    { name: 'HTML', icon: '5' },
    { name: 'CSS', icon: '3' },
    { name: 'SASS', icon: 'S' },
    { name: 'BOOTSTRAP', icon: 'B' },
    { name: 'JAVASCRIPT', icon: 'JS' },
    { name: 'TYPESCRIPT', icon: 'TS' },
    { name: 'ANGULAR', icon: 'A' },
    { name: 'REACT', icon: 'R' },
    { name: 'PHP', icon: 'P' },
    { name: 'PYTHON', icon: 'P' },
    { name: 'DJANGO', icon: 'D' },
    // Aquí puedes usar íconos SVG o FontAwesome/íconos CSS
  ];

  return (
    <section id={id} className="skills-section-container">
      <div className="section-content">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
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