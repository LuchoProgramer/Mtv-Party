import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTV: THE FINAL BROADCAST",
  description: "El cierre de una era por Propulsar Producciones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-background-dark min-h-screen"
        suppressHydrationWarning
      >
        <div className="scanlines"></div>
        <div className="vhs-noise"></div>
        {children}
      </body>
    </html>
  );
}
