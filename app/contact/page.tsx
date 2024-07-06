import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
import ContactForm from "./components/contact-form";
import SocialConnect from "./components/social-connect";

const Contact = () => {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-start">
      <Navbar />
      <div className="flex h-full w-full flex-col gap-10 p-10 lg:flex-row">
        <ContactForm />
        <SocialConnect />
      </div>
    </div>
  );
};

export default Contact;
