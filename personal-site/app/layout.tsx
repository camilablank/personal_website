import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camila Blank - Personal Website",
  description: "Personal website of Camila Blank - Stanford Mathematics student researching computational neuroscience, AI, and mechanistic interpretability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&family=Bitcount:wght@400&display=swap"
          rel="stylesheet"
        />
        <style>
          {`.font-bitcount { font-family: 'Bitcount', sans-serif; }`}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#1A1A1A] font-['Cormorant','serif']`}
      >
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
