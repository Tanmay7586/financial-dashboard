// src/app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"; // 1. Import it

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financial Dashboard",
  description: "Modern financial dashboard for wealth management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 2. Wrap your children with it */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
