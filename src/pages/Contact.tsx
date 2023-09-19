import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import ContactSection from "~/components/elements/ContactSection";

import Footer from "~/components/elements/footer";

const Contact = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <ContactSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default Contact;
