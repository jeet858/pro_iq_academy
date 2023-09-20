import React, { useRef } from "react";
import Slider from "react-slick";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHome,
  AiFillCamera,
} from "react-icons/ai";
import { GiPhotoCamera } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
  id: number;
  content: string;
  icon: React.ReactElement;
  time: string;
}

const Carouselbody: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const slidesData: SlideData[] = [
    {
      id: 1,
      content: "Photography",
      icon: (
        <GiPhotoCamera className="text-6xl text-blue-500 hover:text-8xl hover:text-blue-800" />
      ),
      time: "46 hours course time",
    },
    {
      id: 2,
      content: "Business",
      icon: (
        <IoLogoPython className="text-6xl text-blue-500 hover:text-8xl hover:text-blue-800" />
      ),
      time: "46 hours course time",
    },
    {
      id: 3,
      content: "Art & design",
      icon: <AiOutlineHome className="text-4xl text-red-500" />,
      time: "46 hours course time",
    },
    {
      id: 4,
      content: "marketing",
      icon: <AiOutlineHome className="text-4xl text-red-500" />,
      time: "46 hours course time",
    },
    {
      id: 5,
      content: "Lifestyle",
      icon: <AiOutlineHome className="text-4xl text-red-500" />,
      time: "46 hours course time",
    },
    {
      id: 6,
      content: "React",
      icon: (
        <FaReact className="text-6xl text-blue-500 hover:text-8xl hover:text-blue-800" />
      ),
      time: "46 hours course time",
    },
    {
      id: 7,
      content: "App development",
      icon: <AiOutlineHome className="text-4xl text-red-500" />,
      time: "46 hours course time",
    },
    {
      id: 8,
      content: "Python",
      icon: (
        <IoLogoPython className="text-6xl text-blue-500 hover:text-8xl hover:text-blue-800" />
      ),
      time: "46 hours course time",
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
      <h3 className="flex h-fit items-center  justify-center text-6xl text-gray-800">
        Our Courses
      </h3>

      <Slider {...settings} ref={sliderRef} className="flex justify-around">
        {slidesData.map((slide) => (
          <div key={slide.id} className="flex  p-16">
            <div className="flex h-[18rem] w-[12rem] items-center justify-center rounded-lg bg-white ">
              <div className="flex h-fit flex-col items-center">
                <div className="mb-8 flex h-[7rem] w-[7rem] items-center justify-center rounded-[14rem] border bg-slate-300 hover:bg-gray-500 ">
                  {slide.icon}
                </div>
                <p className="text-lg font-semibold text-[#FF6E65]">
                  {slide.content}
                </p>
                <p className="text-sm">{slide.time}</p>
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
