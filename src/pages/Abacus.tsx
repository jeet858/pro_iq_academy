import React from "react";
import MainPageTemplate from "~/components/MainPageTemplate";
import AbacusSection from "~/components/elements/AbacusSection";

import Footer from "~/components/elements/footer";
import Head from "next/head";

const Abacus = () => {
  return (
    <div>
      <Head>
        <title>ProIq Academy</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageTemplate>
        <div className="">
          <AbacusSection />
        </div>
        <Footer />
      </MainPageTemplate>
    </div>
  );
};

export default Abacus;
