import type { Metadata } from "next";
import { cinzel, spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Microsoldadura y reballing para iPhone, laptop y PC en Santo Domingo, Ecuador. Diagnóstico a nivel de placa antes de cobrar, más venta de equipos y repuestos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
