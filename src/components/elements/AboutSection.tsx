import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/about_thumbnail.png";
import img2 from "../../../public/images/about_thumb_2.png";
import { GoCheckCircle } from "react-icons/go";
import Instructor from "./Instructor";
import ContactSection from "./ContectSection";
const AboutSection = () => {
  return (
    <div className="">
      <div className="mt-16 flex h-fit w-full justify-between  sm:flex-col sm:p-12 md:flex-row lg:p-28">
        <div className="flex flex-col gap-y-4 sm:w-full lg:w-1/2">
          <p className="font-[Montserrat] font-semibold text-[#FF8A00]">
            Who We Are
          </p>
          <h1 className="font-[Montserrat] font-semibold sm:text-3xl lg:text-5xl">
            We Create New
          </h1>
          <p className="mt-4 font-[Montserrat] text-lg text-[#707070]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <p className="flex font-[Montserrat] text-lg font-semibold">
              Best Learning School for Kids
            </p>
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <p className="flex font-[Montserrat] text-lg font-semibold">
              Best Learning School for Kids
            </p>
          </div>{" "}
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <p className="flex font-[Montserrat] text-lg font-semibold">
              Best Learning School for Kids
            </p>
          </div>{" "}
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <p className="flex font-[Montserrat] text-lg font-semibold">
              Best Learning School for Kids
            </p>
          </div>{" "}
          <div className="flex gap-4 ">
            <div className="">
              <GoCheckCircle className="text-2xl text-[#FF6E65F7]" />
            </div>
            <p className="flex font-[Montserrat] text-lg font-semibold">
              Best Learning School for Kids
            </p>
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <Image
            src={img1}
            alt=""
            className="md:h-fit md:w-[514px] lg:h-[452px] lg:w-[514px]"
          />
        </div>
      </div>
      <div
        className=" relative inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("./images/8.jpg")',
        }}
      >
        <div className="flex h-fit bg-[#d9d9d9c3]  p-12 sm:flex-col md:gap-8  lg:flex-row lg:gap-32">
          <div className="  h-[383px] w-[453px] outline-dashed outline-offset-[12px] outline-[#06965D]">
            <Image src={img2} alt="" className="h-[383px] w-[453px] " />
          </div>
          <div className=" flex basis-1/2 flex-col gap-y-4">
            <div className="font-[Montserrat] text-3xl font-bold">
              <h1>With Efficiency to</h1>
              <h1> More Opportunities</h1>
            </div>
            <div className="gap-y-2 font-[Montserrat] text-xl text-[#333333]">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more
              </p>
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
