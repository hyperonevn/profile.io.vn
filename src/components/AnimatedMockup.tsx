import React from 'react';
import { motion } from 'framer-motion';
import {
  GlobeIcon,
  MailIcon,
  FacebookIcon,
  MessageCircleIcon,
  PhoneIcon,
  CheckCircle2Icon,
} from 'lucide-react';
import profile from '../data/profile.json';

export const AnimatedMockup: React.FC = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center drop-shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-600/10 blur-3xl rounded-[2rem]" />

      {/* Phone Frame */}
      <div className="relative w-[260px] h-[530px] bg-gray-900 rounded-[2rem] p-2 shadow-2xl transform rotate-1 overflow-hidden flex items-center justify-center">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-10" />

        {/* Screen */}
        <div
          className="w-full h-full rounded-[1.8rem] overflow-hidden flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `url(${profile.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay tối nhẹ */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

          {/* Toàn bộ nội dung bên trong, thu nhỏ lại */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center text-white text-center px-3 py-4 scale-[0.82]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/80 shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-2">
              <img
                src={profile.image}
                alt={profile.full_name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + role */}
            <h3 className="text-base font-bold flex items-center justify-center gap-1">
              {profile.full_name}
              <CheckCircle2Icon className="w-3.5 h-3.5 text-[#00b8ff]" />
            </h3>
            <p className="text-[11px] text-gray-200">{profile.english_name}</p>
            <p className="text-[10px] font-semibold mt-0.5">
              {profile.position}
            </p>
            <p className="text-[10px] text-pink-300 font-bold">
              {profile.company_bold}
            </p>
            <p className="text-[10px] text-white/70">{profile.roles}</p>

            {/* Intro */}
            <p className="mt-1 text-[10px] text-white/80 italic leading-tight max-w-[200px]">
              “{profile.intro}”
            </p>

            {/* Links */}
            <div className="flex flex-col gap-1.5 w-full mt-3">
              <a
                href="https://luminhtri.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition-all text-[10px]"
              >
                <GlobeIcon className="w-3.5 h-3.5 text-white" />
                luminhtri.profile.io.vn
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="flex items-center justify-center gap-1.5 rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition-all text-[10px]"
              >
                <MailIcon className="w-3.5 h-3.5 text-white" />
                {profile.socials.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center justify-center gap-1.5 rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition-all text-[10px]"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-white" />
                {profile.phone}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-2">
              <a href={profile.socials.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon className="w-4 h-4 text-white hover:scale-125 transition-transform" />
              </a>
              <a href={`https://zalo.me/${profile.socials.zalo}`} target="_blank" rel="noreferrer">
                <MessageCircleIcon className="w-4 h-4 text-white hover:scale-125 transition-transform" />
              </a>
            </div>

            {/* ✅ QR code ở giữa rõ ràng */}
            <div className="flex flex-col items-center justify-center mt-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=https://luminhtri.profile.io.vn"
                alt="QR Code"
                className="w-24 h-24 rounded-md border border-white/40 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.3)]"
              />
              <p className="text-[10px] text-white/80 mt-1">
                Quét để xem hồ sơ
              </p>
            </div>

            {/* Footer nhỏ gọn */}
            <div className="text-[9px] text-white/60 leading-tight mt-2">
              <p>{profile.location}</p>
              <p>Ngôn ngữ: {profile.language.join(' ')}</p>
              <p className="text-[8px] text-white/40">© 2025 HYPER ME</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reflection nhẹ bên dưới */}
      <div className="absolute -bottom-20 left-0 right-0 h-28 bg-gradient-to-b from-white/10 to-transparent blur-xl transform scale-y-[-1]" />
    </motion.div>
  );
};
