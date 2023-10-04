import React from "react";
import { FaGraduationCap, FaUsers, FaBook } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const WelcomeSection: React.FC = () => {
  return (
    <div className="h-[130rem] max-w-full items-center justify-center bg-white p-32 shadow-md sm:h-fit md:h-fit lg:h-[40rem]">
      <SectionHeader title="Welcome to" subtitle="ProIQ Academy" />

      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div
            className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-[#037EF3] shadow-lg shadow-[#00000040] transition-transform
hover:scale-105"
          >
            <svg
              width="70"
              height="51"
              viewBox="0 0 70 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.5744 26.0804L33.0494 33.5918L16.525 26.0804V37.0128L33.0498 44.0945L49.5744 37.0128V26.0804ZM55.0826 23.5764L70 16.7958L33.0494 0L0 15.0224V41.5827H5.50822V21.0731L11.0168 23.5768V40.6449L33.0498 50.0874L55.0826 40.6449V23.5764ZM9.40969 16.7958L33.0494 6.05056L56.6888 16.7958L33.0494 27.5412L9.40969 16.7958ZM0.000330067 49.8451V44.3369H5.50855V49.8451H0.000330067Z"
                fill="white"
              />
            </svg>
          </div>
          <h2 className="mb-4 flex justify-center text-center font-[Montserrat] text-3xl font-semibold transition-transform hover:scale-105 hover:text-[#FF6E65]">
            Trending Courses
          </h2>
          <p className="flex justify-center text-center font-[Montserrat] text-lg text-gray-600">
            Explore our wide range of trending courses for a competitive edge.
          </p>
        </div>
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-[#FF4F81] shadow-lg shadow-[#00000040] transition-transform hover:scale-105">
            <svg
              width="76"
              height="51"
              viewBox="0 0 76 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.36364 47.5455H3V44.3636C3 38.4334 7.05609 33.4503 12.5455 32.0373M18.9091 21.5478C15.2017 20.2375 12.5455 16.7016 12.5455 12.5454C12.5455 8.3893 15.2017 4.85354 18.9091 3.54314M66.6364 47.5455H73V44.3636C73 38.4334 68.9438 33.4503 63.4545 32.0373M57.0909 3.54314C60.7984 4.85354 63.4545 8.3893 63.4545 12.5454C63.4545 16.7016 60.7984 20.2375 57.0909 21.5478M31.6364 31.6364H44.3636C51.3926 31.6364 57.0909 37.3347 57.0909 44.3636V47.5455H18.9091V44.3636C18.9091 37.3347 24.6073 31.6364 31.6364 31.6364ZM47.5455 12.5455C47.5455 17.8173 43.272 22.0909 38 22.0909C32.728 22.0909 28.4545 17.8173 28.4545 12.5455C28.4545 7.27366 32.728 3 38 3C43.272 3 47.5455 7.27366 47.5455 12.5455Z"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 className="mb-4 flex justify-center text-center font-[Montserrat] text-3xl font-semibold transition-transform hover:scale-105 hover:text-[#FF6E65]">
            Certified Teachers
          </h2>
          <p className="flex justify-center text-center font-[Montserrat] text-lg text-gray-600">
            Learn from experienced and certified teachers dedicated to your
            success.
          </p>
        </div>
        <div className="group flex h-full w-full flex-col items-center p-4 lg:w-1/3">
          <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-[#FF8A00] shadow-lg shadow-[#00000040] transition-transform hover:scale-105">
            <svg
              width="56"
              height="59"
              viewBox="0 0 56 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 50.1078V12.4216C3 9.12372 3 7.47477 3.68122 6.21517C4.28041 5.10716 5.23653 4.20634 6.41256 3.64181C7.7495 3 9.49969 3 13 3H43C46.5003 3 48.2506 3 49.5875 3.64181C50.7634 4.20634 51.7197 5.10716 52.3187 6.21517C53 7.47477 53 9.12372 53 12.4216V44.2193H9.25C5.79822 44.2193 3 46.8556 3 50.1078ZM3 50.1078C3 53.36 5.79822 55.9963 9.25 55.9963H53M18.625 14.7769H37.375M18.625 26.5539H37.375M49.875 44.2193V55.9963"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 className="mb-4 flex justify-center text-center font-[Montserrat] text-3xl font-semibold transition-transform hover:scale-105 hover:text-[#FF6E65]">
            Books & Library
          </h2>
          <p className="flex justify-center text-center font-[Montserrat] text-lg text-gray-600">
            Access our extensive collection of books and library resources for
            enhanced learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
