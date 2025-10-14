import React from 'react';
// 🛑 Necesitamos importar el archivo CSS, aunque esté vacío por ahora.
import '../../styles/Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      {/* Logo/Nombre */}
      <a href="#inicio" className="navbar-logo">
        <span className="logo-text">J</span>
        <span className="logo-icon">fa:coffee</span>
      </a>

      {/* Enlaces de Navegación */}
      <nav className="nav-links">
        {/* Usamos #ID para el smooth scroll de las secciones */}
        <a href="#inicio" className="nav-item">Inicio</a>
        <a href="#acerca-de-mi" className="nav-item">Acerca de mí</a>
        <a href="#portafolio" className="nav-item">Portafolios</a>
        <a href="#contactame" className="nav-item">Contáctame</a>
      </nav>

      {/* Información de Contacto (Derecha) */}
      <div className="contact-info">
        {/* Si eliminas la línea del teléfono, ¡tu Navbar.tsx estará completo! */}
        <span>(+57) 320 425 42 87</span>
      </div>
    </header>
  );
};

// 🌟 ¡Esta línea resuelve el error "has no default export"!
export default Navbar;