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
      className="relative py-28 sm:py-36 px-5 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-[#f9f9ff] to-[#eef5ff]"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00b8ff]/5 to-transparent" />
      <div className="absolute -top-24 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-br from-[#00b8ff]/10 to-[#8b5cf6]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        {/* Tiêu đề */}
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            Câu chuyện của chúng tôi
          </span>
        </motion.h2>

        {/* Nội dung chính */}
        <motion.div
          className="space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-lg md:text-xl leading-relaxed sm:leading-loose"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p>
            Có những đêm, chúng tôi ngồi lặng giữa một thành phố xa lạ.  
            Giữa ánh đèn rực rỡ của châu Âu, giữa gió núi Pakistan,  
            giữa hương cà phê ở một quán nhỏ Tokyo.  
            Và trong khoảnh khắc ấy, lại nhớ tiếng rao đêm, nhớ bát phở nóng, nhớ nụ cười Việt hiền hậu.
          </p>

          <p>
            Đi qua nhiều nơi, chúng tôi nhận ra ở đâu cũng có những nền tảng để con người kể câu chuyện của mình.  
            Có Instagram để chia sẻ cuộc sống, LinkedIn để nói về công việc,  
            TikTok để thể hiện cá tính.  
            Cả thế giới đang kể, nhưng khi ai đó hỏi: "Người Việt Nam là ai?"  
            chúng tôi bỗng khựng lại.  
            Không phải vì không biết trả lời,  
            mà vì có quá nhiều điều đẹp đẽ chưa ai kể thay họ.
          </p>

          <p>
            Người Việt là người mẹ tảo tần gom từng đồng cho con du học.  
            Là người cha lặng lẽ trong xưởng, mồ hôi rơi mà nụ cười vẫn ở đó.  
            Là cô sinh viên Hà Nội thức trắng đêm để làm đồ án.  
            Là kỹ sư Việt ở Nhật nói tiếng của họ nhưng giữ trong lòng tiếng Việt.  
            Là người con xa quê, vẫn bật YouTube nghe giọng miền Trung để tìm giấc ngủ.
          </p>

          <p>
            Họ không nổi tiếng.  
            Nhưng họ xứng đáng được thế giới biết đến,  
            không qua những dòng tin lạnh lùng,  
            mà qua những câu chuyện nhỏ, thật và ấm của riêng họ.
          </p>

          <p>
            Từ khát khao đó, <span className="font-semibold text-[#00b8ff]">HYPER ME</span> được sinh ra.  
            Không phải để thay thế mạng xã hội,  
            mà để dành cho người Việt một không gian riêng,  
            nơi mỗi hồ sơ là một linh hồn,  
            nơi công nghệ cúi đầu trước con người.
          </p>

          <p>
            Chúng tôi tin rằng công nghệ chỉ có ý nghĩa  
            khi giúp con người gần nhau hơn  
            và khiến cả thế giới nghe được tiếng nói Việt Nam:  
            <span className="font-semibold text-gray-900"> "Chúng tôi nhỏ bé, nhưng chúng tôi không vô danh." </span>
          </p>

          <p>
            Dù bạn ở Sài Gòn, Tokyo, Paris hay Jakarta,  
            chỉ cần một đường link nhỏ hay một mã QR,  
            bạn có thể nói:  
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899]"> "Đây là tôi. Tôi là người Việt Nam." </span>
          </p>

          <p>
            <span className="font-semibold text-[#00b8ff]">HYPER ME</span> không chỉ là một sản phẩm,  
            mà là một lời hứa.  
            Rằng người Việt, dù đi xa đến đâu,  
            vẫn có một nơi để kể, để được nhớ và để tự hào.
          </p>

          <p>
            Một ngày nào đó, khi ai đó ở bên kia địa cầu  
            mở một trang <span className="font-semibold text-[#8b5cf6]">HYPER ME</span> và thấy nụ cười của bạn,  
            họ sẽ không chỉ thấy một con người,  
            mà thấy cả một dân tộc biết yêu, biết sống, biết tự hào.
          </p>

          {/* Kết */}
          <motion.div
            className="pt-12 sm:pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899]">
              HYPER ME
            </p>
            <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl">
              Một hành trình của niềm tự hào Việt.  
              Nơi mỗi con người đều có thể kể câu chuyện của chính mình bằng sự chân thành và tự hào nhất.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
