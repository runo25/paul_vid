import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { securitySettings } from "../data";

export default function Security() {
  const navigate = useNavigate();
  const [biometrics, setBiometrics] = useState(securitySettings.biometricsEnabled);
  const [twoFactor, setTwoFactor] = useState(securitySettings.twoFactorEnabled);
  const [loginAlerts, setLoginAlerts] = useState(securitySettings.loginAlerts);
  const [autoFreeze, setAutoFreeze] = useState(securitySettings.freezeCardOnSuspicious);
  const [sessions, setSessions] = useState(securitySettings.activeSessions);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const handleRevokeSession = (device) => {
    setSessions((prev) => prev.filter((s) => s.device !== device));
    showToast(`Logged out from ${device}`);
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
        <h1 className="text-[17px] font-bold tracking-tight">Security & Privacy</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide">
        {/* Toggle options */}
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
          Authentication & Protection
        </h3>
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] divide-y divide-white/[0.04] overflow-hidden mb-6 shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Biometric Login</div>
              <div className="text-xs text-gray-400">Unlock app with Face ID or fingerprint</div>
            </div>
            <button
              onClick={() => {
                setBiometrics(!biometrics);
                showToast(biometrics ? "Biometrics disabled" : "Biometrics enabled");
              }}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                biometrics ? "bg-[#00e57a]" : "bg-zinc-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${biometrics ? "left-5.5" : "left-0.5"}`} />
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Two-Factor Authentication (2FA)</div>
              <div className="text-xs text-gray-400">Require authenticator code for transfers</div>
            </div>
            <button
              onClick={() => {
                setTwoFactor(!twoFactor);
                showToast(twoFactor ? "2FA disabled" : "2FA enabled with authenticator");
              }}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                twoFactor ? "bg-[#00e57a]" : "bg-zinc-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${twoFactor ? "left-5.5" : "left-0.5"}`} />
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Suspicious Activity Auto-Freeze</div>
              <div className="text-xs text-gray-400">Automatically lock cards on anomaly</div>
            </div>
            <button
              onClick={() => setAutoFreeze(!autoFreeze)}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                autoFreeze ? "bg-[#00e57a]" : "bg-zinc-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${autoFreeze ? "left-5.5" : "left-0.5"}`} />
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Instant Login Notifications</div>
              <div className="text-xs text-gray-400">Notify when new device logs into KAST</div>
            </div>
            <button
              onClick={() => setLoginAlerts(!loginAlerts)}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                loginAlerts ? "bg-[#00e57a]" : "bg-zinc-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${loginAlerts ? "left-5.5" : "left-0.5"}`} />
            </button>
          </div>
        </div>

        {/* Active Sessions */}
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
          Active Devices & Sessions
        </h3>
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] divide-y divide-white/[0.04] overflow-hidden mb-6 shadow-sm">
          {sessions.map((s) => (
            <div key={s.device} className="p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{s.device}</span>
                  {s.current && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">THIS DEVICE</span>
                  )}
                </div>
                <div className="text-xs text-gray-400">{s.location} · {s.date}</div>
              </div>

              {!s.current && (
                <button
                  onClick={() => handleRevokeSession(s.device)}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 px-3 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20 btn-press"
                >
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
