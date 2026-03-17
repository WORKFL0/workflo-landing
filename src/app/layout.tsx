import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workflo — Uw IT, Onze Zorg. Pure Rust.",
  description: "Workflo beheert uw volledige Apple-omgeving, zodat u zich kunt focussen op wat echt belangrijk is. Stressvrije IT voor moderne bedrijven in Amsterdam.",
  keywords: "Mac IT beheer, Apple MSP, Amsterdam, IT managed services, Jamf, MacBook beheer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
