"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { Metadata } from "next";
import { montserrat } from "@/assets/fonts/fonts";
import Navbar from "@/components/layout/navbar/navbar";
import CarouselHeader from "@/components/layout/carouselHeader/carousel-header";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Denis Laureano - Nutrição e Exercício",
  description:
    "Aqui você encontra de tudo para melhorar sua qualidade de vida!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={montserrat.className}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Navbar />
        <CarouselHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
