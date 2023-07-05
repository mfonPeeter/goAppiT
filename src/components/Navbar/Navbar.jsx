import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import MobileNavbar from "./MobileNavbar";
import goappitLogo from "/assets/logo.png";

const Navbar = ({ stickyNav }) => {
  const [open, setOpen] = useState(false);
  const [serviceOpenSubmenu, setServiceOpenSubmenu] = useState(false);
  const [appsOpenSubmenu, setAppsOpenSubmenu] = useState(false);

  const navToggleHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`text-[#4b0519] bg-gray-300 md:px-4 lg:px-9 ${
        stickyNav && "fixed w-full bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto max-w-screen-2xl flex items-center justify-between font-medium">
        <div className="z-50 w-full px-6 flex justify-between md:px-0 md:w-auto">
          <Link
            to="/"
            className={`inline-block outline-[#feb8cc] ${
              stickyNav ? "py-4" : "py-6"
            }`}
          >
            <img src={goappitLogo} alt="Logo" className="w-24" />
          </Link>
          <div className={`md:hidden ${stickyNav ? "py-4" : "py-6"}`}>
            <button
              className={`z-20 hamburger block outline-[#feb8cc] md:hidden ${
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
              <NavLink
                to="/service"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} flex py-6 px-3 outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Services
                <span className="flex items-center ml-1">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </NavLink>
              <ul className="hidden absolute top-16 px-2 py-3 bg-gray-200 rounded-xl shadow-lg transition-all duration-300 group-hover:block hover:block">
                <li className="flex flex-col space-y-2">
                  <NavLink
                    to="/web-development"
                    className={`${({ isActive }) =>
                      isActive &&
                      "active"} px-2 rounded-md outline-[#feb8cc] transition-color hover:text-[#fa1154] hover:bg-slate-300`}
                  >
                    Web development
                  </NavLink>
                  <NavLink
                    to="/system-integration"
                    className={`${({ isActive }) =>
                      isActive &&
                      "active"} px-2 rounded-md outline-[#feb8cc] transition-color hover:text-[#fa1154] hover:bg-slate-300`}
                  >
                    System Integration
                  </NavLink>
                  <NavLink
                    to="/data-processing"
                    className={`${({ isActive }) =>
                      isActive &&
                      "active"} px-2 rounded-md outline-[#feb8cc] transition-color hover:text-[#fa1154] hover:bg-slate-300`}
                  >
                    Data Processing
                  </NavLink>
                  <NavLink
                    to="/automation"
                    className={`${({ isActive }) =>
                      isActive &&
                      "active"} px-2 rounded-md outline-[#feb8cc] transition-color hover:text-[#fa1154] hover:bg-slate-300`}
                  >
                    Automation
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} flex py-6 px-3 outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consulting"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} flex py-6 px-3 outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Consulting
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/apps"
                className="flex py-6 px-3 outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
              >
                Apps
                <span className="flex items-center ml-1">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </NavLink>
              <ul className="hidden absolute top-16 px-2 py-3 bg-gray-200 rounded-xl shadow-lg transition-all duration-300 group-hover:block hover:block">
                <li className="flex flex-col space-y-2">
                  <NavLink
                    to="/goshareit"
                    className={`${({ isActive }) =>
                      isActive &&
                      "active"} px-2 rounded-md outline-[#feb8cc] transition-color hover:text-[#fa1154] hover:bg-slate-300`}
                  >
                    goSHAREiT
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} flex py-6 px-3 outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink
              to="/contact-us"
              className="px-5 py-2 text-white bg-[#fa1154] rounded-full inline-block"
            >
              Contact Us
            </NavLink>
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
