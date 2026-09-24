import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Map, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const { data } = useLanguage();
  const roadmap = data.roadmap;

  return (
    <section className="section relative" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', border: '1px solid var(--border-glass)', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            <Map size={16} /> Roadmap
          </div>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            {roadmap.title} <span style={{ color: 'var(--accent-cyan)' }}>{roadmap.highlight}</span>
          </h2>
          
          <div className="glass-panel" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
            {/* Animated background line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ position: 'absolute', top: '0', left: '0', height: '4px', background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple))' }}
            />
            
            <p style={{ fontSize: '1.5rem', color: 'white', lineHeight: 1.6, fontWeight: 300 }}>
              {roadmap.statement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
