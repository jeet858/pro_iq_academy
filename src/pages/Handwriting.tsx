import React from "react";

import Image from "next/image";
import img from "../../public/images/girl-writing-calligraphy-postcards-art-design-from.jpg";

import { BiSolidCircle, BiSolidDownload } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import BannerSection from "~/components/elements/BannerSection";
import MainPageTemplate from "~/components/MainPageTemplate";
import Footer from "~/components/elements/footer";

const Handwriting = () => {
  const router = useRouter();

  const scrollToReviewSection = async () => {
    await router.push("/HomePage#review-section");
  };
  return (
    <MainPageTemplate>
      <div className="h-fit sm:pt-[55px] lg:pt-[100px]">
        <BannerSection
          paragraphText="Handwriting Improvement Course"
          imageSrc="/images/20.jpg"
          color="white"
        />
        <div className="h-fit w-full ">
          <div className="flex w-full justify-between sm:flex-col sm:p-8 md:flex-row md:gap-5 lg:gap-10 lg:p-16">
            <div className="flex flex-col gap-y-5">
              <p className="font-[Montserrat] text-xl">
                Pro IQ Academy offers Handwriting Improvement Course which
                improves your child’s writing , communication , creativity ,
                critical thinking , sharpens your child’s memory power and makes
                your child a better writer .
              </p>
              <div>
                <Image
                  src={img}
                  alt=""
                  className="md:h-[20rem] md:w-[30rem] lg:h-[35rem] lg:w-[70rem]"
                />
              </div>

              <div className="flex w-full flex-col gap-y-5">
                <h1 className="font-[Montserrat] text-6xl">Teacher</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <h1 className="flex items-center justify-start gap-2 font-[Montserrat] text-xl">
                    <BiSolidCircle />
                    Sudipta Kumar Pal
                  </h1>{" "}
                  <h1 className="flex items-center justify-start gap-2 font-[Montserrat] text-xl">
                    <BiSolidCircle />
                    Sunipa Das
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
                <span className="font-[Montserrat] text-lg">5 - 12 Years</span>
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
          <div className="flex flex-col gap-y-10 sm:p-8 lg:p-16">
            <div className="flex flex-col gap-y-3">
              <span className="font-[Montserrat] text-4xl font-semibold">
                Course Description
              </span>
              <span className="font-[Montserrat] text-xl">
                Handwriting Improvement Course is designed for children 5 years
                and above . 
              </span>
              <span className="font-[Montserrat] text-xl">
                Pro IQ Academy offers Cursive Handwriting Improvement Course
                which includes 3 modules
              </span>
              <div className="flex gap-8 font-[Montserrat] text-xl font-semibold">
                <span>1.Foundation Module </span>
                <span>2.Basic Module </span>
                <span>3.Advance Module</span>
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
                Students scoring 100% marks are awarded with special prizes
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainPageTemplate>
  );
};

export default Handwriting;
