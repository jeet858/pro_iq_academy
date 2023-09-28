import React from "react";

import { BsDownload } from "react-icons/bs";
import {
  FaAmericanSignLanguageInterpreting,
  FaHeadphones,
} from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";

const BackgroundSection: React.FC = () => {
  return (
    <section
      className="relative flex h-fit flex-col items-center justify-center bg-cover bg-center bg-no-repeat sm:h-fit xl:h-[600px] "
      style={{ backgroundImage: 'url("./images/45.jpg")' }}
    >
      <div className="relative flex flex-col justify-around p-12 text-center">
        <div className="flex flex-wrap  justify-center">
          <div
            className={`m-4 flex  flex-row items-center rounded-2xl   bg-[#037EF3]  p-10 shadow-[0px_4px_4px_0px_#00000040] sm:h-[150px] sm:w-[360px] lg:h-[200px] lg:w-[404px]`}
          >
            <div className="mr-4 flex items-center justify-center rounded-full bg-[#DEEEFE]  shadow-xl shadow-[#00000040] sm:h-16 sm:w-32 lg:h-20 lg:w-40">
              <FaAmericanSignLanguageInterpreting className="text-4xl text-[#037EF3]" />
            </div>
            <div className="flex flex-col text-center">
              <h2 className="font-semibold text-black sm:mb-2 sm:text-xl lg:mb-8 lg:text-3xl">
                Flexible Classes
              </h2>
              <p>Personalize your learning schedule for maximum convenience.</p>
            </div>
          </div>
          <div
            className={`m-4 flex  flex-row items-center   rounded-2xl bg-[#FF8A00]  p-10 shadow-[0px_4px_4px_0px_#00000040] sm:h-[150px] sm:w-[360px] lg:h-[200px] lg:w-[404px]`}
          >
            <div className="mr-4 flex items-center justify-center rounded-full  bg-[#DEEEFE] shadow-xl  shadow-[#00000040] sm:h-16 sm:w-32 lg:h-20 lg:w-36">
              <BsDownload className="text-4xl text-[#FF8A00]" />
            </div>
            <div className="flex flex-col text-center">
              <h2 className="font-semibold text-black sm:mb-2 sm:text-xl lg:mb-8 lg:text-3xl">
                Offline Mode
              </h2>
              <p>
                Study without internet access with offline course materials.
              </p>
            </div>
          </div>
        </div>

        <div className="relative text-center">
          <div className="flex flex-wrap justify-center">
            <div
              className={`m-4 flex  flex-row items-center   rounded-2xl bg-[#FF4F81]  p-10 shadow-[0px_4px_4px_0px_#00000040] sm:h-[150px] sm:w-[360px] lg:h-[200px] lg:w-[404px]`}
            >
              <div className="mr-4 flex items-center justify-center  rounded-full bg-[#DEEEFE]  shadow-xl shadow-[#00000040] sm:h-16 sm:w-32 lg:h-20 lg:w-36">
                <FaHeadphones className="text-4xl text-[#FF4F81]" />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="font-semibold text-black sm:mb-2 sm:text-xl lg:mb-8 lg:text-3xl">
                  Educator Help
                </h2>
                <p>Expert guidance and support from experienced educators.</p>
              </div>
            </div>

            <div
              className={`m-4 flex  flex-row items-center rounded-2xl  bg-[#06965D]  p-10 shadow-[0px_4px_4px_0px_#00000040] sm:h-[150px] sm:w-[360px] lg:h-[200px] lg:w-[404px]`}
            >
              <div className="mr-4 flex items-center justify-center  rounded-full  bg-[#DEEEFE] shadow-xl shadow-[#00000040] sm:h-16 sm:w-32 lg:h-20 lg:w-36">
                <FiPlayCircle className="text-4xl text-[#06965D]" />
              </div>
              <div className="flex flex-col text-center">
                <h2 className="font-semibold text-black sm:mb-2 sm:text-xl lg:mb-8 lg:text-3xl">
                  Online Classes
                </h2>
                <p>Engage in interactive virtual learning from any location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
