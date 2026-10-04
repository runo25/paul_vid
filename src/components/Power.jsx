import React, { useState } from "react";
import { profileData } from "../data";
import { AwardsBannerSvg } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Power() {
  const [toastMessage, setToastMessage] = useState("");
  const referralLink = `https://kast.io/join/${profileData.handle.replace('@', '')}`;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    showToast("Referral invite link copied!");
  };

  return (
    <div className="app-screen text-white pb-24 bg-black">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <h1 className="text-[18px] font-bold text-white tracking-tight">KAST Power & Perks</h1>
        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          1,420 PTS
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide">
        {/* Vector Awards Banner */}
        <div className="mb-6">
          <AwardsBannerSvg />
        </div>

        {/* Tier Status & Progress */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Current Membership</span>
              <h3 className="text-lg font-bold text-white">Standard Tier</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">ACTIVE</span>
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>Progress to PRO</span>
              <span className="text-white font-medium">$4,500 / $10,000 monthly volume</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[45%] h-full bg-gradient-to-r from-emerald-500 to-[#00e57a] rounded-full" />
            </div>
          </div>
        </div>

        {/* Referral Program Section */}
        <div className="bg-gradient-to-br from-[#121820] to-[#0a0d14] border border-cyan-500/20 rounded-[24px] p-5 mb-6 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-bold tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            REFER & EARN
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Get $25 USD per Friend</h3>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            Invite friends to KAST. When they activate their card and deposit $100, you both get a $25 USD bonus.
          </p>

          <div className="bg-black/60 rounded-xl p-2.5 border border-white/10 flex items-center justify-between gap-2 mb-3">
            <span className="text-xs text-gray-300 font-mono truncate">{referralLink}</span>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-bold btn-press flex-shrink-0"
            >
              Copy
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
            <span>3 Friends Joined</span>
            <span className="text-emerald-400 font-bold">$75.00 Earned</span>
          </div>
        </div>

        {/* Global Leaderboard */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-white">Season 1 Leaderboard</h3>
            <span className="text-xs text-gray-400">Ends in 8d 14h</span>
          </div>

          <div className="flex flex-col divide-y divide-white/[0.04]">
            {[
              { rank: "1", user: "@whale_vault", points: "48,290 PTS", medal: "🥇" },
              { rank: "2", user: "@alberto_sol", points: "32,100 PTS", medal: "🥈" },
              { rank: "3", user: `${profileData.handle} (You)`, points: "14,200 PTS", medal: "🥉", highlight: true },
              { rank: "4", user: "@elena_fintech", points: "11,400 PTS" },
              { rank: "5", user: "@marcus_fx", points: "9,850 PTS" }
            ].map((item) => (
              <div
                key={item.user}
                className={`py-3 flex items-center justify-between ${
                  item.highlight ? "bg-white/[0.04] -mx-2 px-2 rounded-xl" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold w-6 text-center text-gray-400">
                    {item.medal || `#${item.rank}`}
                  </span>
                  <span className={`text-xs font-semibold ${item.highlight ? "text-[#00e57a]" : "text-white"}`}>
                    {item.user}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-200">{item.points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
