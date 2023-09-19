import React from "react";

const ContactSection = () => {
  return (
    <div className="h-fit">
      <div
        className="h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./images/1.jpg")' }}
      >
        <div className="ml-32 pt-32 text-2xl font-bold text-white">
          About Us
        </div>
      </div>
      <div className="mx-32 mt-24 flex flex-row gap-4 space-x-4">
        <div className="h-24 w-full basis-1/3 rounded-lg shadow-2xl">
          <div className="mx-6 mt-6 text-xl font-bold text-black">
            1234567890
          </div>
          <div className="mx-6  mb-6 text-xl text-gray-600">Call Anytime</div>
        </div>
        <div className="h-24 w-full basis-1/3 rounded-lg shadow-2xl">
          <div className="mx-6 mt-6 text-xl font-bold text-black">
            1234567890
          </div>
          <div className="mx-6  mb-6 text-xl text-gray-600">Call Anytime</div>
        </div>
        <div className="h-24 w-full basis-1/3 rounded-lg shadow-2xl">
          <div className="mx-6 mt-6 text-xl font-bold text-black">
            1234567890
          </div>
          <div className="mx-6  mb-6 text-xl text-gray-600">Call Anytime</div>
        </div>
      </div>
      <div className="mx-32 my-24 flex flex-row gap-4 space-x-4">
        <div className="h-24 w-full basis-1/3 flex-col gap-4 space-y-6">
          <div className="text-lg text-[#4D5FE3]">Send a message</div>
          <div className="text-6xl font-bold text-black">
            We Always Ready to Hear From You
          </div>
          <div className="text-sm text-[#7A7A7A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            praesentium.
          </div>
        </div>
        <form className="flex h-fit w-full flex-col gap-4 space-y-1">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Name"
              className="m-4 h-16 w-1/2 rounded-lg bg-[#F1F2F6] p-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="m-4 h-16 w-1/2 rounded-lg bg-[#F1F2F6] p-4"
            />
          </div>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Phone no."
              className="m-4 h-16 w-1/2 rounded-lg bg-[#F1F2F6] p-4"
            />
            <input
              type="text"
              placeholder="Subject"
              className="m-4 h-16 w-1/2 rounded-lg bg-[#F1F2F6] p-4"
            />
          </div>
          <div className="flex">
            <textarea
              placeholder="Write a message"
              className="m-4 h-56 w-full rounded-lg bg-[#F1F2F6] p-4"
            />
          </div>
          <button className="m-4 h-14  w-48 rounded-lg bg-[#4D5FE3] font-bold text-white">
            SEND A MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
