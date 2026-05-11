import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-800 selection:bg-[#29A5DB] selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-[#29A5DB] font-bold text-sm hover:text-[#0E3A5F] transition-colors mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-[#0E3A5F] mb-12 tracking-tight">Mentions Légales</h1>
        
        <div className="space-y-10 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
          
          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">1. Éditeur du site</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              Le site <strong>atmo-site.vercel.app</strong> et l'application <strong>GainablePro</strong> sont édités par :<br /><br />
              <strong>ATMO</strong><br />
              Forme juridique : Entrepreneur individuel<br />
              Capital social : 1 €<br />
              Siège social : 1174 route de Saint-Sulpice 42300 Villerest<br />
              SIRET : 10459853700017<br />
              RCS : Roanne<br />
              Directeur de la publication : Paul LEVEL<br />
              Contact : <a href="mailto:arthropaul@gmail.com" className="text-[#29A5DB] hover:underline">arthropaul@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">2. Hébergement</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              Le site est hébergé par <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#29A5DB] hover:underline">https://vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">3. Propriété Intellectuelle</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              L'ensemble de ce site (structure, design, textes, logos ATMO et GainablePro) relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation, intégrale ou partielle, est strictement interdite sans l'autorisation écrite de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">4. Données Personnelles (RGPD)</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              Les informations recueillies via l'application GainablePro (nom, email professionnel, etc.) sont enregistrées dans un fichier informatisé pour la gestion des comptes utilisateurs et la sauvegarde des études techniques. Conformément à la loi « informatique et libertés » et au RGPD, vous pouvez exercer votre droit d'accès, de rectification et de suppression des données vous concernant en contactant : <a href="mailto:arthropaul@gmail.com" className="text-[#29A5DB] hover:underline">arthropaul@gmail.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}