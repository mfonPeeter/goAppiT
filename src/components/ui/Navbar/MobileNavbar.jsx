import { Link, NavLink } from "react-router-dom";

const MobileNavbar = ({
  open,
  serviceOpenSubmenu,
  setServiceOpenSubmenu,
  appsOpenSubmenu,
  setAppsOpenSubmenu,
}) => {
  return (
    <ul
      className={`nav-link fixed w-full h-full bottom-0 flex flex-col items-center py-20 px-2 bg-gray-300 transition-all duration-[350ms] ease-linear md:hidden ${
        open ? "left-0 opacity-100" : "right-[100%] opacity-0"
      }`}
    >
      <li className="inline-block w-72 border-b border-gray-400 sm:w-96">
        <div className="flex flex-col">
          <div className="group flex items-center justify-between cursor-pointer">
            <NavLink
              to="/service"
              className={`${({ isActive }) =>
                isActive &&
                "active"} py-4 inline-block transition-colors outline-[#feb8cc] group-hover:text-[#fa1154] hover:text-[#fa1154]`}
            >
              Services
            </NavLink>
            <div
              className={`w-full py-5 flex justify-end ${
                serviceOpenSubmenu
                  ? "mobile-down-icon-box"
                  : "mobile-up-icon-box"
              }`}
              onClick={() => setServiceOpenSubmenu((prevState) => !prevState)}
            >
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
          <ul
            className={`pl-4 py-3 -mt-2 mb-2 bg-gray-200 rounded-xl transition-all duration-300 ${
              serviceOpenSubmenu ? "inline-block" : "hidden"
            }`}
          >
            <li className="flex flex-col space-y-2.5">
              <NavLink
                to="/services/web-development"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Web development
              </NavLink>
              <NavLink
                to="/system-integration"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                System Integration
              </NavLink>
              <NavLink
                to="/data-processing"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Data Processing
              </NavLink>
              <NavLink
                to="/automation"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                Automation
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li className="w-72 border-b border-gray-400 sm:w-96">
        <NavLink
          to="/solutions"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
        >
          Solutions
        </NavLink>
      </li>
      <li className="w-72 border-b border-gray-400 sm:w-96">
        <NavLink
          to="/consulting"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
        >
          Consulting
        </NavLink>
      </li>
      <li className="inline-block w-72 border-b border-gray-400 sm:w-96">
        <div className="flex flex-col">
          <div className="group flex items-center justify-between cursor-pointer">
            <NavLink
              to="/apps"
              className={`${({ isActive }) =>
                isActive &&
                "active"} py-4 inline-block transition-colors outline-[#feb8cc] group-hover:text-[#fa1154] hover:text-[#fa1154]`}
            >
              Apps
            </NavLink>
            <div
              className={`w-full py-5 flex justify-end ${
                appsOpenSubmenu ? "mobile-down-icon-box" : "mobile-up-icon-box"
              }`}
              onClick={() => setAppsOpenSubmenu((prevState) => !prevState)}
            >
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
          <ul
            className={`pl-4 py-3 -mt-2 mb-2 bg-gray-200 rounded-xl transition-all duration-300 ${
              appsOpenSubmenu ? "inline-block" : "hidden"
            }`}
          >
            <li className="flex flex-col space-y-2.5">
              <NavLink
                to="/goshareit"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
              >
                goSHAREiT
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li className="w-72 border-b border-gray-400 sm:w-96">
        <NavLink
          to="/about-us"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#feb8cc] transition-colors hover:text-[#fa1154]`}
        >
          About Us
        </NavLink>
      </li>

      <div className="pt-8 w-72 sm:w-96">
        <Link
          to="/contact-us"
          className="w-full py-3 text-white text-center bg-[#fa1154] font-semibold rounded-full inline-block transition-colors hover:bg-[#e10f4c]"
        >
          Contact Us
        </Link>
      </div>
    </ul>
  );
};

export default MobileNavbar;
