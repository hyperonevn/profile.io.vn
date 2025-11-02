import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HyperMELogo } from '../assets/logos/HyperMELogo';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { AnimatedMockup } from './AnimatedMockup';

export const Hero: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const handleCheck = (value: string) => {
    const clean = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setAddress(clean);
    if (!clean) return setIsAvailable(null);
    setIsAvailable(clean !== 'hyperone' && clean !== 'admin' && clean !== 'demo');
  };

  const handleCreate = async () => {
    if (!name || !phone || !address) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setCreated(true);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f9fbff] via-[#f3f0ff] to-white text-gray-900 px-4 pt-14 sm:pt-20 pb-24 overflow-visible"
    >
      {/* header góc phải */}
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

      {/* background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#a3cfff]/40"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* 🩵 LOGO + TIÊU ĐỀ */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-8 sm:mb-12 max-w-xl"
      >
        {/* Logo */}
        <motion.div
          className="relative flex justify-center"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-[#00b8ff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30 blur-3xl rounded-full -z-10" />
          <HyperMELogo className="w-40 sm:w-60 drop-shadow-[0_0_25px_rgba(0,184,255,0.3)]" />
        </motion.div>

        {/* Domain tagline */}
        <h1 className="mt-6 text-xl sm:text-4xl font-extrabold leading-snug text-gray-900 px-3">
          <span className="bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            &lt;Tên bạn&gt;.profile.io.vn
          </span>
        </h1>

        {/* Slogan */}
        <p className="mt-2 text-sm sm:text-lg text-gray-700 font-medium px-5 sm:px-0">
          Trang cá nhân có địa chỉ web riêng của bạn.{' '}
          <span className="text-[#00b8ff] font-semibold">
            Nổi bật. Đơn giản. Chuyên nghiệp.
          </span>
        </p>

        {/* CTA text */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="mt-5 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] rounded-full shadow-lg text-white font-bold text-sm sm:text-base whitespace-nowrap"
        >
          TẠO HỒ SƠ BÊN DƯỚI
        </motion.div>
      </motion.div>

      {/* 💠 FORM + MOCKUP song song trên desktop */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mt-6 sm:mt-10 z-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-5 sm:p-8 w-[90vw] max-w-sm sm:max-w-md text-xs sm:text-sm text-center"
        >
          {!created ? (
            <>
              <div className="text-left mb-2">
                <label className="text-[11px] font-semibold text-gray-700">Họ tên</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ tên"
                  className="w-full mt-1 px-3 py-1.5 rounded-md border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#00b8ff]"
                />
              </div>

              <div className="text-left mb-2">
                <label className="text-[11px] font-semibold text-gray-700">Địa chỉ web cá nhân</label>
                <div className="flex items-center border border-gray-300 rounded-md px-2 py-1.5 mt-1">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => handleCheck(e.target.value)}
                    placeholder="tenban"
                    className="flex-1 bg-transparent outline-none text-xs"
                  />
                  <span className="text-gray-500 text-[11px]">.profile.io.vn</span>
                </div>
                {isAvailable !== null && (
                  <p
                    className={`mt-1 flex items-center gap-1 text-[10px] ${
                      isAvailable ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    <CheckIcon className="w-3 h-3" />{' '}
                    {isAvailable ? 'Địa chỉ web khả dụng' : 'Địa chỉ này đã có người dùng'}
                  </p>
                )}
              </div>

              <div className="text-left mb-3">
                <label className="text-[11px] font-semibold text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Nhập số điện thoại"
                  className="w-full mt-1 px-3 py-1.5 rounded-md border border-gray-300 text-xs outline-none focus:ring-1 focus:ring-[#8b5cf6]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCreate}
                disabled={loading}
                className="relative w-full py-2.5 text-xs sm:text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] shadow-[0_0_25px_rgba(0,184,255,0.4)] hover:shadow-[0_0_35px_rgba(0,184,255,0.6)] overflow-hidden"
              >
                {loading ? (
                  <>
                    <Loader2Icon className="inline-block w-4 h-4 mr-1 animate-spin" />
                    Đang khởi tạo...
                  </>
                ) : (
                  <>🚀 TẠO HỒ SƠ NGAY</>
                )}
              </motion.button>

              <p className="text-[10px] text-[#8b5cf6] font-semibold mt-2">
                ⚡ Số lượng địa chỉ đẹp có hạn. Đăng ký ngay hôm nay!
              </p>
            </>
          ) : (
            <div className="text-center mt-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                🎉 Hồ sơ đã được tạo thành công!
              </h3>
              <a
                href={`https://${address}.profile.io.vn`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00b8ff] font-semibold text-xs underline block mt-1"
              >
                https://{address}.profile.io.vn
              </a>
            </div>
          )}
        </motion.div>

        {/* Mockup điện thoại */}
        <div className="relative z-0 mt-10 sm:mt-0 flex justify-center">
          <AnimatedMockup />
        </div>
      </div>
    </section>
  );
};
