import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PeopleAlsoAsk() {
  const { data } = useLanguage();
  const paa = data.search?.peopleAlsoAsk || [];
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    setOpenIndex(prev => prev === index ? -1 : index);
  };

  if (paa.length === 0) return null;

  return (
    <section className="paa-accordion" aria-labelledby="paa-title">
      <h2 id="paa-title" className="paa-accordion__title">
        {data.language === 'es' ? 'Otras preguntas' : 'People also ask'}
      </h2>

      {paa.map((item, index) => (
        <motion.div
          key={index}
          className={`paa-item ${openIndex === index ? 'paa-item--open' : ''}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="paa-item__question"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`paa-answer-${index}`}
            id={`paa-question-${index}`}
          >
            <span>{item.q}</span>
            <span className="paa-item__icon" aria-hidden="true">
              <ChevronDown size={20} />
            </span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`paa-answer-${index}`}
                role="region"
                aria-labelledby={`paa-question-${index}`}
                className="paa-item__answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="paa-item__answer-content">
                  {item.a.split(/(github\.com\/[^\s.,]+)/gi).map((part, pIdx) => {
                    if (part.startsWith('github.com/')) {
                      return (
                        <a
                          key={pIdx}
                          href={`https://${part}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--blue-link)', textDecoration: 'underline' }}
                        >
                          {part}
                        </a>
                      );
                    }
                    return part;
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </section>
  );
}