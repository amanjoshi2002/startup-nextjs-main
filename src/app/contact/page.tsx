import dynamic from "next/dynamic";
import { Metadata } from "next";

// Dynamically import Breadcrumb and Contact to disable SSR
const Breadcrumb = dynamic(() => import("@/components/Common/Breadcrumb"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Contact Us | Next Craft Solution",
  description:
    "Get in touch with Next Craft Solution to discuss your project or inquire about our services. We're here to help!",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We'd love to hear from you! Whether you have a project in mind or just want to learn more about our services, our team is ready to assist. Reach out today!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
