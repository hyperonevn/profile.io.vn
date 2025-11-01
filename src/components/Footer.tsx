import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe2Icon, FacebookIcon, PhoneIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=61575210205229',
      label: 'Facebook Page',
    },
    {
      icon: Globe2Icon,
      href: 'https://hyperonevn.com',
      label: 'Website',
    },
  ];

  return (
    <footer
      ref={ref}
      className="relative py-20 px-6 border-t border-gray-200 bg-gradient-to-b from-white via-[#f9f9ff] to-[#eef5ff] overflow-hidden text-gray-800"
    >
      {/* Gradient line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[2px] bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] opacity-60" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo text */}
          <div className="flex flex-col items-center text-center space-y-4 relative group">
            <a
              href="https://hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-2 select-none relative z-10"
            >
              <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
                HYPER
              </span>
              <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                ME
              </span>
            </a>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-r from-[#00b8ff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30"></div>

            <p className="text-gray-600 text-base max-w-3xl leading-relaxed mt-2">
              <span className="font-semibold bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
                HYPER ME
              </span>{' '}
              – Nền tảng định danh cá nhân dành cho người Việt.<br />
              Nơi mỗi câu chuyện trở thành một hành trình kết nối toàn cầu.
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00b8ff]/20 hover:to-[#8b5cf6]/20 transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-gray-700" />
              </motion.a>
            ))}
          </motion.div>

          {/* Hotline */}
          <motion.div
            className="text-center text-gray-700 text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="https://zalo.me/0352608068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#00b8ff] transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Hotline / Zalo: 0352608068
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 my-8" />

          {/* Copyright */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-gray-500 text-xs mt-2">
              © {new Date().getFullYear()}{' '}
              <span className="font-semibold bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
                HYPER ME
              </span>{' '}
              · All rights reserved. Powered by{' '}
              <span className="text-[#8b5cf6] font-semibold">HYPER ONE</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
