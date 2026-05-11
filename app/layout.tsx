import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Mavi · Trattoria & Pizzería Napolitana en Fuengirola",
  description:
    "Casa Mavi — Trattoria y Pizzería Napolitana en Los Boliches, Fuengirola. Pizzas auténticas al horno de piedra, pasta fresca y los mejores sabores de Italia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
