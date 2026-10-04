import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { transactions } from "../data";

export default function Transactions() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "usd" && t.account.includes("USD")) ||
      (filter === "card" && t.account.includes("Card")) ||
      (filter === "crypto" && t.account.includes("Solana"));

    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.toFrom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.amount.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Group by month
  const groupedByMonth = filteredTransactions.reduce((acc, curr) => {
    const monthKey = curr.month || "JUNE 2026";
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(curr);
    return acc;
  }, {});

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-8">
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
        <h1 className="text-[17px] font-bold tracking-tight">Activity & Transactions</h1>
        <button
          onClick={() => setFilter(filter === "all" ? "usd" : "all")}
          className="text-gray-300 hover:text-white rounded-full p-2 -mr-2 transition btn-press"
          title="Filter Transactions"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-3 scrollbar-hide">
        {/* Search bar */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-2xl p-2.5 px-3.5 mb-4 flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, reference, or amount..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-2">
          {[
            { id: "all", label: "All Activity" },
            { id: "usd", label: "Virtual USD Account" },
            { id: "card", label: "KAST Card" },
            { id: "crypto", label: "Crypto Transfers" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition btn-press ${
                filter === item.id
                  ? "bg-white text-black shadow"
                  : "bg-[#141419] border border-white/[0.08] text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Grouped Transaction Lists */}
        {Object.keys(groupedByMonth).length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-xs">
            No transactions match your search.
          </div>
        ) : (
          Object.entries(groupedByMonth).map(([month, items]) => (
            <div key={month} className="mb-6">
              <h3 className="text-gray-400 text-xs font-bold tracking-wider mb-2 px-1">
                {month}
              </h3>
              <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] divide-y divide-white/[0.04] overflow-hidden shadow-sm">
                {items.map((t) => (
                  <Link
                    to={`/transaction/${t.id}`}
                    key={t.id}
                    className="flex justify-between items-center p-4 hover:bg-white/[0.03] transition btn-press"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#18181f] border border-white/5 flex items-center justify-center flex-shrink-0">
                        {t.type === "out" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-5 h-5 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-5 h-5 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-semibold text-white leading-tight">{t.title}</span>
                        <span className="text-[12px] text-gray-400 leading-tight">{t.toFrom}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-0.5">
                      <span
                        className={`text-[14px] font-semibold leading-tight font-display ${
                          t.status === "processing"
                            ? "text-[#fcd116]"
                            : t.type === "in"
                            ? "text-[#00e57a]"
                            : "text-white"
                        }`}
                      >
                        {t.amount}
                      </span>
                      <span className="text-[11px] text-gray-500 leading-tight">{t.dateTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
