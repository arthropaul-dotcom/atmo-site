"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté
    const consent = localStorage.getItem("atmo_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("atmo_cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 font-medium text-center md:text-left flex-1">
          🍪 <strong>Gestion des cookies :</strong> Nous utilisons des cookies pour assurer le bon fonctionnement de notre suite logicielle, mémoriser vos préférences et analyser notre trafic. 
          <Link href="/cgu" className="text-[#29A5DB] hover:underline ml-2">En savoir plus.</Link>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => setShowBanner(false)}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Continuer sans accepter
          </button>
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-[#0E3A5F] text-white font-bold text-sm hover:bg-[#0a2a46] shadow-md transition-colors"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}