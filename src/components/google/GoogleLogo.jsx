import React from 'react';

export default function GoogleLogo({ size = 'large', className = '' }) {
  const letters = [
    { char: 'S', color: 'var(--blue-accent)' },
    { char: 'e', color: 'var(--red-accent)' },
    { char: 'b', color: 'var(--yellow-accent)' },
    { char: 'a', color: 'var(--blue-accent)' },
    { char: 's', color: 'var(--green-accent)' },
    { char: 't', color: 'var(--red-accent)' },
    { char: 'i', color: 'var(--yellow-accent)' },
    { char: 'a', color: 'var(--blue-accent)' },
    { char: 'n', color: 'var(--green-accent)' },
  ];

  const fontSize = size === 'small' ? '20px' : size === 'medium' ? '1.75rem' : 'clamp(1.75rem, 4vw, 2.5rem)';

  return (
    <span className={`google-logo ${className}`} style={{ fontSize }} aria-hidden="true">
      {letters.map(({ char, color }, i) => (
        <span
          key={i}
          className="google-logo__letter"
          style={{ color }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}