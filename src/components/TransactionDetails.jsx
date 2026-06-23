import { useParams, useNavigate } from "react-router-dom";
import { transactions, bankData } from "../data";

export default function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find transaction or default to the one from screenshot if not found
  const transaction = transactions.find(t => t.id === id) || {
    amount: "+ 1,140.88 USD",
    type: "in",
    toFrom: "De TORB...HLIN",
    dateTime: "22 jun 2026 - 10:27 a. m."
  };

  const isIncoming = transaction.type === "in" || transaction.amount.startsWith("+");
  
  // Clean up "De " prefix for the 'DE' field if it exists
  const deValue = transaction.toFrom.startsWith("De ") || transaction.toFrom.startsWith("A ")
    ? transaction.toFrom.substring(2).trim()
    : transaction.toFrom;

  // Add 2026 to date if missing (to match screenshot)
  let dateStr = transaction.dateTime;
  if (!dateStr.includes("2026")) {
    dateStr = dateStr.replace(" - ", " 2026 - ");
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-medium">Detalles de la transacción</h1>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center mt-6 mb-10 px-4">
        <h2 className={`text-[34px] font-normal mb-2 tracking-tight ${transaction.status === "processing" ? "text-[#fcd116]" : "text-white"}`}>
          {transaction.amount}
        </h2>
        <span className={`text-sm ${transaction.status === "processing" ? "text-[#fcd116]" : "text-gray-400"}`}>
          {transaction.status === "processing" ? "En proceso" : isIncoming ? "Recibido" : "Enviado"}
        </span>
      </div>

      <div className="px-4">
        <div className="bg-[#111111] rounded-2xl p-5 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[11px] font-medium tracking-wider">DE</span>
            <span className="text-[15px]">{deValue}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[11px] font-medium tracking-wider">A</span>
            <span className="text-[15px]">Spending account</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[11px] font-medium tracking-wider">MENSAJE</span>
            <span className="text-[15px]">ALBERTO JOAQUIN A...</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[11px] font-medium tracking-wider">HORA DE LA TRANSACCI...</span>
            <span className="text-[15px]">{dateStr}</span>
          </div>
        </div>
      </div>

      {/* Bottom Share Button */}
      <div className="fixed bottom-8 left-0 right-0 px-4">
        <button className="w-full bg-[#f2f2fb] text-black hover:bg-white transition rounded-full py-4 flex items-center justify-center gap-2 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          Compartir
        </button>
      </div>
    </div>
  );
}
