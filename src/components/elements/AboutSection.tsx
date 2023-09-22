import React from "react";
import img1 from "../../../public/images/our mission 28.jpg";
import img2 from "../../../public/images/our vision 26.jpg";
import img3 from "../../../public/images/aim.jpg";
import BannerSection from "./BannerSection";
import Image from "next/image";
import icon1 from "../../../public/images/courses.png";
import icon2 from "../../../public/images/webinar.png";
import icon3 from "../../../public/images/award.png";
import icon4 from "../../../public/images/teacher.png";
import icon5 from "../../../public/images/share.png";
import DiscoverSection from "./DiscoverSection";
const AboutSection = () => {
  return (
    <div>
      <div className="h-fit">
        <BannerSection paragraphText="About Us" />
      </div>
      <div className="flex h-fit w-full flex-col justify-center self-center  sm:p-8 md:space-y-16 md:p-8 lg:p-16 ">
        <div className="flex w-full justify-evenly sm:flex-col md:flex-row  ">
          <div className="h-[9rem] w-[14rem] p-4   shadow-lg hover:border-2">
            <div>
              <Image src={icon1} alt="" className="h-[4rem] w-[4rem]" />
            </div>
            <h1 className="font-[Abhaya Libre SemiBold] text-xl">
              Online Courses
            </h1>
          </div>
          <div className="h-[9rem] w-[14rem] p-4 shadow-lg hover:border-2">
            <div>
              <Image src={icon2} alt="" className="h-[4rem] w-[4rem]" />
            </div>
            <h1 className="font-[Abhaya Libre SemiBold] text-xl">
              Tutoring online
            </h1>
          </div>
          <div className="h-[9rem] w-[14rem] p-4 shadow-lg hover:border-2">
            <div>
              <Image src={icon3} alt="" className="h-[4rem] w-[4rem]" />
            </div>
            <h1 className="font-[Abhaya Libre SemiBold] text-xl">
              Certificate
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-evenly sm:flex-col md:flex-row">
          <div className="h-[9rem] w-[14rem] p-4 shadow-lg hover:border-2">
            <div>
              <Image src={icon4} alt="" className="h-[4rem] w-[4rem]" />
            </div>
            <h1 className="font-[Abhaya Libre SemiBold] text-xl">
              Expert Instructors
            </h1>
          </div>
          <div className="h-[9rem] w-[14rem] p-4 shadow-lg hover:border-2">
            <div>
              <Image src={icon5} alt="" className="h-[4rem] w-[4rem]" />
            </div>
            <h1 className="font-[Abhaya Libre SemiBold] text-xl">
              Deliver Learning
            </h1>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full sm:p-8 md:p-16">
        <p className="font-[Abhaya Libre SemiBold] sm:text-md md:text-xl lg:text-2xl">
          Pro IQ Academy is a renowned institute dedicated to fostering the
          self-skill development of children. With a team of dynamic and
          experienced professionals, we are committed to providing value-based,
          advanced education that empowers young learners. ProIQ Academy has
          rich experience in finding out basic problems in children and
          developing skill based education among them. We offer a wide range of
          courses, including the highly effective Pro IQ Abacus, An Advance
          Abacus Skill Development Programme, which has proven to be immensely
          beneficial for students in the age group of 4-14 years. Additionally,
          we are specialized in Speed Writing Course, Handwriting Improvement
          Course, and Spoken English Course, all aimed at equipping kids with
          essential skill based education
        </p>
      </div>
      <div className="flex w-full flex-col gap-y-20 sm:p-8 md:p-16">
        <div className="flex w-full justify-between sm:flex-col sm:gap-y-4 md:flex-row md:gap-x-10">
          <div>
            <Image src={img1} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-4 ">
            <h1 className="flex font-[Prata] text-3xl text-[#233D63]">
              MISSION:
            </h1>
            <p className="font-[Gilroy-Regular] text-lg">
              Our mission is to blend skills, education, and character-building
              to unlock the full potential of every student. Through our
              innovative approach, we strive to create a learning environment
              that nurtures growth, fosters creativity, and instils strong
              values.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between sm:flex-col sm:gap-y-4 md:flex-row-reverse md:gap-x-10">
          <div>
            <Image src={img2} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-4">
            <h1 className="font-[Prata] text-3xl text-[#233D63]">VISION:</h1>
            <p className="font-[Gilroy-Regular] text-lg">
              With a vision to become a leading institute, we aim to inspire
              admiration by spreading the values of education, integrity, and
              fun through our young students. Our ultimate goal is to promote
              skill-based education and ensure that every student receives the
              necessary tools for success.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between sm:flex-col sm:gap-y-4 md:flex-row md:gap-x-10">
          <div>
            <Image src={img3} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-4">
            <h1 className="font-[Prata] text-3xl text-[#233D63]">AIM:</h1>
            <p className="font-[Gilroy-Regular] text-lg">
              At Pro IQ Academy, our aim is to provide comprehensive skill-based
              education, empowering students with cognitive abilities, critical
              thinking, creativity, and personal development for a successful
              future.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:py-16 md:py-32"
        style={{ backgroundImage: 'url("./images/29.jpg")' }}
      >
        <p className="items-center justify-center  font-[Prata] text-white sm:text-[30px] md:flex md:flex-col md:text-[50px]">
          <span> Our Endeavour is -To Combine</span>
          <span className="ml-2">skills with education.</span>
        </p>
      </div>
      <div className="h-fit w-full md:p-16">
        <div className="flex h-fit w-full items-center justify-center">
          <h1 className="font-[Prata] text-3xl text-[#233D63]">
            Guardian Feedback
          </h1>
        </div>
        <div className="container relative top-[] flex h-full w-full min-w-full items-center justify-center self-center">
          <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-[18rem] w-[18rem] flex-col  justify-center gap-y-4 p-4 shadow-lg">
              <div>
                <svg
                  width="98"
                  height="19"
                  viewBox="0 0 98 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L0 6.90983H7.26542L9.51056 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M29.5106 0L31.7557 6.90983H39.0211L33.1433 11.1803L35.3884 18.0902L29.5106 13.8197L23.6327 18.0902L25.8779 11.1803L20 6.90983H27.2654L29.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M49.5106 0L51.7557 6.90983H59.0211L53.1433 11.1803L55.3884 18.0902L49.5106 13.8197L43.6327 18.0902L45.8779 11.1803L40 6.90983H47.2654L49.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M67.5106 0L69.7557 6.90983H77.0211L71.1433 11.1803L73.3884 18.0902L67.5106 13.8197L61.6327 18.0902L63.8779 11.1803L58 6.90983H65.2654L67.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M87.5106 0L89.7557 6.90983H97.0211L91.1433 11.1803L93.3884 18.0902L87.5106 13.8197L81.6327 18.0902L83.8779 11.1803L78 6.90983H85.2654L87.5106 0Z"
                    fill="#FFBF1C"
                  />
                </svg>
              </div>
              <p>
                PRO IQ Academy has transformed my child's abilities with their
                mental math and skill development program. The instructors are
                experienced and the small batches ensure personalized attention.
                Affordable fees and online/offline classes make it convenient.
              </p>
            </div>
            <div className="flex h-[18rem] w-[18rem] flex-col  justify-center gap-y-4 p-4 shadow-lg ">
              <div>
                <svg
                  width="98"
                  height="19"
                  viewBox="0 0 98 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L0 6.90983H7.26542L9.51056 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M29.5106 0L31.7557 6.90983H39.0211L33.1433 11.1803L35.3884 18.0902L29.5106 13.8197L23.6327 18.0902L25.8779 11.1803L20 6.90983H27.2654L29.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M49.5106 0L51.7557 6.90983H59.0211L53.1433 11.1803L55.3884 18.0902L49.5106 13.8197L43.6327 18.0902L45.8779 11.1803L40 6.90983H47.2654L49.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M67.5106 0L69.7557 6.90983H77.0211L71.1433 11.1803L73.3884 18.0902L67.5106 13.8197L61.6327 18.0902L63.8779 11.1803L58 6.90983H65.2654L67.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M87.5106 0L89.7557 6.90983H97.0211L91.1433 11.1803L93.3884 18.0902L87.5106 13.8197L81.6327 18.0902L83.8779 11.1803L78 6.90983H85.2654L87.5106 0Z"
                    fill="#FFBF1C"
                  />
                </svg>
              </div>
              <p>
                Choosing PRO IQ Academy was the best decision for my child's
                education. Their focus on reading, writing, and observation
                skills has improved overall intelligence. The instructors are
                skilled and the evaluations are fun and engaging.
              </p>
            </div>
            <div className="flex h-[18rem] w-[18rem] flex-col  justify-center gap-y-4 p-4 shadow-lg ">
              <div>
                <svg
                  width="98"
                  height="19"
                  viewBox="0 0 98 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L0 6.90983H7.26542L9.51056 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M29.5106 0L31.7557 6.90983H39.0211L33.1433 11.1803L35.3884 18.0902L29.5106 13.8197L23.6327 18.0902L25.8779 11.1803L20 6.90983H27.2654L29.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M49.5106 0L51.7557 6.90983H59.0211L53.1433 11.1803L55.3884 18.0902L49.5106 13.8197L43.6327 18.0902L45.8779 11.1803L40 6.90983H47.2654L49.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M67.5106 0L69.7557 6.90983H77.0211L71.1433 11.1803L73.3884 18.0902L67.5106 13.8197L61.6327 18.0902L63.8779 11.1803L58 6.90983H65.2654L67.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M87.5106 0L89.7557 6.90983H97.0211L91.1433 11.1803L93.3884 18.0902L87.5106 13.8197L81.6327 18.0902L83.8779 11.1803L78 6.90983H85.2654L87.5106 0Z"
                    fill="#FFBF1C"
                  />
                </svg>
              </div>
              <p>
                PRO IQ Academy offers an excellent learning experience. My
                child's numerical ability and critical thinking skills have
                improved significantly. The academy's emphasis on clean
                handwriting and English communication has boosted confidence.
                Highly recommended!
              </p>
            </div>
            <div className="flex h-[18rem] w-[18rem] flex-col  justify-center gap-y-4 p-4 shadow-lg">
              <div>
                <svg
                  width="98"
                  height="19"
                  viewBox="0 0 98 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.51056 0L11.7557 6.90983H19.0211L13.1433 11.1803L15.3884 18.0902L9.51056 13.8197L3.63271 18.0902L5.87785 11.1803L0 6.90983H7.26542L9.51056 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M29.5106 0L31.7557 6.90983H39.0211L33.1433 11.1803L35.3884 18.0902L29.5106 13.8197L23.6327 18.0902L25.8779 11.1803L20 6.90983H27.2654L29.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M49.5106 0L51.7557 6.90983H59.0211L53.1433 11.1803L55.3884 18.0902L49.5106 13.8197L43.6327 18.0902L45.8779 11.1803L40 6.90983H47.2654L49.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M67.5106 0L69.7557 6.90983H77.0211L71.1433 11.1803L73.3884 18.0902L67.5106 13.8197L61.6327 18.0902L63.8779 11.1803L58 6.90983H65.2654L67.5106 0Z"
                    fill="#FFBF1C"
                  />
                  <path
                    d="M87.5106 0L89.7557 6.90983H97.0211L91.1433 11.1803L93.3884 18.0902L87.5106 13.8197L81.6327 18.0902L83.8779 11.1803L78 6.90983H85.2654L87.5106 0Z"
                    fill="#FFBF1C"
                  />
                </svg>
              </div>
              <p>
                ProIQ Academy creates great impact on developing my child’s
                mathematical skills. Kid’s friendly syllabus and intelligence
                activities are quite helpful to improve his/her memory power ,
                concentration & writing skills. He/She is benifited a lot with
                ProIQ Abacus and I would urge lot more students also to get
                benefited out of this Abacus course
              </p>
            </div>
          </div>
        </div>
      </div>
      <DiscoverSection />
    </div>
  );
};

export default AboutSection;
