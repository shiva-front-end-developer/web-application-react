import React from "react";
import { FaMemory, FaLink } from "react-icons/fa";

const Home = () => {
  return (
    <div div className="mt-10">
      <div
        className="flex justify-center items-center rounded-full text-gray-800  border-gray-800 relative"
        style={{
          width: "782px",
          height: "782px",
          margin: "auto",
          border: "3px dashed ",
        }}
      >
        <div>
          <span className="absolute top-84 left-0 text-3xl text-white">
            <FaMemory />
          </span>
          <span className="absolute top-20 left-20">
            <img src="/public/bd1.png" alt="" />
          </span>
          <span className="absolute top-16 right-28 ">
            <img src="/public/bd2.png" alt="" />
          </span>
          <span className="absolute bottom-5 left-56">
            <img src="/public/bd3.png" alt="" />
          </span>
          <span className="absolute bottom-56 right-0 text-3xl">🔗</span>
        </div>
        <div
          className="flex justify-center items-center rounded-full text-gray-800  border-gray-800  relative"
          style={{
            width: "678px",
            height: "678px",
            margin: "auto",
            border: "3px dashed ",
          }}
        >
          <div>
            <span className="absolute top-80 left-0">
              <img src="/public/bd4.png" alt="" />
            </span>
            <span className="absolute top-10 left-32">
              <img src="/public/bd5.png" alt="" />
            </span>
            <span className="absolute top-72 right-0">
              <img src="/public/bd6.png" alt="" />
            </span>
            <span className="absolute bottom-0 left-64">
              <img src="/public/bd7.png" alt="" />
            </span>
          </div>
          <div
            className="flex justify-center items-center rounded-full text-gray-800  border-gray-800   relative"
            style={{
              width: "520px",
              height: "520px",
              margin: "auto",
              border: "3px dashed ",
            }}
          >
            <div className="absolute top-3 bg-orange-400 rounded text-white">
              Featured on Product Hunt {">"}
            </div>
            <div className="absolute top-28 text-5xl w-64 font-bold text-white">
              Your team, reimagined
            </div>
            <div className="w-96 text-3xl text-center mt-16 text-white ">
              <h1>
                Take your team up a level with easy-to-use tools, effortless{" "}
              </h1>
            </div>
            <div className=" p-1 text-xl text-center mt-16 absolute bottom-28 bg-white text-black rounded border-2 border-gray-500">
              <button>Get started today</button>
            </div>
            <div className=" p-1 text-xl text-center mt-16 absolute bottom-5 w-28 ">
              Learn More {"  "} ⬇️
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <span className=" text-center text-white mt-7 mb-7 text-xl">
          Trusted by teams at
        </span>
        <div className="flex flex-wrap justify-between">
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo1.png" alt="" className="h-16 w-32" />
          </a>
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo2.png" alt="" className="h-16 w-32" />
          </a>
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo3.png" alt="" className="h-16 w-32" />
          </a>
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo4.png" alt="" className="h-16 w-32" />
          </a>
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo5.jpg" alt="" className="h-16 w-32" />
          </a>
          <a href="#" className="block mb-4 mx-10 rounded-lg bg-white">
            <img src="/public/logo6.png" alt="" className="h-16 w-32" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
