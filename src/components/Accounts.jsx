import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bankData, dashboardData } from "../data";
import { FlagUS, FlagEU, FlagUK, UsdcIcon, UsdtIcon, SolIcon, EthIcon, BtcIcon } from "./Vectors";
import BottomNav from "./BottomNav";

export default function Accounts() {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleDownloadStatement = () => {
    showToast("Statement for September 2026 generated (PDF)");
  };

  return (
    <div className="app-screen text-white pb-24 bg-black">
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
        <h1 className="text-[18px] font-bold text-white tracking-tight">Accounts & Balances</h1>
        <button
          onClick={handleDownloadStatement}
          className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 btn-press flex items-center gap-1.5"
          title="Download Statement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Statement
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-5 scrollbar-hide">
        {/* Total Net Worth summary */}
        <div className="kast-gradient-card rounded-[24px] p-5 mb-6 border border-white/10 relative overflow-hidden">
          <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Net Portfolio Value</span>
          <div className="text-4xl font-extralight text-white font-display mt-1 mb-2">
            {dashboardData.balance}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            3 Fiat Accounts · 5 Crypto Wallets Active
          </div>
        </div>

        {/* Fiat Currency Accounts */}
        <h3 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 px-1">
          Fiat Banking Accounts
        </h3>

        <div className="flex flex-col gap-3 mb-6">
          {/* EUR SEPA Account - PRIMARY */}
          <div className="bg-[#111115] border border-emerald-500/30 rounded-[20px] p-4 flex items-center justify-between hover:border-emerald-500/50 transition shadow-sm">
            <div className="flex items-center gap-3.5">
              <FlagEU className="w-9 h-9" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-white">EUR SEPA Account</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">PRIMARY</span>
                </div>
                <span className="text-xs text-gray-400">Kast Europe ···0189</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[15px] font-semibold text-white font-display">{dashboardData.balance}</span>
              <button
                onClick={() => setSelectedAccount({
                  title: "EUR SEPA Account (Primary)",
                  holder: bankData.eurAccountName,
                  iban: bankData.eurIban,
                  bic: bankData.eurBic,
                  bank: bankData.eurBankName,
                  address: bankData.eurBankAddress
                })}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                View Details →
              </button>
            </div>
          </div>

          {/* USD Checking Account */}
          <div className="bg-[#111115] border border-white/[0.06] rounded-[20px] p-4 flex items-center justify-between hover:border-white/15 transition shadow-sm">
            <div className="flex items-center gap-3.5">
              <FlagUS className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">USD Checking</span>
                <span className="text-xs text-gray-400">{bankData.bankName} ···7073</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[15px] font-semibold text-white font-display">$0.00</span>
              <Link
                to="/receive/usd"
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                View Details →
              </Link>
            </div>
          </div>

          {/* GBP ClearBank Account */}
          <div className="bg-[#111115] border border-white/[0.06] rounded-[20px] p-4 flex items-center justify-between hover:border-white/15 transition shadow-sm">
            <div className="flex items-center gap-3.5">
              <FlagUK className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">GBP British Pound</span>
                <span className="text-xs text-gray-400">{bankData.ukBankName}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[15px] font-semibold text-white font-display">£0.00</span>
              <button
                onClick={() => setSelectedAccount({
                  title: "UK ClearBank Account",
                  holder: bankData.ukAccountName,
                  accountNumber: bankData.ukAccountNumber,
                  sortCode: bankData.ukSortCode,
                  iban: bankData.ukIban,
                  bank: bankData.ukBankName,
                  address: bankData.ukBankAddress
                })}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>

        {/* Crypto & Web3 Balances */}
        <h3 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 px-1">
          Crypto & Stablecoins
        </h3>

        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] divide-y divide-white/[0.04] overflow-hidden mb-6 shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UsdcIcon className="w-8 h-8" />
              <div>
                <div className="text-sm font-semibold text-white">USD Coin</div>
                <div className="text-xs text-gray-400">USDC · Multi-chain</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-display">0.00 USDC</div>
              <div className="text-xs text-gray-500">€0.00 EUR</div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UsdtIcon className="w-8 h-8" />
              <div>
                <div className="text-sm font-semibold text-white">Tether USD</div>
                <div className="text-xs text-gray-400">USDT · TRC20 / ERC20</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-display">0.00 USDT</div>
              <div className="text-xs text-gray-500">€0.00 EUR</div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SolIcon className="w-8 h-8" />
              <div>
                <div className="text-sm font-semibold text-white">Solana</div>
                <div className="text-xs text-gray-400">SOL</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-display">0.00 SOL</div>
              <div className="text-xs text-gray-500">€0.00 EUR</div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EthIcon className="w-8 h-8" />
              <div>
                <div className="text-sm font-semibold text-white">Ethereum</div>
                <div className="text-xs text-gray-400">ETH</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-display">0.00 ETH</div>
              <div className="text-xs text-gray-500">€0.00 EUR</div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BtcIcon className="w-8 h-8" />
              <div>
                <div className="text-sm font-semibold text-white">Bitcoin</div>
                <div className="text-xs text-gray-400">BTC</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-display">0.00 BTC</div>
              <div className="text-xs text-gray-500">€0.00 EUR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Details Modal */}
      {selectedAccount && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0 md:p-4">
          <div className="w-full max-w-[440px] bg-[#141418] border-t border-white/10 rounded-t-[28px] p-6 pb-8 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-white">{selectedAccount.title}</h3>
              <button
                onClick={() => setSelectedAccount(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-xs text-gray-400">Account Holder</span>
                <span className="font-semibold text-white">{selectedAccount.holder}</span>
              </div>
              {selectedAccount.iban && (
                <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-400">IBAN</span>
                  <span className="font-mono text-xs text-white">{selectedAccount.iban}</span>
                </div>
              )}
              {selectedAccount.bic && (
                <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-400">BIC / SWIFT</span>
                  <span className="font-mono text-xs text-white">{selectedAccount.bic}</span>
                </div>
              )}
              {selectedAccount.accountNumber && (
                <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Account Number</span>
                  <span className="font-mono text-xs text-white">{selectedAccount.accountNumber}</span>
                </div>
              )}
              {selectedAccount.sortCode && (
                <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Sort Code</span>
                  <span className="font-mono text-xs text-white">{selectedAccount.sortCode}</span>
                </div>
              )}
              <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-xs text-gray-400">Bank Name</span>
                <span className="text-xs text-white">{selectedAccount.bank}</span>
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(selectedAccount.iban || selectedAccount.accountNumber || "");
                showToast("Account number copied!");
                setSelectedAccount(null);
              }}
              className="w-full mt-6 py-3.5 bg-white text-black font-bold rounded-full btn-press"
            >
              Copy Details
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
