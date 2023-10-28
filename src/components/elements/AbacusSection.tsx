import React from "react";
import BannerSection from "./BannerSection";
import Image from "next/image";
import img from "../../../public/images/Mask group.png";

import { BiSolidCircle, BiSolidDownload } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
const AbacusSection = () => {
  const router = useRouter();

  const scrollToReviewSection = async () => {
    await router.push("/HomePage#review-section");
  };
  return (
    <div className="h-fit">
      <BannerSection
        paragraphText="Abacus"
        imageSrc="/images/banner_test.jpg"
        color="#012360"
      />
      <div className="h-fit w-full ">
        <div className="flex w-full justify-between sm:flex-col sm:p-8 md:flex-row md:gap-5 lg:gap-10 lg:p-16">
          <div className="flex flex-col gap-y-5">
            <p className="font-[Montserrat] text-xl">
              Pro IQ Abacus improves your child’s Concentration, Memory
              Retention , Recalling Ability , Observation Power , Listening
              Skill , Writing Skills with Speed & Accuracy and  Confidence
            </p>
            <div>
              <Image src={img} alt="" className="h-fit w-full" />
            </div>

            <div className="flex w-full flex-col gap-y-5">
              <h1 className="font-[Montserrat] text-6xl">Teacher</h1>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <h1 className="flex items-center justify-start gap-2 font-[Montserrat] text-xl">
                  <BiSolidCircle />
                  Payel Das
                </h1>
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-col rounded-[25px] border-2 sm:w-[20rem] md:w-[30rem]  ">
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Start Date
              </span>
              <Link href={"/Contact"}>
                <span className="font-[Montserrat] text-lg">Contact Now</span>
              </Link>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Age Group
              </span>
              <span className="font-[Montserrat] text-lg">5 - 12 Years</span>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Class Size
              </span>
              <span className="font-[Montserrat] text-lg">12-15 Students</span>
            </div>
            <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Class Duration
              </span>
              <span className="font-[Montserrat] text-lg">2 hours</span>
            </div>

            <button
              className="flex flex-col gap-y-4 sm:p-7 md:p-4 lg:p-7"
              onClick={scrollToReviewSection}
            >
              <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                Review
              </span>
              <span className="cursor-pointer font-[Montserrat] text-lg">
                Give Your Feedback
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 p-16">
          <div className="flex flex-col gap-y-3">
            <span className="font-[Montserrat] text-4xl font-semibold">
              Course Description
            </span>
            <span className="font-[Montserrat] text-xl">
              Pro IQ Abacus is designed for children between 5 and 14 years of
              age.  
            </span>
            <span className="font-[Montserrat] text-xl">
              Pro IQ Academy has incorporated best advanced skill- based Abacus
              curriculums and training methods year after year . Pro IQ Abacus
              offers four modules of Abacus learning.
            </span>
            <div className="flex gap-8 font-[Montserrat] text-xl font-semibold">
              <span>1.Junior Module</span>
              <span>2.Basic Module</span>
              <span>3.Advance Module</span>
              <span>4.Expert Module</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 ">
            <span className="font-[Montserrat] text-4xl font-semibold">
              Certificate
            </span>
            <span className="font-[Montserrat] text-xl">
              Level wise Performance Certificates are awarded after successful
              completion of each level
            </span>
            <span className="font-[Montserrat] text-4xl">
              100% Achievers are awarded with special prize
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbacusSection;
