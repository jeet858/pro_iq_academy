import React from "react";
import { FaCogs } from "react-icons/fa";

const SkillSection: React.FC = () => {
  return (
    <section className="flex w-[80%] flex-col justify-center self-center">
      <div className="container relative top-[] flex h-full w-full min-w-full items-center justify-center self-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-[27px] bg-[#037ef3] shadow-lg sm:p-10 md:h-[200px]  md:w-[200px] md:p-5 lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] xl:p-10">
            <FaCogs className=" text-6xl text-white md:mb-[1rem] xl:mb-[1.5rem]" />
            <h2 className="text-center text-2xl font-semibold text-white md:text-lg lg:text-2xl">
              Mental Math and Advanced Skill Development
            </h2>
          </div>

          <div className="flex flex-col items-center rounded-[27px] bg-[#FFC949] shadow-lg sm:p-10 md:h-[200px]  md:w-[200px] md:p-5 lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] xl:p-10">
            <svg
              width="62"
              height="67"
              viewBox="0 0 62 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-2xl text-white md:mb-[1rem] xl:mb-[1.5rem]"
            >
              <path
                d="M3 57.0122V13.8024C3 10.0212 3 8.13062 3.76296 6.6864C4.43405 5.416 5.50492 4.38315 6.82207 3.73588C8.31944 3 10.2796 3 14.2 3H47.8C51.7203 3 53.6807 3 55.178 3.73588C56.4951 4.38315 57.566 5.416 58.237 6.6864C59 8.13062 59 10.0212 59 13.8024V50.2607H10C6.134 50.2607 3 53.2833 3 57.0122ZM3 57.0122C3 60.7411 6.134 63.7637 10 63.7637H59M20.5 16.503H41.5M20.5 30.0061H41.5M55.5 50.2607V63.7637"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 className="text-center text-2xl font-semibold text-white md:text-lg lg:text-2xl ">
              Improves Child Reading & Writing Skills
            </h2>
          </div>

          <div className="flex flex-col items-center rounded-[27px] bg-[#FF4F81] shadow-lg sm:p-10 md:h-[200px]  md:w-[200px] md:p-5 lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] xl:p-10">
            <svg
              width="81"
              height="73"
              viewBox="0 0 81 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-4xl text-white md:mb-[1rem] xl:mb-[1.5rem]"
            >
              <path
                d="M6.75 18C6.75 10.9289 6.75 7.39339 8.94671 5.19671C11.1434 3 14.6789 3 21.75 3H44.25C51.321 3 54.8565 3 57.0533 5.19671C59.25 7.39339 59.25 10.9289 59.25 18V36.75C59.25 47.3565 59.25 52.6598 55.9549 55.9549C52.6598 59.25 47.3565 59.25 36.75 59.25H29.25C18.6434 59.25 13.3401 59.25 10.0451 55.9549C6.75 52.6598 6.75 47.3565 6.75 36.75V18Z"
                stroke="white"
                stroke-width="5"
              />
              <path
                d="M59.25 40.5H63C71.2841 40.5 78 33.7841 78 25.5C78 17.2157 71.2841 10.5 63 10.5H59.25"
                stroke="white"
                stroke-width="5"
              />
              <path
                opacity="0.5"
                d="M59.25 40.5H6.75"
                stroke="white"
                stroke-width="5"
              />
              <path
                opacity="0.5"
                d="M78 70.5H3"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>

            <h2 className="text-center text-2xl font-semibold text-white md:text-lg lg:text-2xl">
              Latest Skill-based and Kid-Friendly Syllabus
            </h2>
          </div>

          <div className="flex flex-col items-center rounded-[27px] bg-[#2ba071] shadow-lg sm:p-10 md:h-[200px]  md:w-[200px] md:p-5 lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] xl:p-10">
            <svg
              width="58"
              height="71"
              viewBox="0 0 58 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-white md:mb-[1rem] md:text-2xl lg:text-6xl xl:mb-[1.5rem]"
            >
              <path
                d="M54.7778 6.44445C55.6324 6.44445 56.452 6.10496 57.0562 5.50068C57.6605 4.89639 58 4.07681 58 3.22222C58 2.36764 57.6605 1.54805 57.0562 0.943767C56.452 0.339483 55.6324 0 54.7778 0H3.22222C2.36764 0 1.54805 0.339483 0.943767 0.943767C0.339483 1.54805 0 2.36764 0 3.22222C0 4.07681 0.339483 4.89639 0.943767 5.50068C1.54805 6.10496 2.36764 6.44445 3.22222 6.44445H6.60233C7.07278 12.3604 8.99644 24.9722 16.8941 32.2222C8.56467 40.3132 6.86978 57.1429 6.53144 64.4445H3.22222C2.36764 64.4445 1.54805 64.7839 0.943767 65.3882C0.339483 65.9925 0 66.8121 0 67.6667C0 68.5213 0.339483 69.3409 0.943767 69.9451C1.54805 70.5494 2.36764 70.8889 3.22222 70.8889H54.7778C55.6324 70.8889 56.452 70.5494 57.0562 69.9451C57.6605 69.3409 58 68.5213 58 67.6667C58 66.8121 57.6605 65.9925 57.0562 65.3882C56.452 64.7839 55.6324 64.4445 54.7778 64.4445H51.4686C51.1302 57.1493 49.4353 40.3197 41.1059 32.2222C49.0036 24.9658 50.9272 12.354 51.3977 6.44445H54.7778ZM34.0911 29.406C33.5792 29.6903 33.1544 30.1087 32.8625 30.6163C32.5705 31.1238 32.4224 31.7013 32.4339 32.2868C32.4455 32.8722 32.6164 33.4434 32.9283 33.939C33.2401 34.4346 33.6811 34.8359 34.2039 35.0997C42.0564 39.0566 44.515 55.4351 45.0144 64.4445H12.9856C13.4721 55.4222 15.9436 39.0566 23.7961 35.0997C24.3189 34.8359 24.7599 34.4346 25.0717 33.939C25.3836 33.4434 25.5545 32.8722 25.5661 32.2868C25.5776 31.7013 25.4295 31.1238 25.1375 30.6163C24.8456 30.1087 24.4208 29.6903 23.9089 29.406C15.7277 24.8659 13.6203 12.3862 13.0758 6.44445H44.9242C44.3797 12.3862 42.2723 24.8659 34.0911 29.406ZM29 38.6667C29 38.6667 38.6667 46.4 38.6667 50.2667V61.2222H19.3333V50.2667C19.3333 46.4 29 38.6667 29 38.6667Z"
                fill="white"
              />
            </svg>

            <h2 className="text-center text-2xl font-semibold text-white md:text-lg lg:text-2xl">
              Offer Low Course Fees Structure
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
