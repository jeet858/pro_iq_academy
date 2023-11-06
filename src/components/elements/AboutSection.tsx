import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/DSC_2306(1).jpg";
import img2 from "../../../public/images/a (6).jpg";
import { GoCheckCircle } from "react-icons/go";
import Instructor from "./Instructor";
import ContactSection from "./ContectSection";
const AboutSection = () => {
  return (
    <div className="">
      <div className=" custom-font flex items-center justify-center font-semibold sm:mt-8 sm:gap-1 sm:text-sm md:mt-16 md:gap-4 md:text-2xl xl:text-5xl">
        <span className=" text-[#037EF3]">Our Endeavour</span>
        <span className="text-[#FF8A00]">is -To Combine</span>
        <span className="text-[#FF4F81]">Skills with</span>
        <span className="text-[#06965D]">Education.</span>
      </div>
      <div className=" flex h-fit w-full   sm:flex-col sm:p-12 lg:flex-row lg:p-16">
        <div className="flex flex-col gap-y-4 sm:w-full lg:w-[50%]">
          <p className="font-[Montserrat] font-semibold text-[#FF8A00]">
            About Us
          </p>
          <h1 className="font-[Montserrat] font-semibold sm:text-3xl lg:text-5xl">
            Who We Are
          </h1>
          <p className="mt-4 font-[Montserrat] text-lg text-[#707070]">
            Pro IQ Academy is a renowned institute dedicated to fostering the
            self-skill development of children. With a team of dynamic and
            experienced professionals, we are committed to providing
            value-based, advanced education that empowers young learners. ProIQ
            Academy has rich experience in finding out basic problems in
            children and developing skill based education among them. We offer a
            wide range of courses, including the highly effective Pro IQ Abacus,
            An Advance Abacus Skill Development Programme, which has proven to
            be immensely beneficial for students in the age group of 4-14 years.
            Additionally, we are specialized in Speed Writing Course,
            Handwriting Improvement Course, and Spoken English Course, all aimed
            at equipping kids with essential skill based education
          </p>
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <div className="flex flex-col">
              <p className="flex font-[Montserrat] text-lg font-semibold">
                AIM
              </p>
              <p>
                At Pro IQ Academy, our aim is to provide comprehensive
                skill-based education, empowering students with cognitive
                abilities, critical thinking, creativity, and personal
                development for a successful future.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center sm:h-[352px] sm:w-[514px] md:h-[552px] md:w-full md:justify-center lg:h-[552px] lg:w-[650px]">
          <div
            className="animate-box absolute bg-[#FF6E65F7] sm:right-[145px] sm:top-[40px] sm:h-28 sm:w-32 md:-right-[25px] md:top-[7px] md:h-48 md:w-48 lg:right-[-115px] lg:top-0 lg:h-64 lg:w-64"
            style={{
              animation:
                "moveOutward 4s linear infinite, moveInward 4s linear infinite alternate ",
            }}
          ></div>

          <div
            className="animate-box absolute bg-[#FF4F8185] sm:-left-[50px] sm:bottom-[40px] sm:h-28 sm:w-32 md:-left-[25px] md:bottom-[7px] md:h-48 md:w-48 lg:bottom-0 lg:left-0 lg:h-64 lg:w-64"
            style={{
              animation:
                "moveInward 24s linear infinite , moveOutward 4s linear infinite alternate ",
            }}
          ></div>

          <Image
            src={img1}
            alt=""
            className=" relative z-0 sm:h-fit sm:w-[290px] md:h-[380px] md:w-[700px] lg:ml-16 lg:w-[650px]"
          />
        </div>
      </div>
      <div
        className=" relative inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("./images/45.jpg")',
        }}
      >
        <div className="flex h-fit bg-[#d9d9d9c3]  sm:flex-col sm:gap-y-8 sm:p-8 md:gap-8 md:p-12  lg:flex-row lg:gap-32">
          <div className="  outline-dashed outline-offset-[12px] outline-[#06965D] sm:h-[260px] sm:w-[300px] md:h-[383px] md:w-[453px] lg:h-[400px] lg:w-[400px]">
            <Image
              src={img2}
              alt=""
              className="sm:h-[260px] sm:w-[300px] md:h-[383px] md:w-[453px] lg:h-[400px] lg:w-[400px]"
            />
          </div>
          <div className="flex basis-1/2 flex-col gap-y-6">
            <div className=" flex  flex-col gap-y-4">
              <div className="font-[Montserrat] text-3xl font-bold">
                <h1>MISSION</h1>
              </div>
              <div className="gap-y-2 font-[Montserrat] text-xl text-[#333333]">
                <p>
                  Our mission is to blend skills, education, and
                  character-building to unlock the full potential of every
                  student. Through our innovative approach, we strive to create
                  a learning environment that nurtures growth, fosters
                  creativity, and instils strong values.
                </p>
              </div>
            </div>
            <div className=" flex  flex-col gap-y-4">
              <div className="font-[Montserrat] text-3xl font-bold">
                <h1>VISSION</h1>
              </div>
              <div className="gap-y-2 font-[Montserrat] text-xl text-[#333333]">
                <p>
                  With a vision to become a leading institute, we aim to inspire
                  admiration by spreading the values of education, integrity,
                  and fun through our young students. Our ultimate goal is to
                  promote skill-based education and ensure that every student
                  receives the necessary tools for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instructor />
      <ContactSection />
    </div>
  );
};

export default AboutSection;
