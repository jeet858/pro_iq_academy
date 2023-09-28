import React from "react";
import Carousel from "./Carousel";
import img1 from "../../../public/images/Banner3_home.png";
import img2 from "../../../public/images/Banner4_home.png";

function HomeCarousel() {
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
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default HomeCarousel;
