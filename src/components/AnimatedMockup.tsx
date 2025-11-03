import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';

export const AnimatedMockup: React.FC = () => {
  const socials = profile.socials || {};
  const languages = Array.isArray(profile.language)
    ? profile.language.join(' ')
    : '';

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {/* iPhone 17 Pro frame */}
      <div className="relative w-[265px] h-[550px] bg-[radial-gradient(circle_at_40%_20%,#0b1220,#070b15_70%)] rounded-[2.4rem] shadow-[0_0_35px_rgba(100,150,255,0.25)] border border-[#1f2a45] overflow-hidden flex flex-col items-center justify-start animate-[softPulse_10s_linear_infinite]">
        {/* Cover */}
        <div
          className="w-full h-[130px] bg-gradient-to-r from-[#1c2b45] via-[#0c1525] to-[#142238] animate-[bgShift_12s_ease_infinite]"
          style={{
            backgroundImage: `url(${profile.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.75)',
          }}
        ></div>

        {/* Content */}
        <div className="flex flex-col items-center text-center -mt-10 px-4 scale-[0.92]">
          {/* Avatar */}
          <img
            src="/image/founder.jpg"
            alt={profile.full_name}
            className="w-[85px] h-[85px] rounded-full border-2 border-[#7ca8ff]/40 shadow-[0_0_18px_rgba(120,160,220,0.25)] object-cover"
          />

          {/* Name + tick */}
          <h1 className="mt-3 text-white font-bold text-[15px] flex items-center justify-center gap-1 drop-shadow-[0_0_8px_rgba(120,160,230,0.25)]">
            {profile.full_name}
            {profile.verified_account && (
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#5bc6ff] to-[#2670ff] flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_6px_rgba(80,150,255,0.5)]">
                ✓
              </span>
            )}
          </h1>

          {/* Verified Zalo */}
          {profile.identity_verified && (
            <p className="text-[#65e8b9] text-[10px] font-medium mt-0.5">
              ✅ Verified via Zalo OA
            </p>
          )}

          {/* Roles */}
          <p className="text-[#a8b3cc] text-[10px] italic mt-1">
            {profile.roles}
          </p>

          {/* Intro */}
          {profile.intro && (
            <p className="text-[#d4dbec] text-[10px] italic mt-1 max-w-[200px]">
              “{profile.intro}”
            </p>
          )}

          {/* Nationality & Languages */}
          <p className="text-[#99a6d8] text-[9px] mt-1">
            {profile.nationality}  {languages}
          </p>

          {/* Company box */}
          <div className="bg-gradient-to-br from-[#1b2236]/90 to-[#0f1525]/90 border border-white/10 rounded-lg p-2 mt-3 text-center w-[85%] shadow-inner">
            <p className="text-white text-[10px] font-semibold">
              {profile.position}
            </p>
            <p className="text-[#7ca8ff] text-[10px] font-bold mt-0.5">
              {profile.company_bold}
            </p>
          </div>

          {/* QR */}
          <div className="mt-3 flex flex-col items-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://${profile.domain}`}
              alt="QR"
              className="w-[70px] h-[70px] rounded-md border border-[#7ca8ff]/30 bg-white/5 p-1 shadow-[0_0_12px_rgba(100,140,220,0.2)]"
            />
            <p className="text-[9px] text-[#9ca8c8] mt-1">
              Quét để xem hồ sơ
            </p>
          </div>

          {/* Contact */}
          <div className="mt-2 w-[90%] flex flex-col gap-1.5">
            {profile.domain && (
              <div className="text-[10px] bg-gradient-to-r from-[#1a2238]/70 to-[#0f1525]/70 border border-[#648cdc]/20 rounded-md py-1">
                <a
                  href={`https://${profile.domain}`}
                  target="_blank"
                  className="text-[#89baff]"
                >
                  {profile.domain}
                </a>
              </div>
            )}
            {socials.email && (
              <div className="text-[10px] bg-gradient-to-r from-[#1a2238]/70 to-[#0f1525]/70 border border-[#648cdc]/20 rounded-md py-1 text-[#e3e8f9]">
                <a href={`mailto:${socials.email}`}>{socials.email}</a>
              </div>
            )}
            {profile.phone && (
              <div className="text-[10px] bg-gradient-to-r from-[#1a2238]/70 to-[#0f1525]/70 border border-[#648cdc]/20 rounded-md py-1 text-[#e3e8f9]">
                📞 <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            )}
            {profile.location && (
              <div className="text-[10px] bg-gradient-to-r from-[#1a2238]/70 to-[#0f1525]/70 border border-[#648cdc]/20 rounded-md py-1 text-[#e3e8f9]">
                📍 {profile.location}
              </div>
            )}
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mt-3">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="Facebook"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                  alt="LinkedIn"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
            {socials.youtube && (
              <a href={socials.youtube} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="YouTube"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
            {socials.tiktok && (
              <a href={socials.tiktok} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                  alt="TikTok"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
            {socials.zalo && (
              <a
                href={`https://zalo.me/${socials.zalo}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                  alt="Zalo"
                  className="w-4 h-4 opacity-90 hover:scale-110 transition-transform"
                />
              </a>
            )}
          </div>

          {/* Footer */}
          <div className="text-[8px] text-[#a0a7b5] mt-3 leading-tight">
            <p className="font-semibold text-[#6da5ff]">Powered by HYPER ONE</p>
            <p>© 2025 HYPER ME</p>
            <p>HYPER ONE CO., LTD · All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
