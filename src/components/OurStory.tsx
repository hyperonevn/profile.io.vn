import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * 🌍 OUR STORY – HYPER ME
 * Giữ chất văn – thêm lớp SEO tự nhiên (Google hiểu chủ đề)
 * → Tăng khả năng xuất hiện khi người dùng tìm "danh thiếp điện tử", "hồ sơ cá nhân người Việt", "HYPER ME"
 */
export const OurStory: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-[#f9f9ff] to-[#eef5ff]"
    >
      {/* 🌈 Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00b8ff]/5 to-transparent" />
      <div className="absolute -top-24 left-0 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-br from-[#00b8ff]/10 to-[#8b5cf6]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-2xl relative z-10 text-center">
        {/* 🧭 Section title */}
        <motion.h2
          className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            Câu chuyện của chúng tôi
          </span>
        </motion.h2>

        {/* 🪶 SEO-friendly intro */}
        <motion.div
          className="text-gray-700 text-sm sm:text-base mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p>
            <strong>HYPER ME</strong> là nền tảng{' '}
            <strong>danh thiếp điện tử miễn phí</strong> đầu tiên mang bản sắc Việt.  
            Nơi mỗi người có thể tạo <strong>hồ sơ cá nhân chuyên nghiệp</strong>, chia sẻ qua QR code hoặc link{' '}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">tênbạn.profile.io.vn</code>,  
            và kể câu chuyện thật của mình bằng công nghệ và cảm xúc.
          </p>
        </motion.div>

        {/* 🩵 Main story */}
        <motion.div
          className="space-y-5 sm:space-y-7 text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-loose"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p>
            Chúng tôi đã đi qua nhiều nơi trên thế giới.  
            Dạo bước ở Ginza, ngắm tuyết ở Hunza,  
            ngồi bên biển Bali và lạc giữa những con phố Paris.  
            Càng đi xa càng nhớ tiếng Việt,  
            nhớ những nụ cười bình dị và niềm tự hào không lời.
          </p>

          <p>
            Ở mỗi châu lục, con người đều có nơi để kể câu chuyện của mình.  
            Instagram để chia sẻ, LinkedIn để làm việc, TikTok để thể hiện cá tính.  
            Nhưng khi ai đó hỏi:{' '}
            <span className="font-semibold bg-gradient-to-r from-[#DA251D] to-[#FFD700] bg-clip-text text-transparent">
              “Người Việt Nam là ai?”
            </span>{' '}
            chúng tôi nhận ra, vẫn chưa có không gian nào đủ gần gũi để kể điều đó.
          </p>

          <p>
            Người Việt là người mẹ tảo tần ở Sài Gòn,  
            người cha trong xưởng ở Bình Dương,  
            cô gái Hà Nội thức đêm làm đồ án,  
            chàng kỹ sư ở Tokyo vẫn nói tiếng Việt trong tim mình.  
            Họ không nổi tiếng, nhưng họ đáng được biết đến.
          </p>

          <p>
            Từ mong muốn ấy,{' '}
            <span className="font-semibold text-[#00b8ff]">HYPER ME</span> được sinh ra —  
            không để chạy theo mạng xã hội,  
            mà để lưu giữ những giá trị riêng của người Việt.  
            Một nơi nhỏ bé, ấm áp và thật.
          </p>

          <p>
            Mỗi hồ sơ là một linh hồn,  
            mỗi câu chữ là một hành trình,  
            và mỗi người Việt là một niềm tự hào đang sống.
          </p>

          <p>
            Dù bạn ở châu Á, châu Âu hay bên kia quả địa cầu,  
            chỉ với một đường link hay một mã QR,  
            bạn có thể nói với thế giới:{' '}
            <span className="font-bold bg-gradient-to-r from-[#DA251D] to-[#FFD700] bg-clip-text text-transparent">
              “Đây là tôi. Tôi là người Việt Nam.”
            </span>
          </p>

          {/* 💫 CTA block */}
          <motion.div
            className="pt-10 sm:pt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899]">
              HYPER ME
            </p>
            <p className="text-gray-600 mt-3 text-sm sm:text-base mb-6">
              Một hành trình của niềm tự hào Việt.  
              Nơi công nghệ phục vụ con người,  
              và mỗi câu chuyện đều được kể bằng trái tim.
            </p>

            <motion.a
              href="https://form.profile.hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] text-white rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-[0_0_25px_rgba(0,184,255,0.5)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              🚀 Tạo hồ sơ của bạn ngay
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
