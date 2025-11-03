import React from "react";
import { motion } from "framer-motion";
import { HyperMELogo } from "../assets/logos/HyperMELogo";
import { AnimatedMockup } from "./AnimatedMockup";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f9fbff] via-[#f3f0ff] to-white text-gray-900 px-4 pt-14 sm:pt-20 pb-24 overflow-visible"
    >
      {/* Góc phải: Powered by */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/60 px-3 py-1 rounded-full text-[10px] sm:text-xs border border-gray-300 shadow-sm">
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
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#a3cfff]/40"
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

      {/* Logo + tiêu đề */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-8 sm:mb-12 max-w-xl"
      >
        <motion.div
          className="relative flex justify-center"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-[#00b8ff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30 blur-3xl rounded-full -z-10" />
          <HyperMELogo className="w-40 sm:w-60 drop-shadow-[0_0_25px_rgba(0,184,255,0.3)]" />
        </motion.div>

        <h1 className="mt-6 text-xl sm:text-4xl font-extrabold leading-snug text-gray-900 px-3">
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            &lt;Tên bạn&gt;.profile.io.vn
          </span>
        </h1>

        <p className="mt-2 text-sm sm:text-lg text-gray-700 font-medium px-5 sm:px-0">
          Trang cá nhân có địa chỉ web riêng của bạn.{" "}
          <span className="text-[#00b8ff] font-semibold">
            Nổi bật. Đơn giản. Chuyên nghiệp.
          </span>
        </p>
      </motion.div>

      {/* Mockup */}
      <div className="relative z-0 mt-10 sm:mt-0 flex justify-center">
        <AnimatedMockup />
      </div>
    </section>
  );
};
