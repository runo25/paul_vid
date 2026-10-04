import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notificationsData, transactions } from "../data";

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

      // Add new English notification to the top
      const newNotification = {
        id: "verification_" + Date.now(),
        type: "in",
        title: "Compliance Verification Submitted",
        date: "Just now",
        message: "We have successfully received your compliance documentation and explanations for the 4,500.00 EUR wire transfer. Our underwriting team is reviewing your file and your funds will be cleared shortly.",
        unread: true,
        section: "TODAY"
      };

      notificationsData.unshift(newNotification);

      // Also update the transaction status
      const tx = transactions.find((t) => t.id === "2");
      if (tx) {
        tx.status = "completed";
        tx.note = "Compliance verified & approved";
      }

      // Navigate back after animation
      setTimeout(() => {
        navigate("/notifications");
      }, 2400);
    }, 1800);
  };

  if (success) {
    return (
      <div className="app-screen text-white bg-black min-h-screen flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
        <div className="w-20 h-20 rounded-full bg-[#00e57a]/20 border border-[#00e57a]/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,229,122,0.3)]">
          <div className="w-14 h-14 rounded-full bg-[#00e57a] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Documents Submitted</h2>
        <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed">
          Thank you for providing the required documentation. Your funds of 4,500.00 EUR will be cleared upon review.
        </p>
      </div>
    );
  }

  return (
    <div className="app-screen text-white bg-black min-h-screen flex flex-col pb-8">
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
        <h1 className="text-[17px] font-bold tracking-tight">Compliance Verification</h1>
        <div className="w-8" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 scrollbar-hide pb-28">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-1.5 text-white">Documentation Required</h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            Please complete the questionnaire below to release your pending wire deposit of <span className="text-white font-semibold">4,500.00 EUR</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Relationship with Sender */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-300 tracking-wider uppercase px-1">
              Relationship with Sender (KeCh... LLC)
            </label>
            <textarea
              required
              placeholder="e.g. Business client, consulting partner, vendor..."
              className="bg-[#111115] border border-white/[0.08] rounded-2xl p-4 text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-400/50 resize-none min-h-[90px]"
              value={formData.relationship}
              onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
            />
          </div>

          {/* Explanation of Transfer */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-300 tracking-wider uppercase px-1">
              Transfer Purpose / Invoice Details
            </label>
            <textarea
              required
              placeholder="Describe services rendered or goods sold for this transaction..."
              className="bg-[#111115] border border-white/[0.08] rounded-2xl p-4 text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-400/50 resize-none min-h-[110px]"
              value={formData.explanation}
              onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
            />
          </div>

          {/* Document Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-300 tracking-wider uppercase px-1">
              Supporting Invoice or Contract (PDF, JPG, PNG)
            </label>
            <div className="bg-[#111115] border border-dashed border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 relative overflow-hidden group hover:border-emerald-400/50 transition">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                required
              />
              {formData.file ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00e57a]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  <span className="text-xs font-semibold text-emerald-400 max-w-[200px] truncate">
                    {formData.file.name}
                  </span>
                  <span className="text-[10px] text-gray-400">Tap to replace document</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-gray-400 group-hover:text-emerald-400 transition">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                  <span className="text-xs font-medium text-gray-300">Choose file or drag & drop</span>
                  <span className="text-[10px] text-gray-500">Max size: 25 MB</span>
                </>
              )}
            </div>
          </div>

          {/* Submit button fixed at bottom */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-md border-t border-white/[0.06] flex justify-center z-20">
            <button
              type="submit"
              disabled={loading || !formData.relationship || !formData.explanation || !formData.file}
              className={`w-full max-w-[400px] py-4 rounded-full font-bold text-sm transition btn-press flex items-center justify-center gap-2 shadow-xl ${
                loading || !formData.relationship || !formData.explanation || !formData.file
                  ? "bg-white/10 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading & Encrypting...
                </>
              ) : (
                "Submit Verification File"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
