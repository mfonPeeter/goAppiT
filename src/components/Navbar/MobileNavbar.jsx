import { NavLink } from "react-router-dom";

const MobileNavbar = ({
  open,
  serviceOpenSubmenu,
  setServiceOpenSubmenu,
  appsOpenSubmenu,
  setAppsOpenSubmenu,
}) => {
  return (
    <ul
      className={`absolute w-full h-full bottom-0 flex flex-col items-center py-20 px-2 bg-[#fda19c] transition-all duration-[350ms] ease-linear md:hidden ${
        open ? "left-0 opacity-100" : "right-[100%] opacity-0"
      }`}
    >
      <li className="inline-block w-72 border-b border-gray-300 sm:w-96">
        <div className="flex flex-col">
          <div className="group flex items-center justify-between cursor-pointer">
            <NavLink
              to="/service"
              className={`${({ isActive }) =>
                isActive &&
                "active"} py-4 inline-block transition-colors outline-[#fda19c] group-hover:text-[#fa4238] hover:text-[#fa4238]`}
            >
              Service
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
            className={`pl-4 pb-4 -mt-2 bg-[#fda19c] rounded-xl transition-all duration-300 ${
              serviceOpenSubmenu ? "inline-block" : "hidden"
            }`}
          >
            <li className="flex flex-col space-y-2.5">
              <NavLink
                to="/web-development"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
              >
                Web development
              </NavLink>
              <NavLink
                to="/system-integration"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
              >
                System Integration
              </NavLink>
              <NavLink
                to="/data-processing"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
              >
                Data Processing
              </NavLink>
              <NavLink
                to="/automation"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
              >
                Automation
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li className="w-72 border-b border-gray-300 sm:w-96">
        <NavLink
          to="/solutions"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
        >
          Solutions
        </NavLink>
      </li>
      <li className="w-72 border-b border-gray-300 sm:w-96">
        <NavLink
          to="/consulting"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
        >
          Consulting
        </NavLink>
      </li>
      <li className="inline-block w-72 border-b border-gray-300 sm:w-96">
        <div className="flex flex-col">
          <div className="group flex items-center justify-between cursor-pointer">
            <NavLink
              to="/apps"
              className={`${({ isActive }) =>
                isActive &&
                "active"} py-4 inline-block transition-colors outline-[#fda19c] group-hover:text-[#fa4238] hover:text-[#fa4238]`}
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
            className={`pl-4 pb-4 -mt-2 bg-[#fda19c] rounded-xl transition-all duration-300 ${
              appsOpenSubmenu ? "inline-block" : "hidden"
            }`}
          >
            <li className="flex flex-col space-y-2.5">
              <NavLink
                to="/goshareit"
                className={`${({ isActive }) =>
                  isActive &&
                  "active"} outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
              >
                goSHAREiT
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li className="w-72 border-b border-gray-300 sm:w-96">
        <NavLink
          to="/about-us"
          className={`${({ isActive }) =>
            isActive &&
            "active"} py-4 inline-block outline-[#fda19c] transition-colors hover:text-[#fa4238]`}
        >
          About Us
        </NavLink>
      </li>

      <div className="pt-8 w-72 sm:w-96">
        <NavLink
          to="/contact-us"
          className="w-full py-3 text-center bg-[#fa4238] rounded-full inline-block"
        >
          Contact Us
        </NavLink>
      </div>
    </ul>
  );
};

export default MobileNavbar;
