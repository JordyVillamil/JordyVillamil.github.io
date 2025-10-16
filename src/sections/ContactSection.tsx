// src/sections/ContactSection.tsx
import React from 'react'
import { FaPhoneSquare, FaEnvelope } from "react-icons/fa";
import '../styles/ContactSection.css'; // Crear este archivo

interface SectionProps {
  id: string; // "contactame"
}

const ContactSection: React.FC<SectionProps> = ({ id }) => {
    // Nota: El manejo de estados (useState) y la lógica de envío (handleSubmit)
    // para un formulario real deben implementarse aquí. Por ahora, solo es la estructura HTML.
    
  return (
    <section id={id} className="contact-section-container">
      <h2 className="section-title">Contáct me</h2>

      <div className="contact-grid">
        {/* Columna de Información de Contacto */}
        <div className="contact-info-panel">
          <h3>Direct Information</h3>
          <p>I am available for new projects, inquiries, or simply to chat about cybersecurity and software development. Send me a message or contact me directly!</p>
          
          <div className="info-item">
            <FaPhoneSquare className="info-icon"/>
            <p><strong>Phone Number:</strong> <a href="tel:+573204254287">+57 320 425 4287</a></p>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon"/>
            <p><strong>Email:</strong> <a href="mailto:jordyvillamilletras@gmail.com">jordyvillamilletras@gmail.com</a></p>
          </div>
          
          {/* Aquí puedes agregar enlaces a LinkedIn y GitHub */}
        </div>

        {/* Columna del Formulario */}
        <div className="contact-form-panel">
          <form className="contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Affair</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;