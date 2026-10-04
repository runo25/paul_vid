import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cardData } from "../data";
import { KastLogo, CardChip, ContactlessWave, VisaLogo } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(cardData.isFrozen);
  const [dailyLimit, setDailyLimit] = useState(cardData.dailyLimit);
  const [onlineEnabled, setOnlineEnabled] = useState(cardData.onlinePayments);
  const [atmEnabled, setAtmEnabled] = useState(cardData.atmWithdrawals);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardData.fullNumber.replace(/\s+/g, ''));
    showToast("Card number copied to clipboard!");
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
        <h1 className="text-[18px] font-bold text-white tracking-tight">KAST Cards</h1>
        <button
          onClick={() => showToast("Physical card will be delivered in 3-5 business days")}
          className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 btn-press"
        >
          + Order Physical
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide">
        {/* 3D Flip Card Container */}
        <div className="perspective-1000 my-4 flex flex-col items-center">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full max-w-[360px] h-[220px] rounded-[24px] cursor-pointer transition-transform duration-700 transform-style-preserve-3d relative shadow-2xl ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden rounded-[24px] p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#08080a] via-[#15151c] to-[#262633] border border-white/20 shadow-2xl">
              {/* Frozen Overlay */}
              {isFrozen && (
                <div className="absolute inset-0 bg-cyan-950/70 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-2 text-cyan-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-cyan-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="text-xs font-bold tracking-widest uppercase">Card Frozen</span>
                </div>
              )}

              {/* Shimmer light sweep */}
              <div className="shimmer-effect absolute inset-0 pointer-events-none opacity-40" />

              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <KastLogo className="w-6 h-6" color="#ffffff" />
                  <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">KAST</span>
                </div>
                <ContactlessWave className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center gap-4 z-10 my-1">
                <CardChip className="w-11 h-8" />
              </div>

              <div className="z-10">
                <div className="text-[17px] font-mono tracking-widest text-white mb-2">
                  {showDetails ? cardData.fullNumber : cardData.maskedNumber}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">Cardholder</div>
                    <div className="text-xs font-semibold text-gray-200 uppercase tracking-wide">{cardData.holder}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">Expires</div>
                    <div className="text-xs font-mono text-gray-200">{cardData.expiry}</div>
                  </div>
                  <VisaLogo className="w-12 h-3.5" />
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] pt-5 pb-5 flex flex-col justify-between overflow-hidden bg-gradient-to-tr from-[#08080a] via-[#15151c] to-[#262633] border border-white/20 shadow-2xl">
              {/* Magnetic stripe */}
              <div className="w-full h-10 bg-black/90 border-y border-black" />

              {/* Signature panel & CVV */}
              <div className="px-6 flex items-center justify-between">
                <div className="w-2/3 h-8 bg-zinc-200 rounded flex items-center justify-end px-3">
                  <span className="font-mono text-xs text-black italic">Samuel Fasawe</span>
                </div>
                <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <span className="text-[10px] text-gray-400 block text-right font-bold uppercase">CVV</span>
                  <span className="font-mono text-sm font-bold text-white tracking-widest">
                    {showDetails ? cardData.cvv : "•••"}
                  </span>
                </div>
              </div>

              <div className="px-6 flex items-center justify-between text-[8px] text-gray-400">
                <span>Issued by Lead Bank USA under license by Visa Worldwide.</span>
                <VisaLogo className="w-10 h-3" />
              </div>
            </div>
          </div>

          <div className="text-[11px] text-gray-500 mt-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Tap card to flip front & back
          </div>
        </div>

        {/* Card Actions Row */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="bg-[#111115] border border-white/[0.06] rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 btn-press transition hover:bg-[#16161c]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-[11px] font-semibold text-gray-200">
              {showDetails ? "Hide Info" : "View Info"}
            </span>
          </button>

          <button
            onClick={handleCopyCard}
            className="bg-[#111115] border border-white/[0.06] rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 btn-press transition hover:bg-[#16161c]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
            <span className="text-[11px] font-semibold text-gray-200">Copy Number</span>
          </button>

          <button
            onClick={() => {
              setIsFrozen(!isFrozen);
              showToast(isFrozen ? "Card un-frozen!" : "Card frozen for security");
            }}
            className={`border rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 btn-press transition ${
              isFrozen
                ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                : "bg-[#111115] border-white/[0.06] hover:bg-[#16161c]"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span className="text-[11px] font-semibold">
              {isFrozen ? "Unfreeze" : "Freeze Card"}
            </span>
          </button>
        </div>

        {/* Security & Spending Limits Card */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 shadow-sm mb-6">
          <h3 className="text-sm font-bold text-white mb-4">Card Spending Controls</h3>

          {/* Daily limit slider */}
          <div className="mb-5">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-gray-400">Daily Spending Limit</span>
              <span className="font-semibold text-white font-display">€{dailyLimit.toLocaleString()} EUR</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="w-full accent-[#00e57a] bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>€500</span>
              <span>Spent today: €454.48</span>
              <span>€10,000</span>
            </div>
          </div>

          <div className="divide-y divide-white/[0.04]">
            {/* Online Transactions */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">Online Transactions</div>
                <div className="text-[11px] text-gray-400">Enable e-commerce & subscriptions</div>
              </div>
              <button
                onClick={() => setOnlineEnabled(!onlineEnabled)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  onlineEnabled ? "bg-[#00e57a]" : "bg-zinc-800"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${
                    onlineEnabled ? "left-5.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* ATM Withdrawals */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">ATM Cash Withdrawals</div>
                <div className="text-[11px] text-gray-400">Global fee-free cash access</div>
              </div>
              <button
                onClick={() => setAtmEnabled(!atmEnabled)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  atmEnabled ? "bg-[#00e57a]" : "bg-zinc-800"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${
                    atmEnabled ? "left-5.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            {/* Change Card PIN */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">Reset 4-Digit PIN</div>
                <div className="text-[11px] text-gray-400">Change PIN immediately</div>
              </div>
              <button
                onClick={() => showToast("PIN reset link sent to your registered email")}
                className="text-xs font-semibold text-gray-300 hover:text-white px-3 py-1 bg-white/[0.06] rounded-lg border border-white/10 btn-press"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Upgrade to KAST Elite Black Showcase */}
          <Link
            to="/power"
            className="block p-4 rounded-2xl bg-gradient-to-r from-[#1f1910] via-[#120f0a] to-[#0a0805] border border-amber-500/30 shadow-lg mt-5 mb-2 btn-press"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-lg flex-shrink-0">
                  👑
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-amber-200">KAST Elite Damascus Card</span>
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono">5% BACK</span>
                  </div>
                  <div className="text-[11px] text-gray-400">24K Gold Inlaid • VIP Concierge & LoungeKey</div>
                </div>
              </div>
              <span className="text-amber-400 text-xs font-bold flex-shrink-0">Explore →</span>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
