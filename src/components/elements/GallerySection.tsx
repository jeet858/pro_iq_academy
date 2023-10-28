import React, { useState } from "react";

import BannerSection from "./BannerSection";
import ImageCarousel from "./ImageCarousel";
import ContactSection from "./ContectSection";

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
        color="white"
      />
      <div className="h-fit w-full py-24">
        <div className="flex w-full flex-col space-y-4 sm:h-[35rem] md:px-16 lg:h-[60rem] xl:h-[100rem]">
          <div className="flex basis-2/3 flex-row space-x-4">
            <div
              className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/8.jpg")',
              }}
              onClick={() => openCarousel("./images/8.jpg")}
            ></div>
            <div className="flex basis-2/3 flex-col space-y-4">
              <div className="flex basis-1/2 flex-row space-x-4">
                <div
                  className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./images/DSC_2386(1).jpg")',
                  }}
                  onClick={() => openCarousel("./images/a (10).jpg")}
                ></div>
                <div
                  className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("./images/a (2).jpg")',
                  }}
                  onClick={() => openCarousel("./images/a (2).jpg")}
                ></div>
              </div>
              <div
                className="basis-1/2 bg-[length:100%_100%] bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("./images/DSC_2306(1).jpg")',
                }}
                onClick={() => openCarousel("./images/DSC_2386(1).jpg")}
              ></div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-row space-x-4">
            <div
              className="basis-2/3 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/a (15)(1).jpg")',
              }}
              onClick={() => openCarousel("./images/a (15)(1).jpg")}
            ></div>
            <div
              className="basis-1/3 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("./images/3 (1).jpg")',
              }}
              onClick={() => openCarousel("./images/3 (1).jpg")}
            ></div>
          </div>
        </div>
      </div>

      {isCarouselOpen && (
        <div className="fixed left-0  top-0 z-50 flex h-full w-full items-center justify-center overflow-scroll bg-[#d9d9d9c3]">
          <ImageCarousel onClose={closeCarousel} />
        </div>
      )}
      <ContactSection />
    </div>
  );
};

export default GallerySection;
