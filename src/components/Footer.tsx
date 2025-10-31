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
      className="relative py-20 px-6 border-t border-white/10 bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden"
    >
      {/* Gradient line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[2px] bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 opacity-60" />

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
              <span className="text-[#00c2ff] text-4xl font-extrabold tracking-tight">
                HYPER
              </span>
              <span className="text-white text-4xl font-extrabold tracking-tight">
                ONE
              </span>
            </a>
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-[#00c2ff]/30"></div>

            <p className="text-white/70 text-base max-w-3xl leading-relaxed mt-2">
              Vietnam’s Leading AI Innovation Hub · Tiên phong phát triển giải pháp Trí tuệ Nhân tạo và Tự động hóa thực chiến.
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
                className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-gradient-to-br hover:from-red-400/30 hover:to-yellow-300/30 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-white/80" />
              </motion.a>
            ))}
          </motion.div>

          {/* Hotline */}
          <motion.div
            className="text-center text-white/70 text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="https://zalo.me/0352608068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#00c2ff] transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Hotline / Zalo: 0352608068
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-8" />

          {/* Copyright */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-white/40 text-xs mt-2">
              © {new Date().getFullYear()} HYPER ID · All rights reserved. Powered by{' '}
              <span className="text-[#00c2ff] font-semibold">HYPER ONE</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
