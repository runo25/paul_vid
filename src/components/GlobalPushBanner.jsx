import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KastLogo } from "./Vectors";

/**
 * Global push notification banner that slides down from the top of the screen
 * when triggered by the Admin panel or system events.
 */
export default function GlobalPushBanner() {
  const navigate = useNavigate();
  const [activeBanner, setActiveBanner] = useState(null);
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef(null);
  const removeTimerRef = useRef(null);

  const dismiss = () => {
    setVisible(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
    removeTimerRef.current = setTimeout(() => {
      setActiveBanner(null);
    }, 350);
  };

  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      // Dual tone banking chime
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc2.type = "sine";

      osc1.frequency.setValueAtTime(880, ctx.currentTime); // A5
      osc1.frequency.exponentialRampToValueAtTime(1318.5, ctx.currentTime + 0.12); // E6

      osc2.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.06); // D6
      osc2.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.18); // A6

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime + 0.05);

      osc1.stop(ctx.currentTime + 0.45);
      osc2.stop(ctx.currentTime + 0.45);
    } catch (e) {
      // AudioContext policy handled gracefully
    }
  };

  useEffect(() => {
    const handlePush = (e) => {
      const notif = e.detail;
      if (!notif) return;

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (removeTimerRef.current) clearTimeout(removeTimerRef.current);

      setActiveBanner(notif);
      setVisible(true);

      try {
        playChime();
      } catch (err) {}

      try {
        if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
      } catch (err) {}

      hideTimerRef.current = setTimeout(() => {
        dismiss();
      }, 6500);
    };

    window.addEventListener("kast_push_notification", handlePush);
    return () => {
      window.removeEventListener("kast_push_notification", handlePush);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
    };
  }, []);

  return (
    <div
      id="global-push-banner"
      className={`fixed top-3 left-3 right-3 z-[9999] max-w-[420px] mx-auto transition-all duration-300 transform ${
        visible && activeBanner
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "-translate-y-12 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {activeBanner && (
        <div
          onClick={() => {
            dismiss();
            navigate("/notifications");
          }}
          className="bg-[#121218]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.25)] flex items-start gap-3 cursor-pointer hover:border-amber-400/40 transition group"
        >
        {/* App Icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-black border border-amber-500/30 flex items-center justify-center flex-shrink-0 shadow-inner mt-0.5">
          <KastLogo className="w-5 h-5" color="#fcd116" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
              KAST Notification
            </span>
            <span className="text-[10px] text-gray-400 font-mono">Just now</span>
          </div>

          <h4 className="text-[13px] font-bold text-white leading-tight truncate mb-1">
            {activeBanner.title}
          </h4>

          <p className="text-[11px] text-gray-300 leading-snug line-clamp-2">
            {activeBanner.message}
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
            setTimeout(() => setActiveBanner(null), 300);
          }}
          className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition flex-shrink-0"
          title="Dismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
