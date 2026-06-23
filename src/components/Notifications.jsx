import { useNavigate, Link } from "react-router-dom";
import { notificationsData } from "../data";

export default function Notifications() {
  const navigate = useNavigate();

  const groupedNotifications = notificationsData.reduce((acc, curr) => {
    if (!acc[curr.section]) {
      acc[curr.section] = [];
    }
    acc[curr.section].push(curr);
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="flex items-center px-4 py-4 sticky top-0 bg-black z-10">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition absolute">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-medium w-full text-center">Notificaciones</h1>
      </div>

      <div className="px-4 py-2">
        {Object.entries(groupedNotifications).map(([section, items]) => (
          <div key={section} className="mb-8">
            <h2 className="text-gray-400 text-[13px] tracking-wider mb-6">{section}</h2>
            <div className="flex flex-col gap-6">
              {items.map((n) => (
                <Link to={`/notification/${n.id}`} key={n.id} className="flex gap-4 hover:bg-gray-900 -mx-4 px-4 py-2 rounded-xl transition">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1c] flex items-center justify-center flex-shrink-0">
                      {n.type === "out" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                      )}
                    </div>
                    {n.unread && (
                      <div className="absolute top-0 right-0 w-3 h-3 bg-[#00e57a] rounded-full border-[2.5px] border-black"></div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1 w-full mt-0.5">
                    <div className="flex justify-between items-start w-full">
                      <span className="text-[16px] font-medium text-white">{n.title}</span>
                      <span className="text-[12px] text-gray-400 whitespace-nowrap mt-1">{n.date}</span>
                    </div>
                    <p className="text-[14px] text-gray-400 leading-snug pr-2">
                      {n.message}
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
