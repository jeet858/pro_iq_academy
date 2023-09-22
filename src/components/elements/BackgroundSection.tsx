import React from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaDownload,
  FaHeadphones,
  FaPlayCircle,
} from "react-icons/fa";

import BoxComponent from "./BoxComponent";

const BackgroundSection: React.FC = () => {
  return (
    <section
      className="relative flex h-fit flex-col items-center justify-center bg-center bg-no-repeat sm:h-fit xl:h-[600px] "
      style={{ backgroundImage: 'url("./images/8.jpg")' }}
    >
      <div className="relative flex flex-col justify-around p-12 text-center">
        <div className="flex flex-wrap justify-center">
          <BoxComponent
            icon={
              <FaAmericanSignLanguageInterpreting className="text-4xl text-[#0D369F]" />
            }
            title="Flexible Classes"
            description="Personalize your learning schedule for maximum convenience."
            backgroundColor="#037EF321"
          />

          <BoxComponent
            icon={<FaDownload className="text-3xl text-[#0D369F]" />}
            title="Offline Mode"
            description="Study without internet access with offline course materials."
            backgroundColor="#037EF321"
          />
        </div>

        <div className="relative text-center">
          <div className="flex flex-wrap justify-center">
            <BoxComponent
              icon={<FaHeadphones className="text-4xl text-[#0D369F]" />}
              title="Educator Help"
              description="Expert guidance and support from experienced educators."
              backgroundColor="#037EF321"
            />

            <BoxComponent
              icon={<FaPlayCircle className="text-4xl text-[#0D369F]" />}
              title="Online Classes"
              description="Engage in interactive virtual learning from any location."
              backgroundColor="#037EF321"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
