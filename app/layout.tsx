import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATMO - Suite Logicielle pour le Génie Climatique",
  description: "ATMO conçoit des outils digitaux de pointe (chiffrage, modélisation) pour les professionnels du génie climatique, de l'aéraulique et de la thermique.",
  keywords: "logiciel chiffrage, génie climatique, aéraulique, thermique, CVC, HVAC, gainable, plancher chauffant, ATMO, bureau d'étude",
  openGraph: {
    title: "ATMO - Suite Logicielle HVAC",
    description: "Digitalisez vos études aérauliques et thermiques en quelques clics.",
    url: "https://atmo-site.vercel.app", // Mettez votre vrai lien
    siteName: "ATMO",
    images: [
      {
        url: "/atmo-icon.png", 
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<CookieBanner /></body>
    </html>
  );
}
