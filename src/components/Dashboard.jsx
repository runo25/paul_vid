import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dashboardData, transactions, notificationsData } from "../data";
import { KastLogo, LeaderboardBanner, CardChip, VisaLogo, ContactlessWave } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Dashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTick((t) => t + 1);
    window.addEventListener("kast_notifications_updated", handleUpdate);
    window.addEventListener("kast_transaction_updated", handleUpdate);
    return () => {
      window.removeEventListener("kast_notifications_updated", handleUpdate);
      window.removeEventListener("kast_transaction_updated", handleUpdate);
    };
  }, []);

  const slides = dashboardData.carouselSlides;
  const currentSlide = slides[activeSlide];

  const hasUnreadNotifications = notificationsData.some((n) => n.unread);

  return (
    <div className="app-screen text-white pb-24 kast-hero-glow">
      {/* Top Header */}
      <header className="flex items-center justify-between px-5 py-4 pt-3">
        <Link
          to="/profile"
          className="w-10 h-10 rounded-full bg-[#111115] border border-white/10 flex items-center justify-center btn-press shadow-sm"
          title="Profile & Settings"
        >
          <KastLogo className="w-6 h-6" color="#ffffff" />
        </Link>

        {/* Rewards pill */}
        <Link
          to="/power"
          className="kast-glass-pill rounded-full px-4 py-1.5 flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-200 btn-press shadow-sm uppercase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          REWARDS
        </Link>

        {/* Notifications */}
        <Link
          to="/notifications"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#111115] border border-white/10 hover:bg-white/5 btn-press transition shadow-sm"
          title="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          {hasUnreadNotifications && (
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00e57a] ring-2 ring-black" />
          )}
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-5 pb-6 scrollbar-hide">
        {/* Balance Hero Section */}
        <div className="flex flex-col items-center mt-6 mb-8 text-center">
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="flex items-center gap-2 text-gray-400 text-xs tracking-wider font-semibold mb-2.5 hover:text-gray-200 transition btn-press uppercase"
          >
            <span>{currentSlide.title}</span>
            {balanceVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 opacity-80">
                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 opacity-80">
                <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.636 1.636a2.5 2.5 0 0 1 3.286 3.287l1.636 1.636a4 4 0 0 0-5.058-5.058l-1.5-1.5ZM4.39 8.636l1.785 1.785a4 4 0 0 0 5.404 5.404l1.656 1.656A8.528 8.528 0 0 1 10 18c-3.69 0-6.852-2.31-8.15-5.59a.75.75 0 0 1 0-.82c.49-1.238 1.4-2.38 2.54-3.354Z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <div className="text-5xl font-extralight tracking-tight text-white mb-2 font-display">
            {balanceVisible ? currentSlide.amount : "••••••"}
          </div>

          <p className="text-xs text-emerald-400/90 font-medium mb-4">
            {currentSlide.change}
          </p>

          {/* Carousel indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
                title={s.title}
              />
            ))}
          </div>
        </div>

        {/* 4 Quick Action Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <Link
            to="/receive"
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-3.5 flex flex-col items-center justify-center gap-2.5 aspect-square hover:bg-[#16161c] hover:border-white/10 btn-press transition shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-tight text-gray-200">Receive</span>
          </Link>

          <Link
            to="/pay"
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-3.5 flex flex-col items-center justify-center gap-2.5 aspect-square hover:bg-[#16161c] hover:border-white/10 btn-press transition shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-tight text-gray-200">Pay</span>
          </Link>

          <Link
            to="/scan"
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-3.5 flex flex-col items-center justify-center gap-2.5 aspect-square hover:bg-[#16161c] hover:border-white/10 btn-press transition shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-tight text-gray-200">Scan</span>
          </Link>

          <Link
            to="/power"
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-3.5 flex flex-col items-center justify-center gap-2.5 aspect-square hover:bg-[#16161c] hover:border-white/10 btn-press transition shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-rose-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-tight text-gray-200">Refer</span>
          </Link>
        </div>

        {/* Note: Matchday part was removed as requested! */}

        {/* KAST Black Metal Card Promo Feature */}
        <Link
          to="/cards"
          className="block kast-gradient-card rounded-[24px] p-5 mb-5 relative overflow-hidden group btn-press shadow-xl"
        >
          {/* Subtle card graphic preview */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="border border-emerald-500/40 bg-emerald-500/10 text-[#00e57a] text-[11px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5 w-max mb-3 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e57a]" />
                Get KAST Card
              </div>
              <h3 className="font-bold text-[19px] text-white tracking-tight mb-1">
                KAST Metal Card
              </h3>
              <p className="text-gray-400 text-xs">
                Spend worldwide with zero FX fees & 3% cashback.
              </p>
            </div>

            {/* Mini 3D Card Visual */}
            <div className="w-20 h-14 rounded-xl bg-gradient-to-tr from-black via-[#1a1a24] to-[#2a2a38] border border-white/20 p-2 flex flex-col justify-between shadow-2xl transform group-hover:scale-105 group-hover:-rotate-3 transition duration-300">
              <div className="flex justify-between items-center">
                <CardChip className="w-4 h-3" />
                <ContactlessWave className="w-2.5 h-2.5 text-gray-400" />
              </div>
              <div className="flex justify-end">
                <VisaLogo className="w-7 h-2 text-white" />
              </div>
            </div>
          </div>
        </Link>

        {/* Ultra-Luxury 3D Leaderboard Banner (replaces blurry awards.png) */}
        <Link to="/power" className="block mb-6 btn-press">
          <LeaderboardBanner />
        </Link>

        {/* Recent Activity / Transactions Section */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[15px] text-white tracking-tight">Recent Activity</h3>
            <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">OCTOBER 2026</span>
          </div>

          <div className="flex flex-col divide-y divide-white/[0.04]">
            {transactions.slice(0, 3).map((t) => (
              <Link
                to={`/transaction/${t.id}`}
                key={t.id}
                className="flex items-center justify-between py-3.5 group hover:bg-white/[0.02] -mx-2 px-2 rounded-xl transition gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border transition ${
                      t.status === "processing"
                        ? "bg-amber-500/10 border-amber-500/30 text-[#fcd116]"
                        : "bg-[#18181f] border-white/5 text-gray-300 group-hover:border-white/20"
                    }`}
                  >
                    {t.status === "processing" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5 text-[#fcd116]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    ) : t.type === "out" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-5 h-5 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-5 h-5 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[14px] font-semibold text-white leading-tight truncate">{t.title}</span>
                      {t.status === "processing" && (
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 flex-shrink-0">
                          Pending
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] text-gray-400 leading-tight truncate">{t.toFrom}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-0.5 flex-shrink-0 text-right">
                  <span
                    className={`text-[14px] font-semibold leading-tight font-display whitespace-nowrap ${
                      t.status === "processing"
                        ? "text-[#fcd116]"
                        : t.type === "in"
                        ? "text-[#00e57a]"
                        : "text-white"
                    }`}
                  >
                    {t.amount}
                  </span>
                  <span className="text-[11px] text-gray-500 leading-tight whitespace-nowrap">{t.dateTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/transactions"
            className="flex items-center justify-center gap-2 text-[13px] font-semibold text-gray-300 hover:text-white transition w-full pt-4 mt-2 border-t border-white/[0.04] btn-press"
          >
            View all transactions
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Shared Bottom Nav */}
      <BottomNav />
    </div>
  );
}
