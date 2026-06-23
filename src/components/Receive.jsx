import { Link, useNavigate } from "react-router-dom";

export default function Receive() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center px-4 py-4 sticky top-0 bg-black z-10">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition absolute">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-lg font-medium w-full text-center">Recibir dinero</h1>
      </div>

      <div className="flex flex-col px-4 pt-4 pb-10">
        
        {/* KAST */}
        <h3 className="text-gray-300 text-sm mb-3 ml-1 tracking-wide">K</h3>
        <div className="bg-[#111111] rounded-2xl flex flex-col mb-8 overflow-hidden">
          <button className="flex items-center justify-between p-4 active:bg-gray-900 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center">
                <img src="/k.png" alt="K" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-[16px]">Usuario de K</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* TRANSFERENCIA BANCARIA */}
        <h3 className="text-gray-300 text-sm mb-3 ml-1 tracking-wide uppercase">Transferencia Bancaria</h3>
        <div className="bg-[#111111] rounded-2xl flex flex-col mb-8 overflow-hidden">
          <button className="flex items-center justify-between p-4 border-b border-gray-800/50 active:bg-gray-900 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-700 bg-[#1a1a1a]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <span className="text-[16px]">Transferencia bancaria ARS</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          <Link to="/receive/usd" className="flex items-center justify-between p-4 border-b border-gray-800/50 active:bg-gray-900 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <svg viewBox="0 0 60 40" className="w-full h-full object-cover">
                  <path fill="#bd3d44" d="M0 0h60v40H0z"/><path fill="#fff" d="M0 3.1h60v3.1H0zM0 9.2h60v3.1H0zM0 15.4h60v3.1H0zM0 21.5h60v3.1H0zM0 27.7h60v3.1H0zM0 33.8h60v3.1H0z"/><path fill="#192f5d" d="M0 0h25v21.5H0z"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(1,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(7,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(13,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(19,0)"/><path fill="#fff" d="M1.5 2.1l1 3 3.1-.1-2.5 1.8 1 3-2.6-1.9-2.5 1.9 1-3-2.6-1.8 3.1.1z" transform="scale(0.8) translate(25,0)"/>
                </svg>
              </div>
              <span className="text-[16px]">Transferencia Bancaria</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
          
          <button className="flex items-center justify-between p-4 active:bg-gray-900 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#003399] flex items-center justify-center">
                <span className="text-yellow-400 font-serif text-sm relative -top-0.5" style={{textShadow: "0 0 2px rgba(255,255,255,0.5)"}}>★</span>
              </div>
              <span className="text-[16px]">Transferencia bancaria de la UE</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* RECIBIR POR DIRECCIÓN */}
        <h3 className="text-gray-300 text-sm mb-3 ml-1 tracking-wide uppercase">Recibir por dirección</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-[#111111] rounded-2xl p-4 flex flex-col justify-between active:bg-gray-900 transition aspect-[5/3]">
            <div className="flex justify-between items-center w-full">
              <span className="text-[15px]">Stablecoin</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="flex items-center -space-x-2 mt-auto">
              <div className="w-7 h-7 rounded-full bg-[#26a17b] flex items-center justify-center border-2 border-[#111111] z-10">
                <span className="text-white text-[10px] font-bold">₮</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#2775ca] flex items-center justify-center border-2 border-[#111111] z-0">
                <span className="text-white text-[10px] font-bold">$</span>
              </div>
            </div>
          </button>
          
          <button className="bg-[#111111] rounded-2xl p-4 flex flex-col justify-between active:bg-gray-900 transition aspect-[5/3]">
            <div className="flex justify-between items-center w-full">
              <span className="text-[15px]">Cripto</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="flex items-center -space-x-2 mt-auto">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center border-2 border-[#111111] z-20">
                <span className="text-white text-[10px] font-bold">≡</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#627eea] flex items-center justify-center border-2 border-[#111111] z-10">
                <span className="text-white text-[10px] font-bold">⬨</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#f7931a] flex items-center justify-center border-2 border-[#111111] z-0">
                <span className="text-white text-[10px] font-bold">₿</span>
              </div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
