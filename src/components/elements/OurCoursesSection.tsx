import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/courses_thumb_1.png";
import img2 from "../../../public/images/team_2.png";

import OurCoursesSkill from "./OurCoursesSkill";
import { BiSolidCircle } from "react-icons/bi";
import BannerSection from "./BannerSection";
import DiscoverSection from "./DiscoverSection";

const OurCoursesSection = () => {
  return (
    <div className="h-fit">
      <BannerSection
        paragraphText="OUR COURSES"
        imageSrc="/images/banner.jpg"
      />
      <div className="h-fit w-full p-8">
        <h1 className="flex flex-col  items-center justify-center font-bold text-[#233D63] sm:text-lg md:text-2xl">
          <span>Start one of our highest quality</span>
          <span>courses from the country!</span>
        </h1>
        <div className="flex h-fit w-full items-center justify-center gap-12 space-x-4 p-8 sm:flex-col md:flex-row">
          <div className="flex items-end gap-12  space-y-4 sm:h-1/2 sm:flex-col-reverse md:w-1/2 md:flex-col">
            <h1 className="flex h-fit w-fit flex-col gap-4 font-[Prata] text-[#233D63] lg:pl-36">
              <span className="flex gap-4 text-[#3172D0] sm:text-lg md:text-xl lg:text-3xl">
                <div className="mt-2 flex items-start justify-center text-center text-xl text-[#3172D0]">
                  <BiSolidCircle />
                </div>
                Course is designed for 16 weeks per level on an average
              </span>

              <span className="flex gap-4  text-[#3172D0] sm:text-lg md:text-xl lg:text-3xl">
                <div className="mt-2 flex items-start justify-center text-center text-xl text-[#3172D0]">
                  <BiSolidCircle />
                </div>
                Weekly 2 hrs. class
              </span>
              <span className="flex gap-4  text-[#3172D0] sm:text-lg md:text-xl lg:text-3xl">
                <div className="mt-2 flex items-start justify-center text-center text-xl text-[#3172D0]">
                  <BiSolidCircle />
                </div>
                Teacher Student ratio 1:10
              </span>
            </h1>
            <div className="">
              <Image
                src={img2}
                alt=""
                className="h-fit sm:w-fit lg:w-[500px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-12 space-y-4 md:w-1/2">
            <div className="">
              <Image
                src={img1}
                alt=""
                className="h-fit sm:w-fit lg:w-[500px] "
              />
            </div>
            <h1 className="flex h-fit w-[80%] flex-col  border-l-4 border-[#F64987] p-2">
              <span className="mb-4 font-[Prata] text-[#F64987] sm:text-lg md:text-xl lg:text-3xl">
                Level wise Performance Certificates are award after successful
                completion of each level
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4 p-8 lg:pl-[17rem]">
        <div className="flex w-fit border bg-[#D9D9D9] font-[Prata] text-3xl font-bold text-[#233D63]">
          <h1>Activities in Abacus Class</h1>
        </div>
        <div className="flex flex-col gap-2 font-[Gilroy-Regular] text-2xl text-[#233D63] ">
          <span>1) 100% time framed fun activity based class</span>
          <span>
            2) Students solve exercises from their book within fixed time
          </span>
          <span>
            3) Through Flash Cards , students identify numbers seeing image on
            cards
          </span>
          <span>4) Speed Writing Activities on numbers within a minute</span>
          <span>5) Oral Exercises on calculation are conducted</span>
        </div>
      </div>
      <div
        className="relative bg-[length:100%_100%]   bg-no-repeat"
        style={{ backgroundImage: 'url("./images/45.jpg")' }}
      >
        <div className="flex h-fit w-full flex-col bg-[#ff80807a] p-20">
          <h1 className="font-[Prata] text-white sm:text-2xl  lg:text-4xl">
            BENEFITS OF PROIQ ABACUS
          </h1>
          <p className="pt-8 font-[Gilroy-Regular] text-white sm:text-lg  lg:text-2xl">
            Now a days, your child's favorite cartoon characters on mobile can
            lower his/her concentration to studies . Engaging him/her in Pro IQ
            Abacus programme is directly associated with better results.
            Learning is highly enjoyable with Pro IQ Abacus and removes fear of
            math in kids. Pro IQ Abacus is a great support to help kids
            instilling Love for Learning. Pro IQ Abacus also improves academic
            performance with other skills such as:
          </p>
        </div>
      </div>
      <OurCoursesSkill />
      <DiscoverSection />
    </div>
  );
};

export default OurCoursesSection;
