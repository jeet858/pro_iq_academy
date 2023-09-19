import React from "react";
import { FaGraduationCap, FaUsers, FaBook } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

type WelcomeSectionProps = {
  darkMode: boolean;
};

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ darkMode }) => {
  return (
    <div
      className={`h-[130rem] max-w-full items-center justify-center bg-white p-32 shadow-md sm:h-fit md:h-fit lg:h-[30rem]${
        darkMode ? "bg-black text-white" : "text-black "
      }`}
    >
      <SectionHeader title="Welcome to" subtitle="ProIQ Academy" />

      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div
            className="mb-4 flex h-24 w-24 items-center justify-center rounded-full
bg-[#037EF321]"
          >
            <FaGraduationCap className="text-5xl text-[#0D369F]" />
          </div>
          <h2 className="mb-4 flex justify-center text-center text-3xl font-semibold hover:text-[#FF6E65]">
            Trending Courses
          </h2>
          <p className="flex justify-center text-center text-lg text-gray-600">
            Explore our wide range of trending courses for a competitive edge.
          </p>
        </div>
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#037EF321]">
            <FaUsers className="text-5xl text-[#0D369F]" />
          </div>
          <h2 className="mb-4 flex justify-center text-center text-3xl font-semibold hover:text-[#FF6E65]">
            Certified Teachers
          </h2>
          <p className="flex justify-center text-center text-lg text-gray-600">
            Learn from experienced and certified teachers dedicated to your
            success.
          </p>
        </div>
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#037EF321]">
            <FaBook className="text-5xl text-[#0D369F]" />
          </div>
          <h2 className="mb-4 flex justify-center text-center text-3xl font-semibold hover:text-[#FF6E65]">
            Books & Library
          </h2>
          <p className="flex justify-center text-center text-lg text-gray-600">
            Access our extensive collection of books and library resources for
            enhanced learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
