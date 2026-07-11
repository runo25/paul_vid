import { useNavigate } from "react-router-dom";

export default function WorldCupPackReply() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white pb-36 font-sans selection:bg-blue-500 selection:text-white">
      {/* Top App Bar */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-[#121212] border-b border-gray-800/40 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-300 hover:text-white transition p-1 -ml-1 rounded-full hover:bg-gray-800/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-5 text-gray-300">
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-amber-200"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Subject Line */}
      <div className="px-4 pt-5 pb-3 flex items-start justify-between">
        <div className="flex flex-wrap items-center gap-2.5 pr-2">
          <h1 className="text-[22px] font-normal text-white tracking-tight">
            Re: Cancelación de cuenta
          </h1>
          <span className="bg-[#25304b] text-[#8ab4f8] text-[11px] px-2 py-0.5 rounded font-medium tracking-wide">
            Enviados
          </span>
        </div>
        <button className="text-gray-400 hover:text-yellow-400 transition pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </button>
      </div>

      {/* Sender Row */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#1e8e3e] text-white font-medium text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[15px] text-white">
                Alberto
              </span>
              <span className="text-xs text-gray-400">hace 7 días</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <span>para Kast</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
          <button className="hover:text-white transition p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Email Body Container */}
      <div className="mx-3.5 my-3 rounded-[24px] bg-[#181818] border border-gray-800/80 p-5 shadow-lg overflow-hidden">
        {/* Reply Text Content */}
        <div className="text-[15px] text-gray-200 leading-relaxed space-y-4 font-light">
          <p>Para el Soporte Ejecutivo y de Cumplimiento de KAST,</p>
          <p>
            Mi cuenta fue cerrada recientemente y una transferencia bancaria
            entrante de $4,500 de la entidad comercial Two Step Land Operating
            Expenses fue puesta en retención bajo un periodo de reembolso de 60
            días.
          </p>
          <p>
            El remitente original ha iniciado oficialmente una solicitud formal
            de devolución de mensaje del servicio Fedwire a través de su
            institución financiera para recuperar estos fondos comerciales.
          </p>
          <p>
            El número de referencia/seguimiento oficial de la devolución de la
            transferencia bancaria es: 1165173.
          </p>
          <p>
            Escribo para dejar constancia formal de que renuncio a cualquier
            reclamo sobre esta transferencia de $4,500. Por la presente, doy a
            KAST y Lead Bank mi autorización y consentimiento explícitos e
            incondicionales para ACEPTAR la devolución de la transferencia
            bancaria entrante y retornar el 100% de los fondos al remitente
            original, Two Step Land Operating Expenses, de inmediato.
          </p>
          <p>
            Dado que tanto el remitente comercial como yo estamos totalmente de
            acuerdo en revertir esta transacción, por favor procesen esta
            devolución manual de transferencia hoy mismo para que este caso
            pueda ser resuelto y cerrado.
          </p>
          <p>Gracias,</p>
          <p>
            Alberto Joaquin Amarillo
            <br />
            cuentakast38@gmail.com / +541178291323
          </p>
        </div>

        {/* Quoted previous message */}
        <div className="mt-8 pt-5 border-t border-gray-800/60 text-xs text-gray-400 space-y-3">
          <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>El mar, 30 de jun de 2026 a las 14:22, Kast escribió:</span>
          </div>
          <div className="border-l-2 border-gray-700 pl-3.5 space-y-2.5 text-gray-400 font-light text-[13px]">
            <p>hola Alberto</p>
            <p>
              Esperamos que se encuentre bien y queremos agradecerle
              sinceramente por utilizar Kast. Significa mucho para nosotros que
              nos haya considerado para sus necesidades financieras.
            </p>
            <p>
              Tras una revisión reciente, lamentamos comunicarle que cerraremos
              su cuenta y reembolsaremos todos los fondos depositados en ella a
              las cuentas desde las que fue recargada. Los reembolsos se
              realizarán en los próximos 60 días hábiles y dependerán de la
              rapidez con la que el banco procese los pagos.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Pills (Fixed above bottom nav) */}
      <div className="fixed bottom-[58px] left-0 right-0 px-4 py-2.5 bg-[#121212] flex items-center gap-3 z-30 border-t border-white/[0.03]">
        <button className="flex-1 bg-[#2a2d3e] hover:bg-[#34384e] active:scale-95 transition text-gray-200 py-3 px-4 rounded-full flex items-center justify-center gap-2.5 text-sm font-medium border border-white/5 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Responder
        </button>
        <button className="flex-1 bg-[#2a2d3e] hover:bg-[#34384e] active:scale-95 transition text-gray-200 py-3 px-4 rounded-full flex items-center justify-center gap-2.5 text-sm font-medium border border-white/5 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
          Reenviar
        </button>
        <button className="bg-[#2a2d3e] hover:bg-[#34384e] active:scale-95 transition text-gray-200 p-3.5 rounded-full flex items-center justify-center border border-white/5 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </button>
      </div>

      {/* Gmail Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1e1f25] border-t border-gray-800/80 flex items-center justify-around py-2.5 z-30">
        <div className="relative flex flex-col items-center">
          <div className="bg-[#c2e7ff] text-[#001d35] px-5 py-1 rounded-full flex items-center justify-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#b3261e] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full border-2 border-[#1e1f25]">
              5
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
