import React from "react";
import img1 from "../../../public/images/pp.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="flex h-[50rem] max-w-full items-center justify-center sm:h-full md:h-[40rem] lg:h-[28rem]">
      <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-around">
        <div className="h-[350px] w-[390px]">
          <Image src={img1} alt="" className="h-full w-full" />
        </div>

        <div className="">
          <h2 className="text-5xl font-semibold text-black">
            Not Sure Where to Begin?
          </h2>
          <h2 className="text-5xl font-semibold text-black">
            Contact Now, We will Help you
          </h2>
          <button className="mt-8 flex h-[55px] w-[180px] items-center justify-center rounded-[20px] bg-[#FF6E65] text-xl text-white hover:bg-[#0d369f]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
