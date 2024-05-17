import { Bricolage_Grotesque } from "next/font/google";
import localfont from "next/font/local";

import "./globals.css";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-brico", // Définition de la variable personnalisée
});

const clash = localfont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.ttf",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "SAHIN Elyesa",
  description: "Elyesa's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${brico.className} ${clash.variable}`}>
      <body scroll-behavior="smooth">{children}</body>
    </html>
  );
}
