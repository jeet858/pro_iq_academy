import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
const TopNav = () => {
  return (
    <div className="left-0 right-0 top-0 z-50 w-full bg-[#0D369F] p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 items-center justify-between">
          <div className="text-sm text-white hover:text-[#FF6E65]">
            Have any question?
          </div>
          <Link
            href="https://api.whatsapp.com/send?phone=7477879008"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-around text-sm text-white hover:text-[#FF6E65]">
              <BsFillTelephoneFill className="text-lg" />
              <span>+91 7477879008</span>
            </div>{" "}
          </Link>
          <Link href="mailto:proiqacademy@gmail.com">
            <div className="flex flex-row items-center justify-around text-sm text-white hover:text-[#FF6E65]">
              <MdEmail className="text-lg" />
              <span>proiqacademy@gmail.com</span>
            </div>
          </Link>
        </div>
        <div className="space-x-4 text-xl">
          <div className="flex space-x-4">
            <Link
              href="https://api.whatsapp.com/send?phone=7477879008"
              target="_blank"
              className="text-white hover:text-[#FF6E65]"
            >
              <BsWhatsapp title="Click here" />
            </Link>
            <Link
              href="mailto:proiqacademy@gmail.com"
              className="text-white hover:text-[#FF6E65]"
            >
              <BiLogoGmail title="Click here" />
            </Link>
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-[#FF6E65]">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
