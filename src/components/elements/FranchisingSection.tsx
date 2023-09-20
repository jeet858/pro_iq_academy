import React from "react";
import Image from "next/image";

const FranchisingSection = () => {
  return (
    <div className="h-fit">
      <div className="relative h-80 bg-cover bg-center bg-no-repeat">
        <div>
          <Image
            src="/images/bi.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="relative ml-32 pt-32 text-2xl font-bold text-white">
          Franchising
        </p>
      </div>
    </div>
  );
};

export default FranchisingSection;
