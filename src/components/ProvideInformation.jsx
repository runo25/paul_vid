import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notificationsData } from "../data";

export default function ProvideInformation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    relationship: "",
    explanation: "",
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API upload
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Add new notification to the top
      const newNotification = {
        id: "verification_" + Date.now(),
        type: "in",
        title: "Verificación en proceso",
        date: "Justo ahora",
        message: "Hemos recibido su documentación y respuestas. Nuestro equipo de cumplimiento está revisando su caso y le informaremos a la brevedad cuando sus fondos hayan sido liberados.",
        unread: true,
        section: "HOY"
      };
      
      // We mutate the array to persist it during the session
      notificationsData.unshift(newNotification);

      // Navigate back after animation
      setTimeout(() => {
        navigate("/notifications");
      }, 2500);
      
    }, 2000);
  };

  if (success) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white items-center justify-center p-6 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 rounded-full bg-[#00e57a]/20 flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#00e57a] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Información enviada</h2>
        <p className="text-gray-400">Gracias por proporcionar la documentación. Estamos revisando su caso.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-900/50 mb-6 sticky top-0 bg-black/90 backdrop-blur-sm z-10">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-medium">Verificación de Cumplimiento</h1>
        <div className="w-6"></div>
      </div>

      <div className="px-6 mb-6">
        <h2 className="text-2xl font-medium mb-3">Información requerida</h2>
        <p className="text-gray-400 text-[14px] leading-relaxed">
          Por favor, complete el siguiente formulario para liberar sus fondos de 4,500.00 USD.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 flex flex-col gap-6 flex-grow pb-24">
        {/* Relationship */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-gray-300 ml-1">
            Relación con el remitente
          </label>
          <textarea 
            required
            placeholder="Ej. Socio de negocios, familiar, cliente..."
            className="bg-[#111111] rounded-2xl p-4 text-[15px] outline-none text-white placeholder-gray-600 focus:ring-1 focus:ring-gray-700 resize-none min-h-[100px]"
            value={formData.relationship}
            onChange={(e) => setFormData({...formData, relationship: e.target.value})}
          />
        </div>

        {/* Explanation */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-gray-300 ml-1">
            Detalle del concepto "Gastos de operación"
          </label>
          <textarea 
            required
            placeholder="Describa el motivo exacto de la transferencia..."
            className="bg-[#111111] rounded-2xl p-4 text-[15px] outline-none text-white placeholder-gray-600 focus:ring-1 focus:ring-gray-700 resize-none min-h-[120px]"
            value={formData.explanation}
            onChange={(e) => setFormData({...formData, explanation: e.target.value})}
          />
        </div>

        {/* File Upload */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-[13px] font-medium text-gray-300 ml-1">
            Documentación respaldatoria (Facturas, recibos)
          </label>
          <div className="bg-[#111111] rounded-2xl p-6 border border-dashed border-gray-700 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
              required
            />
            {formData.file ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#00e57a]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span className="text-sm font-medium text-[#00e57a] text-center px-4 truncate w-full">
                  {formData.file.name}
                </span>
                <span className="text-xs text-gray-500">Toque para cambiar de archivo</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <span className="text-[14px] text-gray-400">Subir documento (PDF, JPG, PNG)</span>
              </>
            )}
          </div>
        </div>

        {/* Submit button fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-md border-t border-gray-900">
          <button 
            type="submit" 
            disabled={loading || !formData.relationship || !formData.explanation || !formData.file}
            className={`w-full py-4 rounded-full font-medium text-[15px] transition flex items-center justify-center gap-2
              ${loading || !formData.relationship || !formData.explanation || !formData.file 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-gray-200'}`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando información...
              </>
            ) : "Enviar documentación"}
          </button>
        </div>
      </form>
    </div>
  );
}
