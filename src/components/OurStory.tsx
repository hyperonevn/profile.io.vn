import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const OurStory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-500/10 to-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-red-500 bg-clip-text text-transparent">
            Câu chuyện của chúng tôi
          </span>
        </motion.h2>

        <motion.div
          className="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p>
            Có những đêm chúng tôi thức trắng, chỉ để nghĩ về một điều giản dị.  
            Tại sao người Việt giỏi, tử tế và sáng tạo đến thế,  
            mà lại chưa có nơi nào để kể câu chuyện của chính mình.
          </p>

          <p>
            Mỗi người Việt đều mang trong mình một hành trình.  
            Có người lặng lẽ, có người rực rỡ, nhưng tất cả đều đáng được trân trọng.  
            Thế giới đang bước vào kỷ nguyên AI,  
            nhưng vẫn còn nhiều người Việt chưa có một tấm danh thiếp số để nói lên rằng  
            "Tôi là ai".
          </p>

          <p>
            Chúng tôi không muốn công nghệ chỉ để khoe sự thông minh.  
            Chúng tôi muốn nó trở thành chiếc cầu nối giữa trái tim con người Việt  
            và thế giới, nơi mỗi hồ sơ không chỉ là dữ liệu mà là một phần linh hồn.
          </p>

          <p>
            HYPER ID ra đời từ khát khao đó.  
            Từ những người Việt nhỏ bé nhưng tin rằng  
            nếu có thể giúp một ai đó tự tin hơn, tự hào hơn khi nói  
            <span className="text-white italic"> "Tôi là người Việt Nam" </span>,  
            thì công nghệ này xứng đáng được xây dựng.
          </p>

          <p>
            Và rồi một ngày nào đó, ở bên kia quả địa cầu,  
            hay từ một châu lục xa xôi nào đó,  
            ai đó chỉ cần quét <span className="text-pink-300 font-semibold"> một mã QR </span>  
            hoặc mở <span className="text-yellow-300 font-semibold">một đường link nhỏ</span>.  
            Họ sẽ thấy bạn.  
            Một con người Việt Nam, với câu chuyện, cảm xúc và niềm tự hào của riêng mình.
          </p>

          <motion.div
            className="pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-red-500">
              HYPER ID 
            </p>
            <p className="text-white/70 mt-3 text-lg md:text-xl">
              Một hành trình bắt đầu từ lòng tự tôn  
              và sẽ chỉ kết thúc khi mỗi người Việt đều có thể kể câu chuyện của chính mình.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
