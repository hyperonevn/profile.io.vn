import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from 'lucide-react';

export const Subdomain: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [subdomain, setSubdomain] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#f9f9ff] via-[#eef5ff] to-white"
    >
      {/* Background wave */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full opacity-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(0,184,255,0.08)"
            d="M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,150C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
            animate={{
              d: [
                'M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,150C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z',
                'M0,140L60,150C120,160,240,180,360,170C480,160,600,120,720,110C840,100,960,120,1080,130C1200,140,1320,140,1380,140L1440,140L1440,320L0,320Z',
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-lg sm:max-w-2xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bắt đầu hành trình{' '}
            <span className="bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
              HYPER ME
            </span>{' '}
            của bạn
          </motion.h2>

          {/* Input box */}
          <motion.div
            className="relative max-w-sm sm:max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00b8ff]/25 to-[#8b5cf6]/25 blur-2xl rounded-2xl"
              animate={{
                scale: isFocused ? 1.05 : 1,
                opacity: isFocused ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative bg-white border border-gray-300 rounded-2xl py-2 px-3 flex items-center justify-between">
              <input
                type="text"
                value={subdomain}
                onChange={(e) =>
                  setSubdomain(
                    e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
                  )
                }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="tenban"
                className="flex-1 bg-transparent text-gray-900 text-sm sm:text-base px-2 sm:px-3 py-2 outline-none placeholder:text-gray-400 truncate"
              />
              <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                .profile.io.vn
              </span>
            </div>

            {subdomain && (
              <motion.div
                className="mt-2 flex items-center justify-center gap-1.5 text-green-600 text-xs sm:text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckIcon className="w-4 h-4" />
                <span>Tên miền khả dụng!</span>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.button
            className="mt-4 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] text-white rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-[0_0_25px_rgba(0,184,255,0.5)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            🚀 Tạo hồ sơ HYPER ME miễn phí
          </motion.button>

          {/* Closing line */}
          <motion.p
            className="text-gray-600 text-xs sm:text-sm italic mt-6 leading-relaxed max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
          >
            Một dòng link nhỏ, một mã QR — bạn đã ở khắp thế giới cùng{' '}
            <span className="font-semibold text-[#00b8ff]">HYPER ME</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
