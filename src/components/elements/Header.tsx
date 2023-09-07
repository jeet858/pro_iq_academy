import Link from "next/link";
import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
    <header
      className={`fixed top-0 h-[auto] w-full border-b-[1.5px] border-[#8080806b] transition-all duration-300 ${
        darkMode ? "dark-mode" : ""
      } ${scrolled ? "bg-gray-500" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-10">
        <div className="flex items-center">
          {" "}
          <div className="logo ml-4">
            <Link href="/">
              <span>
                <img
                  src="/images/logo.jpg"
                  alt="Your Logo"
                  className="h-24 w-auto"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="mr-4  flex items-center justify-end">
          <nav className="nav">
            <ul className="flex space-x-8 font-semibold">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <span className="text-black hover:text-blue-700">
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
                  {darkMode ? <MdLightMode size={22} /> : <FaMoon size={22} />}
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
