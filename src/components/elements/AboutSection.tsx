import React from "react";
import Image from "next/image";
import Strength from "./Strength";
import { FiSend } from "react-icons/fi";
import img1 from "../../../public/images/bi.jpg";
import BannerSection from "./BannerSection";
const AboutSection = () => {
  return (
    <div>
      <div className="h-fit">
        <BannerSection paragraphText="About Us" />
      </div>
      <div className="flex items-center sm:h-fit sm:flex-col md:h-[34rem] md:flex-col lg:h-[28rem] lg:flex-row">
        <div className="flex flex-col items-center space-y-1">
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-xl text-[#4D5FE3]">
              About Company
            </span>
            <span className="font-sans text-5xl font-semibold">
              The Best Global Expert
            </span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-center">
            <span className=" text-lg text-gray-500">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour words which don’t look even slightly believable.
              Lorem Ipsn gravida nibh vel velit auctor aliquetn auci elit cons.
            </span>
            <span>
              <button className="mt-10 h-14 w-48 rounded-lg bg-[#4D5FE3] font-bold text-white">
                DISCOVER MORE
              </button>
            </span>
          </div>
        </div>

        <div className="flex h-fit gap-4 space-x-4">
          <div className="relative h-64 rounded-xl bg-cover bg-center bg-no-repeat md:w-[20rem] lg:w-full">
            <Image
              src={img1}
              alt=""
              className="h-64 w-fit  resize rounded-xl"
            />
          </div>
        </div>
      </div>
      <div
        className="relative sm:h-fit lg:h-[30rem]"
        style={{ backgroundImage: 'url("./images/12.jpg")' }}
      >
        <div className="absolute inset-0 bg-slate-600  opacity-50"></div>
        <Strength />
      </div>
      <div
        className="flex w-full items-center justify-around p-10 sm:h-fit sm:flex-col lg:h-[28rem] lg:flex-row"
        style={{ backgroundImage: 'url("./images/23.jpg")' }}
      >
        <h1 className="mb-4 text-5xl font-semibold text-white">
          Subscribe to Our Newsletter to Get Daily Content!
        </h1>

        <div className="relative flex w-full flex-col items-center">
          <div className="bg-transparent">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-[35rem] border-b-2 border-black bg-transparent pr-12"
            />
            <button className="absolute">
              <FiSend className="text-2xl text-white hover:text-[#FF6E65]" />
            </button>
          </div>
          <button className=" bg-transparent px-4 py-2 text-blue-100 hover:text-[#FF6E65] focus:outline-none">
            Sign up now for weekly news and updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
