import React from 'react';
import { motion } from 'framer-motion';

export const HyperMELogo: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <motion.svg
      width="220"
      height="60"
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        {/* Gradient chính — tông Hyper One AI */}
        <linearGradient id="hypermeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B8FF" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* Hiệu ứng glow */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* HYPER */}
      <motion.text
        x="10"
        y="42"
        fontSize="32"
        fontWeight="700"
        fill="url(#hypermeGradient)"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        filter="url(#glow)"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        HYPER
      </motion.text>

      {/* ME */}
      <motion.text
        x="140"
        y="42"
        fontSize="32"
        fontWeight="700"
        fill="url(#hypermeGradient)"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        animate={{
          opacity: [1, 0.8, 1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ME
      </motion.text>

      {/* Chấm nhịp sáng giữa */}
      <motion.circle
        cx="125"
        cy="31"
        r="4"
        fill="#00B8FF"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};
