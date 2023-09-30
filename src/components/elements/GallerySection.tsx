import React from "react";

import DiscoverSection from "./DiscoverSection";
import BannerSection from "./BannerSection";

const GallerySection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Gallery" />
      <div className="h-fit w-full py-24 ">
        <div className="flex w-full flex-col space-y-4 sm:h-[35rem] md:px-32 lg:h-[60rem] xl:h-[100rem]">
          <div className="flex basis-2/3 flex-row space-x-4">
            <div
              className="basis-1/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/IMG20221112083744 3.png")',
              }}
            ></div>
            <div className="flex basis-2/3 flex-col space-y-4">
              <div className="flex basis-1/2 flex-row space-x-4">
                <div
                  className="basis-1/2 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("./images/IMG-20230605-WA0004 2.png")',
                  }}
                ></div>
                <div
                  className="basis-1/2 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./images/20230906_175553 1.png")',
                  }}
                ></div>
              </div>
              <div
                className="basis-1/2 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("./images/IMG-20230907-WA0008 2.png")',
                }}
              ></div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-row space-x-4">
            <div
              className="basis-2/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/IMG_20221220_192721 1.png")',
              }}
            ></div>
            <div
              className="basis-1/3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("./images/IMG-20230605-WA0001 1.png")',
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
