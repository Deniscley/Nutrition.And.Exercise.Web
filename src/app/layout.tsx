"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar/navbar";
import ControlledCarousel from "@/components/layout/controlledCarousel/controlledCarousel";

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
        <ControlledCarousel />
        {children}
      </body>
    </html>
  );
}
