import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { FiMenu } from "react-icons/fi";
import TopNav from "./TopNav";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !(menuRef.current as Node).contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  const navigationLinks = [
    { text: "HOME", to: "/#" },
    { text: "ABOUT US", to: "/About" },
    { text: "WHY PROIQ", to: "/#" },
    { text: "OUR COURSES", to: "/#" },
    { text: "FRANCHISING", to: "/#" },
    { text: "GALLERY", to: "/#" },
    { text: "CONTACT US", to: "/Contact" },
  ];

  return (
    <div
      className={`flex flex-col justify-between ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="flex flex-col">
        <TopNav />
      </div>
      <div>
        <header
          className={`fixed left-0 right-0 z-10 w-full transition-all duration-300 ${
            scrolled ? "top-0" : ""
          } ${menuOpen ? "h-fit" : "h-[100px]"}`}
        >
          <div
            className={`flex items-center justify-between px-4 py-2 md:px-10 ${
              scrolled ? "h-[80px] w-full" : "h-[100px] w-full"
            } ${
              darkMode ? "bg-gray-800 " : scrolled ? "bg-white" : "bg-white"
            }`}
          >
            <div className="flex items-center">
              <div className="logo ml-4">
                <Link href="/">
                  <span>
                    <img
                      src="/images/logo.jpg"
                      alt="Your Logo"
                      className={` ${scrolled ? "h-16 w-auto" : "h-20 w-auto"}`}
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="mr-4 flex items-center justify-end">
              <nav
                className={`md:flex md:space-x-8 md:font-semibold`}
                ref={menuRef}
              >
                <button
                  onClick={toggleMenu}
                  className={`ml-4 text-gray-600 dark:text-gray-300 md:hidden`}
                >
                  <FiMenu size={22} />
                </button>
                <ul
                  className={`md:flex md:space-x-8 ${
                    menuOpen ? "block" : "hidden"
                  } md:items-center md:space-y-0`}
                >
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.to}>
                        <span
                          className={`font-bold ${
                            darkMode
                              ? "text-white hover:text-[#FF6E65]"
                              : "text-black hover:text-[#FF6E65]"
                          }`}
                          onClick={closeMenu}
                        >
                          {link.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>{" "}
                <DarkModeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
