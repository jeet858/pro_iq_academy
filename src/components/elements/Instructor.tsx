import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ins1 from "../../../public/images/1 (1).jpg";
import ins2 from "../../../public/images/2 (1).jpg";
import ins3 from "../../../public/images/3 (1).jpg";
import ins4 from "../../../public/images/4 (1).jpg";
import ins5 from "../../../public/images/5 (1).jpg";
import ins6 from "../../../public/images/6 (1).jpg";
import ins7 from "../../../public/images/7.jpg";
import ins8 from "../../../public/images/8.jpg";
import Image from "next/image";

const Instructor = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="h-fit w-full p-8">
      <Slider {...settings}>
        <div className="p-4">
          <Image src={ins1} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#06965D] font-semibold text-cyan-50  sm:h-16 sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48  lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins2} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#FF6E65F7] font-semibold text-cyan-50  sm:h-16 sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins3} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#FF8A00] font-semibold text-cyan-50 sm:h-16  sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins4} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#06965D] font-semibold text-cyan-50 sm:h-16  sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins5} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#FF6E65F7] font-semibold text-cyan-50 sm:h-16  sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins6} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#FF8A00] font-semibold text-cyan-50 sm:h-16  sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins7} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#06965D] font-semibold text-cyan-50 sm:h-16  sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
        <div className="p-4">
          <Image src={ins8} alt="" className="h-fit w-fit rounded-lg" />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex items-center justify-center rounded-2xl bg-[#FF6E65F7] font-semibold text-cyan-50  sm:h-16 sm:w-48 sm:text-3xl md:h-12 md:w-40 md:text-xl lg:h-16 lg:w-48 lg:text-3xl">
              Instructor
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Instructor;
