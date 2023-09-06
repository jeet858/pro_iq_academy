import Link from "next/link";
import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {}, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigationLinks = [
    { text: "HOME", to: "/#" },
    { text: "ABOUT US", to: "/#" },
    { text: "WHY PROIQ", to: "/#" },
    { text: "OUR COURSES", to: "/#" },
    { text: "FRANCHISING", to: "/#" },
    { text: "GALLERY", to: "/#" },
    { text: "CONTACT US", to: "/#" },
  ];

  return (
    <header className={`w-full bg-white pb-4 ${darkMode ? "dark-mode" : ""}`}>
      <div className="container flex   justify-between">
        <div className="flex items-center">
          {" "}
          <div className="logo ml-4">
            <Link href="/">
              <span>
                <img
                  src="/images/logo.jpg"
                  alt="Your Logo"
                  className="h-14 w-auto"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex  items-center justify-end">
          <nav className="nav">
            <ul className="flex space-x-4">
              {" "}
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <span className="text-blue-500 transition duration-300 hover:text-blue-700">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
              <div className="ml-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {darkMode ? <MdLightMode size={24} /> : <FaMoon size={24} />}
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
