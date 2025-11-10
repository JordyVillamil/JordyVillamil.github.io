// src/sections/SkillsSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface SectionProps {
  id: string;
}

interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5 para mostrar nivel de dominio
  category: string;
}

const SkillsSection: React.FC<SectionProps> = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', icon: htmllogo, level: 5, category: 'Frontend' },
    { name: 'CSS', icon: csslogo, level: 5, category: 'Frontend' },
    { name: 'JavaScript', icon: jslogo, level: 4, category: 'Frontend' },
    { name: 'React', icon: reactlogo, level: 4, category: 'Frontend' },
    { name: 'Angular', icon: angularlogo, level: 3, category: 'Frontend' },
    
    // Backend
    { name: 'Python', icon: pythonlogo, level: 5, category: 'Backend' },
    { name: 'Django', icon: djangologo, level: 4, category: 'Backend' },
    
    // DevOps
    { name: 'Docker', icon: dockerlogo, level: 4, category: 'DevOps' },
    { name: 'GitHub', icon: githublogo, level: 5, category: 'DevOps' },
    { name: 'CI/CD', icon: devopslogo, level: 3, category: 'DevOps' },
    
    // Security
    { name: 'Cybersecurity', icon: cybersecuritylogo, level: 4, category: 'Security' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Security'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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

  const renderLevelDots = (level: number) => {
    return (
      <div className="skill-level">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`level-dot ${index < level ? 'filled' : ''}`}
          />
        ))}
      </div>
    );
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

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${activeCategory}`}
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
                  
                  {renderLevelDots(skill.level)}

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
            <div className="stat-number">
              {Math.round((skills.reduce((acc, skill) => acc + skill.level, 0) / (skills.length * 5)) * 100)}%
            </div>
            <div className="stat-label">Avg. Proficiency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;