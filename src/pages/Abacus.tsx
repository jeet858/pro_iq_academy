import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import AbacusSection from "~/components/elements/AbacusSection";

import Footer from "~/components/elements/footer";

const Abacus = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <AbacusSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default Abacus;
