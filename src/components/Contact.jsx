import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { data } = useLanguage();
  const contact = data.contact;

  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div className="container relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel contact-card"
          style={{ padding: '4rem 2rem', maxWidth: '48rem', margin: '0 auto' }}
        >
          <div className="contact-icon">
            <Mail size={32} />
          </div>
          
          <h2 className="section-title">{contact.title}</h2>
          <p className="contact-desc">
            {contact.desc}
          </p>
          
          <div className="contact-links">
            <a 
              href={`mailto:${contact.email}`}
              className="btn"
              style={{ background: 'white', color: 'black', fontWeight: 'bold' }}
            >
              {contact.emailBtn} <Send size={18} />
            </a>
            
            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={20} /> {contact.githubBtn}
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
