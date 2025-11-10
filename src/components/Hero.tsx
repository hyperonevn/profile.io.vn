import React from "react";
import { motion } from "framer-motion";
import { HyperMELogo } from "../assets/logos/HyperMELogo";
import { AnimatedMockup } from "./AnimatedMockup";

/**
 * 🌟 HYPER ME HERO SECTION – SEO & Conversion Optimized
 * → Mục tiêu: Google hiểu đây là nền tảng “Tạo danh thiếp điện tử miễn phí / Digital Profile Builder”
 * → Giữ nguyên thiết kế, thêm semantic layer (H1, description, alt, schema hint)
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-[#f9fbff] via-[#f3f0ff] to-white text-gray-900 px-6 lg:px-20 pt-16 sm:pt-24 pb-24 overflow-hidden"
    >
      {/* ⚙️ Góc phải: Powered by */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/60 px-3 py-1 rounded-full text-[10px] sm:text-xs border border-gray-300 shadow-sm z-30">
        <span className="text-gray-600">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 font-bold text-gray-900 hover:text-[#00b8ff] transition-colors"
        >
          <span className="text-[#00b8ff]">HYPER</span>ONE
        </a>
      </div>

      {/* 💫 Hiệu ứng hạt nền */}
      <div className="absolute inset-0 pointer-events-none z-0">
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

      {/* 🧭 Cột trái: Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
      >
        {/* 🔥 Logo với mô tả alt (SEO & accessibility) */}
        <motion.div
          className="relative flex justify-center lg:justify-start"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-[#00b8ff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30 blur-3xl rounded-full -z-10" />
          <div aria-label="HYPER ME – Nền tảng danh thiếp điện tử miễn phí cho người Việt">
            <HyperMELogo className="w-40 sm:w-60 drop-shadow-[0_0_25px_rgba(0,184,255,0.3)]" />
          </div>
        </motion.div>

        {/* 🏷️ Tiêu đề chính (H1 SEO chính thức) */}
        <h1 className="mt-6 text-2xl sm:text-4xl font-extrabold leading-snug text-gray-900 px-3 lg:px-0">
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            Tạo danh thiếp điện tử miễn phí tại &lt;Tên bạn&gt;.profile.io.vn
          </span>
        </h1>

        {/* 🔍 Mô tả phụ SEO-friendly */}
        <p className="mt-3 text-sm sm:text-lg text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          <strong>HYPER ME</strong> giúp bạn tạo{" "}
          <strong>hồ sơ cá nhân chuyên nghiệp</strong>, gắn thương hiệu riêng với domain{" "}
          <code className="bg-gray-100 text-gray-800 px-1 rounded">.io.vn</code>.  
          Một sản phẩm thuộc hệ sinh thái{" "}
          <span className="font-semibold text-[#00b8ff]">HYPER ONE</span> – đơn giản, nổi bật, mang bản sắc Việt.
        </p>

        {/* 🌏 Song ngữ slogan */}
        <div className="mt-5 space-y-1 sm:space-y-2">
          <p className="text-sm sm:text-lg text-gray-700 font-medium">
            Trang cá nhân có địa chỉ web riêng của bạn.
          </p>
          <p className="text-sm sm:text-lg text-[#00b8ff] font-semibold">
            Nổi bật. Đơn giản. Chuyên nghiệp.
          </p>

          <p className="text-sm sm:text-lg text-gray-700 font-medium pt-2">
            Your own personal website, designed just for you.
          </p>
          <p className="text-sm sm:text-lg text-[#00b8ff] font-semibold">
            Stand out. Simple. Professional.
          </p>
        </div>

        {/* 🚀 CTA */}
        <motion.a
          href="https://form.profile.hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="z-30 mt-6 inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 
                     bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] 
                     rounded-full shadow-[0_0_25px_rgba(0,184,255,0.3)] 
                     text-white font-extrabold text-base sm:text-lg whitespace-nowrap 
                     hover:shadow-[0_0_35px_rgba(0,184,255,0.5)] tracking-wide"
        >
          🚀 TẠO HỒ SƠ CỦA BẠN NGAY
        </motion.a>
      </motion.div>

      {/* 🖼️ Cột phải: Mockup minh họa */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end pointer-events-none"
      >
        <AnimatedMockup />
      </motion.div>
    </section>
  );
};
