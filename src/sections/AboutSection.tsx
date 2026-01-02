// src/sections/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaDocker, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiDjango, SiDocker, SiRender, SiVercel, SiWireshark, SiKalilinux, SiSnort, SiLaravel } from 'react-icons/si';
import '../styles/AboutSection.css';
import aboutmelogo from '../assets/logos/aboutme.png';

interface SectionProps {
  id: string;
}

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  const capabilities = [
    {
      icon: FaCode,
      title: 'Fullstack Developer',
      description: 'As a Fullstack developer, I build secure and efficient web applications. I master backend logic with Python (Django) and PHP (Laravel) and SQL database management. On the frontend, I create interactive and user-friendly interfaces with JavaScript (React, Angular). My main focus is the implementation of secure coding practices from the beginning, applying OWASP principles to mitigate vulnerabilities and ensure software robustness.',
      color: '#3498db',
      techs: [SiPython, SiJavascript, SiReact, SiDjango, SiLaravel]
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description: 'I have a comprehensive approach to cybersecurity, combining offensive and defensive tactics. Through Ethical Hacking and Penetration Testing, I proactively identify and evaluate weaknesses in systems and networks. Defensively, I design secure architectures and define security controls and policies aligned with international standards like ISO 27001 to ensure information protection. I complement this strategy with the use of advanced tools like IDS/IPS for intrusion detection and SIEM platforms for real-time incident monitoring and response.',
      color: '#e74c3c',
      techs: [SiWireshark, SiKalilinux, SiSnort]
    },
    {
      icon: FaDocker,
      title: 'DevOps',
      description: 'I facilitate the delivery of high-quality software through automation and collaboration. I use Git/Github for efficient version control and design CI/CD pipelines to automate deployments. Additionally, I apply containerization techniques with Docker to ensure consistency between development and production environments, all within a framework based on agile methodologies to optimize speed and reliability.',
      color: '#2ecc71',
      techs: [SiDocker, SiRender, SiVercel]
    }
  ];

  const highlights = [
    'Google Cybersecurity Professional Certificate',
    'University of the Andes Cybersecurity Specialization',
    'IBM DevOps Training (In Progress)',
    'English Proficiency: B1'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id={id} className="about-section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      {/* Bloque: ¿Quién Soy? */}
      <motion.div
        className="who-i-am-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={imageVariants} className="illustration">
          <div className="image-wrapper">
            <img src={aboutmelogo} alt="Software Developer Illustration" />
            <div className="image-overlay"></div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bio-content">
          <h3>Who am I?</h3>
          <p className="bio-description">
            I am a <strong>software developer</strong> with a strong specialization in <strong>cybersecurity</strong>, backed by professional certifications from Google and the University of the Andes, and with ongoing training in DevOps from IBM.
          </p>
          <p className="bio-description">
            I have experience in the software development life cycle (SDLC), vulnerability analysis, penetration testing, and CI/CD practices with Docker. I am looking to apply my skills in full-stack development (Python, JS, PHP) and security to build strong and reliable technological solutions.
          </p>

          {/* Highlights */}
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCheckCircle className="check-icon" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/CV-Jordy-Villamil.pdf"
            download="CV-Jordy-Villamil.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="cv-button">
              <FaDownload />
              <span>Download CV</span>
            </button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bloque: ¿Qué Puedo Hacer? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="what-i-do-title">What Can I Do?</h3>
      </motion.div>

      <motion.div
        className="capabilities-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            className="capability-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <div
                className="icon-wrapper"
                style={{ backgroundColor: `${capability.color}15` }}
              >
                <capability.icon
                  className="capability-icon"
                  style={{ color: capability.color }}
                />
              </div>
              <h4>{capability.title}</h4>
            </div>

            <p className="capability-description">{capability.description}</p>

            {capability.techs.length > 0 && (
              <div className="tech-stack">
                {capability.techs.map((Tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="tech-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Tech />
                  </motion.div>
                ))}
              </div>
            )}

            <div
              className="card-accent"
              style={{ background: capability.color }}
            ></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutSection;