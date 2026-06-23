import { Link } from "react-router-dom";
import { dashboardData, transactions } from "../data";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen text-white pb-20 bg-gradient-to-b from-[#0f3e34] via-black to-black" style={{ backgroundSize: '100% 50%', backgroundRepeat: 'no-repeat', backgroundColor: 'black' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <Link to="/profile" className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center">
          <img src="/k.png" alt="Logo" className="w-5 h-5 object-contain" />
        </Link>
        <button className="bg-[#1a1a1a] rounded-full px-4 py-1.5 flex items-center gap-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          RECOMPENSAS
        </button>
        <Link to="/notifications" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 hover:bg-gray-900 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </Link>
      </div>

      {/* Balance Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="flex flex-col items-center mt-12 mb-12">
          <div className="flex items-center gap-2 text-gray-400 text-[13px] tracking-wide font-medium mb-2">
            SALDO TOTAL
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-5xl font-light mb-6 tracking-tight">
            {dashboardData.balance}
          </div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <Link to="/receive" className="bg-[#111111] rounded-[20px] p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:bg-[#1a1a1a] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
            <span className="text-[13px] font-medium">Recibir</span>
          </Link>
          <button className="bg-[#111111] rounded-[20px] p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:bg-[#1a1a1a] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            <span className="text-[13px] font-medium">Pagar</span>
          </button>
          <button className="bg-[#111111] rounded-[20px] p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:bg-[#1a1a1a] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
            <span className="text-[13px] font-medium">Escanear</span>
          </button>
          <button className="bg-[#111111] rounded-[20px] p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:bg-[#1a1a1a] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span className="text-[13px] font-medium">Referir</span>
          </button>
        </div>

        {/* Matchday Card */}
        <div className="bg-[#111111] rounded-[24px] p-5 mb-6">
          <h3 className="font-bold text-[15px] mb-4">Matchday</h3>
          <div className="flex items-start justify-between">
            {/* Left side */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-white border border-gray-200">
                    {/* EN flag approx */}
                    <svg viewBox="0 0 60 40" className="w-full h-full object-cover"><path fill="#FFF" d="M0 0h60v40H0z" /><path fill="#C8102E" d="M26 0h8v40h-8zM0 16h60v8H0z" /></svg>
                  </div>
                  <span className="text-[13px] font-medium">ENG</span>
                </div>
                <span className="text-gray-500 font-medium text-[11px]">VS</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-white border border-gray-200">
                    {/* GH flag approx */}
                    <svg viewBox="0 0 60 40" className="w-full h-full object-cover"><path fill="#CE1126" d="M0 0h60v13.3H0z" /><path fill="#FCD116" d="M0 13.3h60v13.4H0z" /><path fill="#006B3F" d="M0 26.7h60V40H0z" /><path fill="#000" d="m30 14.5 2.5 7.6h8l-6.4 4.7 2.4 7.5-6.5-4.7-6.5 4.7 2.4-7.5-6.4-4.7h8z" /></svg>
                  </div>
                  <span className="text-[13px] font-medium">GHA</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-400 leading-relaxed">
                Patada inicial 23 jun en 9:00p. m. <br />
                Las selecciones se cierran en <span className="text-[#eadd97]">12h 25m</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-5">
              <div className="flex flex-col items-end gap-1.5 mt-1">
                <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-1/10 h-full bg-[#00e57a]"></div>
                </div>
                <span className="text-[10px] text-gray-400">Progreso 1/10</span>
              </div>
              <button className="bg-[#1a1a1a] hover:bg-[#222222] transition px-5 py-2 rounded-full text-[13px] font-medium border border-gray-800">
                Elegir
              </button>
            </div>
          </div>
        </div>

        {/* KAST Card Promo */}
        <div className="kast-gradient-card rounded-[24px] p-5 border border-gray-800">
          <div className="border border-[#1d856a] text-[#1d856a] text-xs font-medium px-3 py-1.5 rounded-md inline-block mb-4">
            Obtener tarjeta
          </div>
          <h3 className="font-bold text-[17px] mb-1">Card</h3>
          <p className="text-gray-400 text-[13px]">Gasta para ganar.</p>
        </div>

        {/* Leaderboard Banner */}
        <div className="mb-6 mt-6 w-full flex justify-center rounded-[24px] overflow-hidden">
          <img src="/awards.png" alt="Award" className="w-full h-auto object-cover" />
        </div>

        {/* Latest Transactions */}
        <div className="bg-[#111111] rounded-[24px] p-5 mb-8">
          <div className="flex flex-col gap-6 mb-6">
            {transactions.slice(0, 3).map((t) => (
              <Link to={`/transaction/${t.id}`} key={t.id} className="flex justify-between items-center group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#222] transition">
                    {t.type === "out" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-medium leading-tight">{t.title}</span>
                    <span className="text-[13px] text-gray-400 leading-tight">{t.toFrom}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className={`text-[15px] font-medium leading-tight ${t.type === "in" ? "text-[#00e57a]" : "text-white"}`}>
                    {t.amount}
                  </span>
                  <span className="text-[13px] text-gray-400 leading-tight">{t.dateTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/transactions" className="flex items-center justify-center gap-2 text-[15px] font-medium hover:text-gray-300 transition w-full py-2">
            Ver todo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-black border-t border-gray-900 flex items-center justify-between px-6 py-3 pb-6">
        <Link to="/" className="flex flex-col items-center gap-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 0 1-1.06 1.06L12 5.432 3.53 13.891a.75.75 0 1 1-1.06-1.06l8.99-8.99Z" />
            <path d="M12 5.432 3.53 13.891a.75.75 0 0 1-1.06-1.06l8.99-8.99a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 0 1-1.06 1.06L12 5.432Z" />
            <path d="M5.25 12.75v6a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-6" />
          </svg>
          <span className="text-[11px] font-medium">Inicio</span>
        </Link>
        <Link to="/transactions" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
          <span className="text-[11px] font-medium">Cuentas</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
          <span className="text-[11px] font-medium">Pagar</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          <span className="text-[11px] font-medium">Tarjetas</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
          </svg>
          <span className="text-[11px] font-medium">Poder</span>
        </button>
      </div>
    </div>
  );
}
