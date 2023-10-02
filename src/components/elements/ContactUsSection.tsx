import React from "react";
import { PiWechatLogoLight } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import BannerSection from "./BannerSection";
const ContactUsSection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Contect Us" imageSrc="/images/32.jpg" />
      <div className=" flex h-fit w-full items-center justify-center gap-4 sm:flex-col  sm:p-8 md:flex-col  md:p-16 lg:flex-row">
        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly rounded-lg bg-[#06965D] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
            <PiWechatLogoLight className="text-5xl text-[#06965D]" />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-semibold text-black">
              +917477879008
            </span>
            <span className="text-md font-semibold text-black">
              Call Anytime
            </span>
          </div>
        </div>
        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly rounded-lg bg-[#FF6E65F7] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
            <BiMailSend className="text-5xl text-[#FF6E65F7]" />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-semibold text-black">
              info@proiqacademy.com
            </span>
            <span className="text-md font-semibold text-black">Send Email</span>
          </div>
        </div>
        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly rounded-lg bg-[#FF8A00] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
            <MdOutlineAddLocationAlt className="text-5xl text-[#FF8A00]" />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-semibold text-black">
              demo address
            </span>
            <span className="text-md font-semibold text-black">Address</span>
          </div>
        </div>
      </div>
      <div className=" flex h-fit w-full gap-4 p-16 sm:flex-col sm:space-y-4 md:flex-col md:space-y-4 lg:flex-row lg:space-x-4">
        <div className="h-24 w-full basis-1/3 flex-col gap-4 space-y-6">
          <div className="text-xl text-[#4D5FE3]">Send a message</div>
          <div className="text-6xl font-bold text-black">
            We Always Ready to Hear From You
          </div>
          <div className="text-sm text-[#7A7A7A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            praesentium.
          </div>
        </div>
        <form className="flex h-fit w-full flex-col gap-4 space-y-1">
          <div className="flex sm:flex-col md:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="m-4 h-16 rounded-lg bg-[#F1F2F6] p-4 sm:w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Email"
              className="m-4 h-16 rounded-lg bg-[#F1F2F6] p-4 sm:w-full md:w-1/2"
            />
          </div>
          <div className="flex sm:flex-col md:flex-row">
            <input
              type="text"
              placeholder="Phone no."
              className="m-4 h-16 rounded-lg bg-[#F1F2F6] p-4 sm:w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="m-4 h-16 rounded-lg bg-[#F1F2F6] p-4 sm:w-full md:w-1/2"
            />
          </div>
          <div className="flex">
            <textarea
              placeholder="Write a message"
              className="m-4 max-h-40 min-h-[10rem] w-full rounded-lg bg-[#F1F2F6] p-4"
            />
          </div>
          <button className="m-4 h-14  w-48 rounded-lg bg-[#4D5FE3] font-bold text-white">
            SEND A MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
