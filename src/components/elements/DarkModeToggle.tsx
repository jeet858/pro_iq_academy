import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Session } from "next-auth";

type DarkModeToggleProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`ml-4 text-gray-600 dark:text-gray-300`}
    >
      {darkMode ? <MdLightMode size={22} /> : <FaMoon size={22} />}
    </button>
  );
};

export default DarkModeToggle;
