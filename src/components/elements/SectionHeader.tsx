import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center font-bold sm:text-3xl md:space-x-2 md:text-5xl lg:flex-row">
        <span className="text-black md:flex-shrink-0">{title}</span>
        <span className="text-[#FF6E65] md:ml-2 md:inline-block">
          {subtitle}
        </span>
      </div>
      <div className="flex justify-center sm:pb-[2rem] lg:pb-[4.25rem]">
        <div className="mt-2">
          <svg
            width="85"
            height="1"
            viewBox="0 0 85 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="85" y2="0.5" stroke="black" />
          </svg>
        </div>
        <div className="mt-4">
          <svg
            width="85"
            height="4"
            viewBox="0 0 85 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="85" y2="0.5" stroke="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
