"use client";
import { useEffect } from "react";
import Image from 'next/image';

export default function TESTIMONIAL() {
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
    // <!-- Testimonial Section ###### lg: starts here -->
    <section className="min-h-[850px] mx-auto">
      <div className="flex flex-col lg:flex-row pt-16 px-4 lg:space-x-5 items-center justify-center">
        {/* <!-- left image --> */}
        <div className="w-[80%]">
          <Image 
            src="/landingPageAssets/testimonial-left-img.png"
            alt=""
            className="relative w-[700px] md:w-[800px] lg:w-[500px] h-full rounded-[20px]"
          />
        </div>
        {/* <!-- right content box --> */}
        <div className="bg-getAnAppointment flex flex-col items-start justify-between p-7 lg:p-16 w-full rounded-[20px] mt-12 mb-16">
          {/* <!-- top image ## lg: starts from here--> */}
          <Image  src="/landingPageAssets/testimonial-quote.svg" alt="" />
          <p className="font-roboto text-white text-[22px] sm:text-[32px] lg:text-[30px] lg:leading-[44px]">
            We have been operating for over an providin top-notch services to
            our clients and build strong track record in the industry.We have
            been operating for over a decad providi ina top-notch We have been
            operating
          </p>
          {/* <!-- title logo and header --> */}
          <div className="flex flex-row mt-14 gap-7 items-center justify-center">
            <div>
              <Image 
                src="/landingPageAssets/testimonial-title-img.png"
                alt=""
                className="relative rounded-full"
              />
            </div>
            <div>
              <h2 className="font-roboto font-bold text-white text-[22px]">
                Albert Flores
              </h2>
              <p className="font-roboto text-white text-[17px] leading-8">
                Web Designer
              </p>
            </div>
          </div>
          {/* <!-- Underline And next previous buttons --> */}
          <div className="flex flex-row w-full h-full items-center lg:justify-between justify-center gap-6">
            {/* <!-- undrline --> */}
            <div className="hidden lg:flex bg-white w-full h-[1px]"></div>
            {/* <!-- next previous button --> */}
            <div className="flex items-center justify-center lg:justify-end gap-4 mt-10 lg:mt-0">
              <button className="flex items-center justify-center bg-white w-16 h-16 rounded-full border border-white hover:bg-greenBody hover:border-greenBody transition-all duration-200 group">
                <i
                  data-feather="arrow-left"
                  className="text-greenBody w-6 h-6 group-hover:text-white"
                ></i>
              </button>

              <button className="flex items-center justify-center bg-white w-16 h-16 rounded-full border border-white hover:bg-greenBody hover:border-greenBody transition-all duration-200 group">
                <i
                  data-feather="arrow-right"
                  className="text-greenBody w-6 h-6 group-hover:text-white"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
