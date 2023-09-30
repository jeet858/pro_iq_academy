import React from "react";
import Image from "next/image";
import img from "../../../public/images/franchising_ban_2.png";
import img1 from "../../../public/images/franchising_thumb_1.png";
import img2 from "../../../public/images/franchising_thumb_2.png";
import BannerSection from "./BannerSection";
import DiscoverSection from "./DiscoverSection";
import ContactSection from "./ContectSection";
const FranchisingSection = () => {
  return (
    <div className="h-fit">
      <BannerSection
        paragraphText="Franchising"
        imageSrc="/images/franchising_banner.png"
      />
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
              className="md:h-[266px] md:w-[380px] lg:h-[466px] lg:w-[500px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:w-full md:p-4 lg:w-1/2 lg:p-0">
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
          <div className="flex flex-col gap-8 sm:w-full md:p-4 lg:w-1/2 lg:p-0">
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
                Diverse Course Offerings:
              </h1>
              <p className="font-[Gilroy-Regular] text-[#233D63] md:text-base lg:text-lg">
                At Pro IQ Academy, our aim is to provide comprehensive
                skill-based education, empowering students with cognitive
                abilities, critical thinking, creativity, and personal
                development for a successful future.
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
      <ContactSection />
    </div>
  );
};

export default FranchisingSection;
