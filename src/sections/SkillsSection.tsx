// src/sections/SkillsSection.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/SkillsSection.css';

// Logos
import htmllogo from '../assets/logos/html.png';
import csslogo from '../assets/logos/css.png';
import jslogo from '../assets/logos/js.png';
import dockerlogo from '../assets/logos/docker3.png';
import angularlogo from '../assets/logos/programing.png';
import reactlogo from '../assets/logos/atom3.png';
import githublogo from '../assets/logos/github3.png';
import pythonlogo from '../assets/logos/python1.png';
import djangologo from '../assets/logos/django3.png';
import devopslogo from '../assets/logos/devops.png';
import cybersecuritylogo from '../assets/logos/vpn.png';
import SQLlogo from '../assets/logos/SQLlogo.jpg';
import anthropiclogo from '../assets/logos/anthropiclogo.png';
import fastAPIlogo from '../assets/logos/fastAPIlogo.png';

interface SectionProps {
  id: string;
}

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SkillsSection: React.FC<SectionProps> = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', icon: htmllogo, category: 'Frontend' },
    { name: 'CSS', icon: csslogo, category: 'Frontend' },
    { name: 'JavaScript', icon: jslogo, category: 'Frontend' },
    { name: 'React', icon: reactlogo, category: 'Frontend' },
    { name: 'Angular', icon: angularlogo, category: 'Frontend' },
    
    // Backend
    { name: 'Python', icon: pythonlogo, category: 'Backend' },
    { name: 'Django', icon: djangologo, category: 'Backend' },
    { name: 'SQL', icon: SQLlogo, category: 'Backend' },
    { name: 'FastAPI', icon: fastAPIlogo, category: 'Backend' },

    // DevOps
    { name: 'Docker', icon: dockerlogo, category: 'DevOps' },
    { name: 'GitHub', icon: githublogo, category: 'DevOps' },
    { name: 'CI/CD', icon: devopslogo, category: 'DevOps' },

    //AI
    { name: 'Anthropic', icon: anthropiclogo, category: 'AI' },
    
    // Security
    { name: 'Cybersecurity', icon: cybersecuritylogo, category: 'Security' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Security', 'AI'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Frontend': '#3498db',
      'Backend': '#e74c3c',
      'DevOps': '#2ecc71',
      'Security': '#f39c12'
    };
    return colors[category] || '#5c00b8';
  };

  // Función para scroll del carrusel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200; // Píxeles a desplazar
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="skills-section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing projects
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="filter-underline"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Count */}
        <motion.div
          className="skills-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Showing <strong>{filteredSkills.length}</strong> skill{filteredSkills.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Skills Carousel */}
        <div 
          className="skills-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botón Izquierdo */}
          <motion.button
            className="carousel-nav-btn carousel-nav-left"
            onClick={() => scrollCarousel('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </motion.button>

          <div className="skills-carousel-container" ref={carouselRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className={`skills-carousel ${isPaused ? 'paused' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Duplicamos los items para el efecto infinito */}
                {[...filteredSkills, ...filteredSkills].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="skill-badge"
                      style={{ borderColor: getCategoryColor(skill.category) }}
                    >
                      <div className="skill-icon">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          className="skill-logo"
                        />
                      </div>
                      
                      <p className="skill-name">{skill.name}</p>

                      <div
                        className="skill-category-tag"
                        style={{ backgroundColor: `${getCategoryColor(skill.category)}20` }}
                      >
                        <span style={{ color: getCategoryColor(skill.category) }}>
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className="skill-glow"
                      style={{ background: `radial-gradient(circle, ${getCategoryColor(skill.category)}30, transparent)` }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botón Derecho */}
          <motion.button
            className="carousel-nav-btn carousel-nav-right"
            onClick={() => scrollCarousel('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Stats Section */}
        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-number">{skills.length}+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;