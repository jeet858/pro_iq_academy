import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/About Us _thumbnail.png";
import img2 from "../../../public/images/about_thumb_2.png";
import { GoCheckCircle } from "react-icons/go";
import Instructor from "./Instructor";
import ContactSection from "./ContectSection";
const AboutSection = () => {
  return (
    <div className="">
      <div className=" custom-font mt-36 flex items-center justify-center gap-4 text-5xl font-semibold">
        <span className=" text-[#037EF3]">Our Endeavour</span>
        <span className="text-[#FF8A00]">is -To Combine</span>
        <span className="text-[#FF4F81]">skills with</span>
        <span className="text-[#06965D]">education.</span>
      </div>
      <div className="mt-16 flex h-fit w-full justify-between  sm:flex-col sm:p-12 md:flex-row lg:p-16">
        <div className="flex flex-col gap-y-4 sm:w-full lg:w-1/2">
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
        <div className="relative mt-8 flex items-center sm:h-[452px] sm:w-[514px] md:h-[552px] md:w-[614px] lg:h-[552px] lg:w-[614px]">
          <div
            className="animate-box absolute bg-[#FF6E65F7] sm:right-[145px] sm:top-[45px] sm:h-32 sm:w-32 md:-right-[25px] md:top-[95px] md:h-32 md:w-32 lg:right-0 lg:top-0 lg:h-64 lg:w-64"
            style={{
              animation:
                "moveOutward 4s linear infinite, moveInward 4s linear infinite alternate ",
            }}
          ></div>

          <div
            className="animate-box absolute bg-[#FF4F8185] sm:-left-[50px] sm:bottom-[45px] sm:h-32 sm:w-32 md:-left-[25px] md:bottom-[95px] lg:bottom-0 lg:left-0 lg:h-64 lg:w-64"
            style={{
              animation:
                "moveInward 24s linear infinite , moveOutward 4s linear infinite alternate ",
            }}
          ></div>

          <Image
            src={img1}
            alt=""
            className=" relative z-10 sm:h-fit sm:w-[314px] lg:ml-16 lg:h-[402px] lg:w-[464px]"
          />
        </div>
      </div>
      <div
        className=" relative inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("./images/8.jpg")',
        }}
      >
        <div className="flex h-fit bg-[#d9d9d9c3]  sm:flex-col sm:gap-y-8 sm:p-8 md:gap-8 md:p-12  lg:flex-row lg:gap-32">
          <div className="  outline-dashed outline-offset-[12px] outline-[#06965D] sm:h-[300px] sm:w-[360px] md:h-[383px] md:w-[453px]">
            <Image
              src={img2}
              alt=""
              className="sm:h-[300px] sm:w-[360px] md:h-[383px] md:w-[453px] "
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
