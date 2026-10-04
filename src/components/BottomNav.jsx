import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    {
      to: "/",
      label: "Home",
      active: path === "/",
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? "0" : "1.8"} className="w-5 h-5">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 0 1-1.06 1.06L12 5.432 3.53 13.891a.75.75 0 1 1-1.06-1.06l8.99-8.99Z" />
          <path d="M12 5.432 3.53 13.891a.75.75 0 0 1-1.06-1.06l8.99-8.99a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 0 1-1.06 1.06L12 5.432Z" />
          <path d="M5.25 12.75v6a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-6" />
        </svg>
      )
    },
    {
      to: "/accounts",
      label: "Accounts",
      active: path === "/accounts",
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={active ? "2.2" : "1.8"} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      )
    },
    {
      to: "/pay",
      label: "Pay",
      active: path === "/pay",
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={active ? "2.4" : "2"} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      )
    },
    {
      to: "/cards",
      label: "Cards",
      active: path === "/cards",
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={active ? "2.2" : "1.8"} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      )
    },
    {
      to: "/power",
      label: "Power",
      active: path === "/power",
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={active ? "2.2" : "1.8"} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <nav className="w-full max-w-[440px] pointer-events-auto bg-[#0a0a0d]/90 backdrop-blur-xl border-t border-white/[0.08] flex items-center justify-between px-5 py-2.5 pb-6">
        {navItems.map((item) => {
          const isActive = item.active;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center gap-1 transition-all duration-200 btn-press px-3 py-1 rounded-xl ${
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                {item.icon(isActive)}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00e57a]" />
                )}
              </div>
              <span className={`text-[11px] font-medium tracking-tight ${isActive ? "text-white font-semibold" : "text-gray-400"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
