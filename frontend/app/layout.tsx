// frontend/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import { ThemeProvider } from "@/src/providers/ThemeProvider";
import { ReduxProvider } from "@/src/providers/ReduxProvider";

const inter = Inter({ 
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Donatov — Магазин игровых товаров",
  description: "Пополнение аккаунтов, валюты, услуг и софта",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ReduxProvider>
            <Header />
            <main>
              {children}
            </main>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}