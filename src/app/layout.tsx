"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/Common/WhatsAppFloat";
import { Inter } from "next/font/google";
import "../styles/index.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// Suppress specific hydration error messages
if (typeof window !== "undefined") {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: Expected server HTML to contain a matching")
    ) {
      // Suppress the specific hydration error message
      return;
    }
    // Call the original console.error for other errors
    originalConsoleError(...args);
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Next Craft Solution, your partner in building high-performance, scalable websites and web applications." />
        <meta name="author" content="Next Craft Solution" />
        <link rel="canonical" href="https://nextcraftsolution.site" />
        <title>Next Craft Solution</title>
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
