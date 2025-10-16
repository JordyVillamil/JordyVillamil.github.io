// src/sections/AboutSection.tsx
import React from 'react';
import '../styles/AboutSection.css'; // Crear este archivo
import aboutmelogo from '../assets/logos/aboutme.png';

interface SectionProps {
  id: string; // "acerca-de-mi"
}

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="about-section-container">
      <h2 className="section-title">About me</h2>
      
      {/* Bloque 1: ¿Quién Soy? */}
      <div className="who-i-am-block">
        <div className="illustration">
          {/* Aquí iría el componente de la ilustración (Image of a developer working on a desktop) */}
          <img src={aboutmelogo} alt="ilustracion sobre mi"/>
        </div>
        <div className="bio-content">
          <h3>¿Who am I?</h3>
          <p>I am a software developer with a strong specialization in cybersecurity, backed by professional certifications from Google and the University of the Andes, and with ongoing training in DevOps from IBM. I have experience in the software development life cycle (SDLC), vulnerability analysis, penetration testing, and CI/CD practices with Docker. I am looking to apply my skills in full-stack development (Python, JS) and security to build strong and reliable technological solutions. English proficiency: B1.</p>
           <a href="/CV-Jordy-Villamil.pdf" download="CV de Jordy Villamil.pdf">
           <button className="cv-button">Download CV</button>
            </a>
        </div>
      </div>

      {/* Bloque 2: ¿Qué Puedo Hacer? (Servicios/Habilidades Clave) */}
      <h3 className="what-i-do-title">¿What can I do?</h3>
      <div className="capabilities-grid">
        <div className="capability-card">
          {/* Ícono de lápiz/diseño */}
          <h4>Fullstack Developer</h4>
          <p>As a Fullstack developer, I build secure and efficient web applications. I master backend logic with Python (Django) and PHP (Laravel) and SQL database management. On the frontend, I create interactive and user-friendly interfaces with JavaScript (React, Angular). My main focus is the implementation of secure coding practices from the beginning, applying OWASP principles to mitigate vulnerabilities and ensure software robustness.</p>
        </div>
        <div className="capability-card">
          {/* Ícono de monitor/UI */}
          <h4>Cibersecurity</h4>
          <p>I have a comprehensive approach to cybersecurity, combining offensive and defensive tactics. Through Ethical Hacking and Penetration Testing, I proactively identify and evaluate weaknesses in systems and networks. Defensively, I design secure architectures and define security controls and policies aligned with international standards like ISO 27001 to ensure information protection. I complement this strategy with the use of advanced tools like IDS/IPS for intrusion detection and SIEM platforms for real-time incident monitoring and response.</p>
        </div>
        <div className="capability-card">
          {/* Ícono de corazón/API */}
          <h4>DevOps</h4>
          <p>I facilitate the delivery of high-quality software through automation and collaboration. I use Git/Github for efficient version control and design CI/CD pipelines to automate deployments. Additionally, I apply containerization techniques with Docker to ensure consistency between development and production environments, all within a framework based on agile methodologies to optimize speed and reliability.</p>
        </div>
        {/* Agrega las otras tres tarjetas (Git, Clean Code, Back-end) aquí */}
      </div>
    </section>
  );
};

export default AboutSection;