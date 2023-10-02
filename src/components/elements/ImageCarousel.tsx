import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from "../../../public/images/IMG20221112083744 3.png";
import img2 from "../../../public/images/IMG-20230605-WA0004 2.png";
import img3 from "../../../public/images/20230906_175553 1.png";
import img4 from "../../../public/images/IMG-20230907-WA0008 2.png";
import img5 from "../../../public/images/IMG_20221220_192721 1.png";
import img6 from "../../../public/images/IMG-20230605-WA0001 1.png";

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
        <div className="carousel-item flex w-full items-center justify-center">
          <Image
            src={img1}
            alt=""
            className="m-auto w-fit  resize sm:h-[400px] md:h-[500px] lg:h-[600px] "
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center">
          <Image
            src={img2}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center">
          <Image
            src={img3}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center">
          <Image
            src={img4}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center">
          <Image
            src={img5}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="carousel-item relative w-full items-center justify-center">
          <Image
            src={img6}
            alt=""
            className="m-auto w-fit resize sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
