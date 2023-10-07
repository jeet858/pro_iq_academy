import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";
import StudentBox from "./StudentBox";

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

  const studentData = [
    {
      name: "Mohan Singh",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "PRO IQ Academy has transformed my child's abilities with their mental math and skill development program. The instructors are experienced, and the small batches ensure personalized attention. Affordable fees and online/offline classes make it convenient.",
    },
    {
      name: "Shalini Sharma",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "Choosing PRO IQ Academy was the best decision for my child's education. Their focus on reading, writing, and observation skills has improved overall intelligence. The instructors are skilled, and the evaluations are fun and engaging.",
    },
    {
      name: "Tarun Shrivastava",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "PRO IQ Academy offers an excellent learning experience. My child's numerical ability and critical thinking skills have improved significantly. The academy's emphasis on clean handwriting and English communication has boosted confidence. Highly recommended!.",
    },
    {
      name: "Mohan Singh",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "PRO IQ Academy has transformed my child's abilities with their mental math and skill development program. The instructors are experienced, and the small batches ensure personalized attention. Affordable fees and online/offline classes make it convenient.",
    },
    {
      name: "Shalini Sharma",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "Choosing PRO IQ Academy was the best decision for my child's education. Their focus on reading, writing, and observation skills has improved overall intelligence. The instructors are skilled, and the evaluations are fun and engaging.",
    },
    {
      name: "Tarun Shrivastava",
      role: "Parent",
      imageSrc: "/images/image-3.jpg",
      description:
        "PRO IQ Academy offers an excellent learning experience. My child's numerical ability and critical thinking skills have improved significantly. The academy's emphasis on clean handwriting and English communication has boosted confidence. Highly recommended!.",
    },
  ];

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
          {studentData.map((student, index) => (
            <div key={index} className="mt-12">
              <StudentBox
                name={student.name}
                email={student.role}
                imageSrc={student.imageSrc}
                description={student.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StudentCommunity;
