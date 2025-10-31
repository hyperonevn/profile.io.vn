
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartIcon, SparklesIcon, UsersIcon } from 'lucide-react';

export const Story: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: HeartIcon,
      title: 'Nhân văn & Tự hào',
      description:
        'Mỗi người Việt đều có một câu chuyện, một hành trình, một lý do để tự hào. HYPER ID sinh ra để giúp bạn kể câu chuyện đó bằng chính ngôn ngữ của cảm xúc và công nghệ.',
    },
    {
      icon: SparklesIcon,
      title: 'Công nghệ vì con người',
      description:
        'Không phải chạy theo xu hướng, mà là dùng công nghệ để lưu giữ giá trị, lan tỏa bản sắc và truyền cảm hứng sống. Với HYPER ID, công nghệ trở thành tấm gương phản chiếu linh hồn Việt.',
    },
    {
      icon: UsersIcon,
      title: 'Hội nhập toàn cầu',
      description:
        'Từ thành phố đến vùng quê, từ nghệ sĩ đến kỹ sư, ai cũng có thể tạo cho mình một hồ sơ chuyên nghiệp, để tự tin bước ra thế giới và nói: “Đây là tôi, người Việt Nam.”',
    },
  ];

  return (
    <section
      id="story"  // 👈 thêm ID để Hero có thể cuộn xuống
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-gradient-to-br from-red-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-red-500 bg-clip-text text-transparent">
            Việt Nam. Nơi công nghệ mang trong mình trái tim con người.
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          HYPER ID không chỉ là một nền tảng, mà là một phong trào.  
          Nơi người Việt Nam tự tin bước ra thế giới,  
          mang theo câu chuyện, giá trị và lòng tự tôn dân tộc,  
          được viết nên bằng sức mạnh của công nghệ và niềm tin vào chính mình.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-red-400/10">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          className="mt-24 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-red-500">
            Người Việt định danh thế giới số.
          </p>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            Hãy bắt đầu ngay hôm nay, vì thế giới sẽ chỉ biết đến người dám kể câu chuyện của chính mình.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center mt-6 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Tạo hồ sơ của bạn ngay
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
