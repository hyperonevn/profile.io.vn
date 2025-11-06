import React from "react";
import { motion } from "framer-motion";
import { HyperMELogo } from "../assets/logos/HyperMELogo";
import { AnimatedMockup } from "./AnimatedMockup";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-[#f9fbff] via-[#f3f0ff] to-white text-gray-900 px-6 lg:px-20 pt-16 sm:pt-24 pb-24 overflow-visible"
    >
      {/* Góc phải: Powered by */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/60 px-3 py-1 rounded-full text-[10px] sm:text-xs border border-gray-300 shadow-sm z-20">
        <span className="text-gray-600">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 font-bold text-gray-900"
        >
          <span className="text-[#00b8ff]">HYPER</span>ONE
        </a>
      </div>

      {/* Hiệu ứng hạt nền */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#a3cfff]/40 pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cột trái: Logo + tiêu đề + CTA */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2 max-w-xl"
      >
        <motion.div
          className="relative flex justify-center lg:justify-start"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-[#00b8ff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30 blur-3xl rounded-full -z-10" />
          <HyperMELogo className="w-40 sm:w-60 drop-shadow-[0_0_25px_rgba(0,184,255,0.3)]" />
        </motion.div>

        <h1 className="mt-6 text-2xl sm:text-4xl font-extrabold leading-snug text-gray-900 px-3 lg:px-0">
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            &lt;Tên bạn&gt;.profile.io.vn
          </span>
        </h1>

        {/* 🇻🇳 & 🇬🇧 song ngữ */}
        <div className="mt-3 space-y-1 sm:space-y-2">
          <p className="text-sm sm:text-lg text-gray-700 font-medium">
            Trang cá nhân có địa chỉ web riêng của bạn.
          </p>
          <p className="text-sm sm:text-lg text-[#00b8ff] font-semibold">
            Nổi bật. Đơn giản. Chuyên nghiệp.
          </p>

          <p className="text-sm sm:text-lg text-gray-700 font-medium pt-2">
            Your personal website that truly represents you.
          </p>
          <p className="text-sm sm:text-lg text-[#00b8ff] font-semibold">
            Stand out. Simple. Professional.
          </p>
        </div>

        <motion.a
          href="https://form.profile.hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="z-20 mt-6 inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 
                     bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] 
                     rounded-full shadow-[0_0_25px_rgba(0,184,255,0.3)] 
                     text-white font-extrabold text-base sm:text-lg whitespace-nowrap 
                     hover:shadow-[0_0_35px_rgba(0,184,255,0.5)] tracking-wide"
        >
          🚀 TẠO HỒ SƠ / CREATE PROFILE
        </motion.a>
      </motion.div>

      {/* Cột phải: Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex justify-center lg:justify-end lg:w-1/2 pointer-events-none"
      >
        <AnimatedMockup />
      </motion.div>
    </section>
  );
};
