import Link from "next/link";

export default function ATMO_Hub() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* LOGO ATMO */}
            <img 
              src="/atmo-logo.png" 
              alt="ATMO" 
              className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" 
            />
            <div className="hidden sm:block border-l border-gray-200 pl-4">
              <p className="text-[10px] font-black text-[#29A5DB] uppercase tracking-[0.2em] mt-1">
                Suite Logicielle
              </p>
            </div>
          </div>
          <a href="mailto:contact@atmo-pro.fr" className="text-sm font-bold text-[#0E3A5F] hover:text-[#29A5DB] transition-colors">
            Contact
          </a>
        </div>
      </header>

      {/* HERO SECTION : EN-TÊTE DYNAMIQUE */}
      <section className="bg-[#0E3A5F] text-white pt-24 pb-24 px-6 relative overflow-hidden">
        {/* Vague stylisée Cyan en arrière-plan (rappel du logo) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
              <path fill="#29A5DB" d="M0,160L48,176C96,192,192,224,240,213.3C288,203,384,149,432,128C480,107,576,117,624,144C672,171,768,213,816,213.3C864,213,960,171,1008,138.7C1056,107,1152,85,1200,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1200,320C1152,320,1056,320,1008,320C960,320,864,320,816,320C768,320,672,320,624,320C576,320,480,320,432,320C384,320,288,320,240,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Aéraulique & Thermique <br className="hidden md:block" />
            <span className="text-[#29A5DB]">par Modélisation Optimisée</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
            ATMO conçoit des outils digitaux de pointe pour les professionnels du génie climatique. 
            Gagnez en précision, optimisez vos chiffrages et concevez vos réseaux en quelques clics.
          </p>
        </div>
      </section>

      {/* NOUVELLE SECTION : PRÉSENTATION DE LA MISSION ATMO */}
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-[#29A5DB] font-black text-[11px] uppercase tracking-[0.2em] mb-4">L'Expertise ATMO</h3>
            <h2 className="text-3xl md:text-4xl font-black text-[#0E3A5F] mb-6 tracking-tight">
              Digitaliser l'ingénierie climatique
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Née de l'exigence du terrain, ATMO se donne pour mission de transformer les défis techniques complexes en solutions logicielles simples et intuitives. Notre ambition : fournir aux artisans, bureaux d'études et installateurs les outils ultimes pour dimensionner leurs projets avec une fiabilité absolue.
            </p>
          </div>

          {/* Les 3 Piliers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mx-auto mb-6 border border-gray-100">🎯</div>
              <h4 className="text-[#0E3A5F] text-lg font-black mb-3">Précision Technique</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Des algorithmes de calcul rigoureux pour des réseaux aérauliques toujours conformes aux normes et recommandations constructeurs.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mx-auto mb-6 border border-gray-100">⚡</div>
              <h4 className="text-[#0E3A5F] text-lg font-black mb-3">Gain de Temps</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Fini les feuilles de calcul complexes. Automatisez vos tracés, pertes de charges et nomenclatures en quelques minutes.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mx-auto mb-6 border border-gray-100">📱</div>
              <h4 className="text-[#0E3A5F] text-lg font-black mb-3">Expérience Connectée</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Une suite d'applications (PWA) pensées pour l'utilisateur : claires, modernes et directement accessibles sur PC et smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE DES APPLICATIONS */}
      <main className="max-w-7xl mx-auto px-6 py-24 w-full relative z-20">
        
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-10 text-center md:text-left">
          Nos Applications Disponibles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARTE APPLICATION : GAINABLE PRO */}
          <a href="https://gainablepro.atmo-pro.fr" target="_blank" rel="noopener noreferrer" className="group block h-full">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#29A5DB]/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              {/* Ligne décorative en haut */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0E3A5F] to-[#29A5DB]"></div>
              
              <div className="flex items-center gap-5 mb-8 mt-2">
                {/* LOGO GAINABLE PRO */}
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border border-gray-100 shadow-sm p-2 group-hover:scale-105 transition-transform overflow-hidden">
                  <img src="/logo-redimension-GP.png" alt="GainablePro" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#0E3A5F]">GainablePro</h4>
                  <span className="inline-block bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest mt-1">
                    En ligne
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm flex-1 font-medium leading-relaxed">
                Le logiciel de chiffrage et de conception aéraulique intelligent. Importez vos plans, tracez vos réseaux, et générez des nomenclatures constructeur infaillibles en un temps record.
              </p>
              
              <div className="mt-8 flex items-center text-[#0E3A5F] font-black text-sm group-hover:text-[#29A5DB] transition-colors">
                LANCER L'APPLICATION <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* CARTE : PROCHAINE APPLICATION */}
          <div className="bg-white/40 rounded-[2rem] p-8 border-2 border-dashed border-gray-300 h-full flex flex-col justify-center items-center text-center opacity-80">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              <span className="text-3xl opacity-40">🛠️</span>
            </div>
            <h4 className="text-xl font-black text-[#0E3A5F] mb-2">Module Plancher Chauffant</h4>
            <p className="text-gray-500 text-sm font-medium">
              En cours de développement. Bientôt disponible dans la suite ATMO.
            </p>
            <span className="inline-block bg-gray-200 text-gray-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mt-6">
              Prochainement
            </span>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-gray-400">
            © {new Date().getFullYear()} ATMO. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs font-bold text-gray-400">
            {/* C'est ici que le changement opère : on remplace href="#" par href="/nom-du-dossier" */}
            <Link href="/mentions-legales" className="hover:text-[#0E3A5F] transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-[#0E3A5F] transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
//FIN