import { useNavigate } from "react-router-dom";
import { profileData } from "../data";

export default function PersonalData() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-black z-10">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-gray-900 rounded-full p-1 -ml-1 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-lg font-medium">Datos personales</h1>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col px-4 pt-6 gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-gray-500 text-xs font-bold tracking-wider">NOMBRE</span>
          <span className="text-[17px]">{profileData.fullName}</span>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <span className="text-gray-500 text-xs font-bold tracking-wider">APELLIDO</span>
          <span className="text-[17px]">{profileData.lastName}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-gray-500 text-xs font-bold tracking-wider">FECHA DE NACIMIENTO</span>
          <span className="text-[17px]">{profileData.dob}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-gray-500 text-xs font-bold tracking-wider">CORREO ELECTRÓNICO</span>
          <span className="text-[17px]">{profileData.email}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-gray-500 text-xs font-bold tracking-wider">NÚMERO DE TELÉFONO</span>
          <span className="text-[17px]">{profileData.phone}</span>
        </div>
      </div>
    </div>
  );
}
