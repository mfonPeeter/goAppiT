import webDevImg from "/assets/services/web-dev.png";
import sysIntImg from "/assets/services/sys-int.png";
import dataProcessImg from "/assets/services/data-process.png";
import autImg from "/assets/services/aut.png";

const Services = () => {
  return (
    <section className="pt-12 pb-24 px-5 sm:px-10 md:pt-14 xl:px-32">
      <h2 className="mb-10 text-3xl text-center text-[#333] font-bold md:mb-12 lg:text-4xl">
        Services
      </h2>
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 items-center gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
        <div>
          <span className="mb-2 inline-block text-5xl text-gray-300 font-bold lg:text-6xl">
            01
          </span>
          <h3 className="mb-4 text-xl text-[#333] font-semibold lg:text-2xl">
            Web Application Development
          </h3>
          <p className="text-md text-[#555] lg:text-lg">
            We create dynamic and interactive web applications that cater to
            your unique business needs. Our developers leverage modern
            frameworks, programming languages, and best practices to deliver
            secure, scalable, and user-friendly web solutions. Whether you
            require a simple website or a complex enterprise-level application,
            we have you covered.
          </p>
        </div>
        <div className="flex justify-center row-start-1 md:row-start-auto">
          <img
            src={webDevImg}
            alt="Web Development"
            className="w-8/12 sm:w-7/12 md:w-9/12 lg:w-8/12"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={sysIntImg}
            alt="System Integration"
            className="w-8/12 sm:w-7/12 md:w-9/12 lg:w-8/12"
          />
        </div>
        <div>
          <span className="mb-2 inline-block text-5xl text-gray-300 font-bold lg:text-6xl">
            02
          </span>
          <h3 className="mb-4 text-xl text-[#333] font-semibold lg:text-2xl">
            System Integration
          </h3>
          <p className="text-md text-[#555] lg:text-lg">
            We understand the importance of seamless communication and
            collaboration between various systems within your organization. Our
            team specializes in system integration, enabling different software
            applications, databases, and third-party services to work together
            efficiently. By integrating your systems, we help streamline
            operations, enhance data sharing, and improve overall efficiency.
          </p>
        </div>

        <div>
          <span className="mb-2 inline-block text-5xl text-gray-300 font-bold lg:text-6xl">
            03
          </span>
          <h3 className="mb-4 text-xl text-[#333] font-semibold lg:text-2xl">
            Data Processing
          </h3>
          <p className="text-md text-[#555] lg:text-lg">
            Data is a valuable asset for any business, and we offer data
            processing solution to help you extract meaningful insights and
            drive informed decision-making. Our data processing services include
            data extraction, transformation, cleansing, analysis, and
            visualization. We leverage advanced tools and techniques to process
            large volumes of data accurately and efficiently.
          </p>
        </div>
        <div className="flex justify-center row-start-5 md:row-start-auto">
          <img
            src={dataProcessImg}
            alt="Data Processing"
            className="w-8/12 sm:w-7/12 md:w-9/12 lg:w-8/12"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={autImg}
            alt="Automation"
            className="w-8/12 sm:w-7/12 md:w-9/12 lg:w-8/12"
          />
        </div>
        <div>
          <span className="mb-2 inline-block text-5xl text-gray-300 font-bold lg:text-6xl">
            04
          </span>
          <h3 className="mb-4 text-xl text-[#333] font-semibold lg:text-2xl">
            Automation
          </h3>
          <p className="text-md text-[#555] lg:text-lg">
            Automation can significantly enhance productivity and reduce manual
            effort. We develop custom automation solutions tailored to your
            specific business processes. By automating repetitive and
            time-consuming tasks, we help you save valuable time, minimize
            errors, and optimize resource utilization. Our automation solutions
            can range from simple scripting to more complex workflow
            orchestration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
