import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Next Craft Solution",
  description: "Learn more about Next Craft Solution, where we specialize in building high-performance, scalable websites and web applications. Our digital solutions drive results and elevate your online presence. Our expertise extends to custom software development, Android and iOS app development, social media solutions, e-commerce platforms, and enterprise-level applications tailored to your business needs.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We specialize in building high-performance, scalable websites and web applications. Our digital solutions drive results and elevate your online presence. Our expertise extends to custom software development, Android and iOS app development, social media solutions, e-commerce platforms, and enterprise-level applications tailored to your business needs."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
