import React from "react";

import Image from "next/image";
interface BannerSectionProps {
  paragraphText: string;
}
function BannerSection({ paragraphText }: BannerSectionProps) {
  return (
    <div className="relative h-[25rem] bg-cover bg-center bg-no-repeat">
      <div>
        <Image
          src="/images/22.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="relative ml-32 font-[Prata] text-4xl text-white sm:pt-32 md:pt-64">
        {paragraphText}
      </p>
    </div>
  );
}

export default BannerSection;
