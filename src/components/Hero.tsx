import React from 'react';
import { motion } from 'framer-motion';
import { HyperMELogo } from '../assets/logos/HyperMELogo';
import { ArrowRightIcon } from 'lucide-react';
import { AnimatedMockup } from './AnimatedMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible py-20 px-6 bg-gradient-to-b from-[#eaf4ff] via-[#f9f5ff] to-white text-gray-900">
      {/* Header inside Hero (not fixed) */}
      <motion.div
        className="absolute top-6 right-6 flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#a3cfff]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HyperMELogo className="mx-auto lg:mx-0" />

            {/* Title */}
            <motion.h1
              className="font-semibold flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 flex-wrap text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent font-bold text-3xl sm:text-4xl md:text-5xl">
                &lt;Tên bạn&gt;.profile.io.vn
              </span>
              <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-medium">
                Trang cá nhân thể hiện chính bạn.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Nơi mỗi liên kết kể một câu chuyện. Hãy tạo trang cá nhân của riêng bạn với{' '}
              <span className="font-semibold text-[#00b8ff]">HYPER ME</span>.
            </motion.p>

            {/* Demo Links */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="https://hyperme.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 rounded-xl py-3 px-6 text-gray-700 hover:text-[#00b8ff] hover:border-[#00b8ff] transition-all text-base font-medium shadow-sm whitespace-nowrap"
              >
                hyperme.profile.io.vn
              </a>
              <a
                href="https://luminhtri.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 rounded-xl py-3 px-6 text-gray-700 hover:text-[#8b5cf6] hover:border-[#8b5cf6] transition-all text-base font-medium shadow-sm whitespace-nowrap"
              >
                luminhtri.profile.io.vn
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] text-white rounded-full font-semibold text-lg shadow-[0_0_20px_rgba(0,184,255,0.4)] hover:shadow-[0_0_35px_rgba(0,184,255,0.6)] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 BẮT ĐẦU NGAY - MIỄN PHÍ
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#story"
                className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg border-2 border-gray-300 hover:bg-gray-100 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Câu chuyện của chúng tôi
              </motion.a>
            </motion.div>

            {/* Note */}
            <motion.p
              className="text-gray-600 text-sm md:text-base mt-4 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Đăng ký sớm để sở hữu{' '}
              <span className="text-[#00b8ff] font-semibold">tên miền đẹp đầu tiên</span> trên .profile.io.vn cùng{' '}
              <span className="font-semibold text-[#8b5cf6]">HYPER ME</span>.
            </motion.p>
          </motion.div>

          {/* Right side mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatedMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
