import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

const Superpower = () => {
  const { data } = useLanguage();
  const superpower = data.superpower;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="superpoder" className="section relative overflow-hidden">
      {/* Background decoration specifically for superpower */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      </div>

      <div className="container relative z-10" style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel"
          style={{ 
            padding: '4rem 2rem', 
            textAlign: 'center', 
            border: isHovered ? '1px solid rgba(192,132,252,0.4)' : '1px solid var(--border-glass)',
            boxShadow: isHovered ? '0 0 40px rgba(192,132,252,0.1)' : 'none',
            transition: 'all 0.5s ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(192,132,252,0.1)', color: '#c084fc', marginBottom: '2rem' }}>
            <Sparkles size={32} />
          </div>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 400 }}>
            {superpower.question}
          </h2>
          
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #c084fc, #00f2fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
              lineHeight: 1.2
            }}>
              {superpower.answer}
            </h3>
          </motion.div>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            {superpower.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Superpower;
