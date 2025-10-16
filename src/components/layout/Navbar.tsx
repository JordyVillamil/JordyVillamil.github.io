import React from 'react';
import { FaCode, FaWhatsapp } from "react-icons/fa";
// 🛑 Necesitamos importar el archivo CSS, aunque esté vacío por ahora.
import '../../styles/Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      {/* Logo/Nombre */}
      <a href="#inicio" className="navbar-logo">
        <FaCode className='logo-icon-home'/>
      </a>

      {/* Enlaces de Navegación */}
      <nav className="nav-links">
        {/* Usamos #ID para el smooth scroll de las secciones */}
        <a href="#inicio" className="nav-item">Home</a>
        <a href="#acerca-de-mi" className="nav-item">About me</a>
        <a href="#portafolio" className="nav-item">Portfolio</a>
        <a href="#contactame" className="nav-item">Contáct me</a>
      </nav>

      {/* Información de Contacto (Derecha) */}
      <div className="contact-info">
        {/* Si eliminas la línea del teléfono, ¡tu Navbar.tsx estará completo! */}
        <a href="https://wa.me/message/RXBP3IAZHEG7A1" className="whatsapp-link">
        <FaWhatsapp className='logo-icon'/>
      </a>
      </div>
    </header>
  );
};

// 🌟 ¡Esta línea resuelve el error "has no default export"!
export default Navbar;