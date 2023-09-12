import React, { useRef } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
  id: number;
  content: string;
  photo: string;
}

const Carouselbody: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const slidesData: SlideData[] = [
    {
      id: 1,
      content: "This is the first paragraph",
      photo: "/images/image-3.jpg",
    },
    {
      id: 2,
      content: "This is the second paragraph",
      photo: "/images/image-3.jpg",
    },
    {
      id: 3,
      content: "This is the third paragraph",
      photo: "/images/image-3.jpg",
    },
    {
      id: 4,
      content: "This is the fourth paragraph",
      photo: "/images/image-3.jpg",
    },
    {
      id: 5,
      content: "This is the fifth paragraph",
      photo: "/images/image-3.jpg",
    },
  ];

  const sliderRef = useRef<Slider | null>(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative h-[30rem] bg-gray-200">
      <h3 className="flex items-center  justify-center text-xl text-gray-800">
        Our testimonials
      </h3>
      <h1 className="flex items-center justify-center text-3xl text-blue-500">
        What they saying?
      </h1>
      <Slider {...settings} ref={sliderRef}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="carousel-item p-16">
            <div className="rounded-lg bg-white p-16">
              <div className="flex items-center justify-start  ">
                <div className="rounded-[14rem] border-[9px] border-white hover:border-blue-800">
                  <img
                    src={slide.photo}
                    alt={`Photo ${slide.id}`}
                    className="max-w-32 flex max-h-32 justify-between rounded-[14rem] border-[9px] border-transparent "
                  />{" "}
                </div>
                <p className="text-lg">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-blue-600 p-4"
        onClick={goToPrevSlide}
      >
        <AiOutlineArrowLeft className=" text-white" />
      </div>
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-blue-600 p-4"
        onClick={goToNextSlide}
      >
        <AiOutlineArrowRight className="text-white" />
      </div>
    </div>
  );
};

export default Carouselbody;
