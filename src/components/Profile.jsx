import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { profileData } from "../data";
import { KastLogo } from "./Vectors";

export default function Profile() {
  const navigate = useNavigate();
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-12">
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
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-bold tracking-tight">Profile & Settings</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-3 scrollbar-hide">
        {/* Profile Avatar Card */}
        <div className="flex flex-col items-center mt-2 mb-6">
          <div className="relative mb-3">
            <div className="w-24 h-24 bg-[#141419] border border-white/15 rounded-full flex items-center justify-center shadow-xl">
              <KastLogo className="w-12 h-12" color="#ffffff" />
            </div>
            <Link
              to="/profile/personal-data"
              className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black border-2 border-black btn-press shadow"
              title="Edit Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              </svg>
            </Link>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white uppercase">{profileData.name} {profileData.lastName}</h2>
          <p className="text-gray-400 text-xs font-mono mt-0.5">{profileData.handle}</p>
        </div>

        {/* KAST Business Metallic Banner */}
        <div className="mb-6">
          <div className="kast-business-banner rounded-[24px] p-5 flex flex-col items-center justify-center text-white relative overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <KastLogo className="w-6 h-6" color="#ffffff" />
              <span className="text-xl font-extralight tracking-[0.25em]">BUSINESS</span>
            </div>
            <p className="text-xs text-gray-300 text-center mb-3">
              Corporate multi-currency treasury & automated payroll.
            </p>
            <button
              onClick={() => setShowBusinessModal(true)}
              className="text-[#00e57a] hover:text-emerald-300 text-xs font-bold flex items-center gap-1.5 btn-press"
            >
              Request KAST Business Invitation →
            </button>
          </div>
        </div>

        {/* Menu Section 1 */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] divide-y divide-white/[0.04] overflow-hidden mb-4 shadow-sm">
          {/* View KAST Tag */}
          <Link to="/scan" className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition btn-press">
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">View KAST Tag & QR</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* Memberships */}
          <button
            onClick={() => setShowMembershipModal(true)}
            className="flex items-center justify-between p-4 w-full text-left hover:bg-white/[0.03] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">Memberships & Tier</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-black flex items-center gap-1">
                ✓ {profileData.membership}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>

          {/* Refer & Earn */}
          <Link to="/power" className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition btn-press">
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-rose-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">Refer & Earn ($25 Bonus)</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Menu Section 2: Account & Security */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] divide-y divide-white/[0.04] overflow-hidden mb-4 shadow-sm">
          {/* Personal Data */}
          <Link to="/profile/personal-data" className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition btn-press">
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">Personal Information</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* Security */}
          <Link to="/security" className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition btn-press">
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">Security & Biometrics</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* Limits */}
          <Link to="/limits" className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition btn-press">
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
              <span className="text-[14px] font-semibold text-white">Transaction Limits</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Menu Section 3: Concierge & About */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] divide-y divide-white/[0.04] overflow-hidden mb-6 shadow-sm">
          {/* Concierge */}
          <button
            onClick={() => setShowSupportModal(true)}
            className="flex items-center justify-between p-4 w-full text-left hover:bg-white/[0.03] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
              </svg>
              <span className="text-[14px] font-semibold text-white">VIP Concierge (24/7)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>

          {/* About */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3.5">
              <KastLogo className="w-5 h-5" color="#9ca3af" />
              <span className="text-[14px] font-semibold text-white">App Version</span>
            </div>
            <span className="text-xs text-gray-500 font-mono">{profileData.version}</span>
          </div>
        </div>
      </div>

      {/* Business Modal */}
      {showBusinessModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">KAST Business Waitlist</h3>
              <button onClick={() => setShowBusinessModal(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Unlock multi-entity banking, sub-accounts for teams, batch salary payroll, and unlimited virtual cards for your business.
            </p>
            <button
              onClick={() => {
                showToast("Application submitted! We will contact you shortly.");
                setShowBusinessModal(false);
              }}
              className="w-full py-4 bg-[#00e57a] text-black font-extrabold text-sm rounded-full btn-press"
            >
              Confirm Application
            </button>
          </div>
        </div>
      )}

      {/* Concierge Live Chat Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg font-bold text-white">VIP Concierge Live Desk</h3>
              </div>
              <button onClick={() => setShowSupportModal(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="bg-black/60 rounded-2xl p-4 border border-white/5 text-xs text-gray-300 mb-6 space-y-2">
              <p className="font-semibold text-white">Hello {profileData.fullName}!</p>
              <p>Your dedicated private banking specialist is available 24/7 for wire inquiries, limits, and card concierge services.</p>
            </div>
            <button
              onClick={() => {
                showToast("Connecting to live concierge...");
                setShowSupportModal(false);
              }}
              className="w-full py-4 bg-white text-black font-bold text-sm rounded-full btn-press"
            >
              Start Live Chat
            </button>
          </div>
        </div>
      )}

      {/* Membership Tiers Modal */}
      {showMembershipModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">KAST Membership Tiers</h3>
              <button onClick={() => setShowMembershipModal(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-3 mb-6">
              <div className="bg-white/5 border border-emerald-500/40 rounded-2xl p-3.5 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase">Standard Tier (Current)</div>
                  <div className="text-[11px] text-gray-400">1% Card Cashback · Zero FX Fees</div>
                </div>
                <span className="text-xs font-bold text-white">ACTIVE</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-3.5 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-purple-400 uppercase">Pro Tier ($10k/mo)</div>
                  <div className="text-[11px] text-gray-400">3% Card Cashback · Airport Lounge Pass</div>
                </div>
                <span className="text-xs text-gray-500 font-semibold">Locked</span>
              </div>
            </div>
            <button
              onClick={() => setShowMembershipModal(false)}
              className="w-full py-3.5 bg-white text-black font-bold text-xs rounded-full btn-press"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
