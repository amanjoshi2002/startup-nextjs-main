import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Next Craft Solution",
  description: "Welcome to Next Craft Solution, your partner in building high-performance, scalable websites and web applications.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
