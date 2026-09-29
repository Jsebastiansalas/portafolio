import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch-only screen
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .interactive-element, .project-card, .interactive-chip');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#00f2fe',
          boxShadow: '0 0 10px rgba(0, 242, 254, 0.8)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s'
        }}
      />

      {/* Trailing Fluid Glow Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: isHovered ? '1.5px solid rgba(0, 242, 254, 0.7)' : '1px solid rgba(192, 132, 252, 0.4)',
          background: isHovered ? 'rgba(0, 242, 254, 0.08)' : 'rgba(192, 132, 252, 0.03)',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.2s, background 0.2s, opacity 0.2s'
        }}
      />
    </>
  );
};

export default CustomCursor;
