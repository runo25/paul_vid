import { useNavigate } from "react-router-dom";
import { bankData } from "../data";

export default function ReceiveUSD() {
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const Field = ({ label, value }) => (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex flex-col gap-1 pr-4">
        <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">{label}</span>
        <span className="text-[15px] font-medium leading-snug">{value}</span>
      </div>
      <button onClick={() => handleCopy(value)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="flex items-center px-4 py-4 sticky top-0 bg-black z-10 border-b border-gray-900/50">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div className="flex items-center gap-3 ml-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 60 40" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
              <path fill="#bd3d44" d="M0 0h60v40H0z"/><path fill="#fff" d="M0 3.1h60v3.1H0zM0 9.2h60v3.1H0zM0 15.4h60v3.1H0zM0 21.5h60v3.1H0zM0 27.7h60v3.1H0zM0 33.8h60v3.1H0z"/><path fill="#192f5d" d="M0 0h25v21.5H0z"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(1,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(7,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(13,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(19,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(25,0)"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] leading-tight">Reciba USD solo de EE. UU.</span>
            <span className="text-[13px] text-gray-400">Comparta los datos de su banco local en EE. UU.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 pt-6 gap-2">
        <Field label="NOMBRE DEL TITULAR DE LA CUENTA" value={bankData.accountName} />
        <Field label="NÚMERO DE CUENTA" value={bankData.accountNumber} />
        <Field label="NÚMERO DE RUTA" value={bankData.routingNumber} />
        <Field label="DIRECCIÓN DEL TITULAR DE LA CUENTA" value={bankData.address} />
        <Field label="NOMBRE DEL BANCO" value={bankData.bankName} />
        <Field label="DIRECCIÓN DEL BANCO" value={bankData.bankAddress} />
        <Field label="PAÍS DEL BANCO" value={bankData.country} />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 px-4 mt-8">
        <button className="flex-1 bg-[#1a1a1a] hover:bg-[#222222] transition rounded-full py-4 flex items-center justify-center gap-2 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
          </svg>
          Copiar
        </button>
        <button className="flex-1 bg-white text-black hover:bg-gray-200 transition rounded-full py-4 flex items-center justify-center gap-2 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          Compartir
        </button>
      </div>

      {/* Alert */}
      <div className="px-4 mt-8">
        <div className="border border-gray-800 rounded-2xl p-5 bg-[#0a0a0a]">
          <div className="flex items-center gap-2 mb-3 text-white font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
            </svg>
            IMPORTANTE
          </div>
          <ul className="list-disc list-outside ml-4 text-gray-400 text-sm flex flex-col gap-2">
            <li>Envía solo USD a través de ACH o Fedwire</li>
            <li>El tiempo de procesamiento es de 1 a 3 días hábiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
