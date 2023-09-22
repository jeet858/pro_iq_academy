import React from "react";
import {
  FaAngleDoubleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaGooglePlus,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex h-fit w-full justify-center bg-[#060e1f] text-white ">
        <div className=" container flex flex-wrap justify-center p-4 lg:p-24">
          <div className="mb-8 w-full items-baseline lg:w-1/2 xl:w-1/4">
            <h2 className="mb-2 border-b-[1px] border-[#17365866] text-lg font-semibold">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2 flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Home
              </li>
              <li className="mb-2 flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                About
              </li>
              <li className="mb-2 flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Courses
              </li>
              <li className="mb-2 flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Contact
              </li>
            </ul>
          </div>

          <div className="mb-8 w-full  items-baseline lg:w-1/2 xl:w-1/4">
            <h2 className="mb-2 border-b-[1px] border-[#17365866] text-lg font-semibold">
              Help & Support
            </h2>
            <ul>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Gallery
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Why ProIQ
              </li>
              <li className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Franchising
              </li>
            </ul>
          </div>

          <div className="mb-8 w-full items-baseline border-r-[1px] border-[#17365866]  lg:w-1/2  xl:w-1/4">
            <h2 className="mb-2 border-b-[1px] border-[#17365866] text-lg font-semibold">
              CONTACT
            </h2>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              info@proiqacademy.com
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              +91 7477879008
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
            </div>
          </div>

          <div className="mb-8 w-full  items-baseline lg:w-1/2 xl:w-1/4">
            <h2 className="mb-2 border-b-[1px] border-[#17365866] text-lg font-semibold">
              About
            </h2>
            <p>
              Pro IQ Academy is a children's institute for self-skill
              development. We perform as a team of young and well-experienced
              professionals and do all our best to provide value-based advanced
              skillful education.
            </p>
            <div className="flex items-center gap-4 p-4  text-xl">
              <FaFacebookF />
              <FaLinkedin />
              <FaTwitter />
              <FaGooglePlus />
              <FaGithub />
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#040a17] py-4 text-center text-[#a0a0a0]">
        <p>@2023 ProIQ Academy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
