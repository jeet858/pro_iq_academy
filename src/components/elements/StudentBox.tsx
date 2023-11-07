import React from "react";
import { BsQuote } from "react-icons/bs";
interface StudentBoxProps {
  name: string;
  email: string;
  imageSrc: string;
  description: string;
}

const StudentBox: React.FC<StudentBoxProps> = ({
  name,
  email,
  imageSrc,
  description,
}) => {
  const nm = name.split(" ");

  return (
    <div className="relative mt-8 flex flex-col justify-around rounded-2xl border bg-white shadow-[2px_2px_2px_2px_#00000040] sm:h-[300px] sm:w-[320px] lg:h-[360px] lg:w-[310px]  lg:p-4 xl:h-[392px] xl:w-[366px] ">
      <div className="absolute -top-16 left-24 h-[146px] w-[146px] overflow-visible rounded-full outline  outline-[#FF6E65] ">
        <div className="flex h-[146px] w-[146px] flex-wrap items-center justify-center rounded-full bg-[#FF4F81] text-6xl font-semibold text-black">
          {nm[0]?.charAt(0)}
          {nm[1]?.charAt(0).toLocaleUpperCase()}
        </div>
      </div>
      <div className="">
        <h3 className="mt-4 flex items-center justify-center text-xl  font-bold text-[#0D369F]">
          {name}
        </h3>
        <p className="flex justify-center text-gray-600">{email}</p>
        <div className="flex flex-row justify-center">
          <div className="text-2xl text-[#0D369F]">
            <BsQuote />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentBox;
