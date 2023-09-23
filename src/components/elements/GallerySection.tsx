import React from "react";

import DiscoverSection from "./DiscoverSection";
import BannerSection from "./BannerSection";

const GallerySection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Gallery" imageSrc="/images/34.jpg" />
      <div className="h-fit w-full py-24 ">
        <div className="flex w-full flex-col space-y-4 sm:h-[35rem] md:px-32 lg:h-[60rem] xl:h-[100rem]">
          <div className="flex basis-2/3 flex-row space-x-4">
            <div
              className="basis-1/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/woman-attending-online-class.jpg")',
              }}
            ></div>
            <div className="flex basis-2/3 flex-col space-y-4">
              <div className="flex basis-1/2 flex-row space-x-4">
                <div
                  className="basis-1/2 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("./images/teacher-talking-with-her-students-online.jpg")',
                  }}
                ></div>
                <div
                  className="basis-1/2 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./images/close-up-woman-class.jpg")',
                  }}
                ></div>
              </div>
              <div
                className="basis-1/2 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("./images/medium-shot-woman-working-desk.jpg")',
                }}
              ></div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-row space-x-4">
            <div
              className="basis-2/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/english-teacher-doing-her-class-with-whiteboard.jpg")',
              }}
            ></div>
            <div
              className="basis-1/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/young-female-student-listening-her-english-teacher.jpg")',
              }}
            ></div>
          </div>
        </div>
      </div>
      <DiscoverSection />
    </div>
  );
};

export default GallerySection;
