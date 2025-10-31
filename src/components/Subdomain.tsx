import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from 'lucide-react';

export const Subdomain: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [subdomain, setSubdomain] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(255, 255, 255, 0.05)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            animate={{
              d: [
                'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z',
                'M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z',
                'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hành trình của bạn bắt đầu tại đây
            </motion.h2>

            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Chỉ với một tên miền nhỏ, bạn có thể mở ra một thế giới mới.  
              Nơi câu chuyện của bạn hiện diện đẹp đẽ, tự tin và thật sự thuộc về bạn.
            </motion.p>
          </div>

          {/* Input Field */}
          <motion.div
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-3xl rounded-full"
              animate={{
                scale: isFocused ? 1.1 : 1,
                opacity: isFocused ? 0.6 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
              <div className="flex items-center gap-2">
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
                  className="flex-1 bg-transparent text-white text-lg px-6 py-4 outline-none placeholder:text-white/40"
                />
                <span className="text-white/60 text-lg pr-4">
                  .profile.io.vn
                </span>
              </div>
            </div>

            {subdomain && (
              <motion.div
                className="mt-4 flex items-center justify-center gap-2 text-green-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckIcon className="w-5 h-5" />
                <span>Tên miền khả dụng!</span>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.button
            className="group px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            🚀 Tạo hồ sơ miễn phí ngay
          </motion.button>

          {/* Closing line */}
          <motion.p
            className="text-white/60 text-lg mt-10 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
          >
            Một dòng link nhỏ, một mã QR, có thể đưa bạn đến bên kia quả địa cầu.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
