import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  profileData,
  dashboardData,
  transactions,
  notificationsData,
  availableNotificationsCatalog,
  dispatchNotification,
  removeNotification,
  setTransactionStatus,
  triggerCustomPush
} from "../data";
import { KastLogo } from "./Vectors";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [inboxStatus, setInboxStatus] = useState({});
  const [currentTxStatus, setCurrentTxStatus] = useState("processing");
  const [docsSubmitted, setDocsSubmitted] = useState(false);
  const [customTitle, setCustomTitle] = useState("Compliance Update");
  const [customMessage, setCustomMessage] = useState("Your account verification has been processed successfully.");
  const [toastMessage, setToastMessage] = useState("");

  const refreshState = () => {
    // Check which notifications are in inbox
    const statusMap = {};
    Object.keys(availableNotificationsCatalog).forEach((key) => {
      statusMap[key] = notificationsData.some((n) => n.id === key);
    });
    setInboxStatus(statusMap);

    // Check tx status
    const tx = transactions.find((t) => t.id === "tx_oct_01");
    if (tx) {
      setCurrentTxStatus(tx.status);
    }

    // Check docs submitted
    try {
      setDocsSubmitted(sessionStorage.getItem("kast_docs_submitted") === "true");
    } catch (e) {
      setDocsSubmitted(false);
    }
  };

  useEffect(() => {
    refreshState();
    window.addEventListener("kast_notifications_updated", refreshState);
    window.addEventListener("kast_transaction_updated", refreshState);
    return () => {
      window.removeEventListener("kast_notifications_updated", refreshState);
      window.removeEventListener("kast_transaction_updated", refreshState);
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2400);
  };

  const handleToggleInbox = (notifId) => {
    const isCurrentlyIn = inboxStatus[notifId];
    if (isCurrentlyIn) {
      removeNotification(notifId);
      showToast(`Removed "${availableNotificationsCatalog[notifId].title}" from inbox`);
    } else {
      dispatchNotification(notifId, false);
      showToast(`Added "${availableNotificationsCatalog[notifId].title}" to inbox`);
    }
    refreshState();
  };

  const handleTriggerPopUp = (notifId) => {
    dispatchNotification(notifId, true);
    showToast(`🔔 Triggered push notification pop-up for "${availableNotificationsCatalog[notifId].title}"`);
    refreshState();
  };

  const handleToggleTxStatus = () => {
    const newStatus = currentTxStatus === "processing" ? "completed" : "processing";
    setTransactionStatus(newStatus);
    setCurrentTxStatus(newStatus);
    showToast(newStatus === "completed" ? "€1,000 deposit CLEARED (Balance: €1,000.94)" : "€1,000 deposit HELD (Balance: €0.94)");
    refreshState();
  };

  const handleResetDocs = () => {
    try {
      sessionStorage.removeItem("kast_docs_submitted");
      sessionStorage.removeItem("kast_docs_submission_time");
      setDocsSubmitted(false);
      const tx = transactions.find((t) => t.id === "tx_oct_01");
      if (tx && tx.status === "processing") {
        tx.note = "Under compliance review - documentation requested";
      }
      showToast("Document submission state reset");
    } catch (e) {
      // ignore
    }
  };

  const handleSendCustomPush = (e) => {
    e.preventDefault();
    if (!customTitle.trim() || !customMessage.trim()) return;
    triggerCustomPush(customTitle, customMessage);
    showToast("🔔 Custom notification triggered & added to inbox!");
    refreshState();
  };

  // Quick Preset Handlers
  const applyPresetInitialHold = () => {
    setTransactionStatus("processing");
    removeNotification("verification_submitted");
    removeNotification("account_cancellation");
    removeNotification("funds_released");
    dispatchNotification("action_required", false);
    handleResetDocs();
    showToast("Preset Applied: Initial Hold State");
    refreshState();
  };

  const applyPresetDocsUnderReview = () => {
    setTransactionStatus("processing", { note: "Documents submitted — awaiting compliance review" });
    try {
      sessionStorage.setItem("kast_docs_submitted", "true");
    } catch (e) {}
    setDocsSubmitted(true);
    dispatchNotification("verification_submitted", true);
    showToast("Preset Applied: Docs Submitted & Verification in Review Triggered");
    refreshState();
  };

  const applyPresetApproved = () => {
    setTransactionStatus("completed", { note: "Compliance verified & approved" });
    removeNotification("action_required");
    removeNotification("account_cancellation");
    dispatchNotification("funds_released", true);
    showToast("Preset Applied: Fully Approved & €1,000 Released");
    refreshState();
  };

  const applyPresetAdvisory = () => {
    dispatchNotification("account_cancellation", true);
    showToast("Preset Applied: Account Advisory Warning Triggered");
    refreshState();
  };

  const applyPresetClearAll = () => {
    notificationsData.length = 0;
    window.dispatchEvent(new CustomEvent("kast_notifications_updated"));
    showToast("All notifications cleared from inbox");
    refreshState();
  };

  return (
    <div className="app-screen text-white bg-[#0a0a0f] min-h-screen flex flex-col pb-16 font-sans">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] bg-white text-black px-4 py-2 rounded-full text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] sticky top-0 bg-[#0a0a0f]/90 backdrop-blur-xl z-20">
        <button
          onClick={() => navigate("/power")}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press flex items-center gap-1.5 text-xs font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
            <KastLogo className="w-3.5 h-3.5" color="#fcd116" />
          </div>
          <h1 className="text-sm font-bold tracking-tight text-white">Admin Control Center</h1>
        </div>

        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          LIVE
        </span>
      </header>

      {/* Main Body */}
      <div className="flex-1 overflow-y-auto px-5 pt-4 space-y-5 scrollbar-hide">
        {/* Banner Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1b1510] via-[#121016] to-[#0d0d12] border border-amber-500/30 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base">⚙️</span>
              <span className="text-xs font-black text-amber-400 tracking-wider uppercase">
                Compliance & Notification Hub
              </span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Control which compliance notifications appear in Samuel's inbox and trigger real-time pop-up banners with sound and vibration.
            </p>
          </div>
        </div>

        {/* Account & Transaction Controller */}
        <div className="bg-[#121218] border border-white/[0.08] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              €1,000 Deposit State
            </span>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                currentTxStatus === "completed"
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                  : "bg-amber-500/15 text-amber-400 border-amber-500/30"
              }`}
            >
              {currentTxStatus === "completed" ? "APPROVED & CLEARED" : "ON HOLD (UNDER REVIEW)"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] text-gray-500 block mb-0.5">Active Balance</span>
              <span className="text-base font-bold text-white font-mono">{dashboardData.balance}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] text-gray-500 block mb-0.5">Client Document Upload</span>
              <span className={`text-[11px] font-bold ${docsSubmitted ? "text-emerald-400" : "text-amber-400"}`}>
                {docsSubmitted ? "Docs Uploaded" : "No Docs Uploaded"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleTxStatus}
              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition btn-press flex items-center justify-center gap-2 ${
                currentTxStatus === "processing"
                  ? "bg-emerald-500 text-black hover:bg-emerald-400"
                  : "bg-amber-500 text-black hover:bg-amber-400"
              }`}
            >
              {currentTxStatus === "processing" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  Release Funds (€1,000.94)
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
                  </svg>
                  Hold Deposit (€0.94)
                </>
              )}
            </button>

            {docsSubmitted && (
              <button
                onClick={handleResetDocs}
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 text-xs font-semibold transition btn-press"
                title="Reset submitted document status"
              >
                Reset Docs
              </button>
            )}
          </div>
        </div>

        {/* Notifications Dispatcher (Requested by User) */}
        <div>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Notification Presets ({Object.keys(availableNotificationsCatalog).length})
            </h2>
            <span className="text-[11px] text-gray-500">Select to trigger or add</span>
          </div>

          <div className="space-y-3">
            {Object.values(availableNotificationsCatalog).map((item) => {
              const inInbox = inboxStatus[item.id];
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    inInbox
                      ? "bg-[#14141d] border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.08)]"
                      : "bg-[#101015] border-white/[0.06] opacity-90"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            item.badgeColor === "emerald"
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : item.badgeColor === "rose"
                              ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                              : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">{item.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                    </div>

                    {/* Active In Inbox indicator */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          inInbox ? "bg-[#00e57a] shadow-[0_0_8px_#00e57a]" : "bg-gray-600"
                        }`}
                      />
                      <span className="text-[10px] text-gray-400 font-medium">
                        {inInbox ? "In Inbox" : "Not in Inbox"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-3.5 line-clamp-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    {item.message.replace(/\n|- /g, " ")}
                  </p>

                  {/* Actions for this Notification */}
                  <div className="flex items-center gap-2">
                    {/* Trigger Pop-Up Button */}
                    <button
                      onClick={() => handleTriggerPopUp(item.id)}
                      className="flex-1 py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition btn-press flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>🔔</span>
                      Pop Up Banner
                    </button>

                    {/* Toggle In Inbox */}
                    <button
                      onClick={() => handleToggleInbox(item.id)}
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold transition btn-press border ${
                        inInbox
                          ? "bg-rose-500/15 text-rose-300 border-rose-500/30 hover:bg-rose-500/25"
                          : "bg-white/10 text-white border-white/15 hover:bg-white/15"
                      }`}
                    >
                      {inInbox ? "Remove" : "+ Add to Inbox"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Scenario Shortcuts */}
        <div className="bg-[#121218] border border-white/[0.08] rounded-2xl p-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
            Quick Simulation Presets
          </span>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={applyPresetInitialHold}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-left transition btn-press"
            >
              <span className="font-bold text-white block mb-0.5">1. Initial Hold State</span>
              <span className="text-[10px] text-gray-400 block leading-tight">
                Deposit on hold, action required in inbox
              </span>
            </button>

            <button
              onClick={applyPresetDocsUnderReview}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-left transition btn-press"
            >
              <span className="font-bold text-amber-400 block mb-0.5">2. Docs Under Review</span>
              <span className="text-[10px] text-gray-400 block leading-tight">
                Simulates docs uploaded & review notice
              </span>
            </button>

            <button
              onClick={applyPresetApproved}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-left transition btn-press"
            >
              <span className="font-bold text-emerald-400 block mb-0.5">3. Fully Approved</span>
              <span className="text-[10px] text-gray-400 block leading-tight">
                Clears €1,000 & triggers funds banner
              </span>
            </button>

            <button
              onClick={applyPresetAdvisory}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-left transition btn-press"
            >
              <span className="font-bold text-rose-400 block mb-0.5">4. Account Advisory</span>
              <span className="text-[10px] text-gray-400 block leading-tight">
                Fires compliance warning advisory
              </span>
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-white/5 flex justify-end">
            <button
              onClick={applyPresetClearAll}
              className="text-[11px] text-gray-400 hover:text-rose-400 font-semibold transition"
            >
              Clear Entire Inbox
            </button>
          </div>
        </div>

        {/* Custom Push Generator */}
        <div className="bg-[#121218] border border-white/[0.08] rounded-2xl p-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
            Custom Push Composer
          </span>

          <form onSubmit={handleSendCustomPush} className="space-y-3 text-xs">
            <div>
              <label className="text-[10px] text-gray-400 block mb-1">Title</label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-amber-400"
                placeholder="Notification Title"
              />
            </div>

            <div>
              <label className="text-[10px] text-gray-400 block mb-1">Message</label>
              <textarea
                rows={2}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-amber-400 resize-none"
                placeholder="Notification Message body..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-bold text-white transition btn-press flex items-center justify-center gap-1.5"
            >
              <span>🚀</span> Dispatch Custom Pop-Up
            </button>
          </form>
        </div>

        {/* App Navigation Shortcuts */}
        <div className="p-3 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-around text-xs">
          <Link to="/notifications" className="text-gray-400 hover:text-white transition flex flex-col items-center gap-1">
            <span>📬</span>
            <span className="text-[10px]">Inbox</span>
          </Link>
          <Link to="/transaction/tx_oct_01" className="text-gray-400 hover:text-white transition flex flex-col items-center gap-1">
            <span>📄</span>
            <span className="text-[10px]">€1,000 Tx</span>
          </Link>
          <Link to="/power" className="text-gray-400 hover:text-white transition flex flex-col items-center gap-1">
            <span>⚡</span>
            <span className="text-[10px]">Power</span>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-white transition flex flex-col items-center gap-1">
            <span>🏠</span>
            <span className="text-[10px]">Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
