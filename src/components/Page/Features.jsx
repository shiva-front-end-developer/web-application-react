import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { FaPlay, FaUser, FaSearch } from "react-icons/fa";
import { CiMinimize2 } from "react-icons/ci";

const Features = () => {
  return (
    <div className="p-4 md:mx-36">
      <div className="mb-8 text-center  ">
        <h1 className="text-4xl font-bold mb-4 text-white mt-10">
          About Our Product & Features.
        </h1>
        <span className="text-gray-100 mt-10 ">
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className="mb-8 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img className="w-full h-96" src="/public/features.png" alt="" />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-10">
          <div className="mb-10 flex items-center">
            <span className="text-lg font-semibold text-blue-400 flex items-center">
              <MdMemory className="mr-2" /> Lorem Ipsum Dolor
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-12 text-white ">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <div>
            <div className="text-gray-100 mb-8 text-justify text-lg ">
              With great teams come great processes. Using our developer API,
              create and publish extensions to your organization’s Private
              Extension Store for your team to install.
            </div>

            <div className="text-gray-100 mb-8 lg">
              Build extensions to quickly access company brand assets, log
              feedback, book time off, or search your employee index.
            </div>
          </div>

          <button className="px-4 py-2 mt-16 text-white rounded-md flex items-center">
            Explore More <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div></div>
      </div>

      <div>
        <div className="relative">
          <video
            className="w-full bg-gray-900 rounded-lg"
            style={{ height: "648px" }}
            src=""
          ></video>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-8xl font-bold relative">
              Features
              <span className="bg-blue-100 w-32 h-32 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <FaPlay />
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <FaUser className="text-white text-3xl mb-2" />
            <h1 className="text-2xl font-bold text-start mb-2 mt-10 text-white">
              User
            </h1>
          </div>
          <p className="text-white mb-2">
            Stay on top of your growing company by making it easy to search, and
            get to know, your teammates.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <FaSearch className="text-white text-3xl mb-2" />
            <h1 className="text-2xl font-bold text-start mb-2 mt-10 text-white">
              Research Analysis
            </h1>
          </div>
          <p className="text-white mb-2">
            Keep your visuals consistently on-brand with easily accessible
            colors, icons, screenshots and more, for the whole team.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <CiMinimize2 className="text-white text-3xl mb-2" />
            <h1 className="text-2xl font-bold text-start mb-2 mt-10 text-white">
              A.P.
            </h1>
          </div>
          <p className="text-white mb-2">
            Set up template bug report forms to give timely and actionable
            feedback on features and projects in development.
          </p>
        </div>
      </div>
      {/*  here is some code  */}

      <div className=" w-auto first flex justify-center bg-black text-whitesmoke border-t border-b border-darkblue text-white mt-20 border-blue-300">
        <div className="child p-20 ">
          <p className="font-bold text-4xl ">100k</p>
          <p className="text-lg justify-between mt-7">Commulative Traiding</p>
          <p className="text-lg mt-3">Volume to date</p>
        </div>
        <div className="child p-20 border-darkblue border-l border-blue-300">
          <p className="font-bold text-4xl">1200+</p>
          <p className="text-lg mt-3">crypto-asset pairs</p>
        </div>
        <div className="child p-20 border-l border-blue-300">
          <p className="font-bold text-4xl">25k</p>
          <p className="text-lg mt-3">leading global and</p>
          <p className="text-lg mt-3">local crypto exchanges</p>
        </div>
      </div>

      {/*  */}

      <div>
        <h1 className="text-4xl text-center font-bold mb-4 md:mb-0 text-white mt-10">
          Why Choose Us
        </h1>
        <p className=" md:mb-0 text-xl text-center text-white m-5">
          Turn Pro to harness the power of AI, make Raycast your own with custom
          themes, keep your Macs in sync and more.
        </p>
        <div className="flex flex-col md:flex-row space-x-4 items-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className=" p-4 rounded-lg">
              <img
                src="/public/card1.png"
                alt=""
                className="h-64 rounded-lg mb-4"
              />
              <div>
                <h1 class="text-white text-xl font-bold mb-2">
                  Lorem Ipsum Dolor
                </h1>
                <p class="text-white">
                  Ask anything, anytime, anywhere. Stuck while programming? Need
                  some copy? Or just have a question - Ask AI.
                </p>
              </div>
            </div>
            <div className=" p-4 rounded-lg">
              <img
                src="/public/card2.png"
                alt=""
                className="h-64 rounded-lg mb-4"
              />
              <div>
                <h1 className="text-white text-xl font-bold mb-2">
                  Lorem Ipsum Dolor
                </h1>
                <p className="text-white">
                  Keep everything safe and updated across your Macs. Perfect to
                  switch between personal and work setup.
                </p>
              </div>
            </div>
            <div className=" p-4 rounded-lg">
              <img
                src="/public/card3.png"
                alt=""
                className="h-64 rounded-lg mb-4"
              />
              <div>
                <h1 className="text-white text-xl font-bold mb-2">
                  Lorem Ipsum Dolor
                </h1>
                <p class="text-white">
                  Make Raycast your own with gorgeous pre-made themes or design
                  your own and share it with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="relative overflow-hidden mt-8 rounded-xl"
        style={{ height: "650px" }}
      >
        <img
          src="/public/web.png"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-auto w-full scale-110"
          style={{
            transform: "translate(-50%, -50%) scale(1.4)",
          }}
        />
      </div>
    </div>
  );
};

export default Features;
