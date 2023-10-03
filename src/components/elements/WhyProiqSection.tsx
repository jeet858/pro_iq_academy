import React from "react";
import Carousel from "./Carousel";
import img1 from "../../../public/images/Banner3.jpg";
import img2 from "../../../public/images/Banner3_why.png";
import img3 from "../../../public/images/about_thumb_2.png";

import Strength from "./Strength";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import BackgroundSection from "./BackgroundSection";
import Instructor from "./Instructor";
import ContactSection from "./ContectSection";
const WhyProiqSection = () => {
  const slides = [
    {
      imageSrc: img1,
      title: "Master the Skills to Drive your Career",
      buttonText: "Know More",
    },
    {
      imageSrc: img2,
      title: "ProIQ Academy is the best choice for everyone",
      buttonText: "Know More",
    },
  ];
  return (
    <div className="h-fit">
      <Carousel slides={slides} />
      <div className="mt-16">
        <Strength />
        <div className="flex sm:flex-col sm:p-4 md:gap-12  md:p-8 lg:flex-row lg:gap-28 lg:p-16">
          <div className="relative mt-8 flex items-center sm:h-[452px] sm:w-[514px] md:h-[552px] md:w-full md:justify-center lg:w-[814px]">
            <div
              className="animate-box absolute bg-[#FF4F8185] sm:-left-[50px] sm:bottom-[45px] sm:h-32 sm:w-32 md:bottom-[25px] md:left-[50px] md:h-48 md:w-48 lg:bottom-0 lg:left-0 lg:h-56 lg:w-56"
              style={{
                animation:
                  "moveInward 24s linear infinite , moveOutward 4s linear infinite alternate ",
              }}
            ></div>
            <div
              className="animate-box absolute bg-[#FF6E65F7] sm:right-[145px] sm:top-[45px] sm:h-32 sm:w-32 md:right-[70px] md:top-[20px] md:h-48 md:w-48 lg:-right-[90px] lg:top-0 lg:h-56 lg:w-56"
              style={{
                animation:
                  "moveOutward 4s linear infinite, moveInward 4s linear infinite alternate ",
              }}
            ></div>

            <Image
              src={img3}
              alt=""
              className=" relative z-10 sm:h-fit sm:w-[314px] md:h-[372px] md:w-[454px] lg:ml-16"
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
                available.
              </p>
            </div>
          </div>
        </div>
        <BackgroundSection title="ProIQ Abacus improves your child's performance 5times better*" />
        <Instructor />
        <ContactSection />
      </div>
    </div>
  );
};
export default WhyProiqSection;
