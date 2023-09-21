import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import AboutSection from "~/components/elements/AboutSection";

import Footer from "~/components/elements/footer";

const About = () => {
  return (
    <div>
      <MainPageTemplate>
        <AboutSection />
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default About;
