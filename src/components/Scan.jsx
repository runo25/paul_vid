import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileData } from "../data";
import { PrecisionQrSvg, KastLogo } from "./Vectors";

export default function Scan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("scan"); // "scan" | "my_code"
  const [torchOn, setTorchOn] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleCopyTag = () => {
    navigator.clipboard.writeText(profileData.handle);
    showToast("KAST Tag copied to clipboard!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Pay me on KAST",
        text: `Pay ${profileData.fullName} using KAST tag ${profileData.handle}`,
        url: `https://kast.io/pay/${profileData.handle.replace('@', '')}`
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`https://kast.io/pay/${profileData.handle.replace('@', '')}`);
      showToast("Payment link copied!");
    }
  };

  return (
    <div className="app-screen text-white bg-black flex flex-col justify-between">
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
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] sticky top-0 bg-black/90 backdrop-blur-md z-20">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 rounded-full p-2 -ml-2 transition btn-press"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        {/* Tab pills */}
        <div className="flex bg-[#16161c] p-1 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTab("scan")}
            className={`px-4 py-1 rounded-full text-xs font-semibold transition ${
              activeTab === "scan" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Scan QR
          </button>
          <button
            onClick={() => setActiveTab("my_code")}
            className={`px-4 py-1 rounded-full text-xs font-semibold transition ${
              activeTab === "my_code" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            My Code
          </button>
        </div>

        <div className="w-8" />
      </div>

      {/* Main View Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {activeTab === "scan" ? (
          <div className="flex flex-col items-center w-full max-w-[320px]">
            {/* Viewfinder Target */}
            <div className="w-64 h-64 relative rounded-[28px] overflow-hidden border-2 border-white/20 bg-zinc-950 flex items-center justify-center shadow-2xl">
              {/* Corner Viewfinder Guides */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#00e57a] rounded-tl-xl" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#00e57a] rounded-tr-xl" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#00e57a] rounded-bl-xl" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#00e57a] rounded-br-xl" />

              {/* Animated Laser Sweep */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00e57a] to-transparent shadow-[0_0_15px_#00e57a] animate-[bounce_2.5s_infinite]" />

              <div className="text-gray-600 text-xs font-mono uppercase tracking-widest text-center px-4">
                Align QR Code within frame
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
              Scan any KAST Tag, US/EU payment QR, or Bitcoin/Solana address to send money instantly.
            </p>

            {/* Controls */}
            <div className="flex items-center gap-6 mt-8">
              <button
                onClick={() => setTorchOn(!torchOn)}
                className={`p-3.5 rounded-full border transition btn-press ${
                  torchOn ? "bg-amber-400 text-black border-amber-400" : "bg-white/10 text-white border-white/10"
                }`}
                title="Toggle Torch"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </button>

              <button
                onClick={() => showToast("Select an image with a QR code from your gallery")}
                className="p-3.5 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition btn-press"
                title="Upload Photo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* My Code Tab */
          <div className="flex flex-col items-center w-full max-w-[320px] animate-in fade-in duration-200">
            <div className="bg-[#111116] border border-white/10 rounded-[32px] p-6 flex flex-col items-center shadow-2xl w-full">
              <div className="flex items-center gap-2 mb-4">
                <KastLogo className="w-7 h-7" color="#ffffff" />
                <span className="font-bold text-white tracking-wider text-sm">KAST PERSONAL</span>
              </div>

              {/* Vector QR */}
              <div className="mb-4">
                <PrecisionQrSvg className="w-52 h-52" value={profileData.handle} />
              </div>

              <div className="text-center">
                <div className="text-lg font-bold text-white uppercase">{profileData.fullName} {profileData.lastName}</div>
                <div className="text-xs font-mono text-[#00e57a] font-semibold mt-0.5">{profileData.handle}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full mt-6">
              <button
                onClick={handleCopyTag}
                className="flex-1 py-3.5 bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 rounded-full text-xs font-bold text-white btn-press transition"
              >
                Copy Tag
              </button>
              <button
                onClick={handleShare}
                className="flex-1 py-3.5 bg-white text-black rounded-full text-xs font-bold btn-press transition shadow-lg"
              >
                Share QR
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-4" />
    </div>
  );
}
