import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="pt-12 pb-24 px-5 bg-[#fa1154] sm:px-10 md:pt-14 xl:px-32">
      <h2 className="mb-6 max-w-7xl mx-auto text-lg text-white text-center lg:mb-8 lg:text-xl">
        At GOAPPiT, we are committed to delivering sofware solutions that
        empower your business, drive efficiency, and enable growth. Contact us
        today to discuss how we can assist you in achieving your sofware
        development goals in web applications, system integration, data
        processing, and automation.
      </h2>
      <div className="flex justify-center">
        <Link
          to="/contact-us"
          className="px-8 py-2 text-[#4b0519] bg-white font-semibold rounded-full inline-block transition-colors hover:opacity-90 lg:text-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;
