import React from "react";
import Carousel from "./Carousel";
import img1 from "../../../public/images/Banner3_why.jpg";

import img3 from "../../../public/images/13.jpg";

import Strength from "./Strength";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import BackgroundSection from "./BackgroundSection";
import Instructor from "./Instructor";
import ContactSection from "./ContectSection";
import BannerSection from "./BannerSection";
const WhyProiqSection = () => {
  const slides = [
    {
      imageSrc: img1,
      title: "Master the Skills to Drive your Education",
      buttonText: "Know More",
    },
  ];
  return (
    <div className="h-fit sm:pt-[55px] lg:pt-[100px]">
      <BannerSection
        paragraphText="WHY PROIQ"
        imageSrc="/images/Banner3_why.jpg"
        color="#012360"
      />
      <div className="mt-8">
        <Strength />
        <div className="flex sm:flex-col sm:p-4 md:gap-12  md:p-8 lg:flex-row lg:gap-28 lg:p-16">
          <div className="relative flex items-center  sm:h-[350px] sm:w-[514px] md:h-[552px] md:w-full md:justify-center lg:w-[814px]">
            <div
              className="animate-box absolute bg-[#FF4F8185] sm:-left-[50px] sm:bottom-[0px] sm:h-32 sm:w-32 md:bottom-[0px] md:left-[-27px] md:h-60 md:w-60 lg:bottom-0 lg:left-0 lg:h-56 lg:w-56"
              style={{
                animation:
                  "moveInward 24s linear infinite , moveOutward 4s linear infinite alternate ",
              }}
            ></div>
            <div
              className="animate-box absolute bg-[#FF6E65F7] sm:right-[145px] sm:top-[0px] sm:h-32 sm:w-32 md:right-[-27px] md:top-[0px] md:h-60 md:w-60 lg:-right-[90px] lg:top-0 lg:h-56 lg:w-56"
              style={{
                animation:
                  "moveOutward 4s linear infinite, moveInward 4s linear infinite alternate ",
              }}
            ></div>

            <Image
              src={img3}
              alt=""
              className=" relative z-0 sm:h-fit sm:w-[314px] md:h-[450px] md:w-[515px] lg:ml-16 lg:h-[450px] lg:w-[634px]  "
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="font-[Montserrat] text-4xl font-semibold">
              Why Choose Us
            </h1>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Pro IQ Academy offers Skill Based Educational Programme that can
                ease the development of your child in various aspect of life
              </p>
            </div>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Latest Advanced Scientific Skill Based ProIQ Abacus (Mental Math
                and Advanced Skill Development Programme ) helps your children
                to learn with pleasure not under pressure
              </p>
            </div>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Develops Your Child’s Reading & Writing Skills, Numerical
                Ability, Observation Power , Memory Retention and overall
                Intelligence
              </p>
            </div>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Trained, competed, experienced course instructors. Small batch
                with a teacher student ration 1:10 for Individual Attention
              </p>
            </div>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Organizes fun activities and various kid’s friendly competitions
                for evaluation of pupils
              </p>
            </div>
            <div className="flex gap-2">
              <div className="">
                <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
              </div>
              <p className="flex font-[Montserrat] text-lg font-semibold">
                Offers Low Course Fees structure. Online and Offline classes are
                available,
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-center gap-y-4 text-[#06965D]">
          <span className="text-3xl font-semibold">
            ProIQ Abacus improves your child's performance 5times better*
          </span>
          <span className="text-lg text-gray-400">
            * Terms & Conditions Applied
          </span>
        </div>
        <BackgroundSection title="" />
        <Instructor />
        <ContactSection />
      </div>
    </div>
  );
};
export default WhyProiqSection;
