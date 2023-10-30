import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";
import StudentBox from "./StudentBox";
import { api } from "~/utils/api";

const StudentCommunity: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: reviws, isError, isLoading } = api.review.all.useQuery();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  if (isLoading) {
    return (
      <div
        className="w-full items-center justify-center bg-[length:100%_100%] bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
        style={{ backgroundImage: 'url("./images/community_background.png")' }}
      >
        <div className="h-36">
          <SectionHeader title="Student Community" subtitle="Feedback" />
        </div>
        <div className="grid grid-cols-1 gap-4"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div
        className="w-full items-center justify-center bg-[length:100%_100%] bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
        style={{ backgroundImage: 'url("./images/community_background.png")' }}
      >
        <div className="h-36">
          <SectionHeader title="Student Community" subtitle="Feedback" />
        </div>
        <div className="grid grid-cols-1 gap-4"></div>
      </div>
    );
  }
  console.log(reviws);

  return (
    <div
      className="w-full items-center justify-center bg-[length:100%_100%] bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
      style={{ backgroundImage: 'url("./images/community_background.png")' }}
    >
      <div className="h-36">
        <SectionHeader title="Student Community" subtitle="Feedback" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Slider {...sliderSettings}>
          {reviws.map((review, index) => (
            <div key={index} className="mt-12 !flex justify-center">
              <StudentBox
                key={index}
                name={review.name}
                email={review.email}
                imageSrc="/images/image-3.jpg"
                description={review.review}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StudentCommunity;
