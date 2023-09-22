import React from "react";

const DiscoverSection = () => {
  return (
    <div>
      <div
        className="flex w-full items-center justify-around p-10 sm:h-fit sm:flex-col lg:h-[20rem] lg:flex-row"
        style={{ backgroundImage: 'url("./images/23.jpg")' }}
      >
        <h1 className="flex flex-col text-5xl font-semibold">
          <span>Start Your Education Career</span>
          <span>With proIQ</span>
        </h1>
        <div>
          <button className="h-[4rem] w-[12rem] rounded-xl bg-[#FF6E65]  text-2xl  font-semibold text-white hover:bg-[#0d369f]  focus:outline-none">
            discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
