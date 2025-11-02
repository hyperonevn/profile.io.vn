import React from 'react';
import { motion } from 'framer-motion';

export const HyperMELogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.svg
      width="220"
      height="60"
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <defs>
        {/* Gradient sang trọng Hyper One */}
        <linearGradient id="hyperUnified" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00B8FF" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* Bóng mềm tạo chiều sâu nhẹ */}
        <filter id="softDepth" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="1.5" result="offset" />
          <feGaussianBlur in="offset" stdDeviation="1.5" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="normal" />
        </filter>
      </defs>

      {/* HYPER */}
      <motion.text
        x="10"
        y="40"
        fontSize="34"
        fontWeight="800"
        fill="url(#hyperUnified)"
        letterSpacing="1.2"
        fontFamily="'Poppins', 'Inter', sans-serif"
        filter="url(#softDepth)"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        HYPER
      </motion.text>

      {/* Gạch nối năng lượng */}
      <motion.rect
        x="125"
        y="27"
        width="10"
        height="2"
        rx="1"
        fill="url(#hyperUnified)"
        animate={{
          width: [8, 14, 8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ME */}
      <motion.text
        x="145"
        y="40"
        fontSize="34"
        fontWeight="800"
        fill="url(#hyperUnified)"
        letterSpacing="1"
        fontFamily="'Poppins', 'Inter', sans-serif"
        filter="url(#softDepth)"
        animate={{
          opacity: [1, 0.9, 1],
          y: [0, -0.6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ME
      </motion.text>
    </motion.svg>
  );
};
