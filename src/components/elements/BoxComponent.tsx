import React from "react";

interface BoxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  backgroundColor: string;
}

const BoxComponent: React.FC<BoxProps> = ({
  icon,
  title,
  description,
  backgroundColor,
}) => {
  return (
    <div
      className={`m-4 flex  flex-row items-center   rounded-2xl  p-10 shadow-[0px_4px_4px_0px_#00000040] sm:h-[150px] sm:w-[360px] lg:h-[200px] lg:w-[404px]`}
    >
      <div
        className="mr-4 flex items-center justify-center  rounded-full sm:h-16 sm:w-32 lg:h-20 lg:w-36"
        style={{ backgroundColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col text-center">
        <h2 className="font-semibold text-black sm:mb-2 sm:text-xl lg:mb-8 lg:text-3xl">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BoxComponent;
