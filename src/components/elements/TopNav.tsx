import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const TopNav = () => {
  return (
    <div className="left-0 right-0 top-0 z-50 w-full bg-[#0D369F] p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 items-center justify-between">
          <div className="text-sm text-white hover:text-[#FF6E65]">
            Have any question?
          </div>
          <div className="flex flex-row items-center justify-around text-sm text-white hover:text-[#FF6E65]">
            <BsFillTelephoneFill className="text-lg" />
            <span>+91 7477879008</span>
          </div>
          <div className="flex flex-row items-center justify-around text-sm text-white hover:text-[#FF6E65]">
            <MdEmail className="text-lg" />
            <span>info@proiqacademy.com</span>
          </div>
        </div>
        <div className="space-x-4 text-xl">
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
