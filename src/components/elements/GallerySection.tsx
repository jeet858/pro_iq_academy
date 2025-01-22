import React, { useState } from "react";

import BannerSection from "./BannerSection";
import ContactSection from "./ContectSection";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/images/newpics/img1.jpg";
import img2 from "../../../public/images/newpics/img2.jpg";
import img3 from "../../../public/images/newpics/img3.jpg";
import img4 from "../../../public/images/newpics/img4.jpg";
import img5 from "../../../public/images/newpics/img5.jpg";
import img6 from "../../../public/images/newpics/img6.jpg";
import img7 from "../../../public/images/newpics/img7.jpg";
import img8 from "../../../public/images/newpics/img8.jpg";
import img9 from "../../../public/images/newpics/img9.jpg";
import img10 from "../../../public/images/newpics/img10.jpg";
import img11 from "../../../public/images/newpics/img11.jpg";
import img12 from "../../../public/images/newpics/img12.jpg";
import img13 from "../../../public/images/newpics/img13.jpg";
import img14 from "../../../public/images/newpics/img14.jpg";
import img15 from "../../../public/images/newpics/img15.jpg";
import img16 from "../../../public/images/newpics/img16.jpg";
import img17 from "../../../public/images/newpics/img17.jpg";
import img18 from "../../../public/images/newpics/img18.jpg";
import img19 from "../../../public/images/newpics/img19.jpg";
import img20 from "../../../public/images/newpics/img20.jpg";
import img21 from "../../../public/images/newpics/img21.jpg";
import img22 from "../../../public/images/newpics/img22.jpg";
import img23 from "../../../public/images/newpics/img23.jpg";
import img24 from "../../../public/images/newpics/img24.jpg";
import img25 from "../../../public/images/newpics/img25.jpg";
import img26 from "../../../public/images/newpics/img26.jpg";

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
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
  ];
  return (
    <div className="h-fit w-full sm:pt-[55px] lg:pt-[100px]">
      <BannerSection
        paragraphText="Gallery"
        imageSrc="/images/banner_gallery.png"
        color="white"
      />
      <div className="hidden h-fit grid-cols-4 flex-col gap-x-1 sm:gap-y-1 sm:p-4 md:grid lg:gap-y-1 xl:p-16">
        <Image src={img1} alt="" className="col-span-1 h-full" />
        <Image src={img4} alt="" className="col-span-2 h-full" />
        <Image src={img2} alt="" className="col-span-1 h-full" />
        <Image src={img17} alt="" className="col-span-1 row-span-2 h-full" />
        <Image src={img3} alt="" className="col-span-1 h-full" />
        <Image src={img8} alt="" className="col-span-1 h-full" />
        <Image src={img12} alt="" className="col-span-1 row-span-2 h-full" />
        <Image src={img5} alt="" className="col-span-2 h-full" />
        <Image src={img9} alt="" className="col-span-1 h-full" />
        <Image src={img10} alt="" className="col-span-1 h-full" />
        <Image src={img11} alt="" className="col-span-1 h-full" />
        <Image src={img14} alt="" className="col-span-1 h-full" />
        <Image src={img6} alt="" className="col-span-2 h-full" />
        <Image src={img22} alt="" className="col-span-1 h-full" />
        <Image src={img23} alt="" className="col-span-1 h-full" />
        <Image src={img24} alt="" className="col-span-1 h-full" />
        <Image src={img25} alt="" className="col-span-1 h-full" />
        <Image src={img7} alt="" className="col-span-2 h-full" />
        <Image src={img26} alt="" className="col-span-1 row-span-2 h-full" />
        <Image src={img21} alt="" className="col-span-2 h-full" />
        <Image src={img15} alt="" className="col-span-1 h-full" />
        <Image src={img16} alt="" className="col-span-1 h-full" />
        <Image src={img18} alt="" className="col-span-1 h-full" />
        <Image src={img20} alt="" className="col-span-1 h-full" />
        <Image src={img13} alt="" className="col-span-2 h-full" />
        <Image src={img19} alt="" className="col-span-1 h-full" />
        <Image src={img2} alt="" className="col-span-1 h-full" />
      </div>
      <div className="flex md:hidden"></div>

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
