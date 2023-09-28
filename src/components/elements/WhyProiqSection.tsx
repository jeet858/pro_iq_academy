import React from "react";
import Carousel from "./Carousel";
import img1 from "../../../public/images/Banner3_about.jpg";
import img2 from "../../../public/images/Banner3_why.png";
import Strength from "./Strength";
const WhyProiqSection = () => {
  const slides = [
    {
      imageSrc: img1,
      title: "Master the Skills to Drive your Career",
      buttonText: "Know More",
    },
    {
      imageSrc: img2,
      title: "ProIQ Academy is the best choice for everyone",
      buttonText: "Know More",
    },
  ];
  return (
    <div className="h-fit">
      <Carousel slides={slides} />
      <div className="mt-16">
        <Strength />
      </div>
    </div>
  );
};
export default WhyProiqSection;
