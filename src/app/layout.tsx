import React from "react";
import type {Metadata} from "next";
import {Inter, Roboto} from "next/font/google";
import "./globals.css";
import {PHProvider} from "@/app/providers";
import dynamic from "next/dynamic";

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

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={`${inter.className} ${roboto.className}`}>
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
