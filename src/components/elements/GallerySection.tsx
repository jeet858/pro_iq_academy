import React, { useState } from "react";

import BannerSection from "./BannerSection";
import ImageCarousel from "./ImageCarousel";

const GallerySection = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openCarousel = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="h-fit">
      <BannerSection
        paragraphText="Gallery"
        imageSrc="/images/banner_gallery.png"
      />
      <div className="h-fit w-full py-24">
        <div className="flex w-full flex-col space-y-4 sm:h-[35rem] md:px-32 lg:h-[60rem] xl:h-[100rem]">
          <div className="flex basis-2/3 flex-row space-x-4">
            <div
              className="basis-1/3 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/IMG20221112083744 3.png")',
              }}
              onClick={() => openCarousel("./images/IMG20221112083744 3.png")}
            ></div>
            <div className="flex basis-2/3 flex-col space-y-4">
              <div className="flex basis-1/2 flex-row space-x-4">
                <div
                  className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("./images/IMG-20230605-WA0004 2.png")',
                  }}
                  onClick={() =>
                    openCarousel("./images/IMG-20230605-WA0004 2.png")
                  }
                ></div>
                <div
                  className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./images/20230906_175553 1.png")',
                  }}
                  onClick={() => openCarousel("./images/20230906_175553 1.png")}
                ></div>
              </div>
              <div
                className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("./images/IMG-20230907-WA0008 2.png")',
                }}
                onClick={() =>
                  openCarousel("./images/IMG-20230907-WA0008 2.png")
                }
              ></div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-row space-x-4">
            <div
              className="basis-2/3 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/IMG_20221220_192721 1.png")',
              }}
              onClick={() => openCarousel("./images/IMG_20221220_192721 1.png")}
            ></div>
            <div
              className="basis-1/3 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/IMG-20230605-WA0001 1.png")',
              }}
              onClick={() => openCarousel("./images/IMG-20230605-WA0001 1.png")}
            ></div>
          </div>
        </div>
      </div>

      {isCarouselOpen && (
        <div className="fixed left-0 top-0 z-50 h-full w-full bg-white">
          <ImageCarousel onClose={closeCarousel} />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
