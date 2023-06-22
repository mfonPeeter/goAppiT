import webDevImg from "/assets/services/web-dev-1.png";

const Services = () => {
  return (
    <section className="pt-10 pb-24 px-28 border border-red-400">
      <h2 className="mb-8 text-4xl text-center text-[#333] font-bold">
        Services
      </h2>
      <div className="mx-auto max-w-screen-2xl ">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h3 className="text-2xl text-[#333] font-semibold">
              Web Application Development
            </h3>
            <p className="text-lg text-[#555]">
              We create dynamic and interactive web applicaFons that cater to
              your unique business needs. Our developers leverage modern
              frameworks, programming languages, and best pracFces to deliver
              secure, scalable, and user-friendly web soluFons. Whether you
              require a simple website or a complex enterprise-level applicaFon,
              we have you covered.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={webDevImg} alt="Web Dev" className="w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
