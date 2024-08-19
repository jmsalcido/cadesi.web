import React from "react";
import type {Metadata} from "next";
import {Inter, Roboto} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ['normal', 'italic'],
});


export const metadata: Metadata = {
  title: "CADESI | Colectivo de Café del Desierto",
  description: "Cafe en el desierto de Sonora",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  );
}
