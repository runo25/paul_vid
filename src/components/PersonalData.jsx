import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileData } from "../data";

export default function PersonalData() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const handleSave = () => {
    setIsEditing(false);
    Object.assign(profileData, formData);
    showToast("Personal details updated successfully!");
  };

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-10">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-[17px] font-bold tracking-tight">Personal Information</h1>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="text-white hover:bg-white/10 rounded-full p-2 -mr-2 transition btn-press text-xs font-bold"
        >
          {isEditing ? (
            <span className="text-emerald-400">Save</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-6 scrollbar-hide">
        {/* Verification Status Banner */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">KYC Verified</div>
              <div className="text-[11px] text-gray-400">Level 2 Tier Limits Active</div>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400">ACTIVE</span>
        </div>

        {/* Form Fields */}
        <div className="bg-[#111115] border border-white/[0.06] rounded-[24px] p-5 space-y-5 shadow-sm">
          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              First Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[15px] font-medium text-white">{formData.fullName}</span>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Last Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[15px] font-medium text-white">{formData.lastName}</span>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Date of Birth
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[15px] font-medium text-white">{formData.dob}</span>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[15px] font-medium text-white">{formData.email}</span>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[15px] font-medium text-white">{formData.phone}</span>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Residential Address
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-white/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none"
              />
            ) : (
              <span className="text-[14px] font-medium text-white">{formData.address}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
