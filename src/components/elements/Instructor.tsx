import React from "react";
import ins1 from "public/images/team_1.png";
import ins2 from "public/images/team_2.png";

import Image from "next/image";

const Instructor = () => {
  return (
    <div className="flex h-fit w-full justify-around space-x-4 p-4 sm:flex-col md:flex-row">
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
  );
};

export default Instructor;
