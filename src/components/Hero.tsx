import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HyperMELogo } from '../assets/logos/HyperMELogo';
import { ArrowRightIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { AnimatedMockup } from './AnimatedMockup';

export const Hero: React.FC = () => {
  const [name, setName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [phone, setPhone] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const handleCheck = (value: string) => {
    const clean = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setSubdomain(clean);
    if (!clean) return setIsAvailable(null);
    setIsAvailable(clean !== 'hyperone' && clean !== 'admin' && clean !== 'demo');
  };

  const handleCreate = async () => {
    if (!name || !phone || !subdomain) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setCreated(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible py-20 px-6 bg-gradient-to-b from-[#eaf4ff] via-[#f9f5ff] to-white text-gray-900">
      {/* Header */}
      <motion.div
        className="absolute top-6 right-6 flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs text-gray-600">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-1 select-none"
        >
          <span className="text-[#00b8ff] font-bold text-sm tracking-tight">HYPER</span>
          <span className="text-gray-900 font-bold text-sm tracking-tight">ONE</span>
        </a>
      </motion.div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#a3cfff]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HyperMELogo className="mx-auto lg:mx-0" />

            {/* Title */}
            <motion.h1
              className="font-semibold text-gray-900 text-3xl sm:text-4xl md:text-5xl flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent font-extrabold">
                &lt;Tên bạn&gt;.profile.io.vn
              </span>
              <span className="text-gray-800 font-medium">
                Trang cá nhân sở hữu domain riêng.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Nơi mỗi liên kết kể một câu chuyện tạo hồ sơ của riêng bạn với{' '}
              <span className="font-semibold text-[#00b8ff]">HYPER ME</span>.
            </motion.p>

            {/* Inline Create Form */}
            <motion.div
              className="relative mt-10 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {!created ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 whitespace-nowrap">
                    Tạo hồ sơ cá nhân <span className="text-[#00b8ff] font-bold">MIỄN PHÍ</span>
                  </h3>

                  {/* Name */}
                  <div className="mb-3 text-left">
                    <label className="text-sm font-semibold text-gray-700">Họ tên</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nhập họ tên"
                      className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b8ff] outline-none text-sm"
                    />
                  </div>

                  {/* Subdomain */}
                  <div className="mb-3 text-left">
                    <label className="text-sm font-semibold text-gray-700">Tên subdomain</label>
                    <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 mt-1">
                      <input
                        type="text"
                        value={subdomain}
                        onChange={(e) => handleCheck(e.target.value)}
                        placeholder="tenban"
                        className="flex-1 bg-transparent outline-none text-sm"
                      />
                      <span className="text-gray-500 text-sm">.profile.io.vn</span>
                    </div>
                    {isAvailable !== null && (
                      <p
                        className={`mt-1 flex items-center gap-1 text-xs ${
                          isAvailable ? 'text-green-600' : 'text-red-500'
                        }`}
                      >
                        <CheckIcon className="w-4 h-4" />{' '}
                        {isAvailable ? 'Tên miền khả dụng' : 'Tên miền đã được dùng'}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-3 text-left">
                    <label className="text-sm font-semibold text-gray-700">Số điện thoại</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="Nhập số điện thoại"
                      className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8b5cf6] outline-none text-sm"
                    />
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCreate}
                    disabled={loading}
                    className="relative w-full mt-3 inline-flex items-center justify-center gap-2 py-4 px-6 
                      bg-gradient-to-r from-[#00b8ff] via-[#8b5cf6] to-[#ec4899] 
                      text-white rounded-full font-bold text-lg tracking-tight 
                      shadow-[0_0_30px_rgba(0,184,255,0.4)] hover:shadow-[0_0_45px_rgba(0,184,255,0.7)] 
                      whitespace-nowrap transition-all overflow-hidden"
                  >
                    {/* ánh sáng quét ngang */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {loading ? (
                      <>
                        <Loader2Icon className="w-5 h-5 animate-spin" />
                        Đang khởi tạo hồ sơ...
                      </>
                    ) : (
                      <>
                        🚀 <span className="whitespace-nowrap">TẠO HỒ SƠ MIỄN PHÍ SỞ HỮU DOMAIN</span>
                        <ArrowRightIcon className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* FOMO line */}
                  <motion.p
                    className="text-sm text-[#8b5cf6] font-semibold mt-3 tracking-tight whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    ⚡ Số lượng subdomain đẹp có hạn – đăng ký ngay hôm nay!
                  </motion.p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    🎉 Hồ sơ đã được tạo thành công!
                  </h3>
                  <a
                    href={`https://${subdomain}.profile.io.vn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00b8ff] font-semibold text-sm underline"
                  >
                    https://{subdomain}.profile.io.vn
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Xác thực qua{' '}
                    <a
                      href={`https://zalo.me/hyperbot?phone=${phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b5cf6] underline font-semibold"
                    >
                      Hyper Bot
                    </a>{' '}
                    để hoàn tất đăng ký.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right side mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatedMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
