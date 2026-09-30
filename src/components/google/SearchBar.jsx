import React, { useRef, useEffect, useState } from 'react';
import { Mic, Camera, Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SearchBar({
  value = '',
  onChange,
  onSubmit,
  onBarClick,
  placeholder = '',
  autoType = false,
  defaultQuery = '',
  className = '',
  showIcons = true
}) {
  const { language } = useLanguage();
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [, setTypeIndex] = useState(0);
  const [, setShowCursor] = useState(true);

  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (autoType && defaultQuery && !value) {
      if (prefersReducedMotion) {
        setTypedText(defaultQuery);
        onChange?.(defaultQuery);
        return;
      }

      const timer = setInterval(() => {
        setTypeIndex(prev => {
          const next = prev + 1;
          if (next > defaultQuery.length) {
            clearInterval(timer);
            setShowCursor(false);
            return prev;
          }
          const text = defaultQuery.slice(0, next);
          setTypedText(text);
          onChange?.(text);
          return next;
        });
      }, 80);

      return () => clearInterval(timer);
    }
  }, [autoType, defaultQuery, prefersReducedMotion, onChange, value]);

  useEffect(() => {
    if (inputRef.current && autoType && defaultQuery && !value) {
      inputRef.current.focus();
    }
  }, [autoType, defaultQuery, value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit?.(value || typedText || defaultQuery);
    }
  };

  const displayValue = autoType && !value ? typedText : (value || '');
  const displayPlaceholder = autoType && !value ? '' : placeholder;

  return (
    <div
      className={`search-bar ${isFocused ? 'search-bar--focused' : ''} ${className}`}
      role="search"
      aria-label={language === 'es' ? 'Buscar en el portafolio' : 'Search portfolio'}
      onClick={() => {
        if (onBarClick) {
          onBarClick();
        }
      }}
    >
      <button
        type="button"
        className="search-bar__icon-btn search-bar__icon-btn--submit"
        aria-label={language === 'es' ? 'Buscar' : 'Search'}
        title={language === 'es' ? 'Buscar' : 'Search'}
        onClick={(e) => {
          e.stopPropagation();
          onSubmit?.(value || typedText || defaultQuery);
        }}
      >
        <SearchIcon size={20} />
      </button>
      <input
        ref={inputRef}
        type="text"
        className="search-bar__input"
        value={displayValue}
        onChange={(e) => {
          setTypedText(e.target.value);
          onChange?.(e.target.value);
        }}
        onClick={(e) => {
          if (onBarClick) {
            e.stopPropagation();
            onBarClick();
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={displayPlaceholder}
        aria-autocomplete="list"
        aria-controls="search-results"
        autoComplete="off"
        spellCheck={false}
      />
      {showIcons && (
        <div className="search-bar__actions">
          <button
            type="button"
            className="search-bar__icon-btn"
            aria-label={language === 'es' ? 'Buscar por voz' : 'Search by voice'}
            title={language === 'es' ? 'Buscar' : 'Search'}
            onClick={(e) => {
              e.stopPropagation();
              onSubmit?.(value || typedText || defaultQuery);
            }}
          >
            <Mic size={20} />
          </button>
          <button
            type="button"
            className="search-bar__icon-btn"
            aria-label={language === 'es' ? 'Buscar con cámara' : 'Search with camera'}
            title={language === 'es' ? 'Buscar' : 'Search'}
            onClick={(e) => {
              e.stopPropagation();
              onSubmit?.(value || typedText || defaultQuery);
            }}
          >
            <Camera size={20} />
          </button>
        </div>
      )}
    </div>
  );
}