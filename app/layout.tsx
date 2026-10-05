import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LS DESIGN",
  description: "Gestion des commandes LS DESIGN",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
