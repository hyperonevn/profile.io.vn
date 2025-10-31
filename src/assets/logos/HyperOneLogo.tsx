import React from 'react';

export const HyperOneLogo: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <svg
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow background subtle */}
      <defs>
        <filter id="hyperone-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Text layers */}
      <text
        x="0"
        y="20"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#00C2FF"
        filter="url(#hyperone-glow)"
      >
        HYPER
      </text>
      <text
        x="64"
        y="20"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#FFFFFF"
      >
        ONE
      </text>
    </svg>
  );
};
