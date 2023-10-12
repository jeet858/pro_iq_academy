import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import AboutSection from "~/components/elements/AboutSection";
import Carousel from "~/components/elements/Carousel";
import img1 from "../../public/images/Banner-about us.jpg";

import Footer from "~/components/elements/footer";

const About = () => {
  const slides = [
    {
      imageSrc: img1,
      title: "Master the Skills to Drive your Career",
      buttonText: "Know More",
    },
  ];
  return (
    <div>
      <MainPageTemplate>
        <div className="">
          <Carousel slides={slides} />
          <AboutSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default About;
