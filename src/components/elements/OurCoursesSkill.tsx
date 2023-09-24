import React from "react";
import icon1 from "../../../public/images/busy-female-teenager-reads-book-uses-table-lamp.jpg";
import icon2 from "../../../public/images/brain-study-background-mental-health-care-medical-technology.jpg";
import icon3 from "../../../public/images/reload-reset-technology-update-digital.jpg";
import icon4 from "../../../public/images/person-pressing-power-button.jpg";
import icon5 from "../../../public/images/student-online-cute-girl-glasses-sweater-studying-computer-writing-down-notes.jpg";
import icon6 from "../../../public/images/low-angle-businesswoman-posing-with-arms-crossed-outdoors.jpg";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const OurCoursesSkill = () => {
  return (
    <div className="h-fit w-full p-8">
      <h1 className=" mb-16 flex w-full flex-col items-center justify-center font-[Prata] text-2xl font-semibold text-[#233D63]">
        <span>Skills</span>
      </h1>
      <div className="flex flex-col space-y-16">
        <div className=" flex h-fit w-full items-center justify-evenly   sm:flex-col   md:flex-col  lg:flex-row ">
          <div className="flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]  ">
            <div className="flex ">
              <Image src={icon1} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                Concentration
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                Learn in- demand skills that prepare you for an entry level job.
              </span>
              <div className="flex justify-between">
                <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                  READ MORE
                  <BsArrowRight />
                </button>
                <p>$60</p>
              </div>
            </div>
          </div>
          <div className="flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]   ">
            <div className="flex ">
              <Image src={icon2} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                Memory Retention
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                It is the best way to make progress towards human-level AI.
              </span>
              <div className="flex justify-between">
                <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                  READ MORE
                  <BsArrowRight />
                </button>
                <p>$60</p>
              </div>
            </div>
          </div>
          <div className="flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]  ">
            <div className="flex ">
              <Image src={icon3} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                Recalling Ability
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                Learn Python programming online with courses like Python for
                everybody.
              </span>
              <div className="flex justify-between">
                <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                  READ MORE
                  <BsArrowRight />
                </button>
                <p>$60</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex h-fit w-full items-center justify-evenly  sm:flex-col  md:flex-col  lg:flex-row ">
            <div className="flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]  ">
              <div className="flex ">
                <Image src={icon4} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  Observation Power
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  Gain the job ready skills for an entry-level data analyst.
                </span>
                <div className="flex justify-between">
                  <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                    READ MORE
                    <BsArrowRight />
                  </button>
                  <p>$60</p>
                </div>
              </div>
            </div>
            <div className="flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]  ">
              <div className="flex ">
                <Image src={icon5} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  Listening Skill
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  The Deep learning Specialization provides a pathway.
                </span>
                <div className="flex justify-between">
                  <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                    READ MORE
                    <BsArrowRight />
                  </button>
                  <p>$60</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-[20rem] flex-col items-center justify-center space-y-16 sm:h-[30rem] lg:h-[20rem]  ">
              <div className="flex ">
                <Image src={icon6} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  Confidence
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  Data Science courses or pay to earn a course or Specialization
                  Certificate.
                </span>
                <div className="flex justify-between">
                  <button className="text-md flex flex-row font-semibold text-[#233D63] hover:text-sm hover:font-bold hover:text-[#94C025]">
                    READ MORE
                    <BsArrowRight />
                  </button>
                  <p>$60</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesSkill;
