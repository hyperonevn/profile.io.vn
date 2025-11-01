import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4 pointer-events-none"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="pointer-events-auto flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
        <span className="text-xs text-gray-600">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-1 select-none"
        >
          <span className="text-[#00b8ff] font-bold text-sm tracking-tight">
            HYPER
          </span>
          <span className="text-gray-900 font-bold text-sm tracking-tight">
            ONE
          </span>
        </a>
      </div>
    </motion.header>
  );
};
