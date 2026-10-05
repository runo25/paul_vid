import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { notificationsData } from "../data";

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([...notificationsData]);

  useEffect(() => {
    const handleUpdate = () => {
      setNotifications([...notificationsData]);
    };
    window.addEventListener("kast_notifications_updated", handleUpdate);
    return () => window.removeEventListener("kast_notifications_updated", handleUpdate);
  }, []);

  const handleMarkAllRead = () => {
    const updated = notifications.map((n) => ({ ...n, unread: false }));
    setNotifications(updated);
    notificationsData.forEach((n) => { n.unread = false; });
  };

  const groupedNotifications = notifications.reduce((acc, curr) => {
    const sec = curr.section || "TODAY";
    if (!acc[sec]) {
      acc[sec] = [];
    }
    acc[sec].push(curr);
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
        <h1 className="text-[17px] font-bold tracking-tight">Notifications</h1>
        <button
          onClick={handleMarkAllRead}
          className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition btn-press"
        >
          Mark Read
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-3 scrollbar-hide">
        {Object.entries(groupedNotifications).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h2 className="text-gray-400 text-xs font-bold tracking-wider mb-3 px-1 uppercase">
              {section}
            </h2>
            <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] divide-y divide-white/[0.04] overflow-hidden shadow-sm">
              {items.map((n) => (
                <Link
                  to={`/notification/${n.id}`}
                  key={n.id}
                  className="flex gap-3.5 p-4 hover:bg-white/[0.03] transition btn-press group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-[#18181f] border border-white/5 flex items-center justify-center">
                      {n.type === "out" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5 text-gray-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      ) : n.id === "account_cancellation" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5 text-rose-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                      ) : n.id === "3" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5 text-amber-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5 text-gray-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                      )}
                    </div>
                    {n.unread && (
                      <div className="absolute top-0 right-0 w-3 h-3 bg-[#00e57a] rounded-full border-2 border-black" />
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5 w-full">
                    <div className="flex justify-between items-start w-full">
                      <span className="text-[14px] font-semibold text-white group-hover:text-emerald-400 transition">{n.title}</span>
                      <span className="text-[11px] text-gray-500 whitespace-nowrap ml-2">{n.date}</span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {n.message.replace(/\n|- /g, " ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
