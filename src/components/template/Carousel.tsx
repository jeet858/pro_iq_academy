import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    infinite: true, // Enable infinite loop
    speed: 1000, // Transition speed in milliseconds

    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the speed of automatic sliding (3 seconds in this example)
    pauseOnHover: false,
  };

  return (
    <div className="carousel-container mx-auto h-[300px] w-[500px] p-4">
      <Slider {...settings}>
        <div className="carousel-item h-[200px]">
          <img
            src="/images/img1.jpg"
            alt="Slide 1"
            className="h-auto w-full rounded-lg shadow-md"
          />
        </div>
        <div className="carousel-item h-[200px]">
          <img
            src="/images/img4.jpeg"
            alt="Slide 2"
            className="h-auto w-full rounded-lg shadow-md"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
