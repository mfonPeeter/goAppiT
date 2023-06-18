import { useState } from "react";

import MobileNavbar from "./MobileNavbar";
import goappitLogo from "/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpenSubmenu, setServiceOpenSubmenu] = useState(false);
  const [appsOpenSubmenu, setAppsOpenSubmenu] = useState(false);

  const navToggleHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="text-white bg-[#fda19c] md:px-4 lg:px-9">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between font-medium">
        <div className="z-50 w-full px-6 flex justify-between md:px-0 md:w-auto">
          <a href="/" className="py-6 inline-block outline-[#fda19c]">
            <img src={goappitLogo} alt="Logo" className="w-24" />
          </a>
          <div className="px-6 py-6 md:hidden">
            <button
              className={`z-20 fixed hamburger block outline-[#fda19c] md:hidden ${
                open && "open"
              }`}
              onClick={navToggleHandler}
            >
              <div className="hamburger-top"></div>
              <div className="hamburger-middle"></div>
              <div className="hamburger-bottom"></div>
            </button>
          </div>
        </div>

        <div className="hidden items-center space-x-7 md:flex lg:space-x-24">
          <ul className="flex space-x-1 lg:space-x-7">
            <li className="group">
              <a
                href="/"
                className="flex py-6 px-3 outline-[#fda19c] transition-colors hover:text-[#fa4238]"
              >
                Service
                <span className="flex items-center ml-1">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
              <ul className="hidden absolute top-20 px-2 py-3 bg-[#fda19c] rounded-xl transition-all duration-300 group-hover:block hover:block">
                <li className="flex flex-col space-y-2">
                  <a
                    href="/"
                    className="px-2 rounded-md outline-[#fda19c] transition-color hover:text-[#fa4238] hover:bg-[#fdb3af]"
                  >
                    Web development
                  </a>
                  <a
                    href="/"
                    className="px-2 rounded-md outline-[#fda19c] transition-color hover:text-[#fa4238] hover:bg-[#fdb3af]"
                  >
                    System Integration
                  </a>
                  <a
                    href="/"
                    className="px-2 rounded-md outline-[#fda19c] transition-color hover:text-[#fa4238] hover:bg-[#fdb3af]"
                  >
                    Data Processing
                  </a>
                  <a
                    href="/"
                    className="px-2 rounded-md outline-[#fda19c] transition-color hover:text-[#fa4238] hover:bg-[#fdb3af]"
                  >
                    Automation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/"
                className="py-6 px-3 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/"
                className="py-6 px-3 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]"
              >
                Consulting
              </a>
            </li>
            <li className="group">
              <a
                href="/"
                className="flex py-6 px-3 outline-[#fda19c] transition-colors hover:text-[#fa4238]"
              >
                Apps
                <span className="flex items-center ml-1">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
              <ul className="hidden absolute top-20 px-2 py-3 bg-[#fda19c] rounded-xl transition-all duration-300 group-hover:block hover:block">
                <li className="flex flex-col space-y-2">
                  <a
                    href="/"
                    className="px-2 rounded-md outline-[#fda19c] transition-color hover:text-[#fa4238] hover:bg-[#fdb3af]"
                  >
                    goSHAREiT
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/"
                className="py-6 px-3 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]"
              >
                About Us
              </a>
            </li>
          </ul>
          <div>
            <a
              href="/"
              className="px-5 py-2 bg-[#fa4238] rounded-full inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>

        <MobileNavbar
          open={open}
          serviceOpenSubmenu={serviceOpenSubmenu}
          setServiceOpenSubmenu={setServiceOpenSubmenu}
          appsOpenSubmenu={appsOpenSubmenu}
          setAppsOpenSubmenu={setAppsOpenSubmenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
