import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./contactForm";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactForm/>
      <Footer />
    </>
  );
};

export default Layout;
