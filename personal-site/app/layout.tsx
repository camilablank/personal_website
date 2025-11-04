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
  title: "Camila Blank",
  description: "Hi, I'm Camila! I love figuring out how brains—and intelligent systems of any kind—function. My research sits at the intersection of computational neuroscience, artificial intelligence, and mechanistic interpretability. I study math at Stanford and work as a research assistant in the Linderman Lab.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white text-[#1A1A1A] font-['Cormorant','serif']">
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;300italic&family=Zen+Old+Mincho:wght@400&family=Playfair+Display:wght@400;600&family=Lora:wght@400;600&family=Source+Sans+3:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
              @font-face {
                font-family: 'Bitcount Prop Double';
                src: url('/BitcountPropDouble.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
              }
              .font-bitcount { 
                font-family: 'Bitcount Prop Double', sans-serif !important; 
              }
              .font-source-sans, .font-source-sans * { 
                font-family: 'Source Sans 3', sans-serif !important; 
              }
            `}
          </style>
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
