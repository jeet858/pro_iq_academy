import React from "react";
import { PiWechatLogoLight } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import BannerSection from "./BannerSection";
import Link from "next/link";

const ContactUsSection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="" imageSrc="/images/32.jpg" color="white" />
      <div className=" flex h-fit w-full items-center justify-center gap-4 sm:flex-col  sm:p-8 md:flex-col  md:p-16 lg:flex-row">
        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly rounded-lg bg-[#06965D] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
            <PiWechatLogoLight className="text-5xl text-[#06965D]" />
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=8617741681"
            target="_blank"
          >
            <div className="flex flex-col ">
              <span className="text-xl font-semibold text-black">
                +917477879008
              </span>
              <span className="text-md font-semibold text-black">
                Call Anytime
              </span>
            </div>
          </a>
        </div>

        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly rounded-lg bg-[#FF6E65F7] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
            <BiMailSend className="text-5xl text-[#FF6E65F7]" />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-semibold text-black">
              proiqacademy@gmail.com
            </span>
            <span className="text-md font-semibold text-black">Send Email</span>
          </div>
        </div>
        <div className="flex h-fit basis-1/3 scale-100 transform justify-evenly gap-8 rounded-lg bg-[#FF8A00] shadow-2xl transition-transform hover:scale-105 hover:border-[1px] hover:border-blue-900 sm:w-full sm:flex-col sm:items-center sm:p-8 md:w-full md:flex-col md:p-8 lg:w-fit lg:flex-row">
          <div className="flex  justify-between">
            <div className="flex h-[5rem]  w-[5rem] items-center justify-center rounded-full bg-[#DEEEFE] shadow-xl shadow-[#00000040]">
              <MdOutlineAddLocationAlt className="text-5xl text-[#FF8A00]" />
            </div>
          </div>

          <span className="text-md font-semibold text-black">
            Raghubati ,Brahmanpara , Haripal , Hooghly -712405 Nearestlocation :
            19 no. Rail Gate ,Haripal
          </span>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col gap-4 p-16 sm:flex-col sm:space-y-4 md:flex-col md:space-y-4 lg:space-x-4">
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
        <div className="flex w-full p-8">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.455053765292!2d88.46836988771574!3d22.724012574867118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a20ecaef28a9%3A0x14cbcf7132dfb3b4!2sBarasat!5e0!3m2!1sen!2sin!4v1697138655081!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
