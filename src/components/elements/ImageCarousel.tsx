import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from "../../../public/images/8.jpg";
import img2 from "../../../public/images/a (10).jpg";
import img3 from "../../../public/images/a (2).jpg";
import img4 from "../../../public/images/DSC_2386(1).jpg";
import img5 from "../../../public/images/a (15)(1).jpg";
import img6 from "../../../public/images/3 (1).jpg";
import img7 from "../../../public/images/1 (1).jpg";
import img8 from "../../../public/images/2 (1).jpg";
import img9 from "../../../public/images/5 (1).jpg";
import img10 from "../../../public/images/ready-back-school (1).jpg";
import img11 from "../../../public/images/a (12).jpg";
import img12 from "../../../public/images/DSC_2306(1).jpg";

function ImageCarousel({ onClose }: { onClose: () => void }) {
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
    <div className="relative h-fit w-full items-center justify-center">
      <div
        className="close-button flex items-end justify-end p-5"
        onClick={onClose}
        m-auto
      >
        <button className="h-10 w-28 bg-blue-500" onClick={onClose}>
          Close
        </button>
      </div>
      <Slider {...settings}>
        <div className="carousel-item flex w-full items-center justify-center p-4">
          <Image
            src={img1}
            alt=""
            className="m-auto w-fit  resize sm:h-[400px] md:h-[500px] lg:h-[600px] "
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img2}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img3}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img4}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img5}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img6}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img7}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img8}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img9}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img10}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img11}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center p-4">
          <Image
            src={img12}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
