// src/sections/AboutSection.tsx
import React from 'react';
import '../styles/AboutSection.css'; // Crear este archivo

interface SectionProps {
  id: string; // "acerca-de-mi"
}

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="about-section-container">
      <h2 className="section-title">ACERCA DE MÍ</h2>
      
      {/* Bloque 1: ¿Quién Soy? */}
      <div className="who-i-am-block">
        <div className="illustration">
          {/* Aquí iría el componente de la ilustración (Image of a developer working on a desktop) */}
          <p>[Placeholder: Ilustración de desarrollador]</p>
        </div>
        <div className="bio-content">
          <h3>¿Quién Soy?</h3>
          <p>Soy Tecnólogo en Análisis y Desarrollo de Software del SENA con una sólida especialización en Ciberseguridad, respaldada por certificaciones profesionales de Google, Universidad de los Andes y una formación en curso en DevOps de IBM. Experiencia en el ciclo de vida de desarrollo seguro (Secure SDLC), análisis de vulnerabilidades, pruebas de penetración y prácticas de CI/CD con Docker. Busco aplicar mis habilidades en desarrollo fullstack (Python, JS) y seguridad para construir soluciones tecnológicas robustas y confiables. Nivel de inglés A2.</p>
          <button className="cv-button">Descargar CV</button>
        </div>
      </div>

      {/* Bloque 2: ¿Qué Puedo Hacer? (Servicios/Habilidades Clave) */}
      <h3 className="what-i-do-title">¿Qué Puedo Hacer?</h3>
      <div className="capabilities-grid">
        <div className="capability-card">
          {/* Ícono de lápiz/diseño */}
          <h4>Desarrollo Fullstack</h4>
          <p>Como desarrollador Fullstack, construyo aplicaciones web seguras y eficientes. Domino la lógica de backend con Python (Django) y PHP (Laravel) y la gestión de bases de datos SQL. En el frontend, creo interfaces de usuario interactivas y amigables con JavaScript (React, Angular). Mi principal enfoque es la implementación de prácticas de código seguro desde el inicio, aplicando los principios de OWASP para mitigar vulnerabilidades y garantizar la robustez del software.</p>
        </div>
        <div className="capability-card">
          {/* Ícono de monitor/UI */}
          <h4>Ciberseguridad</h4>
          <p>Poseo un enfoque integral en ciberseguridad, combinando tácticas ofensivas y defensivas. A través del Ethical Hacking y Pruebas de Penetración, identifico y evalúo proactivamente las debilidades en sistemas y redes. Defensivamente, diseño arquitecturas seguras y defino controles y políticas de seguridad alineadas con estándares internacionales como la norma ISO 27001 para garantizar la protección de la información. Complemento esta estrategia con el uso de herramientas avanzadas como IDS/IPS para la detección de intrusos y plataformas SIEM para el monitoreo y la respuesta a incidentes en tiempo real.</p>
        </div>
        <div className="capability-card">
          {/* Ícono de corazón/API */}
          <h4>DevOps</h4>
          <p>Facilito la entrega de software de alta calidad mediante la automatización y la colaboración. Utilizo Git/Github para un control de versiones eficiente y diseño pipelines de CI/CD para automatizar los despliegues. Además, aplico técnicas de contenedorización con Docker para asegurar la consistencia entre los entornos de desarrollo y producción, todo dentro de un marco de trabajo basado en metodologías ágiles para optimizar la velocidad y la fiabilidad.</p>
        </div>
        {/* Agrega las otras tres tarjetas (Git, Clean Code, Back-end) aquí */}
      </div>
    </section>
  );
};

export default AboutSection;