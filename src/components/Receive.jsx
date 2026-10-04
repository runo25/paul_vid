import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KastLogo, FlagUS, FlagEU, FlagUK, UsdtIcon, UsdcIcon, SolIcon, EthIcon, BtcIcon, PrecisionQrSvg } from "./Vectors";

export default function Receive() {
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col">
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
      <div className="flex items-center px-5 py-4 border-b border-white/[0.06] sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press absolute"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-bold w-full text-center tracking-tight">Receive Money</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-10 scrollbar-hide">
        {/* KAST User Section */}
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
          KAST Peer-to-Peer
        </h3>
        <div className="bg-[#111115] border border-white/[0.06] rounded-[20px] mb-6 overflow-hidden shadow-sm">
          <Link
            to="/scan"
            className="flex items-center justify-between p-4 hover:bg-white/[0.04] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <KastLogo className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">KAST Tag & QR</span>
                <span className="text-xs text-gray-400">Receive instantly with @username</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* BANK TRANSFERS */}
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
          Bank Wire & Clearing Transfers
        </h3>
        <div className="bg-[#111115] border border-white/[0.06] rounded-[20px] divide-y divide-white/[0.04] mb-6 overflow-hidden shadow-sm">
          {/* USD Bank Transfer */}
          <Link
            to="/receive/usd"
            className="flex items-center justify-between p-4 hover:bg-white/[0.04] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <FlagUS className="w-8 h-8" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-white">USD Bank Transfer</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">ACH & WIRE</span>
                </div>
                <span className="text-xs text-gray-400">Lead Bank in the USA</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* EU Bank Transfer */}
          <button
            onClick={() => setSelectedCrypto({
              name: "EUR SEPA Transfer",
              symbol: "EUR",
              address: "FR7630006000011234567890189",
              network: "SEPA Network (Instant)",
              bank: "Kast Europe / BNP Paribas Partner"
            })}
            className="flex items-center justify-between p-4 w-full text-left hover:bg-white/[0.04] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <FlagEU className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">EUR SEPA Transfer</span>
                <span className="text-xs text-gray-400">Instant Euro transfer via IBAN</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* UK ClearBank Transfer */}
          <button
            onClick={() => setSelectedCrypto({
              name: "GBP Faster Payments",
              symbol: "GBP",
              address: "04288613",
              sortCode: "04-28-86",
              network: "UK Faster Payments / BACS",
              bank: "ClearBank Limited"
            })}
            className="flex items-center justify-between p-4 w-full text-left hover:bg-white/[0.04] transition btn-press"
          >
            <div className="flex items-center gap-3.5">
              <FlagUK className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">GBP ClearBank Transfer</span>
                <span className="text-xs text-gray-400">Sort code & account number</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* RECEIVE BY WALLET ADDRESS */}
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
          Receive by Wallet Address
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Stablecoin card */}
          <button
            onClick={() => setSelectedCrypto({
              name: "USD Coin / Tether",
              symbol: "USDC / USDT",
              address: "As4QfX8V2yZ5Kj78fm9xLp1T2N4R7s3Qw8b1e",
              network: "Solana / ERC-20 / TRC-20",
              bank: "Decentralized Settlement"
            })}
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-4 flex flex-col justify-between hover:border-white/20 transition btn-press aspect-[5/3.5] shadow-sm text-left"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-[14px] font-semibold text-white">Stablecoins</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="flex items-center -space-x-2 mt-auto">
              <UsdtIcon className="w-7 h-7 border-2 border-[#111115] rounded-full z-10" />
              <UsdcIcon className="w-7 h-7 border-2 border-[#111115] rounded-full z-0" />
            </div>
          </button>

          {/* Crypto card */}
          <button
            onClick={() => setSelectedCrypto({
              name: "Solana / Ethereum / Bitcoin",
              symbol: "SOL / ETH / BTC",
              address: "9xLp1T2N4R7s3Qw8b1eAs4QfX8V2yZ5Kj78f",
              network: "Multi-Chain Deposit",
              bank: "Cold Storage Custody"
            })}
            className="bg-[#111115] border border-white/[0.06] rounded-[22px] p-4 flex flex-col justify-between hover:border-white/20 transition btn-press aspect-[5/3.5] shadow-sm text-left"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-[14px] font-semibold text-white">Crypto</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="flex items-center -space-x-2 mt-auto">
              <SolIcon className="w-7 h-7 border-2 border-[#111115] rounded-full z-20" />
              <EthIcon className="w-7 h-7 border-2 border-[#111115] rounded-full z-10" />
              <BtcIcon className="w-7 h-7 border-2 border-[#111115] rounded-full z-0" />
            </div>
          </button>
        </div>
      </div>

      {/* Crypto & Address Modal */}
      {selectedCrypto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141419] border-t border-white/10 rounded-t-[32px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">{selectedCrypto.name}</h3>
              <button
                onClick={() => setSelectedCrypto(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex justify-center my-3">
              <PrecisionQrSvg className="w-44 h-44" value={selectedCrypto.address} />
            </div>

            <div className="bg-black/60 rounded-2xl p-4 border border-white/5 space-y-2.5 text-xs mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Network</span>
                <span className="font-semibold text-emerald-400">{selectedCrypto.network}</span>
              </div>
              {selectedCrypto.sortCode && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sort Code</span>
                  <span className="font-mono text-white">{selectedCrypto.sortCode}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Address / Account</span>
                <span className="font-mono text-white truncate max-w-[200px]">{selectedCrypto.address}</span>
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(selectedCrypto.address);
                showToast("Address copied to clipboard!");
                setSelectedCrypto(null);
              }}
              className="w-full py-4 bg-white text-black font-bold text-sm rounded-full btn-press"
            >
              Copy Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
