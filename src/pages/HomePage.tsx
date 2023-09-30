import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import BackgroundSection from "~/components/elements/BackgroundSection";

import ContectSection from "~/components/elements/ContectSection";
import HomeCarousel from "~/components/elements/HomeCarousel";
import ReviewSection from "~/components/elements/ReviewSection";
import SkillSection from "~/components/elements/SkillSection";
import Strength from "~/components/elements/Strength";
import StudentCommunity from "~/components/elements/StudentCommunity";
import WelcomeSection from "~/components/elements/WelcomeSection";

import Footer from "~/components/elements/footer";
const HomePage = () => {
  return (
    <div>
      <MainPageTemplate>
        <HomeCarousel />
        <SkillSection />
        <WelcomeSection />
        <BackgroundSection title="" />
        <Strength />
        <StudentCommunity />
        <ContectSection />
        <ReviewSection />
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default HomePage;