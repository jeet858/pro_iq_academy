import React from "react";
import icon1 from "../../../public/images/DSC_2386(1).jpg";
import icon2 from "../../../public/images/a (10).jpg";
import icon3 from "../../../public/images/a (6).jpg";
import icon4 from "../../../public/images/a (2).jpg";
import icon5 from "../../../public/images/ready-back-school (1).jpg";
import icon6 from "../../../public/images/a (1).jpg";
import icon7 from "../../../public/images/a (12).jpg";
import icon8 from "../../../public/images/high-angle-girl-playing-home.jpg";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const OurCoursesSkill = () => {
  return (
    <div className="h-fit w-full p-8">
      <h1 className=" mb-16 flex w-full flex-col items-center justify-center font-[Prata] text-2xl font-semibold text-black">
        <span>Skills Developed By Learning Abacus</span>
      </h1>
      <div className="flex flex-col space-y-16">
        <div className=" flex h-fit w-full items-center justify-center gap-6   sm:flex-col   md:flex-col  lg:flex-row ">
          <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col  items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#FF72C6] p-6 transition-transform  hover:scale-105  ">
            <div className="flex ">
              <Image src={icon1} alt="" className="h-[12rem] w-[18rem] " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Concentration
              </span>

              <Link href={"/Abacus"}>
                <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                  READ MORE
                  <BsArrowRight className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#C9F175] p-6 transition-transform hover:scale-105 ">
            <div className="flex ">
              <Image src={icon2} alt="" className="h-[12rem] w-[18rem]" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Memory Retention
              </span>

              <Link href={"/Abacus"}>
                <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                  READ MORE
                  <BsArrowRight className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#8EE9F5] p-6 transition-transform hover:scale-105 ">
            <div className="flex ">
              <Image src={icon3} alt="" className="h-[12rem] w-[18rem] " />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                Recalling Ability
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
            <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#F2EC5B] p-6 transition-transform hover:scale-105  ">
              <div className="flex ">
                <Image src={icon4} alt="" className="h-[12rem] w-[18rem] " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Observation Power
                </span>

                <Link href={"/Abacus"}>
                  <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                    READ MORE
                    <BsArrowRight className="ml-3 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#A1A5FA] p-6 transition-transform hover:scale-105 ">
              <div className="flex ">
                <Image src={icon5} alt="" className="h-[12rem] w-[18rem]" />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Listening Skill
                </span>

                <Link href={"/Abacus"}>
                  <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                    READ MORE
                    <BsArrowRight className="ml-3 mt-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#EEB764] p-6 transition-transform hover:scale-105 ">
              <div className="flex ">
                <Image src={icon6} alt="" className="h-[12rem] w-[18rem] " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-black">
                  Confidence
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
      <h1 className=" mb-16 mt-16 flex w-full flex-col items-center justify-center font-[Prata] text-2xl font-semibold text-black">
        <span>Other Courses</span>
      </h1>
      <div className=" flex h-fit w-full items-center justify-center gap-6   sm:flex-col   md:flex-col  lg:flex-row ">
        <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col  items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#06965D] p-6 transition-transform  hover:scale-105 ">
          <div className="flex ">
            <Image src={icon7} alt="" className="h-[12rem] w-[18rem] " />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-[Palanquin Dark] text-lg font-bold text-black">
              Spoken English Courses
            </span>

            <Link href={"/spoken-english"}>
              <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                READ MORE
                <BsArrowRight className="ml-3 mt-1" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex h-[23rem] w-[20rem] scale-100 transform flex-col items-center justify-center space-y-16 rounded-br-[27px] rounded-tl-[27px] bg-[#FF6E65] p-6 transition-transform hover:scale-105 ">
          <div className="flex ">
            <Image src={icon8} alt="" className="h-[12rem] w-[18rem] " />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-[Palanquin Dark] text-lg font-bold text-black">
              Handwriting Improvement Courses
            </span>

            <Link href={"/Handwriting"}>
              <button className="text-md flex flex-row font-semibold text-black hover:text-sm hover:font-bold hover:text-orange-800">
                READ MORE
                <BsArrowRight className="ml-3 mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesSkill;
