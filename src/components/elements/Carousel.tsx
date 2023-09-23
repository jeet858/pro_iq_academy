import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/images/18.jpg";
import img3 from "../../../public/images/19.jpg";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
function Carousel() {
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
        <div className="carousel-item relative">
          <Image
            src={img1}
            alt=""
            className="w-full resize sm:h-[400px] md:h-[700px]"
          />
          <div className="absolute inset-0 flex flex-col  items-center justify-center bg-opacity-75 p-16 font-bold text-white  sm:text-3xl md:w-full md:text-7xl lg:w-1/2">
            <p>Master the Skills to Drive your Career</p>
            <button className="mt-8 flex items-center justify-center rounded-[10px] bg-[#FFFFFF] text-xl text-black hover:bg-[#FF6E65] hover:text-white sm:h-[40px] sm:w-[150px]  md:h-[50px] md:w-[170px]">
              Know More
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            src={img3}
            alt=""
            className="w-full resize sm:h-[400px] md:h-[700px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 p-16 font-bold text-white  sm:w-full sm:text-3xl md:text-7xl lg:w-1/2">
            <p>ProIQ Academy is the best choice for everyone</p>
            <button className="mt-8 flex items-center justify-center rounded-[10px] bg-[#FFFFFF] text-xl text-black hover:bg-[#FF6E65] hover:text-white sm:h-[40px] sm:w-[150px]  md:h-[50px] md:w-[170px]">
              Know More
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
