import { Link } from "react-router-dom";

import goappitInverseLogo from "/assets/logo-inverse.png";

const Footer = () => {
  return (
    <footer className="pt-12 pb-24 px-5 text-[#555] sm:px-10 md:pt-14 xl:px-32">
      <div className="mx-auto max-w-[1420px] flex flex-col items-center space-y-8 sm:flex-row sm:justify-between sm:space-y-0 sm:items-start sm:space-x-6">
        <div className="w-full flex items-center justify-around space-x-2 sm:space-x-6">
          <Link to="/" className="outline-[#feb8cc]">
            <img src={goappitInverseLogo} alt="Logo" className="w-24 lg:w-32" />
          </Link>
          <div>
            <h4 className="mb-3 text-lg text-[#333] font-semibold lg:text-xl">
              Services
            </h4>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/system-integration"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  System Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/data-processing"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  Data Processing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/automation"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  Automation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-around space-x-2 sm:space-x-6">
          <div>
            <h4 className="mb-3 text-lg text-[#333] font-semibold lg:text-xl">
              Company
            </h4>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg text-[#333] font-semibold lg:text-xl">
              Contact Us
            </h4>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="mailto:contact@goappit.net"
                  className="outline-[#feb8cc] transition-colors hover:text-[#fa1154]"
                >
                  contact@goappit.net
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link className="footer-icon-box outline-[#feb8cc]">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>

          <Link className="footer-icon-box outline-[#feb8cc]">
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
