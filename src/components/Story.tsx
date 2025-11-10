import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartIcon, SparklesIcon, UsersIcon } from 'lucide-react';

/**
 * 🌏 HYPER ME – Story Section
 * SEO + Emotionally optimized
 * → Tăng khả năng hiểu ngữ nghĩa “Danh thiếp điện tử miễn phí”
 * → Giữ toàn bộ animation mượt, nhẹ, cảm xúc
 */
export const Story: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: HeartIcon,
      title: 'Nhân văn và Tự hào',
      description:
        'Mỗi người Việt đều có một câu chuyện, một hành trình, một lý do để tự hào. HYPER ME giúp bạn kể câu chuyện đó bằng chính ngôn ngữ của cảm xúc và công nghệ.',
    },
    {
      icon: SparklesIcon,
      title: 'Công nghệ vì con người',
      description:
        'Không chạy theo xu hướng mà dùng công nghệ để lưu giữ giá trị, lan tỏa bản sắc và truyền cảm hứng sống. HYPER ME là tấm gương phản chiếu linh hồn Việt.',
    },
    {
      icon: UsersIcon,
      title: 'Hội nhập toàn cầu',
      description:
        'Từ thành phố đến vùng quê, từ nghệ sĩ đến kỹ sư — ai cũng có thể tạo hồ sơ chuyên nghiệp để tự tin bước ra thế giới và nói: “Đây là tôi.”',
    },
  ];

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-[#f9f9ff] to-[#eef5ff] overflow-hidden"
    >
      {/* 🌈 Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00b8ff]/5 to-transparent" />
      <div className="absolute -top-32 -right-32 w-[380px] h-[380px] bg-gradient-to-br from-[#00b8ff]/10 to-[#8b5cf6]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* 🧩 SEO Hero Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Danh thiếp điện tử miễn phí cho người Việt
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <strong>HYPER ME</strong> là nền tảng tạo{' '}
            <strong>danh thiếp điện tử</strong> hiện đại, giúp bạn định danh bản thân
            trong thế giới số, gắn thương hiệu cá nhân với domain{' '}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">.io.vn</code>.  
            Chỉ vài phút để khởi tạo <strong>hồ sơ cá nhân</strong> của bạn – hoàn toàn miễn phí.
          </p>
        </motion.div>

        {/* 🇻🇳 Section Title */}
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#DA251D] to-[#FFD700] bg-clip-text text-transparent">
            Việt Nam
          </span>
          <span className="text-gray-800">
            . Nơi công nghệ mang trong mình trái tim con người.
          </span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-5 sm:mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="font-semibold text-[#00b8ff]">HYPER ME</span> không chỉ là một nền tảng mà còn là một phong trào.  
          Nơi người Việt Nam tự tin bước ra thế giới, mang theo câu chuyện, giá trị và lòng tự tôn dân tộc,  
          được viết nên bằng sức mạnh của công nghệ và niềm tin vào chính mình.
        </motion.p>

        {/* 🌟 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm hover:bg-gray-50 hover:-translate-y-2 transition-all duration-300 shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-[#00b8ff] to-[#8b5cf6] flex items-center justify-center shadow-md shadow-[#00b8ff]/20">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🧭 Feature explanation (SEO-friendly narrative) */}
        <motion.div
          className="mt-12 text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p>
            Với <strong>HYPER ME</strong>, bạn có thể tạo <strong>danh thiếp điện tử miễn phí</strong> chỉ trong vài phút — 
            chọn giao diện yêu thích, thêm thông tin cá nhân, và nhận ngay liên kết{' '}
            <code className="bg-gray-100 text-gray-800 px-1 rounded">tênbạn.profile.io.vn</code> 
            để chia sẻ với đối tác, khách hàng, hoặc bạn bè.
          </p>
        </motion.div>

        {/* 🏁 Closing CTA */}
        <motion.div
          className="mt-16 sm:mt-24 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#DA251D] to-[#FFD700] bg-clip-text text-transparent">
            Người Việt định danh thế giới số
          </p>
          <p className="text-gray-600 text-sm sm:text-lg md:text-xl font-medium">
            Hãy bắt đầu ngay hôm nay — vì thế giới sẽ chỉ biết đến người dám kể câu chuyện của chính mình.
          </p>

          <motion.a
            href="https://form.profile.hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-5 sm:mt-6 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] rounded-full text-white text-sm sm:text-lg font-semibold hover:shadow-[0_0_35px_rgba(0,184,255,0.4)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            🚀 Tạo hồ sơ của bạn ngay
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
