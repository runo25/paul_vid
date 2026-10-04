import React from "react";

/**
 * KAST High-Precision Vector Suite
 * Crisp, resolution-independent SVGs designed for ultra-high PPI displays.
 */

// KAST Brand Monogram (replaces k.png)
export function KastLogo({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="48" height="48" rx="14" fill="#0f0f13" />
      {/* Outer subtle glow ring */}
      <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="rgba(255,255,255,0.08)" />
      {/* Geometric K glyph with aerodynamic facets */}
      <path
        d="M14 11C14 10.4477 14.4477 10 15 10H19C19.5523 10 20 10.4477 20 11V37C20 37.5523 19.5523 38 19 38H15C14.4477 38 14 37.5523 14 37V11Z"
        fill={color}
      />
      <path
        d="M19.5 24.8L28.2 13.7C28.7 13.1 29.5 13 30.2 13.4L33.4 15.3C34.2 15.8 34.3 16.9 33.7 17.6L24.8 28.5L19.5 24.8Z"
        fill={color}
      />
      <path
        d="M23.2 26.6L32.8 36.4C33.5 37.1 34.6 37.1 35.3 36.4L37.4 34.3C38.1 33.6 38.1 32.5 37.4 31.8L27.6 22L23.2 26.6Z"
        fill={color}
      />
    </svg>
  );
}

// Pure KAST Glyph (without background box)
export function KastGlyph({ className = "w-5 h-5", color = "#ffffff" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M6 5C6 4.44772 6.44772 4 7 4H10.5C11.0523 4 11.5 4.44772 11.5 5V27C11.5 27.5523 11.0523 28 10.5 28H7C6.44772 28 6 27.5523 6 27V5Z"
        fill={color}
      />
      <path
        d="M11.5 16.5L19.6 6.8C20.1 6.2 20.9 6.1 21.6 6.5L24.5 8.2C25.2 8.7 25.4 9.7 24.8 10.4L16.8 19.8L11.5 16.5Z"
        fill={color}
      />
      <path
        d="M15.4 18.2L24.2 27.2C24.8 27.8 25.8 27.8 26.4 27.2L28.3 25.3C28.9 24.7 28.9 23.7 28.3 23.1L19.3 14.1L15.4 18.2Z"
        fill={color}
      />
    </svg>
  );
}

