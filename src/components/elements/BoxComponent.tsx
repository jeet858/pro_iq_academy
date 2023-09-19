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
      className={`m-4 flex h-[200px] w-[404px] flex-row items-center rounded-2xl bg-white p-10 shadow-[0px_4px_4px_0px_#00000040]`}
    >
      <div
        className="mr-4 flex h-20 w-36 items-center justify-center rounded-full"
        style={{ backgroundColor }}
      >
        {icon}
      </div>
      <div className="text-center">
        <h2 className="mb-8 text-3xl font-semibold text-black">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BoxComponent;
