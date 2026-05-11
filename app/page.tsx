import Link from "next/link";

export default function ATMO_Hub() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0E3A5F] text-white font-black rounded-lg flex items-center justify-center text-xl shadow-md">
              A
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#0E3A5F] tracking-tight leading-none">ATMO</h1>
              <p className="text-[9px] font-bold text-[#29A5DB] uppercase tracking-[0.2em] mt-0.5">
                Suite Logicielle
              </p>
            </div>
          </div>
          <a href="mailto:arthropaul@gmail.com" className="text-sm font-bold text-gray-500 hover:text-[#0E3A5F] transition-colors">
            Contact
          </a>
        </div>
      </header>

      {/* HERO SECTION : PRÉSENTATION */}
      <section className="bg-[#0E3A5F] text-white pt-20 pb-24 px-6 relative overflow-hidden">
        {/* Décoration d'arrière-plan */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#29A5DB] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Aéraulique & Thermique <br className="hidden md:block" />
            <span className="text-[#29A5DB]">par Modélisation Optimisée</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            ATMO conçoit des outils digitaux de pointe pour les professionnels du génie climatique. 
            Gagnez en précision, optimisez vos chiffrages et concevez vos réseaux en quelques clics.
          </p>
        </div>
      </section>

      {/* CATALOGUE DES APPLICATIONS */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full -mt-12 relative z-20">
        
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 text-center md:text-left">
          Nos Applications Disponibles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARTE APPLICATION : GAINABLE PRO */}
          {/* Le lien pointe directement vers votre Vercel GainablePro ! */}
          <a href="https://gainable-pro.vercel.app" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#29A5DB] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              {/* Ligne décorative en haut */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0E3A5F] to-[#29A5DB]"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌪️</span>
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
              
              <div className="mt-8 flex items-center text-[#29A5DB] font-bold text-sm group-hover:translate-x-2 transition-transform">
                Accéder à l'application <span className="ml-2">↗</span>
              </div>
            </div>
          </a>

          {/* CARTE : PROCHAINE APPLICATION (EXEMPLE) */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 h-full flex flex-col justify-center items-center text-center opacity-70">
            <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-2xl opacity-50">🛠️</span>
            </div>
            <h4 className="text-xl font-black text-gray-500 mb-2">Module Plancher Chauffant</h4>
            <p className="text-gray-400 text-sm font-medium">
              En cours de développement. Bientôt disponible dans la suite ATMO.
            </p>
            <span className="inline-block bg-gray-200 text-gray-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mt-4">
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
            <a href="#" className="hover:text-[#0E3A5F] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#0E3A5F] transition-colors">CGU</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
// FIN