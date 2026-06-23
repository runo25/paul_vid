import { useParams, useNavigate } from "react-router-dom";
import { notificationsData } from "../data";

export default function NotificationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find notification or use a default
  const notification = notificationsData.find(n => n.id === id) || notificationsData[0];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-900/50 mb-6">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-medium">Notificación</h1>
        <div className="w-6"></div> {/* Empty div for centering */}
      </div>

      <div className="flex flex-col items-center px-6 text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
          {notification.type === "out" ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          )}
        </div>
        <h2 className="text-[22px] font-medium mb-2 leading-tight">
          {notification.title}
        </h2>
        <span className="text-gray-400 text-sm">
          {notification.date}
        </span>
      </div>

      <div className="px-4">
        <div className="bg-[#111111] rounded-2xl p-6 flex flex-col gap-4">
          <p className="text-[16px] text-gray-200 leading-relaxed">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
  );
}
