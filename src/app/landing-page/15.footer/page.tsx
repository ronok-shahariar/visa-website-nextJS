"use client";
import { useEffect } from "react";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

export default function FOOTER() {
  useEffect(() => {
    // Load the Feather Icons script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
    script.onload = () => {
      if (window.feather) {
        window.feather.replace(); // Replace <i> tags with SVGs
      }
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Only run once on mount

  return (
    // <!-- footer -->
    <footer className="bg-greenBody min-h-[630px] relative 2xl:px-72">
      {/* <!-- Background Image --> */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-bottom bg-contain bg-no-repeat xl:bottom-10 xl:h-full"
        style={{
          backgroundImage: "url('/landingPageAssets/footer1-bg-img.png')",
        }}
      ></div>

      {/* <!-- support & get ready --> */}
      <div className="relative z-10 pt-16 px-6 lg:pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-center sm:items-start sm:justify-start lg:items-stretch lg:justify-between space-y-7 md:space-y-2 lg:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-row items-center justify-center sm:justify-start gap-6">
            {/* <!-- Left side money logo --> */}
            <div className="bg-button flex items-center justify-center rounded-full p-5 sm:p-5 sm:w-15 sm:h-15 w-35 h-35">
              <Image
                src="/landingPageAssets/money.svg"
                alt=""
                width={45}
                height={45}
              />
            </div>
            <h2 className="font-roboto text-white font-bold text-[21px] lg:text-[28px] leading-tight">
              Need Any Support For
              <span className="hidden lg:inline">
                <br />
              </span>
              Tour And Visa?
            </h2>
          </div>
          {/* <!-- middle div side --> */}
          <div className="hidden lg:flex w-[1px] h-[105px] bg-green/10"></div>
          {/* <!-- right side --> */}
          <div className="flex flex-row items-center justify-center sm:justify-start gap-6">
            {/* <!-- Left side money logo --> */}
            <div className="bg-button flex items-center justify-center rounded-full p-5 sm:p-5 sm:w-15 sm:h-15 w-35 h-35">
              <Image
                src="/landingPageAssets/globe.svg"
                alt=""
                width={45}
                height={45}
              />
            </div>
            <h2 className="font-roboto text-white font-bold text-[21px] lg:text-[28px] leading-tight">
              Are You Ready For Get
              <span className="hidden lg:inline">
                <br />
              </span>
              Started Travelling?
            </h2>
          </div>
        </div>
      </div>

      {/* <!-- top div side --> */}
      <div className="w-full h-[1px] bg-green/10 mt-7"></div>

      {/* <!-- services link and newsletter --> */}
      <div className="relative z-10 flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 gap-x-4 lg:grid-cols-4 lg:grid-rows-1 lg:mt-[74px] items-start justify-between px-4 space-y-16 lg:space-y-0">
        {/* <!-- background location image --> */}
        <Image
          src="/landingPageAssets/footer1-bg-location-img.png"
          alt=""
          width={27}
          height={27}
          className="absolute -z-10 top-[120px] left-24 lg:left-18 lg:top-[70px] "
        />
        {/* <!-- RouteX logo and social media link --> */}
        <div>
          <div className="flex flex-col">
            <Image
              src="/landingPageAssets/logo (1).svg"
              alt=""
              width={155}
              height={10}
              className="relative w-[155px] h-10"
            />
            <p className="font-roboto text-white text-[16px] pt-8 leading-7">
              Corporate business typically refers to <br />
              large-scale mansola it enterprises or <br />
              organizat
            </p>

            {/* <!-- Social icons --> */}
            <div className="flex flex-row space-x-5 pt-5">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Services --> */}
        <div>
          <h2 className="font-roboto text-white font-bold text-[22px] sm:text-[25px]">
            Services
          </h2>
          <ul className="pt-7 space-y-3">
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mistakes To Avoid
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Your Startup
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Knew About Fonts
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Knew About Fonts
            </li>
          </ul>
        </div>

        {/* <!-- Useful Link --> */}
        <div>
          <h2 className="font-roboto text-white font-bold text-[22px] sm:text-[25px]">
            Useful Link
          </h2>
          <ul className="pt-7 space-y-3">
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Latest News
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Careers
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              General Inquiries
            </li>
            <li className="flex flex-row font-roboto text-white text-[16px] items-center justify-start">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4L16 12L8 20"
                  stroke="#83CD20"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Case Studies
            </li>
          </ul>
        </div>
        {/* <!-- Subscribe Our Newsletter --> */}
        <div>
          <h2 className="font-roboto text-white font-bold text-[22px] sm:text-[24px]">
            Subscribe Our Newsletter
          </h2>
          <p className="font-roboto text-white text-[16px] leading-7 mt-7">
            Corporate business typically refers to <br />
            large-scale mansola it.
          </p>
          {/* <!-- Input box and button --> */}
          <div className="pt-9 relative">
            <input
              type="text"
              className="glass-input p-4 w-[350px] sm:w-[300px] lg:w-60 text-white focus:border-white focus:outline-none"
              placeholder="Enter Email"
            />
            <div className="absolute top-0 mt-9 ml-[300px] sm:ml-[245px] lg:ml-48 z-10">
              <button className="flex items-center justify-center w-14 h-14 rounded-full bg-button">
                <Image
                  src="/landingPageAssets/icons8-paper-plane-40.png"
                  alt=""
                  width={6}
                  height={6}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- bottom div side --> */}
      <div className="w-full h-[1px] bg-green/10 mt-28 lg:mt-24"></div>

      {/* <!-- Bottom Info --> */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between pt-7 pb-7 lg:pt-5 lg:pb-0">
        {/* <!-- left side --> */}
        <div className="flex items-center justify-center space-x-1">
          <i className="fas fa-copyright text-white/70 lg:pl-4">
          &copy; 2024 Routex, All Rights Reserved. Design By RRDevs
          </i>
          
        </div>
        {/* <!-- right side --> */}
        <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 pt-4 lg:pt-0 font-roboto text-gray-300 text-[13px] sm:text-[15px] lg:text-[15px] px-5">
          <h2>Trams & Condition</h2>
          <h2>Privacy Policy</h2>
          <h2>Contact Us</h2>
        </div>
      </div>
    </footer>
  );
}
