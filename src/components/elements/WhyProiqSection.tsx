import React from "react";
import Image from "next/image";

import BannerSection from "./BannerSection";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import img1 from "public/images/30.jpg";
import img2 from "public/images/learning-science.jpg";
import img3 from "public/images/portrait-mature-woman-journalist-sitting-table.jpg";
import img4 from "public/images/tutor-explaining-research-specific-student-library.jpg";
import img5 from "public/images/team-getting-ready-play-football.jpg";
import img6 from "public/images/wooden-cubes-arrangement.jpg";
import img7 from "public/images/cheerful-child-with-cardboard-wings.jpg";
import DiscoverSection from "./DiscoverSection";
const WhyProiqSection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Why ProIQ" />
      <div className="flex justify-between sm:flex-col sm:p-6 md:p-16 lg:flex-row lg:space-x-10">
        <div>
          <div className="font-['Prompt'] text-[100px]">4.6</div>
          <div className="flex text-2xl text-[#FFBF1C]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BiSolidStarHalf />
          </div>
          <div className="font-['Prompt'] text-[30px] font-bold sm:w-full md:w-96">
            3,360 Rateings institution Apporoved
          </div>
        </div>
        <div>
          <div className="font-['Prompt'] text-[100px]">A+</div>
          <div className="flex text-2xl text-[#FFBF1C]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="font-['Prompt'] text-[30px] font-bold sm:w-full md:w-96">
            85 teachers reviews BBB Rating
          </div>
        </div>
        <div className="pt-14 font-['Prompt'] text-[40px] font-bold sm:w-full md:w-96">
          {" "}
          Trusted by over 35,000 students worldwide since 2002
        </div>
      </div>
      <div className="flex items-center justify-center pt-11 font-['Prata'] text-5xl">
        Why Choose Us
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-y-16  p-16">
        <div className="flex h-fit justify-around sm:w-full sm:flex-col sm:gap-y-8 md:w-[70%] md:flex-row md:gap-y-0 ">
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img1} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Pro IQ Academy offers Skill Based Educational Programme that can
                ease the development of your child in various aspect of life
              </span>
            </div>
          </div>
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img2} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Latest Advanced Scientific Skill Based ProIQ Abacus ( Mental
                Math and Advanced Skill Development Programme ) helps your
                children to learn with pleasure not under pressure
              </span>
            </div>
          </div>
        </div>
        <div className="sm;w-full flex h-fit justify-around sm:flex-col sm:gap-y-8 md:w-[70%] md:flex-row md:gap-y-0 ">
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img3} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Develops Your Child’s Reading & Writing Skills, Numerical
                Ability, Observation Power , Memory Retention and overall
                Intelligence
              </span>
            </div>
          </div>
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img4} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Trained, competed, experienced course instructors. Small batch
                with a teacher student ration 1:10 for Individual Attention
              </span>
            </div>
          </div>
        </div>
        <div className="sm;w-full flex h-fit justify-around sm:flex-col sm:gap-y-8 md:w-[70%] md:flex-row md:gap-y-0 ">
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img5} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Organizes fun activities and various kid’s friendly competitions
                for evaluation of pupils
              </span>
            </div>
          </div>
          <div>
            <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
              <Image src={img6} alt="" className="md:w-[200px] lg:w-[400px]" />
              <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                Offers Low Course Fees structure. Online and Offline classes are
                available.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-fit w-full flex-row justify-center ">
            <div>
              <div className="flex  flex-col items-center justify-center space-y-10 bg-cover bg-center bg-no-repeat">
                <Image
                  src={img7}
                  alt=""
                  className="md:w-[200px] lg:w-[400px]"
                />
                <span className="basis-1/2 font-['Gilroy-Medium'] md:w-[200px] lg:w-[400px]">
                  Offers Low Course Fees structure. Online and Offline classes
                  are available.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscoverSection />
    </div>
  );
};
export default WhyProiqSection;
