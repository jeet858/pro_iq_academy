import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import FranchisingSection from "~/components/elements/FranchisingSection";
import Footer from "~/components/elements/footer";

const Franchising = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <FranchisingSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default Franchising;
