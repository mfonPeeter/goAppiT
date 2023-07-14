import contactUsImg from "/assets/contact-us/contact-us.png";

const ContactUs = () => {
  return (
    <section className="mb-8">
      <div className="w-full h-[280px] bg-[url('/assets/contact-us/contact-us-bg2.jpg')] bg-no-repeat bg-center bg-cover sm:h-[300px] md:h-[400px] lg:h-[550px] 2xl:h-[800px]" />
      <div className="pt-12 mb-12 text-center">
        <h2 className="mb-2 text-3xl text-center text-[#333] font-bold lg:text-4xl">
          Get in Touch
        </h2>
        <p className="max-w-xl mx-auto text-md text-[#555] lg:text-lg">
          Want to get in touch? We love to hear from you. Fill in the form and
          we will get in touch with you shortly
        </p>
      </div>
      <div className="container mx-auto px-5">
        <div className="w-full flex flex-col shadow-xl rounded-2xl md:flex-row">
          <div className="w-full h-56 bg-[url('/assets/contact-us/contact-us.png')] bg-no-repeat bg-cover bg-center border border-gray-300 rounded-l-2xl md:w-1/2 md:h-auto" />
          <form className="w-full px-6 pt-8 pb-14 bg-gray-300 border border-gray-300 rounded-r-2xl md:w-1/2 lg:pb-20 lg:px-12">
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex flex-col space-y-2 items-start ">
                <label>Full Name:</label>
                <input
                  type="text"
                  placeholder="John Wills Smith"
                  className="p-2 w-full text-[#333] rounded-md outline-none"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2 items-start">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="me@example.com"
                  className="p-2 w-full text-[#333] rounded-md outline-none"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2 items-start ">
                <label>Message:</label>
                <textarea
                  className="p-2 w-full text-[#333] h-44 rounded-md outline-none"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-7 py-2 text-white bg-[#fa1154] font-semibold rounded-full transition-colors hover:bg-[#e10f4c]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
