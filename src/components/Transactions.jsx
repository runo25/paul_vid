import { useNavigate, Link } from "react-router-dom";
import { transactions } from "../data";

export default function Transactions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-black z-10">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-lg font-medium">Transacción</h1>
        <button className="text-white hover:bg-gray-900 rounded-full p-1 -mr-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-2">
        {/* Chip */}
        <div className="inline-flex items-center gap-2 bg-[#f2f2f2] text-black px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          Cuenta virtual en USD
          <button className="text-gray-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        {/* Month Header */}
        <div className="text-gray-400 text-xs tracking-widest mb-4">JUNIO</div>

        {/* Transaction List */}
        <div className="flex flex-col gap-6">
          {transactions.map((t) => (
            <Link to={`/transaction/${t.id}`} key={t.id} className="flex justify-between items-center hover:bg-gray-900 -mx-4 px-4 py-2 rounded-xl transition">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center flex-shrink-0">
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
                <span className={`text-[15px] font-medium leading-tight ${t.status === "processing" ? "text-[#fcd116]" : t.type === "in" ? "text-[#00e57a]" : "text-white"}`}>
                  {t.amount}
                </span>
                <span className="text-[13px] text-gray-400 leading-tight">{t.dateTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
