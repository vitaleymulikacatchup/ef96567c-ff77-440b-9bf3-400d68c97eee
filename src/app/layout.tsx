import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PogCoin",
  description: "Create a playful single-page site that introduces PogCoin, explains how to buy, and shows tokenomics and community vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}> 
        <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}