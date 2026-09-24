import localFont from "next/font/local";

export const cinzel = localFont({
  src: "../app/fonts/Cinzel-Variable.ttf",
  variable: "--font-display",
  weight: "400 900",
  display: "swap",
});

export const spaceGrotesk = localFont({
  src: "../app/fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-body",
  weight: "300 700",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "../app/fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-mono",
  weight: "400 700",
  display: "swap",
});
