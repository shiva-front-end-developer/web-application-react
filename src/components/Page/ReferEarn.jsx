import React, { useState } from "react";

const ReferEarn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div className="mx-auto md:mx-36">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-white flex items-center text-6xl font-bold">
            Refer & Earn{" "}
            <img src="/public/dolor.png" alt="" className="w-12 h-12 ml-2" />
          </h1>
        </div>
        <div className="w-full md:w-1/2 mt-10">
          <p className="text-white text-xl text-justify">
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips. Say no to spreadsheets and tools
            designed in the 80s.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-white text-xl mb-7">
          Empower your teams to build better processes, for a better workplace.
        </h2>
        <button className="text-black bg-white p-2 rounded text-xl mb-8">
          Become a Affiliate Partner
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="my-7 md:w-400">
          <h1 className="text-6xl text-white font-bold">Testimonials</h1>
        </div>
        <div className="mt-auto md:w-700">
          <p className="text-xl text-white font-bold">
            Our partnerships have delivered great value to our projects and
            we’re happy to share some of their feedback below
          </p>
        </div>
      </div>
      <div className="relative mx-auto md:mx-56 flex items-center">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${
                index - 1 === currentSlide ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item=""
            >
              <p className="text-white text-3xl mt-20 mx-20 text-justify">
                Since 2019, Gravity team has been an astounding market maker for
                Bitkub. They have proven themselves to be one of the most
                consistent, committed and driven market makers on our exchange.
                Gravity Team has contributed high-quality volume and has proven
                to be very reliable and trustworthy partner. We strongly
                advocate Gravity Team as they have been an indispensable part of
                our market-making team.
              </p>
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3  rounded-full ${
                index === currentSlide ? "bg-white" : ""
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-white"
          data-carousel-prev=""
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border-2 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <span>Prev</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-white"
          data-carousel-next=""
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border-2 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <span>Next</span>
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center my-16 ">
        <img
          src="/public/crs.png"
          className="w-12 h-12 rounded-full mr-2"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="mb-1 text-white">Atthakrit Chimplapibul</h1>
          <h2 className="text-sm text-gray-400">Co-founder & CEO of Bitkub</h2>
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
