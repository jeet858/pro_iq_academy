import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/images/img1.jpg";
import img3 from "../../../public/images/img3.jpg";
import Image from "next/image";

function Carousel() {
  const settings = {
    infinite: true, // Enable infinite loop
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the speed of automatic sliding (3 seconds in this example)
    pauseOnHover: false,
  };

  return (
    <div className="relative top-[100px]">
      <Slider {...settings}>
        <div className="carousel-item">
          <Image src={img1} alt="" className="h-[800px] w-full resize"></Image>
        </div>
        <div className="carousel-item">
          <Image src={img3} alt="" className="h-[800px] w-full resize" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
