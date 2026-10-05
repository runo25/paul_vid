import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardData, transactions } from "../data";
import { KastLogo, UsdcIcon, FlagEU } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Pay() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("0");
  const [recipient, setRecipient] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("kast"); // kast, bank, crypto
  const [showConfirm, setShowConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleKeyPress = (val) => {
    if (val === "backspace") {
      setAmount((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));
      return;
    }
    if (val === ".") {
      if (amount.includes(".")) return;
      setAmount((prev) => prev + ".");
      return;
    }
    setAmount((prev) => (prev === "0" ? val : prev + val));
  };

  const handlePreset = (val) => {
    if (val === "MAX") {
      setAmount(dashboardData.totalBalanceRaw ? dashboardData.totalBalanceRaw.toFixed(2) : "1000.00");
    } else {
      setAmount(val);
    }
  };

  const handleExecuteSend = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);

      // Create new transaction in data
      const newTx = {
        id: "tx_" + Date.now(),
        title: paymentMethod === "kast" ? "Sent to KAST User" : paymentMethod === "bank" ? "SEPA Instant Transfer" : "Crypto Withdrawal",
        toFrom: recipient ? `To ${recipient}` : "To External Recipient",
        amount: `- ${parseFloat(amount).toFixed(2)} EUR`,
        type: "out",
        status: "completed",
        dateTime: "Just now",
        month: "OCTOBER 2026",
        category: "Transfer",
        reference: `KAST-${Date.now().toString().slice(-6)}`,
        fee: "€0.00",
        account: "SEPA EUR Account"
      };
      transactions.unshift(newTx);
    }, 1500);
  };

  if (success) {
    return (
      <div className="app-screen text-white bg-black flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
        <div className="w-20 h-20 rounded-full bg-[#00e57a]/20 border border-[#00e57a]/40 flex items-center justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#00e57a] flex items-center justify-center shadow-[0_0_30px_rgba(0,229,122,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-1">Transfer Completed!</h2>
        <p className="text-gray-400 text-sm mb-2">
          You sent <span className="text-white font-semibold font-display">€{parseFloat(amount).toFixed(2)} EUR</span>
        </p>
        <p className="text-xs text-gray-500 mb-8">
          Recipient: {recipient || "@user_external"} · Fee: €0.00
        </p>

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => navigate("/transactions")}
            className="w-full py-4 bg-white text-black font-bold rounded-full btn-press"
          >
            View in Activity
          </button>
          <button
            onClick={() => {
              setSuccess(false);
              setAmount("0");
              setRecipient("");
              setShowConfirm(false);
            }}
            className="w-full py-3.5 bg-white/10 text-white font-semibold rounded-full btn-press"
          >
            Make Another Payment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-screen text-white pb-24 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
        <h1 className="text-[18px] font-bold text-white tracking-tight">Send & Pay</h1>
        <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          Zero Fee Transfer
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide flex flex-col">
        {/* Method Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-[#121217] p-1.5 rounded-2xl border border-white/[0.06] mb-5">
          <button
            onClick={() => setPaymentMethod("kast")}
            className={`py-2 px-1 rounded-xl text-xs font-semibold transition ${
              paymentMethod === "kast" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            KAST Tag
          </button>
          <button
            onClick={() => setPaymentMethod("bank")}
            className={`py-2 px-1 rounded-xl text-xs font-semibold transition ${
              paymentMethod === "bank" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            SEPA Bank
          </button>
          <button
            onClick={() => setPaymentMethod("crypto")}
            className={`py-2 px-1 rounded-xl text-xs font-semibold transition ${
              paymentMethod === "crypto" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Crypto
          </button>
        </div>

        {/* Recipient Input */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-2xl p-3.5 mb-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center text-gray-400 flex-shrink-0">
            {paymentMethod === "kast" && <KastLogo className="w-5 h-5" />}
            {paymentMethod === "bank" && <FlagEU className="w-5 h-5" />}
            {paymentMethod === "crypto" && <UsdcIcon className="w-5 h-5" />}
          </div>
          <input
            type="text"
            placeholder={
              paymentMethod === "kast"
                ? "Enter @username or $tag..."
                : paymentMethod === "bank"
                ? "Recipient SEPA IBAN or Account..."
                : "Enter Solana / EVM / TRON address..."
            }
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Amount Display */}
        <div className="flex flex-col items-center justify-center my-auto py-2">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
            Amount to send
          </div>
          <div className="text-5xl font-extralight tracking-tight text-white font-display flex items-baseline">
            <span className="text-3xl text-gray-500 mr-1">€</span>
            {amount}
            <span className="text-sm text-emerald-400 font-sans ml-2 font-medium">EUR</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Available Balance: <span className="text-gray-300 font-medium">{dashboardData.balance}</span>
          </div>

          {/* Quick Presets */}
          <div className="flex gap-2 mt-4">
            {["10", "50", "100", "MAX"].map((p) => (
              <button
                key={p}
                onClick={() => handlePreset(p)}
                className="px-3.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-gray-300 hover:text-white border border-white/10 btn-press transition"
              >
                {p === "MAX" ? "MAX" : `€${p}`}
              </button>
            ))}
          </div>
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-y-3 gap-x-6 px-4 my-4 max-w-[340px] mx-auto w-full">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "backspace"].map((k) => (
            <button
              key={k}
              onClick={() => handleKeyPress(k)}
              className="h-14 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.14] border border-white/[0.04] text-xl font-medium font-display flex items-center justify-center btn-press transition"
            >
              {k === "backspace" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12l-2.25 2.25m-7.5-6h11.25a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-1.745-.837l-4.5-5.25a2.25 2.25 0 0 1 0-2.826l4.5-5.25A2.25 2.25 0 0 1 6.75 3.75Z" />
                </svg>
              ) : (
                k
              )}
            </button>
          ))}
        </div>

        {/* Review & Send Button */}
        <button
          onClick={() => setShowConfirm(true)}
          disabled={parseFloat(amount) <= 0}
          className={`w-full py-4 rounded-full font-bold text-sm transition btn-press shadow-xl ${
            parseFloat(amount) > 0
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-white/10 text-gray-500 cursor-not-allowed"
          }`}
        >
          Review & Transfer
        </button>
      </div>

      {/* Confirmation Bottom Sheet */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-white">Confirm Transfer</h3>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center my-3 text-center">
              <span className="text-xs text-gray-400 uppercase font-semibold">Total Debit</span>
              <div className="text-4xl font-extralight text-white font-display mt-1">
                €{parseFloat(amount).toFixed(2)} <span className="text-lg font-sans text-gray-400">EUR</span>
              </div>
            </div>

            <div className="bg-black/60 rounded-2xl p-4 border border-white/5 space-y-3 text-xs mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Recipient</span>
                <span className="font-semibold text-white font-mono">{recipient || "@user_csrxi8992"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Method</span>
                <span className="font-semibold text-white capitalize">{paymentMethod} Transfer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Network / Platform Fee</span>
                <span className="font-semibold text-emerald-400">€0.00 (Zero Fee)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Estimated Settlement</span>
                <span className="font-semibold text-white">Instant · Secured</span>
              </div>
            </div>

            <button
              onClick={handleExecuteSend}
              disabled={isProcessing}
              className="w-full py-4 rounded-full bg-[#00e57a] text-black font-extrabold text-sm btn-press flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,122,0.3)]"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Transfer...
                </>
              ) : (
                "Confirm & Send Now"
              )}
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
