// src/sections/ContactSection.tsx
import React from 'react'
import '../styles/ContactSection.css'; // Crear este archivo

interface SectionProps {
  id: string; // "contactame"
}

const ContactSection: React.FC<SectionProps> = ({ id }) => {
    // Nota: El manejo de estados (useState) y la lógica de envío (handleSubmit)
    // para un formulario real deben implementarse aquí. Por ahora, solo es la estructura HTML.
    
  return (
    <section id={id} className="contact-section-container">
      <h2 className="section-title">Contáctame</h2>

      <div className="contact-grid">
        {/* Columna de Información de Contacto */}
        <div className="contact-info-panel">
          <h3>Información Directa</h3>
          <p>Estoy disponible para nuevos proyectos, consultas o simplemente para charlar sobre ciberseguridad y desarrollo de software. ¡Envíame un mensaje o contáctame directamente!</p>
          
          <div className="info-item">
            <span className="info-icon">📞</span>
            <p><strong>Teléfono:</strong> <a href="tel:+573204254287">+57 320 425 4287</a></p>
          </div>

          <div className="info-item">
            <span className="info-icon">📧</span>
            <p><strong>Email:</strong> <a href="mailto:jordyvillamilletras@gmail.com">jordyvillamilletras@gmail.com</a></p>
          </div>
          
          {/* Aquí puedes agregar enlaces a LinkedIn y GitHub */}
        </div>

        {/* Columna del Formulario */}
        <div className="contact-form-panel">
          <form className="contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;