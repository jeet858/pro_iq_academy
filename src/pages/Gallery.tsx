import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import GallerySection from "~/components/elements/GallerySection";

import Footer from "~/components/elements/footer";

const Gallery = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="pt-[100px]">
          <GallerySection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};
export default Gallery;
