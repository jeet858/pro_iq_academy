import React from "react";

const About = () => {
  return (
    <div className=" h-screen">
      <div
        className="h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./images/1.jpg")' }}
      >
        <p className="ml-32 pt-32 text-2xl font-bold text-white">About Us</p>
      </div>
      <div className="mx-32 mt-6 grid grid-cols-2 gap-4 space-x-4">
        <div
          className="h-64 w-full rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("./images/1.jpg")' }}
        ></div>
        <div
          className="h-64 w-full rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("./images/1.jpg")' }}
        ></div>
      </div>
      <div className="mx-32 mt-8 grid w-fit grid-cols-2 gap-2">
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-lg text-[#4D5FE3]">
            About Company
          </span>
          <span className="font-sans text-4xl font-semibold">
            The Best Global Expert
          </span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-gray-500">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don’t look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons.
          </span>
          <span>
            <button className="mt-10 h-14  w-48 rounded-lg bg-[#4D5FE3] font-bold text-white">
              DISCOVER MORE
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
