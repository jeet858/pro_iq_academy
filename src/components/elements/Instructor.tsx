import React from "react";
import ins1 from "public/images/team_1.png";
import ins2 from "public/images/team_2.png";

import Image from "next/image";

const Instructor = () => {
  return (
    <div className="h-fit w-full p-8">
      <div className="flex w-full flex-col items-center justify-center font-bold sm:text-xl md:space-x-2 md:text-5xl lg:flex-row">
        <span className="text-black md:flex-shrink-0">
          Our Team Of Professionals
        </span>
      </div>
      <div className="mb-[1rem] flex items-center justify-center">
        <div className="mt-2">
          <svg
            width="85"
            height="1"
            viewBox="0 0 85 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="85" y2="0.5" stroke="black" />
          </svg>
        </div>
        <div className="mt-4">
          <svg
            width="85"
            height="4"
            viewBox="0 0 85 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="85" y2="0.5" stroke="black" />
          </svg>
        </div>
      </div>
      <div className="mb-8  flex items-center justify-center font-[Montserrat] text-xl text-[#707070]">
        <h1>
          It is a long established fact that a reader will be distracted by the
          readable
        </h1>
      </div>
      <div className="flex h-fit w-full justify-around space-x-4  sm:flex-col md:flex-row">
        <div className="flex flex-col">
          <Image
            src={ins1}
            alt=""
            className="rounded-lg md:h-[297] md:w-[297] lg:h-[397px] lg:w-[397px]"
          />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex h-16 w-48 items-center justify-center rounded-2xl bg-[#06965D] text-3xl font-semibold text-cyan-50">
              Instructor
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image
            src={ins2}
            alt=""
            className="rounded-lg md:h-[297] md:w-[297] lg:h-[397px] lg:w-[397px]"
          />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex h-16 w-48 items-center justify-center rounded-2xl bg-[#FF6E65F7] text-3xl font-semibold text-cyan-50">
              Instructor
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src={ins1}
            alt=""
            className="rounded-lg md:h-[297] md:w-[297] lg:h-[397px] lg:w-[397px]"
          />
          <div className="relative -top-[2rem]  flex items-center justify-center">
            <p className="flex h-16 w-48 items-center justify-center rounded-2xl bg-[#FF8A00] text-3xl font-semibold text-cyan-50">
              Instructor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
