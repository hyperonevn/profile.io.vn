























import React from 'react';
import { motion } from 'framer-motion';
import {
  GlobeIcon,
  MailIcon,
  FacebookIcon,
  MessageCircleIcon,
  PhoneIcon,
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
          className="w-full h-full rounded-[1.8rem] overflow-hidden flex flex-col items-center justify-start text-center"
          style={{
            backgroundImage: `url(${profile.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="w-full h-full bg-black/25 backdrop-blur-[1px] flex flex-col items-center text-center px-4 pt-6 pb-5 space-y-3 text-white rounded-[1.8rem]">
            
            {/* Avatar */}
            <motion.div
              className="relative mt-3 z-20"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/90 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                <img
                  src={profile.image}
                  alt={profile.full_name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name + Role */}
            <div className="space-y-0.5 pt-1">
              <h3 className="text-lg font-bold text-white drop-shadow">
                {profile.full_name}
              </h3>
              <p className="text-xs text-gray-200">{profile.english_name}</p>
              <p className="text-[11px] font-semibold text-white/90">{profile.roles}</p>
              <p className="text-[11px] font-bold text-pink-300">{profile.company_bold}</p>
              <p className="text-[11px] text-white/80 italic mt-0.5">{profile.position}</p>
            </div>

            {/* Giới thiệu nhân văn */}
            <div className="w-full px-2 mt-2">
              <p className="text-[11px] text-white/80 italic leading-snug">
                “{profile.intro}”
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 w-full px-3 pt-3">
              <a
                href="https://luminhtri.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white/15 to-white/10 p-2 shadow hover:from-white/25 hover:to-white/20 transition-all duration-300 max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap mx-auto"
              >
                <GlobeIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-[11px] text-white font-medium">
                  luminhtri.profile.io.vn
                </span>
              </a>

              <a
                href={`mailto:${profile.socials.email}`}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white/15 to-white/10 p-2 shadow hover:from-white/25 hover:to-white/20 transition-all duration-300 max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap mx-auto"
              >
                <MailIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-[11px] text-white">
                  {profile.socials.email}
                </span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white/15 to-white/10 p-2 shadow hover:from-white/25 hover:to-white/20 transition-all duration-300 max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap mx-auto"
              >
                <PhoneIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-[11px] text-white">{profile.phone}</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-5 pt-2">
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-white hover:scale-125 transition-transform" />
              </a>
              <a
                href={`https://zalo.me/${profile.socials.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
              >
                <MessageCircleIcon className="w-5 h-5 text-white hover:scale-125 transition-transform" />
              </a>
            </div>

            {/* Footer */}
            <div className="text-[10px] text-gray-200 leading-tight pt-3">
              <p>{profile.location}</p>
              <p className="pt-0.5">Ngôn ngữ: {profile.language.join(' ')}</p>
              <p className="text-[9px] text-white/50 pt-1">© 2025 HYPER ID</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection nhẹ bên dưới */}
      <div className="absolute -bottom-20 left-0 right-0 h-28 bg-gradient-to-b from-white/10 to-transparent blur-xl transform scale-y-[-1]" />
    </motion.div>
  );
};
