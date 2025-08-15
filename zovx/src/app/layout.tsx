import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NeonNavigation from "../components/NeonNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZOVX - Your AI Hub",
  description: "Transform your goals into ready-to-use prompts for any AI tool. Generate optimized prompts for Canva, Notion AI, Midjourney, and more.",
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
        <NeonNavigation />
        <main style={{ paddingTop: '120px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
