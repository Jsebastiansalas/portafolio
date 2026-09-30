import React from 'react';

export const LinkedInIcon = ({ size = 18, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ flexShrink: 0 }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GitHubIcon = ({ size = 18, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ flexShrink: 0 }}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const WaffleIcon = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} style={{ flexShrink: 0 }}>
    <circle cx="5" cy="5" r="2.2" />
    <circle cx="12" cy="5" r="2.2" />
    <circle cx="19" cy="5" r="2.2" />
    <circle cx="5" cy="12" r="2.2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="19" cy="12" r="2.2" />
    <circle cx="5" cy="19" r="2.2" />
    <circle cx="12" cy="19" r="2.2" />
    <circle cx="19" cy="19" r="2.2" />
  </svg>
);

export const GeminiIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="geminiGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="35%" stopColor="#9B72CB" />
        <stop offset="70%" stopColor="#D96570" />
        <stop offset="100%" stopColor="#1BA1E2" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
      fill="url(#geminiGradIcon)"
    />
  </svg>
);

export const DriveIcon = ({ size = 22, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ flexShrink: 0 }}>
    <path d="M8.2 3.8L2.5 13.8L5.5 19L11.2 9L8.2 3.8Z" fill="#0066DA" />
    <path d="M15.8 3.8H8.2L11.2 9H18.8L15.8 3.8Z" fill="#00AC47" />
    <path d="M21.5 13.8L18.8 9L11.2 9L14.2 14.2L18.5 19L21.5 13.8Z" fill="#EA4335" />
    <path d="M5.5 19H18.5L15.5 13.8H2.5L5.5 19Z" fill="#FFBA00" />
  </svg>
);

export const GmailIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ flexShrink: 0 }}>
    <path d="M3 6.5C3 5.12 4.12 4 5.5 4H7.5V11L3 8V6.5Z" fill="#4285F4" />
    <path d="M21 6.5C21 5.12 19.88 4 18.5 4H16.5V11L21 8V6.5Z" fill="#34A853" />
    <path d="M16.5 4L12 7.5L7.5 4H16.5Z" fill="#EA4335" />
    <path d="M3 8L7.5 11V20H5.5C4.12 20 3 18.88 3 17.5V8Z" fill="#FBBC04" />
    <path d="M21 8L16.5 11V20H18.5C19.88 20 21 18.88 21 17.5V8Z" fill="#EA4335" />
    <path d="M7.5 11L12 14.5L16.5 11V20H7.5V11Z" fill="#E8EAED" />
  </svg>
);
