import React from "react";
import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="h-fit">
      <div className="relative h-80 bg-cover bg-center bg-no-repeat">
        <div>
          <Image
            src="/images/bi.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="relative ml-32 pt-32 text-2xl font-bold text-white">
          Gallery
        </p>
      </div>
      <div className="container flex w-full items-center justify-around p-10 sm:h-fit sm:flex-col lg:h-[30rem] lg:flex-row">
        <h1 className="flex flex-col text-5xl font-semibold">
          <span>Start Your Education Career</span>
          <span>With proIQ</span>
        </h1>

        <div>
          <button className="h-[4rem] w-[12rem] rounded-xl bg-[#FF6E65]  text-2xl  font-semibold text-white hover:bg-[#0d369f]  focus:outline-none">
            discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
