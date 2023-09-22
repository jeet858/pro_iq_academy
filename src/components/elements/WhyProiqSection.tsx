import React from "react";
import Image from "next/image";
import v from "public/images/medium-shot-graduate-student.jpg";
import BannerSection from "./BannerSection";

const WhyProiqSection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Why ProIQ" />
      <div className="flex flex-row px-24 space-x-10 justify-between">
        <div>
          <div className="text-[140px] font-['Prompt']">4.6</div>
          <div className="text-[40px] font-['Prompt'] w-96 font-bold">3,360 Rateings institution Apporoved</div>
        </div>
        <div>
          <div className="text-[140px] font-['Prompt']">A+</div>
          <div className="text-[40px] font-['Prompt'] w-96 font-bold">85 teachers reviews BBB Rating</div>
        </div>
        <div className="text-[45px] font-['Prompt'] w-96 font-bold pt-14"> Trusted by over 35,000 students worldwide since 2002</div>
      </div>
      <div className="font-['Prata'] justify-center items-center flex pt-11 text-7xl">Why Choose Us</div>
      <div className="flex h-fit w-full flex-col space-y-32 py-10">
        <div className="flex basis-1/2 flex-row ">
          <div className="flex basis-1/2 flex-col space-y-32">
            <div className="basis-1/2 bg-cover bg-center items-center justify-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
              Pro IQ Academy offers Skill Based Educational Programme that can ease the development of your child in various aspect of life
              </span>
            </div>
            <div className="basis-1/2 bg-cover items-center justify-center bg-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
                Latest Advanced Scientific Skill Based ProIQ Abacus ( Mental Math and Advanced Skill Development Programme ) helps your children to learn with pleasure not under pressure
              </span>
            </div>
            <div className="basis-1/2 bg-cover items-center justify-center bg-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2d w-[500px] font-['Gilroy-Medium']">
              Develops Your Child’s Reading & Writing Skills, Numerical Ability, Observation Power , Memory Retention and overall Intelligence
              </span>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col space-y-32">
            <div className="basis-1/2 bg-cover bg-center items-center justify-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
              Trained, competed, experienced course instructors. Small batch with a teacher student ration 1:10 for Individual Attention
              </span>
            </div>
            <div className="basis-1/2 bg-cover bg-center items-center justify-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
              Trained, competed, experienced course instructors. Small batch with a teacher student ration 1:10 for Individual Attention
              </span>
            </div>
            <div className="basis-1/2 bg-cover bg-center items-center justify-center bg-no-repeat flex flex-col space-y-10">
              <Image src={v} alt="" className="basis-1/2 w-[500px]"/>
              <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
              Offers Low Course Fees structure. Online and Offline classes are available.
              </span>
            </div>
          </div>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center bg-cover bg-center bg-no-repeat space-y-10">
          <Image src={v} alt="" className="basis-1/2 w-[500px]" />
          <span className="basis-1/2 w-[500px] font-['Gilroy-Medium']">
          ProIQ Abacus improves your child's performance 5times better*
          </span>
        </div>
      </div>
    </div>
  );
};
export default WhyProiqSection;
