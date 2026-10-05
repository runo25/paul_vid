import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { profileData } from "../data";
import { LeaderboardBanner, CardChip, ContactlessWave, VisaLogo } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Power() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const [selectedTier, setSelectedTier] = useState("elite"); // default to elite to showcase the luxury!
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);
  const [conciergeActionDone, setConciergeActionDone] = useState(false);
  const [loungeModalOpen, setLoungeModalOpen] = useState(false);

  // Secret Admin Backdoor State & Handlers
  const [isHoldingAdmin, setIsHoldingAdmin] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const holdTimerRef = useRef(null);
  const holdProgressIntervalRef = useRef(null);
  const lastTapRef = useRef(0);

  const triggerAdminNavigation = () => {
    if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
    navigate("/admin");
  };

  const handleCardDoubleClick = (e) => {
    e.preventDefault();
    triggerAdminNavigation();
  };

  const handleCardTouchStart = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 380) {
      lastTapRef.current = 0;
      cancelHold();
      triggerAdminNavigation();
      return;
    }
    lastTapRef.current = now;
    startHold();
  };

  const startHold = () => {
    setIsHoldingAdmin(true);
    setHoldProgress(0);
    const startTime = Date.now();
    const duration = 550; // ms

    if (holdProgressIntervalRef.current) clearInterval(holdProgressIntervalRef.current);
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);

    holdProgressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setHoldProgress(pct);
      if (elapsed >= duration) {
        clearInterval(holdProgressIntervalRef.current);
      }
    }, 30);

    holdTimerRef.current = setTimeout(() => {
      cancelHold();
      triggerAdminNavigation();
    }, duration);
  };

  const cancelHold = () => {
    setIsHoldingAdmin(false);
    setHoldProgress(0);
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (holdProgressIntervalRef.current) clearInterval(holdProgressIntervalRef.current);
  };

  const referralLink = `https://kast.io/join/${profileData.handle.replace('@', '')}`;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    showToast("VIP referral invite link copied to clipboard!");
  };

  const handleConciergeCallback = () => {
    setConciergeActionDone(true);
    setTimeout(() => {
      setConciergeModalOpen(false);
      setConciergeActionDone(false);
      showToast("Private Banker call scheduled. You will receive an SMS in 3 minutes.");
    }, 1200);
  };

  return (
    <div className="app-screen text-white pb-24 bg-black select-none">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#00e57a] text-black px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Top Header */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] sticky top-0 bg-black/90 backdrop-blur-md z-20">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-black font-extrabold text-xs shadow-md">
            K
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-white tracking-tight leading-tight">
              KAST Elite Club
            </h1>
            <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
              Private Wealth & Power
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold text-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            1,420 PTS
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide space-y-6">
        {/* Championship Tournament Banner */}
        <div>
          <LeaderboardBanner />
        </div>

        {/* Membership Tier Tabs */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
              Membership Tiers
            </span>
            <span className="text-[11px] font-semibold text-emerald-400">
              Current: Tier 1 Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Standard */}
            <button
              onClick={() => setSelectedTier("standard")}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 btn-press relative overflow-hidden ${
                selectedTier === "standard"
                  ? "bg-[#14141c] border-emerald-500/70 shadow-[0_0_24px_rgba(0,229,122,0.2)]"
                  : "bg-[#0f0f14] border-white/[0.06] opacity-65 hover:opacity-100"
              }`}
            >
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 block mb-1">
                  TIER 1
                </span>
                <div className="text-[13px] font-bold text-white leading-tight">Standard</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">1% Back</div>
              </div>
              <div className="mt-3 text-[10px] text-gray-400 font-mono">Active</div>
            </button>

            {/* Pro Metal */}
            <button
              onClick={() => setSelectedTier("pro")}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 btn-press relative overflow-hidden ${
                selectedTier === "pro"
                  ? "bg-[#161224] border-purple-500/70 shadow-[0_0_24px_rgba(168,85,247,0.2)]"
                  : "bg-[#0f0f14] border-white/[0.06] opacity-65 hover:opacity-100"
              }`}
            >
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-purple-400 block mb-1">
                  TIER 2
                </span>
                <div className="text-[13px] font-bold text-white leading-tight">Pro Metal</div>
                <div className="text-[11px] text-purple-400 font-semibold mt-1">3% Back</div>
              </div>
              <div className="mt-3 text-[10px] text-gray-400 font-mono">€10k / mo</div>
            </button>

            {/* Elite Black & Gold */}
            <button
              onClick={() => setSelectedTier("elite")}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 btn-press relative overflow-hidden ${
                selectedTier === "elite"
                  ? "bg-gradient-to-b from-[#1f1a10] to-[#120f0a] border-amber-400 shadow-[0_0_28px_rgba(245,158,11,0.28)]"
                  : "bg-[#0f0f14] border-white/[0.06] opacity-65 hover:opacity-100"
              }`}
            >
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-amber-300 block mb-1">
                  TIER 3 VIP
                </span>
                <div className="text-[13px] font-bold text-amber-100 leading-tight">Elite Black</div>
                <div className="text-[11px] text-amber-400 font-semibold mt-1">5% Back</div>
              </div>
              <div className="mt-3 text-[10px] text-amber-400 font-mono">By Invite</div>
            </button>
          </div>
        </div>

        {/* Dynamic Card Artwork Preview */}
        <div className="relative">
          {selectedTier === "elite" ? (
            /* Photorealistic 3D KAST Elite Damascus & Gold Card */
            <div className="rounded-[28px] overflow-hidden border border-amber-500/40 bg-gradient-to-b from-[#1b1712] via-[#0d0a07] to-black shadow-[0_20px_50px_rgba(245,158,11,0.2)] p-4 relative group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-[10px] font-black tracking-widest text-amber-300 uppercase">
                    WORLD ELITE
                  </span>
                  <span className="text-xs text-amber-200/80 font-mono">24K Gold Inlaid</span>
                </div>
                <button
                  onClick={() => setConciergeModalOpen(true)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 btn-press"
                >
                  VIP Concierge
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Masterpiece Card Render */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src="/kast_elite_card.jpg"
                  alt="KAST Elite Damascus 24K Gold Card"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-amber-200/70 uppercase">CARDHOLDER</span>
                    <span className="text-xs font-bold tracking-wider">{profileData.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-amber-300">5% UNLIMITED</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-4 flex gap-2.5">
                <button
                  onClick={() => setConciergeModalOpen(true)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-black font-extrabold text-xs shadow-lg hover:brightness-105 btn-press flex items-center justify-center gap-1.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2z" clipRule="evenodd" />
                  </svg>
                  Connect VIP Private Banker
                </button>
                <button
                  onClick={() => setLoungeModalOpen(true)}
                  className="px-4 py-3 rounded-xl bg-white/[0.08] border border-white/10 text-white font-bold text-xs hover:bg-white/15 btn-press"
                  title="Airport VIP Lounge Pass"
                >
                  LoungeKey ✈
                </button>
              </div>
            </div>
          ) : selectedTier === "pro" ? (
            /* Aerospace Titanium Pro Metal Card */
            <div className="rounded-[28px] overflow-hidden border border-purple-500/40 bg-gradient-to-b from-[#181424] via-[#0d0a14] to-black shadow-[0_20px_50px_rgba(168,85,247,0.18)] p-4 relative">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[10px] font-black tracking-widest text-purple-300 uppercase">
                  AEROSPACE TITANIUM
                </span>
                <span className="text-xs text-purple-200/80 font-mono">18g Heavy Metal</span>
              </div>

              <div className="w-full aspect-[16/9] rounded-2xl p-6 bg-gradient-to-tr from-[#1f1b2e] via-[#2d2645] to-[#120f1a] border border-purple-400/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="flex justify-between items-center z-10">
                  <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="font-extrabold text-purple-400">KAST</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-500/30 text-purple-200 uppercase font-mono">PRO</span>
                  </div>
                  <ContactlessWave className="w-4 h-4 text-purple-300" />
                </div>
                <div className="z-10">
                  <CardChip className="w-9 h-7 mb-2" />
                  <div className="text-sm font-mono tracking-widest text-purple-200">
                    •••• •••• •••• 9010
                  </div>
                </div>
                <div className="flex justify-between items-end z-10">
                  <span className="text-xs font-semibold text-purple-300">{profileData.name}</span>
                  <VisaLogo className="w-12 h-4 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => showToast("Upgrade request registered. Complete €10,000 monthly volume to activate.")}
                  className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-lg hover:bg-purple-500 btn-press"
                >
                  Unlock Pro Metal (€10k / mo)
                </button>
              </div>
            </div>
          ) : (
            /* Matte Obsidian Standard Card */
            <div className="rounded-[28px] overflow-hidden border border-emerald-500/40 bg-gradient-to-b from-[#111915] via-[#090e0b] to-black shadow-[0_20px_50px_rgba(0,229,122,0.12)] p-4 relative">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                  ACTIVE CARD
                </span>
                <span className="text-xs text-emerald-400 font-mono">Zero Annual Fee</span>
              </div>

              <div className="w-full aspect-[16/9] rounded-2xl p-6 bg-gradient-to-tr from-[#0f1913] via-[#14231b] to-[#0a110d] border border-emerald-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-center z-10">
                  <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="font-extrabold text-emerald-400">KAST</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 uppercase font-mono">STANDARD</span>
                  </div>
                  <ContactlessWave className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="z-10">
                  <CardChip className="w-9 h-7 mb-2" />
                  <div className="text-sm font-mono tracking-widest text-emerald-200">
                    •••• •••• •••• 9010
                  </div>
                </div>
                <div className="flex justify-between items-end z-10">
                  <span className="text-xs font-semibold text-gray-200">{profileData.name}</span>
                  <VisaLogo className="w-12 h-4 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full py-3 rounded-xl bg-white/[0.08] text-emerald-400 font-bold text-xs text-center border border-emerald-500/30">
                  ✓ Current Plan Active
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Power Level & Multiplier Gauge */}
        <div className="bg-[#111116] border border-white/[0.08] rounded-[26px] p-5 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">POWER PROGRESS</span>
              <h3 className="text-sm font-bold text-white">Tier 1 → Pro Metal Fast Track</h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-white">1,420</span>
              <span className="text-[10px] text-gray-400"> / 5,000 XP</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2.5 rounded-full bg-white/[0.08] overflow-hidden p-0.5 mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-amber-200 transition-all duration-1000 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
              style={{ width: "28.4%" }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/[0.05]">
            <div className="p-2 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] text-gray-400 block">MULTIPLIER</span>
              <span className="text-xs font-bold text-emerald-400">1.0x PTS</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] text-gray-400 block">PRO LEVEL</span>
              <span className="text-xs font-bold text-purple-400">3.0x PTS</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] text-gray-400 block">ELITE LEVEL</span>
              <span className="text-xs font-bold text-amber-400">5.0x PTS</span>
            </div>
          </div>
        </div>

        {/* Selected Tier Perks Overview - Ultra Luxury Matrix */}
        <div className="bg-[#111116] border border-white/[0.08] rounded-[26px] p-5 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">EXCLUSIVE PRIVILEGES</span>
              <h3 className="text-[15px] font-bold text-white">
                {selectedTier === "standard"
                  ? "Standard Tier Privileges"
                  : selectedTier === "pro"
                  ? "Pro Metal Privileges"
                  : "KAST Elite VIP Privileges"}
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-300">
              {selectedTier === "standard" ? "ACTIVE" : selectedTier === "pro" ? "TIER 2" : "INVITE ONLY"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {(selectedTier === "elite"
              ? [
                  {
                    icon: "💎",
                    title: "5% Uncapped Instant Cashback",
                    desc: "Earn 5% on every card swipe globally, settled immediately in EUR or USDC into your SEPA account.",
                    tag: "HIGHEST IN FINTECH"
                  },
                  {
                    icon: "🎩",
                    title: "24/7 VIP Private Banker & Concierge",
                    desc: "Direct line via WhatsApp & encrypted Signal to your assigned Lead Bank private client manager.",
                    action: () => setConciergeModalOpen(true),
                    actionText: "Chat Now"
                  },
                  {
                    icon: "✈️",
                    title: "LoungeKey Unlimited Airport VIP",
                    desc: "Complimentary access to 1,400+ international airport executive lounges with 2 guest passes per trip.",
                    action: () => setLoungeModalOpen(true),
                    actionText: "Pass Details"
                  },
                  {
                    icon: "🏛️",
                    title: "5.20% Institutional Yield Vault",
                    desc: "Earn high-yield European & US Treasury interest on your EUR fiat balances with regulatory protection.",
                    tag: "DAILY PAYOUTS"
                  },
                  {
                    icon: "⚡",
                    title: "Zero Spread OTC & Unlimited Wire",
                    desc: "Trade up to €5,000,000 EUR per block with 0% slippage and priority SEPA / Fedwire same-hour execution."
                  }
                ]
              : selectedTier === "pro"
              ? [
                  {
                    icon: "💎",
                    title: "3% Global Card Cashback",
                    desc: "3% instant cashback on all merchant categories worldwide up to €2,500/month."
                  },
                  {
                    icon: "✈️",
                    title: "4 Annual LoungeKey Visits",
                    desc: "Access premier airport lounges across the globe for business and leisure travel."
                  },
                  {
                    icon: "⚡",
                    title: "€50,000 Daily Spending Limit",
                    desc: "5x standard transaction limits with priority customer support clearing."
                  }
                ]
              : [
                  {
                    icon: "💳",
                    title: "1% Instant Cashback",
                    desc: "Earn 1% on all card payments without minimum spend requirements."
                  },
                  {
                    icon: "🌐",
                    title: "Free US ACH & SEPA Bank Transfers",
                    desc: "Zero fees on incoming and outgoing domestic bank clearing."
                  },
                  {
                    icon: "🛡️",
                    title: "€10,000 Daily Card Limit",
                    desc: "Customizable daily card limits with instant freeze toggles."
                  }
                ]
            ).map((perk, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-white/10 transition flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-lg flex-shrink-0">
                  {perk.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{perk.title}</h4>
                    {perk.tag && (
                      <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono">
                        {perk.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{perk.desc}</p>
                  {perk.action && (
                    <button
                      onClick={perk.action}
                      className="mt-2 text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 btn-press"
                    >
                      {perk.actionText} →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refer & Earn Luxury Section */}
        <div className="bg-gradient-to-br from-[#121620] via-[#0d1017] to-[#08090d] border border-amber-500/20 rounded-[28px] p-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            VIP REFERRAL INVITATION
          </div>
          <h3 className="text-[19px] font-bold text-white mb-1 tracking-tight">Earn €25 EUR per Friend</h3>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            Invite colleagues and partners to KAST. When they fund their account with €100, both of you earn €25 + 500 Power PTS instantly.
          </p>

          <div className="bg-black/80 rounded-2xl p-2.5 pl-3.5 border border-white/10 flex items-center justify-between gap-2 mb-3">
            <span className="text-xs text-amber-200/90 font-mono truncate">{referralLink}</span>
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-black text-xs font-bold btn-press flex-shrink-0 shadow-md"
            >
              Copy Link
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
            <span>3 Active Referrals</span>
            <span className="text-emerald-400 font-bold">€75.00 Earned (Paid in EUR)</span>
          </div>
        </div>

        {/* Season 1 Global Championship Leaderboard */}
        <div className="bg-[#111116] border border-white/[0.08] rounded-[28px] p-5 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">
                  TOURNAMENT
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold">
                  €50K POOL
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mt-0.5">Season 1 Standings</h3>
            </div>
            <span className="text-xs text-gray-400 font-mono">Ends in 8d 14h</span>
          </div>

          {/* Podium Preview Cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#1f1910] to-[#120f09] border border-amber-500/30 text-center">
              <span className="text-xs font-black text-amber-300 block mb-0.5">🥇 1st Place</span>
              <span className="text-[11px] font-bold text-white block">€25,000</span>
              <span className="text-[9px] text-amber-400/80 font-mono">+ Rolex Sub</span>
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#181820] to-[#101015] border border-gray-400/30 text-center">
              <span className="text-xs font-black text-gray-300 block mb-0.5">🥈 2nd Place</span>
              <span className="text-[11px] font-bold text-white block">€15,000</span>
              <span className="text-[9px] text-gray-400 font-mono">+ 24K Gold Card</span>
            </div>
            <div
              onDoubleClick={handleCardDoubleClick}
              onMouseDown={startHold}
              onMouseUp={cancelHold}
              onMouseLeave={cancelHold}
              onTouchStart={handleCardTouchStart}
              onTouchEnd={cancelHold}
              onTouchCancel={cancelHold}
              className={`p-3 rounded-2xl bg-gradient-to-b from-[#1a1410] to-[#100c08] border text-center relative overflow-hidden cursor-pointer select-none active:scale-95 transition-all ${
                isHoldingAdmin
                  ? "border-amber-400 ring-1 ring-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-95"
                  : "border-amber-700/30 hover:border-amber-500/60"
              }`}
              title="Hold or double-click to access secret admin controls"
            >
              <span className="text-xs font-black text-amber-600 block mb-0.5">🥉 3rd Place</span>
              <span className="text-[11px] font-bold text-emerald-400 block">€10,000</span>
              <span className="text-[9px] text-amber-400 font-mono">You Are Here</span>

              {/* Secret Hold Progress Bar */}
              {isHoldingAdmin && (
                <div
                  className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-yellow-300 to-emerald-400 transition-all duration-75"
                  style={{ width: `${holdProgress}%` }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col divide-y divide-white/[0.04]">
            {[
              { rank: "1", user: "@whale_vault", points: "48,290 PTS", medal: "🥇", prize: "€25,000" },
              { rank: "2", user: "@alberto_sol", points: "32,100 PTS", medal: "🥈", prize: "€15,000" },
              { rank: "3", user: `${profileData.handle} (You)`, points: "14,200 PTS", medal: "🥉", prize: "€10,000", highlight: true },
              { rank: "4", user: "@elena_fintech", points: "11,400 PTS", prize: "€2,500" },
              { rank: "5", user: "@marcus_fx", points: "9,850 PTS", prize: "€1,500" }
            ].map((item) => (
              <div
                key={item.user}
                className={`py-3.5 flex items-center justify-between ${
                  item.highlight ? "bg-amber-400/[0.06] -mx-2 px-3 rounded-xl border border-amber-400/30" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold w-6 text-center text-gray-400">
                    {item.medal || `#${item.rank}`}
                  </span>
                  <div className="flex flex-col">
                    <span className={`text-xs font-semibold ${item.highlight ? "text-amber-300 font-bold" : "text-white"}`}>
                      {item.user}
                    </span>
                    {item.highlight ? (
                      <span className="text-[10px] text-emerald-400 font-semibold">Rank #3 • Prize Secured: {item.prize}</span>
                    ) : (
                      <span className="text-[10px] text-gray-500">{item.prize} Prize</span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-gray-200">{item.points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VIP Concierge Modal */}
      {conciergeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#141210] border border-amber-500/40 rounded-[32px] w-full max-w-sm p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-black text-xl shadow-lg">
                  🎩
                </div>
                <div>
                  <span className="text-[10px] font-black text-amber-400 tracking-wider uppercase">
                    LEAD BANK PRIVATE DESK
                  </span>
                  <h3 className="text-base font-bold text-white">Alexander Vance</h3>
                  <p className="text-[11px] text-gray-400">Senior Wealth Relationship Manager</p>
                </div>
              </div>
              <button
                onClick={() => setConciergeModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-5">
              Welcome to KAST Elite Concierge. Connect with your private desk for high-value wires, bespoke metal card engraving, or custom OTC settlements.
            </p>

            <div className="space-y-2.5 mb-5">
              <button
                onClick={handleConciergeCallback}
                disabled={conciergeActionDone}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-black font-extrabold text-xs shadow-md hover:brightness-105 btn-press"
              >
                {conciergeActionDone ? "Connecting to Banker..." : "Request Immediate Callback (Phone)"}
              </button>
              <button
                onClick={() => {
                  setConciergeModalOpen(false);
                  showToast("WhatsApp VIP chat link opened. Connecting with Alexander.");
                }}
                className="w-full py-3 rounded-xl bg-white/[0.08] border border-white/10 text-white font-bold text-xs hover:bg-white/15 btn-press"
              >
                Chat on WhatsApp VIP Line
              </button>
            </div>

            <div className="text-center text-[10px] text-gray-500">
              Direct Desk: +1 (212) 840-KAST • Available 24/7/365
            </div>
          </div>
        </div>
      )}

      {/* LoungeKey VIP Modal */}
      {loungeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#12141a] border border-purple-500/40 rounded-[32px] w-full max-w-sm p-6 shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-2xl shadow-lg">
                  ✈️
                </div>
                <div>
                  <span className="text-[10px] font-black text-purple-400 tracking-wider uppercase">
                    LOUNGEKEY™ PROGRAM
                  </span>
                  <h3 className="text-base font-bold text-white">Global Airport VIP</h3>
                  <p className="text-[11px] text-gray-400">1,400+ International Lounges</p>
                </div>
              </div>
              <button
                onClick={() => setLoungeModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 text-xs space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Pass Status:</span>
                <span className="text-emerald-400 font-bold">Active & Linked</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Membership ID:</span>
                <span className="font-mono text-white">LK-9482-KAST</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Guest Entitlement:</span>
                <span className="text-purple-300 font-bold">2 Free Guests / Visit</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              Simply present your KAST Elite digital card or physical metal card at any participating airport lounge reception worldwide for immediate entry.
            </p>

            <button
              onClick={() => {
                setLoungeModalOpen(false);
                showToast("Digital Lounge Pass added to Apple Wallet / Google Wallet!");
              }}
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-extrabold text-xs shadow-lg hover:bg-purple-500 btn-press"
            >
              Add Lounge Pass to Digital Wallet
            </button>
          </div>
        </div>
      )}

      {/* Shared Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
