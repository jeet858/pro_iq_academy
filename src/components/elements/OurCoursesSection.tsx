import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/oc2.jpg";
import img2 from "../../../public/images/oc1.jpg";
import img3 from "../../../public/images/oc3.jpg";
import icon1 from "../../../public/images/knowledge.png";
import icon2 from "../../../public/images/ai.png";
import icon3 from "../../../public/images/python.png";
import icon4 from "../../../public/images/analyst.png";
import icon5 from "../../../public/images/deep-learning.png";
import icon6 from "../../../public/images/data-science.png";

import { BsArrowRight } from "react-icons/bs";
const OurCoursesSection = () => {
  return (
    <div className="h-fit">
      <div className="relative h-[25rem] bg-cover bg-center bg-no-repeat">
        <div>
          <Image
            src="/images/22.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="relative ml-32 pt-32 text-4xl font-bold text-[#FF6E65]">
          Our Courses
        </p>
      </div>
      <div className="h-fit w-full p-8">
        <h1 className="flex flex-col  items-center justify-center font-bold text-[#233D63] sm:text-lg md:text-2xl">
          <span>Start one of our highest quality</span>
          <span>courses from the country!</span>
        </h1>
        <div className="flex h-fit w-full items-center justify-center gap-12 space-x-4 p-8 sm:flex-col md:flex-row">
          <div className="flex flex-col items-end gap-12 space-y-4 sm:h-1/2 md:w-1/2">
            <h1 className="flex h-[10rem] w-fit flex-col border-r-8 border-[#94C025] p-2">
              <span className="text-3xl">Create Online </span>
              <span className="text-3xl">Courses</span>
              <span className="text-sm">Learn in- demand skills that</span>
              <span className="text-sm">
                prepare you for an entry level job.
              </span>
            </h1>
            <div className="border-8 border-[#233D63]">
              <Image
                src={img1}
                alt=""
                className="h-[310px] w-[299px] p-[10px]"
              />
            </div>
            <h1 className="flex h-[10rem] w-fit flex-col border-r-8 border-[#94C025] p-2">
              <span className="text-3xl">Deliver </span>
              <span className="text-3xl">learning</span>
              <span className="text-sm">Learn in- demand skills that</span>
              <span className="text-sm">
                prepare you for an entry level job.
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-start gap-12 space-y-4 md:w-1/2">
            <div className="border-8 border-[#233D63]">
              <Image
                src={img2}
                alt=""
                className="h-[310px]  w-[299px] p-[10px]"
              />
            </div>
            <h1 className="flex h-[10rem] w-fit flex-col  border-l-8 border-[#94C025] p-2">
              <span className="mb-4 text-3xl">Tutoring Online </span>

              <span className="text-sm">Learn in- demand skills that</span>
              <span className="text-sm">
                prepare you for an entry level job.
              </span>
            </h1>
            <div className="border-8 border-[#233D63]">
              <Image
                src={img3}
                alt=""
                className="h-[310px] w-[299px] p-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-full p-8">
        <h1 className="flex flex-col  items-center justify-center text-2xl font-bold text-[#233D63]">
          <span>Popular</span>
          <span>Certificates</span>
        </h1>
        <div className="flex flex-col">
          <div className=" flex h-fit w-full items-center justify-center sm:flex-col sm:space-y-4 sm:p-8 md:flex-col md:space-y-4 md:p-16 lg:flex-row lg:space-x-4">
            <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
              <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                <Image src={icon1} alt="" className="h-[90px] w-[90px] " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  It Support
                </span>
                <span className="font-[Palanquin] text-sm text-[#485261] ">
                  Learn in- demand skills that prepare you for an entry level
                  job.
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
            <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
              <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                <Image src={icon2} alt="" className="h-[90px] w-[90px] " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  Mechine Learning
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
            <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
              <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                <Image src={icon3} alt="" className="h-[90px] w-[90px] " />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                  python
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
            <div className=" flex h-fit w-full items-center justify-center  sm:flex-col sm:space-y-4 sm:p-8 md:flex-col md:space-y-4 md:p-16 lg:flex-row lg:space-x-8">
              <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
                <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                  <Image src={icon4} alt="" className="h-[90px] w-[90px] " />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                    Data Analyst
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
              <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
                <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                  <Image src={icon5} alt="" className="h-[90px] w-[90px] " />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                    Deep Learning
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
              <div className="flex h-[20rem] w-[20rem] flex-col items-center justify-center space-y-16  ">
                <div className="flex h-[6rem] w-[6rem]  rounded-lg bg-[#C0EC33]">
                  <Image src={icon6} alt="" className="h-[90px] w-[90px] " />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-[Palanquin Dark] text-lg font-bold text-[#233D63]">
                    Data Science
                  </span>
                  <span className="font-[Palanquin] text-sm text-[#485261] ">
                    Data Science courses or pay to earn a course or
                    Specialization Certificate.
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
    </div>
  );
};

export default OurCoursesSection;
