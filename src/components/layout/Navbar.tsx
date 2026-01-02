import React, { useState, useEffect } from 'react';
import { FaCode, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import '../../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'acerca-de-mi', 'habilidades', 'portafolio', 'contactame'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Home', id: 'inicio' },
    { href: '#acerca-de-mi', label: 'About', id: 'acerca-de-mi' },
    { href: '#habilidades', label: 'Skills', id: 'habilidades' },
    { href: '#portafolio', label: 'Portfolio', id: 'portafolio' },
    { href: '#contactame', label: 'Contact', id: 'contactame' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-content">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="navbar-logo">
            <div className="logo-wrapper">
              <FaCode className="logo-icon-home" />
            </div>
            <span className="logo-text">
              JV<span className="logo-accent">.dev</span>
            </span>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href="https://wa.me/message/RXBP3IAZHEG7A1"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp className="logo-icon" />
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-btn">
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div className="mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <button onClick={() => setIsMobileMenuOpen(false)} className="mobile-close-btn">
                <HiX size={24} />
              </button>
            </div>
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mobile-whatsapp">
              <a href="https://wa.me/message/RXBP3IAZHEG7A1" target="_blank" rel="noopener noreferrer" className="mobile-whatsapp-btn">
                <FaWhatsapp size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;