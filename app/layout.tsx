import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-context";
import { cn } from "@/lib/utils";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Candice - Portfolio Artistique",
  description:
    "Portfolio artistique de Candice - Animation, Character Design, Illustration",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
          playfair.variable,
          montserrat.variable
        )}
      >
        <ThemeProvider defaultTheme="dark" defaultColor="amber">
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
