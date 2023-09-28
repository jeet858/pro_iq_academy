import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ slides }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="relative top-[100px]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-item relative" key={index}>
            <Image
              src={slide.imageSrc}
              alt=""
              className="w-full resize sm:h-[400px] md:h-[700px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 stroke-white stroke-2 p-16 font-[Montserrat] font-bold text-[#07096E]  sm:text-3xl md:w-full md:text-7xl lg:w-1/2">
              <p style={{ WebkitTextStroke: "1.5px #FAF8FFE3" }}>
                {slide.title}
              </p>
              <button className="mt-8 flex items-center justify-center rounded-[10px] bg-[#FF4F81] text-xl  text-white hover:bg-[#FF6E65] sm:h-[40px] sm:w-[150px]  md:h-[50px] md:w-[170px]">
                {slide.buttonText} <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
