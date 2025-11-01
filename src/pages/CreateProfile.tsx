import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, Loader2Icon, GlobeIcon } from 'lucide-react';

export const CreateProfile: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [checking, setChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if (!subdomain) {
      setIsAvailable(null);
      return;
    }
    setChecking(true);
    const timer = setTimeout(() => {
      setIsAvailable(true);
      setChecking(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [subdomain]);

  const handleCreate = async () => {
    if (!name || !phone || !subdomain)
      return alert('Vui lòng nhập đủ thông tin!');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setCreated(true);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 
                 bg-gradient-to-b from-[#f9f9ff] via-[#eef5ff] to-white overflow-visible"
    >
      {/* Background wave */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="rgba(0,184,255,0.08)"
            d="M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,150C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
            animate={{
              d: [
                'M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,150C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z',
                'M0,140L60,150C120,160,240,180,360,170C480,160,600,120,720,110C840,100,960,120,1080,130C1200,140,1320,140,1380,140L1440,140L1440,320L0,320Z',
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-auto text-center">
        {!created ? (
          <>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Tạo hồ sơ cá nhân{' '}
              <span className="bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] bg-clip-text text-transparent">
                HYPER ME
              </span>
            </motion.h2>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-8 space-y-4 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Họ tên */}
              <div className="text-left">
                <label className="text-sm font-semibold text-gray-700">Họ tên</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ tên của bạn"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b8ff] outline-none text-sm"
                />
              </div>

              {/* Số điện thoại */}
              <div className="text-left">
                <label className="text-sm font-semibold text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Nhập số điện thoại"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8b5cf6] outline-none text-sm"
                />
              </div>

              {/* Email */}
              <div className="text-left">
                <label className="text-sm font-semibold text-gray-700">Email (tuỳ chọn)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b8ff] outline-none text-sm"
                />
              </div>

              {/* Subdomain */}
              <div className="text-left">
                <label className="text-sm font-semibold text-gray-700">Tên subdomain</label>
                <div className="relative flex flex-wrap sm:flex-nowrap items-center border border-gray-300 rounded-xl px-3 py-2 mt-1">
                  <input
                    type="text"
                    value={subdomain}
                    onChange={(e) =>
                      setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))
                    }
                    placeholder="tenban"
                    className="flex-1 bg-transparent outline-none text-sm min-w-[130px]"
                  />
                  <span className="text-gray-500 text-sm sm:ml-2 break-all">
                    .profile.io.vn
                  </span>
                </div>

                {/* Domain check */}
                {subdomain && (
                  <motion.div
                    className="mt-3 text-left"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {checking ? (
                      <div className="flex items-center gap-1.5 text-blue-500 text-xs sm:text-sm">
                        <Loader2Icon className="w-4 h-4 animate-spin" />
                        <span>Đang kiểm tra tên miền...</span>
                      </div>
                    ) : isAvailable ? (
                      <>
                        <div className="flex items-center gap-1.5 text-green-600 text-xs sm:text-sm mb-1">
                          <CheckIcon className="w-4 h-4" />
                          <span>Tên miền khả dụng!</span>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-1 text-[#00b8ff] text-xs sm:text-sm font-semibold mt-1 break-all">
                          <GlobeIcon className="w-4 h-4" />
                          <a
                            href={`https://${subdomain}.profile.io.vn`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            https://{subdomain}.profile.io.vn
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="text-red-500 text-xs sm:text-sm">❌ Tên miền đã được sử dụng.</div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleCreate}
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-5 flex items-center justify-center gap-2 py-3 text-sm sm:text-base 
                           bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6] text-white rounded-full 
                           font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(0,184,255,0.5)] 
                           transition-all"
              >
                {loading ? (
                  <>
                    <Loader2Icon className="w-5 h-5 animate-spin" />
                    Đang khởi tạo hồ sơ...
                  </>
                ) : (
                  <>🚀 Tạo hồ sơ miễn phí ngay</>
                )}
              </motion.button>

              <p className="text-[11px] sm:text-xs text-center text-gray-500 mt-2">
                ⚡ Số lượng subdomain đẹp có hạn — đăng ký ngay hôm nay!
              </p>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 p-6 sm:p-8 bg-white/70 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              🎉 Hồ sơ của bạn đã được tạo thành công!
            </h3>
            <motion.a
              href={`https://${subdomain}.profile.io.vn`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00b8ff] font-semibold text-sm underline"
              whileHover={{ scale: 1.05 }}
            >
              https://{subdomain}.profile.io.vn
            </motion.a>
            <p className="text-gray-600 text-sm">
              Bước tiếp theo: xác thực qua{' '}
              <span className="font-semibold text-[#8b5cf6]">Hyper Bot</span>
            </p>
            <motion.a
              href={`https://zalo.me/hyperbot?phone=${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-3 px-5 py-2.5 bg-gradient-to-r from-[#00b8ff] to-[#8b5cf6]
                         text-white rounded-full font-semibold text-sm shadow-md"
            >
              Xác thực ngay
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
