"use client";
import { useEffect } from "react";
import Image from 'next/image';

export default function SUPPORT() {
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
    // <!-- Support Coaching -->

    <section className="min-h-[700px] mx-auto px-6">
      {/* <!-- Div 0 --> */}
      <div className="relative mx-auto">
        {/* <!-- Div 1 --> */}
        <div className="flex flex-row gap-2 pt-[60px]">
          <Image 
            src="/landingPageAssets/card-2.3.svg"
            alt=""
            className="relative w-[25px] h-[25px]"
          />
          <h2 className="font-roboto font-bold text-[15px] text-greenBody items-center justify-center pt-1">
            SUPPORTING COACHING
          </h2>
        </div>

        {/* <!-- Div 2 --> */}

        <div className="lg:flex pt-2">
          <h2 className="font-roboto font-bold text-greenBody text-[27px] sm:text-[35px] lg:text-[52px] leading-tight">
            A Tapestry of Experiences Cultural Encounters
          </h2>

          {/* <!-- Next previous button --> */}

          <div className="flex w-[80%] h-[20%] lg:justify-end pt-5 lg:pt-24 gap-4">
            <button className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 hover:bg-button transition-all duration-200 group">
              <i
                data-feather="arrow-left"
                className="text-greenBody w-6 h-6 group-hover:text-white"
              ></i>
            </button>

            <button className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 hover:bg-button transition-all duration-200 group">
              <i
                data-feather="arrow-right"
                className="text-greenBody w-6 h-6 group-hover:text-white"
              ></i>
            </button>
          </div>
        </div>

        {/* <!-- Div 3 --> */}
        {/* <!-- 3 Cards --> */}

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 md:gap-x-5 lg:pt-12">
          {/* <!-- card 1 --> */}
          <div className="relative">
            {/* <!-- Image container --> */}
            <div>
              <Image 
                src="/landingPageAssets/team-img1.png"
                alt="Sample Image"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* <!-- Box that overlaps the image --> */}
            <div className="absolute flex flex-row space-x-4 items-stretch justify-between w-[90%] bottom-0 right-0 mb-[-64px] px-7 py-7 bg-white shadow-lg rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px]">
              <div className="flex flex-col">
                <h2 className="font-roboto font-bold text-greenBody text-[18px] sm:text-[25px] md:text-[18px]">
                  TOFEL COACHING
                </h2>
                <p className="font-roboto text-gray-400 text-[14px] sm:text-[18px] md:text-[15px] pt-2">
                  There are many variati of passages of engineer
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-gray-300 group hover:bg-getAnAppointment transition-all duration-700 ease-in-out group">
                  <i
                    data-feather="arrow-right"
                    className="text-greenBody w-6 h-6 font-bold transition-transform duration-700 -rotate-45 group-hover:rotate-0 group-hover:text-white"
                  ></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="relative hidden md:flex lg:visible">
            {/* <!-- Image container --> */}
            <div>
              <Image 
                src="/landingPageAssets/team-img2.png"
                alt="Sample Image"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* <!-- Box that overlaps the image --> */}
            <div className="absolute flex flex-row items-stretch justify-between w-[90%] bottom-0 right-0 mb-[-64px] px-10 py-7 bg-white shadow-lg rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px]">
              <div>
                <h2 className="font-roboto font-bold text-greenBody text-[22px] md:text-[18px]">
                  TOFEL COACHING
                </h2>
                <p className="font-roboto text-gray-400 text-[16px] md:text-[15px] pt-2">
                  There are many variati of <br />
                  passages of engineer
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-gray-300 group hover:bg-getAnAppointment transition-all duration-700 ease-in-out group">
                  <i
                    data-feather="arrow-right"
                    className="text-greenBody w-6 h-6 font-bold transition-transform duration-700 -rotate-45 group-hover:rotate-0 group-hover:text-white"
                  ></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- card 3 --> */}
          <div className="relative hidden lg:flex">
            {/* <!-- Image container --> */}
            <div>
              <Image 
                src="/landingPageAssets/team-img3.png"
                alt="Sample Image"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* <!-- Box that overlaps the image --> */}
            <div className="absolute flex flex-row items-stretch justify-between w-[90%] bottom-0 right-0 mb-[-64px] px-10 py-7 bg-white shadow-lg rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px]">
              <div>
                <h2 className="font-roboto font-bold text-greenBody text-[22px] md:text-[18px]">
                  TOFEL COACHING
                </h2>
                <p className="font-roboto text-gray-400 text-[16px] md:text-[15px] pt-2">
                  There are many variati of <br />
                  passages of engineer
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-gray-300 group hover:bg-getAnAppointment transition-all duration-700 ease-in-out group">
                  <i
                    data-feather="arrow-right"
                    className="text-greenBody w-6 h-6 font-bold transition-transform duration-700 -rotate-45 group-hover:rotate-0 group-hover:text-white"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
