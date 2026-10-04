import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { notificationsData } from "../data";

export default function NotificationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const notification = notificationsData.find((n) => n.id === id) || notificationsData[0];

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-10">
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
        <h1 className="text-[17px] font-bold tracking-tight">Notification Details</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-24 scrollbar-hide">
        {/* Header visual */}
        <div className="flex flex-col items-center px-4 text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#18181f] border border-white/10 flex items-center justify-center mb-4 shadow-md">
            {notification.type === "out" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            ) : notification.id === "account_cancellation" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-rose-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            ) : notification.id === "3" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-amber-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-7 h-7 text-[#00e57a]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
              </svg>
            )}
          </div>
          <h2 className="text-xl font-bold mb-1 leading-snug">{notification.title}</h2>
          <span className="text-gray-500 text-xs font-medium">{notification.date}</span>
        </div>

        {/* Message Card */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 shadow-sm">
          <div className="text-xs text-gray-300 leading-relaxed flex flex-col gap-3 font-normal">
            {notification.message.split("\n").map((line, idx) => {
              if (line.startsWith("- ")) {
                return (
                  <li key={idx} className="ml-4 list-disc text-gray-200">
                    {line.substring(2)}
                  </li>
                );
              }
              if (line.trim() === "") return null;
              return <p key={idx}>{line}</p>;
            })}
          </div>
        </div>
      </div>

      {/* Action Button for Compliance Review */}
      {notification.id === "3" && (
        <div className="fixed bottom-6 left-0 right-0 px-5 flex justify-center pointer-events-none">
          <button
            onClick={() => navigate("/provide-information")}
            className="w-full max-w-[400px] pointer-events-auto py-4 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm rounded-full btn-press transition shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2"
          >
            Submit Required Information →
          </button>
        </div>
      )}
    </div>
  );
}
