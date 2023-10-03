import React from "react";
import BannerSection from "./BannerSection";
import Image from "next/image";
import img from "../../../public/images/Mask group.png";
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
const AbacusSection = () => {
  return (
    <div className="h-fit">
      <BannerSection
        paragraphText="Abacus"
        imageSrc="/images/banner_test.jpg"
      />
      <div className="h-fit w-full ">
        <div className="flex w-full justify-between sm:flex-col sm:p-8 md:flex-row md:gap-5 lg:gap-10 lg:p-16">
          <div className="flex flex-col gap-y-5">
            <p className="font-[Montserrat] text-xl">
              Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
              erat dignissim. Sed quis rutrum tellus, sit amet viverra felis.
              Cras sagittis sem sit amet urna feugiat rutrum.
            </p>
            <div>
              <Image src={img} alt="" className="h-fit w-fit" />
            </div>
            <div className="flex justify-between sm:flex-col lg:flex-row">
              <div className="flex flex-col gap-y-5">
                <h1 className="font-[Montserrat] text-6xl">Teacher</h1>
                <h1 className="font-[Montserrat] text-xl">Name Surname</h1>
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="font-[Montserrat] text-6xl">Course Fee</h1>
                <h1 className="font-[Montserrat] text-xl">INR 1200 / month</h1>
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-col rounded-[25px] border-2 sm:w-[20rem] md:w-[30rem]  ">
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Start Date
              </span>
              <span className="font-[Montserrat] text-lg">Jan 12, 2024</span>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Age Group
              </span>
              <span className="font-[Montserrat] text-lg">2 - 12 Years</span>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Class Size
              </span>
              <span className="font-[Montserrat] text-lg">30</span>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Class Duration
              </span>
              <span className="font-[Montserrat] text-lg">9 am - 11 am</span>
            </div>
            <div className="flex justify-between border-b sm:p-7 md:p-4 lg:p-7">
              <div className="flex flex-col gap-y-2 ">
                <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                  Curriculum
                </span>
                <span className="font-[Montserrat] text-lg">Download File</span>
              </div>
              <div className="flex items-center justify-center md:text-xl lg:text-3xl">
                <BiSolidDownload />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Review
              </span>
              <span className="flex gap-2 text-xl">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 p-16">
          <div className="flex flex-col gap-y-3">
            <span className="font-[Montserrat] text-4xl font-semibold">
              Course Description
            </span>
            <span className="font-[Montserrat] text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
          </div>
          <div className="flex flex-col gap-y-3 ">
            <span className="font-[Montserrat] text-4xl font-semibold">
              Certificate
            </span>
            <span className="font-[Montserrat] text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbacusSection;
