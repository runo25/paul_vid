import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bankData } from "../data";
import { FlagUS } from "./Vectors";

export default function ReceiveUSD() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const handleCopy = (label, text) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied!`);
  };

  const handleCopyAll = () => {
    const fullText = `KAST US Banking Details:\nAccount Holder: ${bankData.accountName}\nAccount Number: ${bankData.accountNumber}\nRouting Number: ${bankData.routingNumber}\nBank Name: ${bankData.bankName}\nBank Address: ${bankData.bankAddress}\nCountry: ${bankData.country}\nAccount Type: Checking`;
    navigator.clipboard.writeText(fullText);
    showToast("All banking details copied!");
  };

  const handleShare = () => {
    const fullText = `KAST US Banking Details:\nAccount Holder: ${bankData.accountName}\nAccount Number: ${bankData.accountNumber}\nRouting Number: ${bankData.routingNumber}\nBank Name: ${bankData.bankName}`;
    if (navigator.share) {
      navigator.share({
        title: "KAST USD Bank Details",
        text: fullText
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(fullText);
      showToast("Details copied to clipboard!");
    }
  };

  const Field = ({ label, value }) => (
    <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
      <div className="flex flex-col gap-0.5 pr-4">
        <span className="text-gray-400 text-[11px] font-bold tracking-wider uppercase">{label}</span>
        <span className="text-[15px] font-medium leading-snug text-white select-all">{value}</span>
      </div>
      <button
        onClick={() => handleCopy(label, value)}
        className="p-2 hover:bg-white/10 rounded-xl transition text-gray-400 hover:text-white btn-press flex-shrink-0"
        title={`Copy ${label}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center px-5 py-4 sticky top-0 bg-black/90 backdrop-blur-md z-10 border-b border-white/[0.06]">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press mr-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <FlagUS className="w-9 h-9 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold leading-tight">Receive USD (US Only)</span>
            <span className="text-xs text-gray-400">Share your domestic US checking details</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-3 scrollbar-hide">
        {/* Fields list */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] px-5 py-2 mb-6 shadow-sm">
          <Field label="ACCOUNT HOLDER NAME" value={bankData.accountName} />
          <Field label="ACCOUNT NUMBER" value={bankData.accountNumber} />
          <Field label="ROUTING NUMBER (ACH / WIRE)" value={bankData.routingNumber} />
          <Field label="ACCOUNT HOLDER ADDRESS" value={bankData.address} />
          <Field label="BANK NAME" value={bankData.bankName} />
          <Field label="BANK ADDRESS" value={bankData.bankAddress} />
          <Field label="BANK COUNTRY" value={bankData.country} />
          <Field label="ACCOUNT TYPE" value="Checking" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleCopyAll}
            className="flex-1 bg-[#1a1a20] hover:bg-[#22222c] border border-white/10 rounded-full py-3.5 flex items-center justify-center gap-2 text-xs font-bold text-white btn-press transition shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
            Copy All Details
          </button>
          <button
            onClick={handleShare}
            className="flex-1 bg-white hover:bg-gray-100 text-black rounded-full py-3.5 flex items-center justify-center gap-2 text-xs font-bold btn-press transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            Share Details
          </button>
        </div>

        {/* Important Notice Box */}
        <div className="border border-white/10 rounded-[22px] p-5 bg-[#0e0e12] shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
            </svg>
            IMPORTANT INSTRUCTIONS
          </div>
          <ul className="list-disc list-outside ml-4 text-gray-400 text-xs flex flex-col gap-1.5 leading-relaxed">
            <li>Only transfer USD using domestic ACH or Fedwire networks.</li>
            <li>International SWIFT transfers in foreign currencies will be rejected.</li>
            <li>Standard ACH settlement arrives in 1 to 3 business days; Fedwire is same-day.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
