import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eurBankData } from "../data";

export default function ReceiveEUR() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");

  const handleCopy = (label, text) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copiado: ${label}`);
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const handleCopyAll = () => {
    const allDetails = `
Banco: ${eurBankData.bankName}
IBAN: ${eurBankData.accountNumber}
SWIFT/BIC: ${eurBankData.swift}
Beneficiario: ${eurBankData.beneficiaryName}
Dirección del Banco: ${eurBankData.bankAddress}
    `.trim();
    navigator.clipboard.writeText(allDetails);
    setToastMessage("Todos los datos copiados");
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const handleShare = () => {
    const allDetails = `
Detalles de Transferencia Bancaria (EUR):
Banco: ${eurBankData.bankName}
IBAN: ${eurBankData.accountNumber}
SWIFT/BIC: ${eurBankData.swift}
Beneficiario: ${eurBankData.beneficiaryName}
Dirección del Banco: ${eurBankData.bankAddress}
    `.trim();
    if (navigator.share) {
      navigator.share({
        title: 'Datos de cuenta EUR',
        text: allDetails,
      }).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(allDetails);
      setToastMessage("Datos copiados para compartir");
      setTimeout(() => {
        setToastMessage("");
      }, 2000);
    }
  };

  const Field = ({ label, value }) => (
    <div className="flex items-start justify-between py-3 border-b border-gray-900/40">
      <div className="flex flex-col gap-1.5 pr-4">
        <span className="text-gray-500 text-[10px] font-bold tracking-wider uppercase">{label}</span>
        <span className="text-[14px] font-medium leading-normal text-white break-all">{value}</span>
      </div>
      <button 
        onClick={() => handleCopy(label, value)} 
        className="p-2 hover:bg-gray-950 active:bg-gray-900 rounded-xl transition-colors flex-shrink-0 mt-2 text-gray-400 hover:text-white"
        aria-label={`Copiar ${label}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-8 font-sans relative">
      
      {/* Header */}
      <div className="flex flex-col px-4 pt-4 pb-2 bg-black z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="text-white hover:bg-gray-950 rounded-full p-2 -ml-2 transition-colors self-start mb-4"
          aria-label="Volver"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        
        <div className="flex items-center gap-3.5 mt-1">
          {/* EU Circle Flag */}
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#003399] flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="11" fill="#003399" />
              <g transform="translate(12,12)">
                <g id="star">
                  <polygon points="0,-1.2 0.35,-0.35 1.2,-0.35 0.52,0.18 0.78,0.98 0,0.45 -0.78,0.98 -0.52,0.18 -1.2,-0.35 -0.35,-0.35" fill="#FFCC00" />
                </g>
                <use href="#star" x="0" y="-5.5" />
                <use href="#star" x="2.75" y="-4.76" />
                <use href="#star" x="4.76" y="-2.75" />
                <use href="#star" x="5.5" y="0" />
                <use href="#star" x="4.76" y="2.75" />
                <use href="#star" x="2.75" y="4.76" />
                <use href="#star" x="0" y="5.5" />
                <use href="#star" x="-2.75" y="4.76" />
                <use href="#star" x="-4.76" y="2.75" />
                <use href="#star" x="-5.5" y="0" />
                <use href="#star" x="-4.76" y="-2.75" />
                <use href="#star" x="-2.75" y="-4.76" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[17px] font-semibold leading-snug">Recibir euros</h1>
            <span className="text-[13px] text-gray-400">Desde cualquier lugar de Europa</span>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col px-4 pt-4 gap-1">
        <Field label="Nombre del banco" value={eurBankData.bankName} />
        <Field label="Número de cuenta" value={eurBankData.accountNumber} />
        <Field label="SWIFT/BIC" value={eurBankData.swift} />
        <Field label="Nombre del beneficiario" value={eurBankData.beneficiaryName} />
        <Field label="Dirección del banco" value={eurBankData.bankAddress} />
      </div>

      {/* Buttons */}
      <div className="flex gap-3.5 px-4 mt-6">
        <button 
          onClick={handleCopyAll}
          className="flex-1 bg-[#eaebee] hover:bg-[#d8dadf] text-black transition-colors rounded-full py-3.5 flex items-center justify-center gap-2 font-semibold text-[15px]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copiar
        </button>
        <button 
          onClick={handleShare}
          className="flex-1 bg-[#eaebee] hover:bg-[#d8dadf] text-black transition-colors rounded-full py-3.5 flex items-center justify-center gap-2 font-semibold text-[15px]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Compartir
        </button>
      </div>

      {/* Warning Box */}
      <div className="px-4 mt-7">
        <div className="border border-gray-900 rounded-2xl p-4 bg-[#0a0a0a]">
          <div className="flex items-center gap-2 mb-3 text-white font-semibold text-xs tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-amber-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
            </svg>
            Importante
          </div>
          <ul className="list-disc list-outside ml-4 text-gray-400 text-[13px] flex flex-col gap-2.5 leading-relaxed">
            <li>Solo envíe euros a través de SEPA.</li>
            <li>El tiempo de procesamiento estimado es de 1 día hábil.</li>
            <li>Depósito mínimo de 1 euro y sin límite máximo.</li>
          </ul>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-lg border border-gray-800 flex items-center gap-2 animate-fade-in z-50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-green-400">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
