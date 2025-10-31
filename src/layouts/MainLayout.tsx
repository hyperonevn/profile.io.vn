import React from 'react';
interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({
  children
}) => {
  return <div className="min-h-screen w-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" style={{
      animationDuration: '8s'
    }} />
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
    }} />
      <div className="relative z-10">{children}</div>
    </div>;
};