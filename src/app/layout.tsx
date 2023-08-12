"use client";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Denis Laureano - Nutrição e Exercício",
  description:
    "Aqui você encontra de tudo para melhorar sua qualidade de vida!",
};

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={inter.className}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
