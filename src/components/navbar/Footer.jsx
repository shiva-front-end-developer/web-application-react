import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 md:mx-36">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 w-64 text-justify">
            <a href="#" className="flex items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white mb-5 outline-lime-50">
                Stock P Logo
              </span>
            </a>
            <span className=" text-white text-xl">
              {" "}
              Our Partnerships have delivered great value to our projects and
              we're happy to share some of their feedback below
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white ">
                Products
              </h2>
              <ul className="text-gray-500 dark:text-gray-300 font-medium">
                <li className="mt-1">
                  <a href="#" className="hover:underline mt-1">
                    About Us
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline">
                    FAQ'S
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline ">
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline ">
                    Terms of Service
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline ">
                    Disclaimer
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline ">
                    Submit Grievance
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Community
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mt-1">
                  <a href="#" className="hover:underline ">
                    Subscription
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline mt-1">
                    Courses
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#" className="hover:underline mt-1">
                    Webinar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-3xl">
            <a
              href="#"
              className="text-white hover:text-gray-500 dark:hover:text-white bg-slate-600 rounded-full "
            >
              <FaFacebook />
            </a>
            <a className="text-white hover:text-gray-900 dark:hover:text-white ms-5 rounded-full">
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagram />

              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
