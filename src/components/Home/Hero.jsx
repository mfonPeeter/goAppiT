import { Link } from "react-router-dom";

import heroGif from "/assets/hero-gif.gif";

const Hero = () => {
  return (
    <section className="pt-2 pb-28 px-6 text-[#4b0519] bg-gray-300 md:pt-4 lg:px-14 lg:pt-8 xl:px-24">
      <div className="container mx-auto max-w-[1450px] flex flex-col-reverse space-y-reverse space-y-10 items-center justify-between lg:flex-row lg:space-y-0 lg:space-x-2 xl:gap-24">
        <div className="w-full lg:w-1/2">
          <h1 className="mb-4 max-w-3xl mx-auto text-center text-3xl font-bold lg:max-w-2xl lg:mx-0 lg:text-left lg:text-4xl xl:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb2965] to-[#fa1154]">
              GoAPPiT
            </span>{" "}
            - The Top Software Development Company to Empower you with AI
          </h1>
          <p className="mb-8 max-w-xl mx-auto text-center text-lg lg:text-xl lg:mx-0 lg:text-left">
            Get ready for a development environment that can finally catch up
            with you. It doesn't matter where you are at.
          </p>
          <div className="flex justify-center lg:flex lg:justify-start">
            <Link
              to="/contact-us"
              className="px-5 py-2 text-white bg-[#fa1154] font-semibold rounded-full inline-block transition-colors hover:bg-[#e10f4c]"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-10/12 flex justify-center sm:w-9/12 md:w-7/12 lg:w-2/5">
          <img src={heroGif} alt="Hero Gif" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
