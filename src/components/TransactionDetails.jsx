import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { transactions, bankData } from "../data";

export default function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const transaction = transactions.find((t) => t.id === id) || transactions[0];
  const isIncoming = transaction.type === "in" || transaction.amount.startsWith("+");
  const isProcessing = transaction.status === "processing";

  const handleShareReceipt = () => {
    const text = `KAST Receipt:\nTransaction: ${transaction.title}\nAmount: ${transaction.amount}\nStatus: ${isProcessing ? 'Processing' : 'Completed'}\nDate: ${transaction.dateTime}\nRef: ${transaction.reference || 'KAST-84291'}`;
    if (navigator.share) {
      navigator.share({ title: "KAST Transaction Receipt", text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      showToast("Receipt copied to clipboard!");
    }
  };

  const handleDownloadPdf = () => {
    showToast("PDF Receipt generated & downloaded!");
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
        <h1 className="text-[17px] font-bold tracking-tight">Transaction Details</h1>
        <button
          onClick={() => showToast("Support inquiry ticket created")}
          className="text-gray-400 hover:text-white rounded-full p-2 -mr-2 transition btn-press"
          title="Get Help"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 scrollbar-hide">
        {/* Amount & Status Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#16161c] border border-white/10 flex items-center justify-center mb-4 shadow-md">
            {transaction.type === "out" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-[#00e57a]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
              </svg>
            )}
          </div>

          <h2
            className={`text-4xl font-light tracking-tight font-display mb-2 ${
              isProcessing
                ? "text-[#fcd116]"
                : isIncoming
                ? "text-[#00e57a]"
                : "text-white"
            }`}
          >
            {transaction.amount}
          </h2>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isProcessing
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {isProcessing ? "Under Review" : isIncoming ? "Received" : "Sent"}
            </span>
          </div>
        </div>

        {/* Action Required Banner for Processing Transactions */}
        {isProcessing && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6 shadow-md">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
              </svg>
              Action Required
            </div>
            <p className="text-xs text-gray-300 mb-3 leading-relaxed">
              This wire transfer of 4,500.00 USD is on temporary hold pending standard AML compliance verification.
            </p>
            <Link
              to="/provide-information"
              className="w-full py-2.5 bg-amber-400 text-black font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 btn-press transition"
            >
              Submit Required Documentation →
            </Link>
          </div>
        )}

        {/* Detailed Breakdown Card */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 space-y-4 text-xs mb-8 shadow-sm">
          <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Counterparty</span>
            <span className="font-semibold text-white text-right">{transaction.toFrom}</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Account / Wallet</span>
            <span className="font-semibold text-white">{transaction.account || "Virtual USD Account"}</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Category</span>
            <span className="font-semibold text-white">{transaction.category || "Wire Transfer"}</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Transaction Date</span>
            <span className="font-semibold text-white">{transaction.dateTime} 2026</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Reference ID</span>
            <span className="font-mono text-gray-300">{transaction.reference || "KAST-20260622-04"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">Platform Fee</span>
            <span className="font-semibold text-emerald-400">$0.00 USD</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDownloadPdf}
            className="flex-1 bg-[#1a1a20] hover:bg-[#22222c] border border-white/10 rounded-full py-3.5 flex items-center justify-center gap-2 text-xs font-bold text-white btn-press transition shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF
          </button>
          <button
            onClick={handleShareReceipt}
            className="flex-1 bg-white hover:bg-gray-100 text-black rounded-full py-3.5 flex items-center justify-center gap-2 text-xs font-bold btn-press transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            Share Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