// Precision Awards & Leaderboard Banner (replaces blurry awards.png)
export function AwardsBannerSvg({ className = "w-full" }) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1c182a] via-[#100d1c] to-[#0a0812] p-5 shadow-2xl ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#9353d3]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#f5a524]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex flex-col flex-1 pr-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-2 w-max">
            <svg className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
            </svg>
            SEASON LEADERBOARD
          </div>
          <h4 className="text-white text-[17px] font-bold tracking-tight leading-snug">
            KAST Elite Rewards
          </h4>
          <p className="text-gray-400 text-[12px] leading-relaxed mt-1">
            Top transactors earn 5% APY yield boost & VIP concierge access.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tier 1 Status Active
            </span>
          </div>
        </div>

        {/* 3D Vector Trophy & Medal artwork */}
        <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(245,197,24,0.3)]">
            <defs>
              <linearGradient id="goldCup" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE066" />
                <stop offset="0.45" stopColor="#F5C518" />
                <stop offset="1" stopColor="#C48805" />
              </linearGradient>
              <linearGradient id="goldBase" x1="30" y1="65" x2="70" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5C518" />
                <stop offset="1" stopColor="#8A5A00" />
              </linearGradient>
              <linearGradient id="purpleRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B37FEB" />
                <stop offset="1" stopColor="#531DAB" />
              </linearGradient>
            </defs>

            {/* Glowing backdrop halo */}
            <circle cx="50" cy="50" r="42" fill="url(#purpleRing)" fillOpacity="0.25" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            
            {/* Sparkles */}
            <path d="M78 22L80 16L82 22L88 24L82 26L80 32L78 26L72 24L78 22Z" fill="#FFF7CC" opacity="0.9" />
            <path d="M18 42L19.5 38L21 42L25 43.5L21 45L19.5 49L18 45L14 43.5L18 42Z" fill="#FFF7CC" opacity="0.8" />

            {/* Trophy Handles */}
            <path d="M26 30C20 30 18 39 23 46C27 51 34 52 36 53" stroke="url(#goldCup)" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M74 30C80 30 82 39 77 46C73 51 66 52 64 53" stroke="url(#goldCup)" strokeWidth="4.5" strokeLinecap="round" />

            {/* Trophy Cup */}
            <path
              d="M30 24C30 22.9 30.9 22 32 22H68C69.1 22 70 22.9 70 24V40C70 51 61 58 50 58C39 58 30 51 30 40V24Z"
              fill="url(#goldCup)"
            />
            {/* Trophy Stem */}
            <path d="M46 58H54V70H46V58Z" fill="url(#goldBase)" />
            {/* Trophy Base */}
            <path
              d="M34 70C34 68.9 34.9 68 36 68H64C65.1 68 66 68.9 66 70L68 78C68 79.1 67.1 80 66 80H34C32.9 80 32 79.1 32 78L34 70Z"
              fill="url(#goldBase)"
            />
            {/* Star on Cup */}
            <polygon points="50,30 52.5,36 59,36.5 54,41 55.5,47 50,43.5 44.5,47 46,41 41,36.5 47.5,36" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Precision Country Flags
export function FlagUS({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 60 40" className={`overflow-hidden rounded-full shadow-sm object-cover ${className}`}>
      <rect width="60" height="40" fill="#BD3D44" />
      <path d="M0 3.08h60v3.08H0zm0 6.15h60v3.08H0zm0 6.15h60v3.08H0zm0 6.15h60v3.08H0zm0 6.15h60v3.08H0zm0 6.15h60v3.08H0z" fill="#FFF" />
      <rect width="26" height="21.5" fill="#192F5D" />
      {/* 5-Star constellation */}
      <circle cx="5" cy="4" r="1.1" fill="#FFF" />
      <circle cx="13" cy="4" r="1.1" fill="#FFF" />
      <circle cx="21" cy="4" r="1.1" fill="#FFF" />
      <circle cx="9" cy="8" r="1.1" fill="#FFF" />
      <circle cx="17" cy="8" r="1.1" fill="#FFF" />
      <circle cx="5" cy="12" r="1.1" fill="#FFF" />
      <circle cx="13" cy="12" r="1.1" fill="#FFF" />
      <circle cx="21" cy="12" r="1.1" fill="#FFF" />
      <circle cx="9" cy="16" r="1.1" fill="#FFF" />
      <circle cx="17" cy="16" r="1.1" fill="#FFF" />
    </svg>
  );
}

export function FlagEU({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 60 40" className={`overflow-hidden rounded-full shadow-sm object-cover bg-[#003399] ${className}`}>
      <g fill="#FFCC00" transform="translate(30, 20) scale(1.15)">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 11.5 * Math.sin(angle);
          const y = -11.5 * Math.cos(angle);
          return (
            <polygon
              key={i}
              points="0,-1.8 0.55,-0.55 1.8,-0.55 0.8,0.25 1.15,1.5 0,0.7 -1.15,1.5 -0.8,0.25 -1.8,-0.55 -0.55,-0.55"
              transform={`translate(${x}, ${y}) scale(0.9)`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function FlagUK({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 60 40" className={`overflow-hidden rounded-full shadow-sm object-cover ${className}`}>
      <clipPath id="ukClip"><rect width="60" height="40" rx="20" /></clipPath>
      <g clipPath="url(#ukClip)">
        <path d="M0 0h60v40H0z" fill="#012169" />
        <path d="m0 0 60 40m0-40L0 40" stroke="#FFF" strokeWidth="6" />
        <path d="m0 0 60 40m0-40L0 40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30 0v40M0 20h60" stroke="#FFF" strokeWidth="10" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function FlagARS({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 60 40" className={`overflow-hidden rounded-full shadow-sm object-cover ${className}`}>
      <rect width="60" height="13.3" fill="#74ACDF" />
      <rect y="13.3" width="60" height="13.4" fill="#FFFFFF" />
      <rect y="26.7" width="60" height="13.3" fill="#74ACDF" />
      <circle cx="30" cy="20" r="3.5" fill="#F6B40E" stroke="#85340A" strokeWidth="0.4" />
    </svg>
  );
}

// Precision Crypto & Stablecoin Logos
export function UsdtIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <circle cx="16" cy="16" r="16" fill="#26A17B" />
      <path
        d="M17.9 14.5v-1.6h5.3V10H8.8v2.9h5.3v1.6c-4.4.2-7.8 1.1-7.8 2.2 0 1.1 3.4 2 7.8 2.2V25h3.8v-6.1c4.4-.2 7.8-1.1 7.8-2.2 0-1.1-3.4-2-7.8-2.2zm0 3.2c-3.7-.2-6.5-.8-6.5-1.5 0-.7 2.8-1.3 6.5-1.5v3zm3.8-1.5c0 .7-2.8 1.3-6.5 1.5v-3c3.7.2 6.5.8 6.5 1.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function UsdcIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <circle cx="16" cy="16" r="16" fill="#2775CA" />
      <path
        d="M16 6C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm.8 17.5v-1.6c-2.3-.3-3.6-1.5-3.6-3.2h2.5c.2 1 1 1.6 2.3 1.6 1.4 0 2.2-.7 2.2-1.7 0-.9-.7-1.4-2.4-1.8l-1.4-.4c-2.3-.6-3.4-1.7-3.4-3.4 0-1.8 1.4-3.1 3.8-3.4V8.5h1.6V10c2.1.3 3.3 1.4 3.4 3h-2.5c-.2-.8-.9-1.4-2-1.4-1.2 0-2 .6-2 1.5 0 .9.7 1.3 2.3 1.7l1.4.3c2.4.6 3.6 1.7 3.6 3.5 0 1.9-1.4 3.3-3.9 3.5v1.4h-1.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function BtcIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        d="M22.5 13.7c.3-2.1-1.3-3.3-3.5-4l.7-2.9-1.8-.4-.7 2.8c-.5-.1-1-.2-1.5-.3l.7-2.8-1.8-.4-.7 2.9c-.4-.1-.8-.2-1.2-.3l-2.4-.6-.5 1.9s1.3.3 1.3.3c.7.2.8.7.8 1.1l-.8 3.2c0 0 .1 0 .2.1l-.2-.1-1.1 4.6c-.1.2-.3.6-.8.4 0 0-1.3-.3-1.3-.3l-.9 2.1 2.3.6c.4.1.9.2 1.3.3l-.7 3 1.8.4.7-2.9c.5.1 1 .2 1.5.3l-.7 2.9 1.8.4.7-3c3 .6 5.3.3 6.3-2.4.8-2.2 0-3.5-1.6-4.3 1.1-.3 2-1 2.2-2.5zm-3.9 5.3c-.6 2.2-4.3 1-5.5.7l1-4c1.2.3 5.1.9 4.5 3.3zm.5-5.5c-.5 2-3.6.9-4.6.7l.9-3.6c1 .3 4.2.8 3.7 2.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function EthIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <circle cx="16" cy="16" r="16" fill="#627EEA" />
      <g fill="#FFFFFF">
        <path d="M16 4v9.6l8.1 3.6L16 4z" opacity="0.6" />
        <path d="M16 4L7.9 17.2l8.1-3.6V4z" />
        <path d="M16 20.3v7.7l8.1-11.3L16 20.3z" opacity="0.6" />
        <path d="M16 28V20.3L7.9 16.7 16 28z" />
        <path d="M16 19l8.1-3.6L16 13.6V19z" opacity="0.2" />
        <path d="M7.9 15.4L16 19v-5.4l-8.1 1.8z" opacity="0.6" />
      </g>
    </svg>
  );
}

export function SolIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <circle cx="16" cy="16" r="16" fill="#000000" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <defs>
        <linearGradient id="solGrad" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9945FF" />
          <stop offset="0.5" stopColor="#14F195" />
          <stop offset="1" stopColor="#00FFBD" />
        </linearGradient>
      </defs>
      <path
        d="M9 10.4c.1-.1.3-.2.5-.2h14c.3 0 .4.4.2.6l-2.7 2.7c-.1.1-.3.2-.5.2H6.5c-.3 0-.4-.4-.2-.6l2.7-2.7zm0 8.4c.1-.1.3-.2.5-.2h14c.3 0 .4.4.2.6l-2.7 2.7c-.1.1-.3.2-.5.2H6.5c-.3 0-.4-.4-.2-.6l2.7-2.7zm14-4.2c-.1.1-.3.2-.5.2H8.5c-.3 0-.4-.4-.2-.6l2.7-2.7c.1-.1.3-.2.5-.2h14c.3 0 .4.4.2.6l-2.7 2.7z"
        fill="url(#solGrad)"
      />
    </svg>
  );
}

// Payment Card Hardware Elements
export function CardChip({ className = "w-10 h-8" }) {
  return (
    <svg viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="chipGold" x1="0" y1="0" x2="44" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="0.5" stopColor="#D97706" />
          <stop offset="1" stopColor="#92400E" />
        </linearGradient>
      </defs>
      <rect width="44" height="34" rx="6" fill="url(#chipGold)" />
      <rect x="1" y="1" width="42" height="32" rx="5" stroke="#FBBF24" strokeWidth="0.8" opacity="0.6" />
      {/* Circuit lines */}
      <path d="M0 11H14C16.2 11 18 12.8 18 15V19C18 21.2 16.2 23 14 23H0" stroke="#78350F" strokeWidth="1.2" />
      <path d="M44 11H30C27.8 11 26 12.8 26 15V19C26 21.2 27.8 23 30 23H44" stroke="#78350F" strokeWidth="1.2" />
      <path d="M22 0V13M22 21V34" stroke="#78350F" strokeWidth="1.2" />
      <rect x="18" y="13" width="8" height="8" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
    </svg>
  );
}

export function ContactlessWave({ className = "w-5 h-5", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" className={className}>
      <path d="M8.5 15.5a5 5 0 0 1 0-7" />
      <path d="M12 18.5a9 9 0 0 1 0-13" />
      <path d="M15.5 21.5a13 13 0 0 1 0-19" />
    </svg>
  );
}

export function VisaLogo({ className = "w-12 h-4" }) {
  return (
    <svg viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M48.2 2.5L34.1 36.2H25.4L15.5 8.9C14.9 6.6 14.4 5.8 12.6 4.7C9.8 3.2 4.7 1.8 0 0.8L0.4 0H14.8C16.7 0 18.4 1.3 18.8 3.5L22.4 22.8L31.2 0H40L48.2 2.5Z"
        fill="#FFFFFF"
      />
      <path d="M59.6 0.8L51.8 36.2H43.5L51.3 0.8H59.6Z" fill="#FFFFFF" />
      <path
        d="M87.2 13.4C87.3 8.3 82.7 6.1 76.6 6C71 5.9 66.3 7.8 63.8 9.3L65.4 16.5C67.8 15.3 71.5 14.2 75.3 14.3C78.4 14.4 80.4 15.5 80.4 17.3C80.4 18.9 78.4 19.8 74.5 20.9C68.9 22.4 62.7 24.5 62.8 30.5C62.9 35.8 67.5 39 74.3 39C78.7 39 82.5 37.9 84.7 36.8L83.2 29.8C81.2 30.8 78 31.8 74.4 31.8C71.7 31.8 69.8 30.8 69.8 29.1C69.8 27.5 71.9 26.5 75.8 25.3C81.5 23.6 87.1 21.2 87.2 13.4Z"
        fill="#FFFFFF"
      />
      <path
        d="M109.8 11.8L114.7 2.5L106.8 2.5C104.9 2.5 103.3 3.6 102.6 5.3L87.7 36.2H96.4L98.1 31.5H108.7L109.8 36.2H117.5L109.8 11.8ZM100.4 25.1L104.2 14.5L106.4 25.1H100.4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Precision QR Code Generator SVG
export function PrecisionQrSvg({ className = "w-48 h-48", value = "kast:@user_csrxi8992" }) {
  return (
    <div className={`p-3 bg-white rounded-2xl flex items-center justify-center shadow-lg relative ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
        {/* Background */}
        <rect width="120" height="120" rx="8" fill="#FFFFFF" />
        
        {/* Top-Left Finder */}
        <rect x="10" y="10" width="30" height="30" rx="6" stroke="#000000" strokeWidth="4" />
        <rect x="19" y="19" width="12" height="12" rx="2" fill="#000000" />
        
        {/* Top-Right Finder */}
        <rect x="80" y="10" width="30" height="30" rx="6" stroke="#000000" strokeWidth="4" />
        <rect x="89" y="19" width="12" height="12" rx="2" fill="#000000" />
        
        {/* Bottom-Left Finder */}
        <rect x="10" y="80" width="30" height="30" rx="6" stroke="#000000" strokeWidth="4" />
        <rect x="19" y="89" width="12" height="12" rx="2" fill="#000000" />

        {/* Dense Matrix Data Elements */}
        <g fill="#000000">
          <rect x="46" y="12" width="4" height="4" rx="1" />
          <rect x="54" y="12" width="4" height="4" rx="1" />
          <rect x="62" y="12" width="4" height="4" rx="1" />
          <rect x="70" y="12" width="4" height="4" rx="1" />

          <rect x="46" y="20" width="4" height="4" rx="1" />
          <rect x="62" y="20" width="4" height="4" rx="1" />
          
          <rect x="50" y="28" width="4" height="4" rx="1" />
          <rect x="58" y="28" width="4" height="4" rx="1" />
          <rect x="66" y="28" width="4" height="4" rx="1" />

          <rect x="12" y="46" width="4" height="4" rx="1" />
          <rect x="20" y="46" width="4" height="4" rx="1" />
          <rect x="28" y="46" width="4" height="4" rx="1" />
          <rect x="36" y="46" width="4" height="4" rx="1" />
          <rect x="44" y="46" width="4" height="4" rx="1" />
          <rect x="72" y="46" width="4" height="4" rx="1" />
          <rect x="80" y="46" width="4" height="4" rx="1" />
          <rect x="96" y="46" width="4" height="4" rx="1" />
          <rect x="104" y="46" width="4" height="4" rx="1" />

          <rect x="12" y="54" width="4" height="4" rx="1" />
          <rect x="28" y="54" width="4" height="4" rx="1" />
          <rect x="44" y="54" width="4" height="4" rx="1" />
          <rect x="72" y="54" width="4" height="4" rx="1" />
          <rect x="88" y="54" width="4" height="4" rx="1" />
          <rect x="104" y="54" width="4" height="4" rx="1" />

          <rect x="16" y="62" width="4" height="4" rx="1" />
          <rect x="24" y="62" width="4" height="4" rx="1" />
          <rect x="32" y="62" width="4" height="4" rx="1" />
          <rect x="76" y="62" width="4" height="4" rx="1" />
          <rect x="84" y="62" width="4" height="4" rx="1" />
          <rect x="100" y="62" width="4" height="4" rx="1" />

          <rect x="12" y="70" width="4" height="4" rx="1" />
          <rect x="28" y="70" width="4" height="4" rx="1" />
          <rect x="44" y="70" width="4" height="4" rx="1" />
          <rect x="72" y="70" width="4" height="4" rx="1" />
          <rect x="88" y="70" width="4" height="4" rx="1" />
          <rect x="104" y="70" width="4" height="4" rx="1" />

          <rect x="46" y="80" width="4" height="4" rx="1" />
          <rect x="54" y="80" width="4" height="4" rx="1" />
          <rect x="62" y="80" width="4" height="4" rx="1" />
          <rect x="70" y="80" width="4" height="4" rx="1" />
          <rect x="82" y="80" width="4" height="4" rx="1" />
          <rect x="98" y="80" width="4" height="4" rx="1" />

          <rect x="50" y="88" width="4" height="4" rx="1" />
          <rect x="66" y="88" width="4" height="4" rx="1" />
          <rect x="74" y="88" width="4" height="4" rx="1" />
          <rect x="90" y="88" width="4" height="4" rx="1" />
          <rect x="106" y="88" width="4" height="4" rx="1" />

          <rect x="46" y="96" width="4" height="4" rx="1" />
          <rect x="58" y="96" width="4" height="4" rx="1" />
          <rect x="70" y="96" width="4" height="4" rx="1" />
          <rect x="86" y="96" width="4" height="4" rx="1" />
          <rect x="102" y="96" width="4" height="4" rx="1" />

          <rect x="54" y="104" width="4" height="4" rx="1" />
          <rect x="62" y="104" width="4" height="4" rx="1" />
          <rect x="78" y="104" width="4" height="4" rx="1" />
          <rect x="94" y="104" width="4" height="4" rx="1" />
        </g>

        {/* Center KAST Badge */}
        <circle cx="60" cy="60" r="14" fill="#000000" stroke="#FFFFFF" strokeWidth="2.5" />
        <g transform="translate(52, 52) scale(0.5)">
          <path d="M4 3C4 2.4 4.4 2 5 2H8C8.6 2 9 2.4 9 3V21C9 21.6 8.6 22 8 22H5C4.4 22 4 21.6 4 21V3Z" fill="#00E57A" />
          <path d="M9 13.5L16.2 4.8C16.6 4.3 17.3 4.2 17.9 4.6L20.3 6C20.9 6.4 21 7.2 20.6 7.8L13.8 16.2L9 13.5Z" fill="#00E57A" />
          <path d="M12.5 15L20.2 22.8C20.8 23.4 21.7 23.4 22.3 22.8L23.8 21.3C24.4 20.7 24.4 19.8 23.8 19.2L16 11.4L12.5 15Z" fill="#00E57A" />
        </g>
      </svg>
    </div>
  );
}
