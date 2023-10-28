import React from "react";

import Image from "next/image";
import img from "../../public/images/a (12).jpg";

import { BiSolidCircle, BiSolidDownload } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import BannerSection from "~/components/elements/BannerSection";
import MainPageTemplate from "~/components/MainPageTemplate";
import Footer from "~/components/elements/footer";

const SpokenEnglish = () => {
  const router = useRouter();

  const scrollToReviewSection = async () => {
    await router.push("/HomePage#review-section");
  };
  return (
    <MainPageTemplate>
      <div className="h-fit pt-[100px]">
        <BannerSection
          paragraphText=" "
          imageSrc="/images/6667014(2).jpg"
          color="#012360"
        />
        <div className="h-fit w-full ">
          <div className="flex w-full justify-between sm:flex-col sm:p-8 md:flex-row md:gap-5 lg:gap-10 lg:p-16">
            <div className="flex flex-col gap-y-5">
              <p className="font-[Montserrat] text-xl">
                Pro IQ Academy offers Spoken English Course designed for kids &
                young students . Learn Speaking English with fun & pleasure.
              </p>
              <div>
                <Image
                  src={img}
                  alt=""
                  className="md:h-[20rem] md:w-[35rem] lg:h-[35rem] lg:w-[70rem]"
                />
              </div>

              <div className="flex w-full flex-col gap-y-5">
                <h1 className="font-[Montserrat] text-6xl">Teacher</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <h1 className="flex items-center justify-start gap-2 font-[Montserrat] text-xl">
                    <BiSolidCircle />
                    Chinmoy Goswami
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex h-fit flex-col rounded-[25px] border-2 sm:w-[20rem] md:w-[40rem]  ">
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
                <span className="font-[Montserrat] text-lg">10-20 years</span>
              </div>
              <div className="flex flex-col gap-y-2 border-b sm:p-7 md:p-4 lg:p-7">
                <span className="font-[Montserrat] font-semibold md:text-xl lg:text-3xl">
                  Class Size
                </span>
                <span className="font-[Montserrat] text-lg">
                  12-15 Students
                </span>
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
                Activities include in Spoken English course are Listening ,
                Speaking , Reading , Writing , Elementary Grammar& Vocabulary
                Building .
              </span>
              <span className="font-[Montserrat] text-xl">
                Spoken English Course in Pro IQ Academy enables your child to
                achieve effective communication skills , helps to maintain
                better mental flexibility , increases imagination , boosts brain
                power and makes your child a better student .
              </span>
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
      <Footer />
    </MainPageTemplate>
  );
};

export default SpokenEnglish;
