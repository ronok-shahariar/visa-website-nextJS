"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function OURCOACHING() {
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
    // <!-- Our coaching -->
    <section className="bg-white bg-[url('/landingPageAssets/coaching-bg-img.png')] bg-cover bg-center min-h-[850px] md:min-h-[760px] mx-auto backdrop-blur-3xl sm:mt-32 md:mt-6 xl:min-h-[900px] 2xl:w-[86%] 2xl:rounded-[60px]">
      <div className="bg-white/80 w-full min-h-[850px] md:min-h-[760px] xl:min-h-[900px] 2xl:rounded-[60px]">
        {/* <!-- Div 0 --> */}
        <div className="px-6 relative mx-auto xl:px-24 2xl:px-56">
          {/* <!-- Div 1 --> */}
          <div className="flex flex-row gap-2 pt-16">
            <Image
              src="/landingPageAssets/card-2.3.svg"
              alt=""
              width={25}
              height={25}
              className="relative w-[25px] h-[25px]"
            />
            <h2 className="font-roboto font-bold text-[15px] text-greenBody items-center justify-center pt-1">
              OUR COACHING
            </h2>
          </div>

          {/* <!-- Div 2 --> */}

          <div className="lg:flex pt-2">
            <h2 className="font-roboto font-bold text-greenBody text-[30px] sm:text-[40px] lg:text-[52px] leading-tight">
              Exploring the Unknown
              <br />
              Voyages of Wonder
            </h2>
          </div>

          {/* <!-- Cards and left image --> */}
          <div className="w-full flex flex-col md:flex-row md:space-x-8 pt-14 lg:pt-6 items-center justify-center">
            {/* <!-- left card --> */}
            <div className="w-full flex flex-col space-y-10">
              {/* <!-- card 1 --> */}
              <div className="bg-white w-full h-[100px] flex flex-row items-stretch justify-between px-6 pt-[60px] pb-[60px] border border-gray-300 rounded-[20px]">
                <div className="flex flex-col items-start justify-center">
                  <h2 className="font-roboto font-semibold text-[23px] text-greenBody">
                    Courtney Henry
                  </h2>
                  <p className="font-roboto text-[15px] text-gray-400">
                    Medical Assistant
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 hover:bg-button transition-all duration-200 group">
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-6 h-6 group-hover:text-white"
                    ></i>
                  </button>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="bg-white w-full h-[100px] flex flex-row items-stretch justify-between px-10 pt-[60px] pb-[60px] border border-gray-300 rounded-[20px]">
                <div className="flex flex-col items-start justify-center">
                  <h2 className="font-roboto font-semibold text-[23px] text-greenBody">
                    Ronald Richards
                  </h2>
                  <p className="font-roboto text-[15px] text-gray-400">
                    Marketing Coordinator
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 hover:bg-button transition-all duration-200 group">
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-6 h-6 group-hover:text-white"
                    ></i>
                  </button>
                </div>
              </div>
              {/* <!-- card 3 --> */}
              <div className="bg-white w-full h-[100px] flex flex-row items-stretch justify-between px-10 pt-[60px] pb-[60px] border border-gray-300 rounded-[20px]">
                <div className="flex flex-col items-start justify-center">
                  <h2 className="font-roboto font-semibold text-[23px] text-greenBody">
                    Albert Flores
                  </h2>
                  <p className="font-roboto text-[15px] text-gray-400">
                    Web Designer
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 hover:bg-button transition-all duration-200 group">
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-6 h-6 group-hover:text-white"
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- right image --> */}
            <div className="mt-6 mb-16 lg:mt-16">
              <Image
                src="/landingPageAssets/coaching-right-img-1.png"
                alt=""
                width={601}
                height={440}
                className="relative w-[601px] h-[440px] sm:w-[701px] sm:h-[650px] md:w-[361px] 
                md:h-[290px] lg:w-[601px] lg:h-[440px] rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
