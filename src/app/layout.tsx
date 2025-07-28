import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Software Engineer`,
  description: "Professional CV of Mouhammad Khier ABDOH - Software Engineer specializing in Java, Spring Boot, Full-Stack Development, and System Architecture",
  keywords: ["Software Developer", "Full-Stack Engineer", "Java", "Spring Boot", "Python", "React", "System Architecture", "Ulm", "Germany"],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  openGraph: {
    title: `${RESUME_DATA.name} | Software Engineer`,
    description: "Professional CV of Mouhammad Khier ABDOH - Software Engineer specializing in Java, Spring Boot, Full-Stack Development, and System Architecture",
    type: "profile",
    locale: "en_US",
    siteName: "Professional CV",
  },
};

// Fonts for different languages
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoKufiArabic.variable}`}>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
