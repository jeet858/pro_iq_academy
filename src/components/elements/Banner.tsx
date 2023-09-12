import React from "react";
import image3 from "../../../public/images/image-3.jpg";
import Image from "next/image";
const Banner: React.FunctionComponent = () => {
  return (
    <div className="my-28 flex w-[80%] justify-between self-center">
      <div>
        <span>Welcome to</span>
        <span>ProIQ Academy</span>
      </div>
      <div>
        <Image alt="" src={image3} />
      </div>
    </div>
  );
};

export default Banner;
