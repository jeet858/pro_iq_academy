import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import WhyProiqSection from "~/components/elements/WhyProiqSection";

import Footer from "~/components/elements/footer";

const WhyProiq = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <WhyProiqSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default WhyProiq;