import React from "react";
import Image from "next/image";
import img from "../../../public/images/banner 25.jpg";
import img1 from "../../../public/images/guy-lesson.jpg";
import img2 from "../../../public/images/medium-shot-smiley-woman-wearing-headphones.jpg";
import BannerSection from "./BannerSection";
import DiscoverSection from "./DiscoverSection";
const FranchisingSection = () => {
  return (
    <div className="h-fit">
      <BannerSection paragraphText="Franchising" />
      <div className="sm:p-10 lg:p-20 ">
        <p className="font-[Prata] sm:text-lg lg:text-2xl">
          Franchising Opportunities with ProIQ Academy: At ProIQ Academy, we are
          excited to offer franchising opportunities forindividuals who are
          passionate about education andwant to make a positive impact in their
          community. Joining our franchise network allows you to become a part
          of our mission to provide high-quality education and shape the future
          of learning. Here's why franchising with ProIQ Academy is a rewarding
          venture:
        </p>
      </div>
      <div className="h-fit w-full">
        <Image src={img} alt="" />
      </div>
      <div className="flex flex-col sm:p-10 md:p-10 lg:p-20">
        <div className="flex w-full items-center justify-between sm:flex-col md:flex-row">
          <div className="h-fit w-fit">
            <Image
              alt=""
              src={img1}
              className="md:h-[266px] md:w-[380px] lg:h-[466px] lg:w-[580px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:w-full lg:w-1/2">
            <h1 className="font-[Prata] font-semibold text-[#233D63] md:text-xl lg:text-3xl">
              Established Brand and Reputation:
            </h1>
            <p className="font-[Gilroy-Regular] text-[#233D63] md:text-base lg:text-lg">
              ProIQ Academy has built a strong brand presence in the education
              industry. By becoming a franchisee, you benefit from our
              established reputation, credibility, and a proven track record of
              success.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between sm:flex-col-reverse md:flex-row">
          <div className="flex flex-col gap-8 sm:w-full lg:w-1/2">
            <div className="flex  flex-col items-center justify-center gap-4 ">
              <h1 className="font-[Prata] font-semibold text-[#233D63] md:text-xl lg:text-3xl">
                Comprehensive Support and Training:
              </h1>
              <p className="font-[Gilroy-Regular] text-[#233D63] md:text-base lg:text-lg">
                With a vision to become a leading institute, we aim to inspire
                admiration by spreading the values of education, integrity, and
                fun through our young students. Our ultimate goal is to promote
                skill-based education and ensure that every student receives the
                necessary tools for success..
              </p>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 ">
              <h1 className="font-[Prata] font-semibold text-[#233D63] md:text-xl lg:text-3xl">
                Comprehensive Support and Training:
              </h1>
              <p className="font-[Gilroy-Regular] text-[#233D63] md:text-base lg:text-lg">
                With a vision to become a leading institute, we aim to inspire
                admiration by spreading the values of education, integrity, and
                fun through our young students. Our ultimate goal is to promote
                skill-based education and ensure that every student receives the
                necessary tools for success..
              </p>
            </div>
          </div>
          <div className="h-fit w-fit">
            <Image
              alt=""
              src={img2}
              className="md:h-[266px] md:w-[380px] lg:h-[466px] lg:w-[580px]"
            />
          </div>
        </div>
      </div>
      <DiscoverSection />
    </div>
  );
};

export default FranchisingSection;
