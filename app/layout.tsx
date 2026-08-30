import type { Metadata } from "next";
import { Fraunces, Archivo, Archivo_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const archivoMono = Archivo_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ArchiVerse — Architecture, Design & Build Studio",
    template: "%s — ArchiVerse",
  },
  description:
    "TODO: replace with final one-sentence studio description for SEO meta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${archivoMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
