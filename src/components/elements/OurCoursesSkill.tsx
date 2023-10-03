import React from "react";
import icon1 from "../../../public/images/concentration.jpg";
import icon2 from "../../../public/images/memory.jpg";
import icon3 from "../../../public/images/recalling.jpg";
import icon4 from "../../../public/images/observation.png";
import icon5 from "../../../public/images/listening skill.jpg";
import icon6 from "../../../public/images/confidence.jpg";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const OurCoursesSkill = () => {
  return (
    <div className="h-fit w-full p-8">
      <h1 className=" mb-16 flex w-full flex-col items-center justify-center font-[Prata] text-2xl font-semibold text-black">
        <span>Skills</span>
      </h1>
      <div className="flex flex-col space-y-16">
        <div className=" flex h-fit w-full items-center justify-center gap-6   sm:flex-col   md:flex-col  lg:flex-row ">
          <div className="flex w-[20rem] scale-100 transform flex-col items-center  justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#FF72C6] p-6 transition-transform hover:scale-105  lg:h-fit  ">
            <div className="flex ">
              <Image src={icon1} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Concentration
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                Learn in- demand skills that prepare you for an entry level job.
              </span>
              <Link href={"/Abacus"}>
                <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                  READ MORE
                  <BsArrowRight className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#C9F175] p-6 transition-transform hover:scale-105 lg:h-fit ">
            <div className="flex ">
              <Image src={icon2} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Memory Retention
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                It is the best way to make progress towards human-level AI.
              </span>
              <Link href={"/Abacus"}>
                <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                  READ MORE
                  <BsArrowRight className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#8EE9F5] p-6 transition-transform hover:scale-105 lg:h-fit ">
            <div className="flex ">
              <Image src={icon3} alt="" className="h-fit w-fit " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Recalling Ability
              </span>
              <span className="font-[Palanquin] text-sm text-[#485261] ">
                Learn Python programming online with courses like Python for
                everybody.
              </span>
              <Link href={"/Abacus"}>
                <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                  READ MORE
                  <BsArrowRight className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex h-fit w-full items-center justify-center gap-6  sm:flex-col  md:flex-col  lg:flex-row ">
            <div className="flex w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#F2EC5B] p-6 transition-transform hover:scale-105 lg:h-fit  ">
              <div className="flex ">
                <Image src={icon4} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Observation Power
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  Gain the job ready skills for an entry-level data analyst.
                </span>
                <Link href={"/Abacus"}>
                  <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                    READ MORE
                    <BsArrowRight className="ml-3 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#A1A5FA] p-6 transition-transform hover:scale-105 lg:h-fit ">
              <div className="flex ">
                <Image src={icon5} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Listening Skill
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  The Deep learning Specialization provides a pathway.
                </span>
                <Link href={"/Abacus"}>
                  <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                    READ MORE
                    <BsArrowRight className="ml-3 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#EEB764] p-6 transition-transform hover:scale-105 lg:h-fit ">
              <div className="flex ">
                <Image src={icon6} alt="" className="h-fit w-fit " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Confidence
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  Data Science courses or pay to earn a course or Specialization
                  Certificate.
                </span>
                <Link href={"/Abacus"}>
                  <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                    READ MORE
                    <BsArrowRight className="ml-3 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesSkill;
