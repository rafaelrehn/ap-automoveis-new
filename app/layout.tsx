import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { WhatsappFab } from "@/components/site/WhatsappFab";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AP Automóveis — Revenda de veículos em Santa Rosa/RS",
    template: "%s — AP Automóveis",
  },
  description:
    "Veículos seminovos e usados selecionados em Santa Rosa/RS. Atendimento personalizado, negociação facilitada e estoque atualizado.",
  authors: [{ name: "AP Automóveis" }],
  openGraph: {
    title: "AP Automóveis — Revenda de veículos em Santa Rosa/RS",
    description:
      "Veículos seminovos e usados selecionados em Santa Rosa/RS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background">
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <WhatsappFab />
        </div>
      </body>
    </html>
  );
}
