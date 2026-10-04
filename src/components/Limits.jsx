import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { limitsData } from "../data";

export default function Limits() {
  const navigate = useNavigate();
  const [showIncreaseModal, setShowIncreaseModal] = useState(false);
  const [requestedTier, setRequestedTier] = useState("Tier 3 (€25,000/day)");
  const [reason, setReason] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleRequestIncrease = (e) => {
    e.preventDefault();
    setShowIncreaseModal(false);
    showToast("Limit increase request submitted to compliance!");
    setReason("");
  };

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-10">
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
        <h1 className="text-[17px] font-bold tracking-tight">Account Limits</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide">
        {/* Tier badge header */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Account Tier</span>
              <h3 className="text-lg font-bold text-white">Tier 2 Standard Verified</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              ACTIVE
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Limits reset every 24 hours at midnight UTC.
          </p>
        </div>

        {/* Limit Meters */}
        <div className="space-y-4 mb-6">
          {/* Daily Card & Spending Limit */}
          <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-4 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-white">Daily Spending Limit</span>
              <span className="font-mono text-gray-300">
                €{limitsData.dailySpent.toLocaleString()} / €{limitsData.dailyLimit.toLocaleString()} EUR
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
              <div
                className="h-full bg-emerald-400 rounded-full"
                style={{ width: `${(limitsData.dailySpent / limitsData.dailyLimit) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>Remaining: €{(limitsData.dailyLimit - limitsData.dailySpent).toLocaleString()} EUR</span>
              <span>45% utilized</span>
            </div>
          </div>

          {/* Monthly ATM Cash Withdrawal */}
          <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-4 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-white">Monthly ATM Withdrawal</span>
              <span className="font-mono text-gray-300">
                €{limitsData.monthlyAtmUsed.toLocaleString()} / €{limitsData.monthlyAtm.toLocaleString()} EUR
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
              <div
                className="h-full bg-emerald-400 rounded-full"
                style={{ width: `${(limitsData.monthlyAtmUsed / limitsData.monthlyAtm) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>Remaining: €{limitsData.monthlyAtm.toLocaleString()} EUR</span>
              <span>0% utilized</span>
            </div>
          </div>

          {/* 24-Hour Crypto Outflow */}
          <div className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-4 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-white">24h Crypto Withdrawal</span>
              <span className="font-mono text-gray-300">
                €{limitsData.cryptoTransfer24hUsed.toLocaleString()} / €{limitsData.cryptoTransfer24h.toLocaleString()} EUR
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
              <div
                className="h-full bg-cyan-400 rounded-full"
                style={{ width: `${(limitsData.cryptoTransfer24hUsed / limitsData.cryptoTransfer24h) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>Remaining: €{(limitsData.cryptoTransfer24h - limitsData.cryptoTransfer24hUsed).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
              <span>11% utilized</span>
            </div>
          </div>
        </div>

        {/* Increase Button */}
        <button
          onClick={() => setShowIncreaseModal(true)}
          className="w-full py-4 bg-white text-black font-bold text-sm rounded-full btn-press shadow-xl"
        >
          Request Limit Increase
        </button>
      </div>

      {/* Increase Request Modal */}
      {showIncreaseModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Request Limit Increase</h3>
              <button onClick={() => setShowIncreaseModal(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleRequestIncrease} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 uppercase font-bold block mb-1">Target Limit Tier</label>
                <select
                  value={requestedTier}
                  onChange={(e) => setRequestedTier(e.target.value)}
                  className="w-full bg-white/[0.06] rounded-xl p-3 text-xs text-white border border-white/10 outline-none"
                >
                  <option value="Tier 3 (€25,000/day)" className="bg-black">Tier 3 (€25,000 / day)</option>
                  <option value="Tier 4 (€100,000/day)" className="bg-black">Tier 4 (€100,000 / day)</option>
                  <option value="Unlimited VIP" className="bg-black">Unlimited VIP Private Banker</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase font-bold block mb-1">Primary Reason for Increase</label>
                <textarea
                  required
                  placeholder="e.g. Business payroll, real estate wire, high volume crypto trading..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-white/[0.06] rounded-xl p-3 text-xs text-white border border-white/10 outline-none resize-none h-24"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#00e57a] text-black font-extrabold text-sm rounded-full btn-press"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
