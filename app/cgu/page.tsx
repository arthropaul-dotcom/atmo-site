import Link from "next/link";

export default function CGU() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-800 selection:bg-[#29A5DB] selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-[#29A5DB] font-bold text-sm hover:text-[#0E3A5F] transition-colors mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-[#0E3A5F] mb-12 tracking-tight">Conditions Générales d'Utilisation</h1>
        
        <div className="space-y-10 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
          
          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">1. Objet</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles ATMO met à la disposition de ses utilisateurs l'accès à sa suite logicielle, et notamment l'application GainablePro. L'utilisation de ces outils implique l'acceptation pleine et entière des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">2. Accès au service</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              Les applications de la suite ATMO sont réservées aux professionnels du génie climatique. L'accès aux fonctionnalités de sauvegarde et d'export (notamment sur GainablePro) nécessite la création d'un compte utilisateur valide à l'aide d'une adresse email professionnelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">3. Responsabilité</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              <strong>À titre de l'éditeur :</strong> ATMO s'efforce de fournir des outils de modélisation et de calcul (GainablePro) les plus précis possibles, basés sur les standards de la profession. Toutefois, les résultats fournis par le logiciel le sont à titre d'aide à la conception. Il appartient à l'utilisateur, en sa qualité de professionnel, de vérifier et de valider les nomenclatures et les dimensionnements finaux avant toute installation ou commande de matériel.<br /><br />
              <strong>À titre de l'utilisateur :</strong> L'utilisateur est seul responsable de l'utilisation qu'il fait des résultats générés par la suite ATMO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">4. Gestion des comptes</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              L'utilisateur est responsable de la confidentialité de ses identifiants de connexion. En cas de perte ou de suspicion d'utilisation frauduleuse de son compte, il doit en informer immédiatement l'éditeur. ATMO se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#0E3A5F] mb-4 border-b border-gray-100 pb-2">5. Modification des CGU</h2>
            <p className="leading-relaxed text-gray-600 font-medium">
              ATMO se réserve le droit de modifier les présentes CGU à tout moment, notamment pour s'adapter aux évolutions techniques ou légales. Les utilisateurs seront informés de toute modification substantielle.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
// FIN