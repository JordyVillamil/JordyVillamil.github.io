// src/sections/PortfolioSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';
import '../styles/PortfolioSection.css';

// Imports de imágenes
import EduGestion360gif from '../assets/previews/EduGestion360.gif';
import TimePiecesgif from '../assets/previews/TimePieces.gif';
import EWEADNgif from '../assets/previews/EWEADN.gif';

interface SectionProps {
  id: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubLink: string;
  previewLink: string;
  image: string;
  featured?: boolean;
  year: string;
}

// Componente de imagen con lazy loading optimizado
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className: string;
}> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="project-image-wrapper">
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {!isLoaded && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
    </div>
  );
};

const PortfolioSection: React.FC<SectionProps> = ({ id }) => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // Función para abrir video en nueva ventana
  const openGifInNewWindow = (gifSrc: string, title: string) => {
    const width = 1000;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const newWindow = window.open(
      '',
      `${title} - Demo`,
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
    
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title} - Demo</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              padding: 20px;
            }
            .gif-container {
              width: 100%;
              max-width: 900px;
              background: #000;
              border-radius: 12px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
              overflow: hidden;
            }
            .gif-header {
              background: linear-gradient(135deg, #5c00b8, #a753df);
              padding: 20px;
              color: white;
            }
            .gif-header h1 {
              font-size: 1.5rem;
              font-weight: 700;
              margin: 0;
            }
            img {
              width: 100%;
              height: auto;
              display: block;
            }

            .close-btn {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255, 255, 255, 0.2);
              color: white;
              padding: 12px 24px;
              border-radius: 50px;
              cursor: pointer;
              font-size: 1rem;
              font-weight: 600;
              transition: all 0.3s ease;
              z-index: 1000;
            }
            .close-btn:hover {
              background: rgba(255, 255, 255, 0.2);
              border-color: rgba(255, 255, 255, 0.4);
              transform: scale(1.05);
            }
          </style>
        </head>
        <body>
          <button class="close-btn" onclick="window.close()">✕ Close</button>
          <div class="gif-container">
            <div class="gif-header">
              <h1>${title} - Demo</h1>
            </div>
            <img src="${gifSrc}" alt="${title} Demo">
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  const projects: Project[] = [
    {
      title: 'EduGestion360',
      subtitle: 'Academic Management Platform',
      description: 'Full-stack web platform for comprehensive academic management, designed to centralize and optimize communication and processes between directors, teachers and students. The project is 100% containerized with Docker.',
      tags: ['React', 'Django', 'Python', 'MySQL', 'REST API', 'Docker', 'Tailwind CSS'],
      githubLink: 'https://github.com/JordyVillamil/EduGestion360',
      previewLink: 'https://github.com/JordyVillamil/EduGestion360',
      image: EduGestion360gif,
      featured: true,
      year: '2024'
    },
    {
      title: 'TimePieces',
      subtitle: 'Interactive 3D Watch Portfolio',
      description: 'An experimental watch portfolio that merges interactive 3D design (React-Three-Fiber) with a robust backend (Django). The project demonstrates a complete DevOps workflow, from containerization with Docker to automated CI/CD deployment on Vercel and Render.',
      tags: ['Next.js', 'React', 'Django', 'Three.js', 'MySQL', 'Docker', 'Tailwind', 'Vercel', 'CI/CD'],
      githubLink: 'https://github.com/JordyVillamil/timepieces-portfolio',
      previewLink: 'https://github.com/JordyVillamil/timepieces-portfolio',
      image: TimePiecesgif,
      featured: true,
      year: '2024'
    },
    {
      title: 'EWEADN',
      subtitle: 'Modern Video Hero Landing',
      description: 'Demo project showcasing implementation of a modern landing page with video background (video hero), one of the most popular trends in current web design. Developed with the most demanded technologies: React, TypeScript, Tailwind CSS v4 and Framer Motion.',
      tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Iconify', 'Tailwind v4'],
      githubLink: 'https://github.com/JordyVillamil/EWEADN',
      previewLink: 'https://github.com/JordyVillamil/EWEADN',
      image: EWEADNgif,
      featured: false,
      year: '2025'
    }
  ];

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut" as const
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id={id} className="portfolio-section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my recent projects and experiments in web development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaCode />
            <span>All Projects ({projects.length})</span>
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaRocket />
            <span>Featured ({projects.filter(p => p.featured).length})</span>
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card"
                variants={cardVariants}
                layout
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="featured-badge"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3
                    }}
                  >
                    <FaRocket /> Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="project-image-container">
                  <LazyImage
                    src={project.image}
                    alt={`Preview of ${project.title} - ${project.subtitle}`}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <motion.button
                        onClick={() => openGifInNewWindow(project.image, project.title)}
                        className="overlay-btn"
                        aria-label={`View ${project.title} demo`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.button>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        aria-label={`View ${project.title} source code`}
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-details">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="tag-item"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-links">
                    <motion.button
                      onClick={() => openGifInNewWindow(project.image, project.title)}
                      className="btn-preview"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaExternalLinkAlt />
                      <span>View Demo</span>
                    </motion.button>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new projects and creative ideas.</p>
          <motion.a
            href="#contactame"
            className="cta-button"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Get In Touch
          </motion.a>


        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;