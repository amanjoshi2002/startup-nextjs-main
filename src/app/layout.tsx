"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
