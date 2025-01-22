import React from "react";
import Image from "next/image";

interface BannerSectionProps {
  paragraphText: string;
  imageSrc: string;
  color: string;
}

function BannerSection({ paragraphText, imageSrc, color }: BannerSectionProps) {
  const containerStyle = {
    color: color,
  };

  return (
    <div className="relative  sm:h-[18rem] md:h-[25rem] lg:h-[35rem] xl:h-[40rem] xxl:h-[50rem]">
      <div>
        <Image
          src={imageSrc}
          alt="About Us"
          layout="fill"
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>
      <p
        className="relative  flex h-full justify-center font-[Prata] text-4xl sm:w-full sm:items-end lg:w-1/2 lg:items-center lg:pt-[16rem]"
        style={containerStyle}
      >
        {paragraphText}
      </p>
    </div>
  );
}

export default BannerSection;
