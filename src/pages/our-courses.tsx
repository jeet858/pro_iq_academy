import Head from "next/head";
import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import OurCoursesSection from "~/components/elements/OurCoursesSection";

import Footer from "~/components/elements/footer";

const OurCourses = () => {
  return (
    <div>
      <Head>
        <title>ProIq Academy</title>
      </Head>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <OurCoursesSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default OurCourses;
