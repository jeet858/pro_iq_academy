import React from "react";
import Image from "next/image"; // Import the next/image component
import Strength from "./Strength";
import { FiSend } from "react-icons/fi";
const AboutSection = () => {
  return (
    <div>
      <div className="h-fit">
        <div className="relative h-80 bg-cover bg-center bg-no-repeat">
          <Image
            src="/images/bi.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
          />
          <p className="relative ml-32 pt-32 text-2xl font-bold text-white">
            About Us
          </p>
        </div>
      </div>
      <div className="flex h-[40rem] flex-col sm:flex-row md:flex-col">
        <div className="mx-32 mt-6 flex h-fit gap-4 space-x-4">
          <div className="relative h-64 w-full rounded-xl bg-cover bg-center bg-no-repeat">
            <Image
              src="/images/bi.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="relative h-64 w-full rounded-xl bg-cover bg-center ">
            <Image
              src="/images/bi.jpg"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
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
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour words which don’t look even slightly believable.
              Lorem Ipsn gravida nibh vel velit auctor aliquetn auci elit cons.
            </span>
            <span>
              <button className="mt-10 h-14 w-48 rounded-lg bg-[#4D5FE3] font-bold text-white">
                DISCOVER MORE
              </button>
            </span>
          </div>
        </div>
      </div>
      <div
        className="relative sm:h-fit lg:h-[30rem]"
        style={{ backgroundImage: 'url("./images/12.jpg")' }}
      >
        <div className="absolute inset-0 bg-slate-600  opacity-50"></div>
        <Strength />
      </div>
      <div className="container flex w-full items-center justify-around p-10 sm:h-fit sm:flex-col lg:h-[30rem] lg:flex-row">
        <h1 className="mb-4 text-5xl font-semibold">
          Subscribe to Our Newsletter to Get Daily Content!
        </h1>

        <div className="relative flex w-full flex-col items-center">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-[35rem] border-b-2 border-black pr-12"
            />
            <button className="absolute">
              <FiSend className="text-2xl" />
            </button>
          </div>
          <button className=" bg-transparent px-4 py-2 text-blue-800 hover:text-black focus:outline-none">
            Sign up now for weekly news and updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
