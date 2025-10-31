import React from 'react';
import { motion } from 'framer-motion';
export const HyperIDLogo: React.FC<{
  className?: string;
}> = ({
  className = ''
}) => {
  return <motion.svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="50%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      {/* HYPER */}
      <text x="10" y="40" fontSize="32" fontWeight="700" fill="url(#logoGradient)" fontFamily="system-ui, -apple-system, sans-serif">
        HYPER
      </text>
      {/* ID */}
      <text x="130" y="40" fontSize="32" fontWeight="300" fill="url(#logoGradient)" fontFamily="system-ui, -apple-system, sans-serif">
        ID
      </text>
      {/* Decorative dot */}
      <motion.circle cx="120" cy="30" r="4" fill="#FF6B9D" animate={{
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
    </motion.svg>;
};