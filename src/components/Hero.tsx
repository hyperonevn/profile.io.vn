import React from 'react';
import { motion } from 'framer-motion';
import { HyperIDLogo } from '../assets/logos/HyperIDLogo';
import { ArrowRightIcon } from 'lucide-react';
import { AnimatedMockup } from './AnimatedMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Powered by HYPER ONE – fixed top right */}
      <div className="fixed top-5 right-5 flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-[#00c2ff]/40 transition-all z-50">
        <span className="text-xs text-white/70">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-1 select-none"
        >
          <span className="text-[#00c2ff] font-bold text-sm tracking-tight">HYPER</span>
          <span className="text-white font-bold text-sm tracking-tight">ONE</span>
        </a>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HyperIDLogo className="mx-auto lg:mx-0" />

            {/* Tiêu đề */}
            <motion.h1
              className="text-3xl md:text-4xl font-semibold text-white flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-bold text-4xl md:text-5xl">
                &lt;Tên bạn&gt;.profile.io.vn
              </span>
              <span className="text-white/90 text-2xl md:text-3xl font-medium">
                Hồ sơ cá nhân sở hữu domain riêng.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Nơi mỗi liên kết kể một câu chuyện. Hãy tạo trang cá nhân của riêng bạn và kể câu chuyện của bạn.
            </motion.p>

            {/* Demo Examples */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="https://hyperone.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 rounded-xl py-3 px-6 text-white/90 hover:text-pink-300 hover:border-pink-400 transition-all text-base font-medium backdrop-blur-sm whitespace-nowrap"
              >
                hyperone.profile.io.vn
              </a>
              <a
                href="https://luminhtri.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 rounded-xl py-3 px-6 text-white/90 hover:text-pink-300 hover:border-pink-400 transition-all text-base font-medium backdrop-blur-sm whitespace-nowrap"
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
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-semibold text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 BẮT ĐẦU NGAY - MIỄN PHÍ
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#story"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:text-pink-300 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Câu chuyện của chúng tôi
              </motion.a>
            </motion.div>

            {/* Note */}
            <motion.p
              className="text-white/70 text-sm md:text-base mt-4 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Đăng ký sớm để sở hữu{' '}
              <span className="text-pink-300 font-semibold">tên miền đẹp đầu tiên</span> trên .profile.io.vn — chỉ dành cho những người tiên phong.
            </motion.p>
          </motion.div>

          {/* Right Content */}
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
