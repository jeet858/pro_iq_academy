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
    <div className="relative bg-cover bg-center bg-no-repeat md:h-[25rem] lg:h-[28rem] xl:h-[32rem]">
      <div>
        <Image src={imageSrc} alt="About Us" layout="fill" objectFit="cover" />
      </div>
      <p
        className="relative ml-32 font-[Prata] text-4xl  sm:pt-32 md:pt-64"
        style={containerStyle}
      >
        {paragraphText}
      </p>
    </div>
  );
}

export default BannerSection;
