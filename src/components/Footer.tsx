import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, Globe2Icon } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0F] text-gray-300 py-10 px-6 sm:px-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* GIỚI THIỆU HỆ SINH THÁI */}
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs text-gray-400 tracking-wide uppercase"
        >
          Một sản phẩm trong hệ sinh thái{' '}
          <span className="font-semibold">
            <span className="text-[#00B8FF]">HYPER</span>
            <span className="text-white"> ONE</span>
          </span>
        </motion.p>

        {/* THÔNG TIN CÔNG TY */}
        <div className="text-xs sm:text-sm text-gray-400 space-y-1">
          <p className="font-medium text-gray-200">HYPER ONE CO., LTD</p>
          <p>68 Nguyễn Huệ, phường Sài Gòn, TP. Hồ Chí Minh, Việt Nam</p>

          <p className="flex items-center justify-center gap-2">
            <MailIcon className="w-4 h-4 text-[#00B8FF]" />
            <a href="mailto:info@hyperonevn.com" className="hover:text-white">
              info@hyperonevn.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <PhoneIcon className="w-4 h-4 text-[#8B5CF6]" />
            <a href="tel:+84352608068" className="hover:text-white">
              +84 352 608 068
            </a>
            <span>·</span>
            <a href="tel:+84342608068" className="hover:text-white">
              +84 342 608 068
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Globe2Icon className="w-4 h-4 text-[#EC4899]" />
            <a
              href="https://hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              hyperonevn.com
            </a>
          </p>
        </div>

        {/* GẠCH NGĂN */}
        <div className="w-full h-[1px] bg-gray-800 my-5 opacity-60" />

        {/* TRI ÂN */}
        {/* TRI ÂN */}
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs text-gray-400"
        >
          Honoring{' '}
          <span className="font-semibold" style={{ color: '#D4AF37' }}>
            Trương Nhật Linh
          </span>{' '}
          ·{' '}
          <span className="font-medium" style={{ color: '#C0C0C0' }}>
            Founding Inspiration Partner
          </span>{' '}
          of <span className="text-white font-semibold">HYPER ME</span>
        </motion.p>


        {/* COPYRIGHT */}
        <p className="text-[11px] text-gray-500 mt-1">
          © {year} HYPER ONE CO., LTD · All rights reserved.
        </p>
      </div>
    </footer>
  );
};
