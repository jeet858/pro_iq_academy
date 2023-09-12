import React from "react";
import { FaCogs, FaBook, FaCoffee, FaHourglassHalf } from "react-icons/fa";
import Banner from "./Banner";

const SkillSection: React.FC = () => {
  return (
    <section className="flex w-[80%] flex-col justify-center self-center">
      <div className="container relative top-[] flex h-full w-full min-w-full items-center justify-center self-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className=" group flex h-full w-full flex-col items-center rounded-lg bg-white p-10 shadow-sm hover:shadow-lg">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e1e0e0] group-hover:bg-[#4d5fe3]">
              <FaCogs className="text-5xl text-[#4d5fe3] group-hover:text-white" />
            </div>
            <h2 className="text-blcak text-center text-xl font-semibold">
              Mental Math and Advanced Skill Development
            </h2>
          </div>
          <div className=" group flex h-full w-full flex-col items-center rounded-lg bg-white p-10 shadow-sm hover:shadow-lg">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e1e0e0] group-hover:bg-[#4d5fe3]">
              <FaCogs className="text-5xl text-[#4d5fe3] group-hover:text-white" />
            </div>
            <h2 className="text-blcak text-center text-xl font-semibold">
              Mental Math and Advanced Skill Development
            </h2>
          </div>
          <div className=" group flex h-full w-full flex-col items-center rounded-lg bg-white p-10 shadow-sm hover:shadow-lg">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e1e0e0] group-hover:bg-[#4d5fe3]">
              <FaCogs className="text-5xl text-[#4d5fe3] group-hover:text-white" />
            </div>
            <h2 className="text-blcak text-center text-xl font-semibold">
              Mental Math and Advanced Skill Development
            </h2>
          </div>
          <div className=" group flex h-full w-full flex-col items-center rounded-lg bg-white p-10 shadow-sm hover:shadow-lg">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e1e0e0] group-hover:bg-[#4d5fe3]">
              <FaCogs className="text-5xl text-[#4d5fe3] group-hover:text-white" />
            </div>
            <h2 className="text-blcak text-center text-xl font-semibold">
              Mental Math and Advanced Skill Development
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
