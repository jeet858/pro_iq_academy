import React, { useState } from "react";

import BannerSection from "./BannerSection";
import ImageCarousel from "./ImageCarousel";
import ContactSection from "./ContectSection";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/images/17(1).jpg";
import img2 from "../../../public/images/a (10).jpg";
import img3 from "../../../public/images/a (2).jpg";
import img4 from "../../../public/images/DSC_2386(1).jpg";
import img5 from "../../../public/images/a (15)(1).jpg";
import img6 from "../../../public/images/a (6).jpg";
import img7 from "../../../public/images/a (1).jpg";
import img8 from "../../../public/images/13.jpg";
import img9 from "../../../public/images/Untitled-1 (1).jpg";
import img10 from "../../../public/images/ready-back-school (1).jpg";
import img11 from "../../../public/images/a (12).jpg";
import img12 from "../../../public/images/DSC_2306(1).jpg";

const GallerySection = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(
    null,
  );

  const openCarousel = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="h-fit w-full">
      <BannerSection
        paragraphText="Gallery"
        imageSrc="/images/banner_gallery.png"
        color="white"
      />
      <div className="flex h-fit  flex-col  sm:gap-y-1 sm:p-4 lg:gap-y-1 xl:p-16">
        <div className="flex flex-row sm:gap-1 lg:gap-2">
          <div
            className="relative w-[35%]"
            onMouseEnter={() => setHoveredImage(img1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img4}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img1 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img6)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img6}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img6 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[35%]"
            onMouseEnter={() => setHoveredImage(img7)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img7}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img7 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
        </div>
        <div className="flex  flex-row  sm:gap-1 lg:gap-2">
          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img12)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img3}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img12 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[40%]"
            onMouseEnter={() => setHoveredImage(img3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img12}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img3 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img11)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img11}
              alt=""
              className=" w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img11 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row  sm:gap-1 lg:gap-2">
          <div
            className="relative w-[35%]"
            onMouseEnter={() => setHoveredImage(img8)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img2}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img8 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img9)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img9}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img9 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[35%]"
            onMouseEnter={() => setHoveredImage(img10)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img10}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img10 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
        </div>
        <div className="flex  flex-row  sm:gap-1 lg:gap-2">
          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img8}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img2 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
          <div
            className="relative w-[40%]"
            onMouseEnter={() => setHoveredImage(img5)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img5}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img5 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>

          <div
            className="relative w-[30%]"
            onMouseEnter={() => setHoveredImage(img4)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img1}
              alt=""
              className="w-full sm:h-[8rem] md:h-[15rem] lg:h-[21rem] xl:h-[22rem] xxl:h-[42rem]"
              onClick={() => openCarousel("./images/a (10).jpg")}
            />
            {hoveredImage === img4 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform p-2 text-white  sm:text-sm lg:text-base">
                Click & open all Image
              </div>
            )}
          </div>
        </div>
      </div>

      {isCarouselOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-scroll bg-[#d9d9d9c3]">
          <ImageCarousel onClose={closeCarousel} />
        </div>
      )}
      <ContactSection />
    </div>
  );
};

export default GallerySection;
