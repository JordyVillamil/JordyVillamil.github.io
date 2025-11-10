// src/sections/ContactSection.tsx
import React, { useState } from 'react';
import { FaPhoneSquare, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import '../styles/ContactSection.css';

interface SectionProps {
  id: string;
}

const ContactSection: React.FC<SectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simular envío (reemplaza con tu lógica real: EmailJS, FormSpree, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', formData);
      setFormStatus('success');
      
      // Limpiar formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Resetear status después de 3 segundos
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: FaPhoneSquare,
      label: 'Phone Number',
      value: '+57 320 425 4287',
      href: 'tel:+573204254287',
      color: '#25d366'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jordyvillamilletras@gmail.com',
      href: 'mailto:jordyvillamilletras@gmail.com',
      color: '#ea4335'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Tocancipá, Colombia',
      href: 'google.com/maps/place/Tocancipá,+Cundinamarca',
      color: '#ffffff'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/JordyVillamil',
      color: '#ffffff'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jordy-fabian-villamil-letrado-32378b232/',
      color: '#5ca7c5'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id={id} className="contact-section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Let's work together! I'm available for new projects and collaborations.
        </p>
      </motion.div>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Panel de Información */}
        <motion.div variants={itemVariants} className="contact-info-panel">
          <div className="info-header">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>

          <div className="contact-info-list">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="info-icon-wrapper" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon className="info-icon" style={{ color: item.color }} />
                </div>
                <div className="info-content">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-links">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ backgroundColor: `${social.color}15` }}
                >
                  <social.icon style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="info-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </motion.div>

        {/* Panel del Formulario */}
        <motion.div variants={itemVariants} className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                required
                disabled={formStatus === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project..."
                required
                disabled={formStatus === 'sending'}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`submit-button ${formStatus}`}
              disabled={formStatus === 'sending' || formStatus === 'success'}
              whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
            >
              {formStatus === 'idle' && (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
              {formStatus === 'sending' && (
                <>
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </>
              )}
              {formStatus === 'success' && (
                <>
                  <span>✓ Message Sent!</span>
                </>
              )}
              {formStatus === 'error' && (
                <>
                  <span>✗ Error. Try Again</span>
                </>
              )}
            </motion.button>

            {formStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;