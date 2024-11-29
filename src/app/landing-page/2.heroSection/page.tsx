"use client";

import Image from "next/image";
import Link from "next/link";

export default function HERO() {
  return (
    // <!-- Hero Section /responsive  -->
    <section className="lg:flex mx-3 min-h-[600px] 2xl:px-24">
      <div className="relative lg:flex bg-greenBody rounded-[50px] w-full sm:mt-4 lg:mt-0 mx-auto overflow-hidden">

        {/* <!-- Back Images --> */}
        <Image
              src="/landingPageAssets/banner-left-towor.png"
              alt="Image 3"
              width={300}
              height={510}
              className="absolute hidden 2xl:flex
                lg:top-20 lg:w-[300px] lg:h-[510px] image-3 object-cover filter saturate-150 brightness-110 contrast-120"
            />

        {/* <!-- Left Side --> */}
        <div className="relative px-4 pt-8 sm:py-8 2xl:left-44">
          
          <div className="flex flex-col">
            <p className="font-roboto font-bold text-white text-[28px] sm:text-[40px] lg:text-[60px] sm:pt-24 pt-[34px] lg:pt-[100px]">
              Visa Made Easy Dreams Made Possible
            </p>

            {/* <!-- Read More Button & Play Button --> */}
            <div className="flex flex-row items-center mt-6 space-x-8">
              {/* <!-- Read More Button --> */}
              <button className="relative flex flex-row items-center justify-center w-fit text-white px-6 py-4 font-bold rounded-full font-roboto bg-greenBody border overflow-hidden group">
                <span className="relative z-10 text-[14px]">Read More</span>
                <i
                  data-feather="arrow-right"
                  className="text-white w-5 h-5 ml-1 relative z-10"
                ></i>

                {/* <!-- Background hover effect --> */}
                <div className="absolute inset-0 bg-getAnAppointment transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </button>

              {/* <!-- Play button image --> */}

              <div className="sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
                <div className="flex items-center justify-center play-button border border-gray-500 rounded-full w-[47px] h-[47px] bg-button">
                  <button className="flex items-center justify-center w-full h-full">
                    <Image
                      src="/landingPageAssets/PlayButonIcon.svg"
                      alt="Play Button"
                      width={35}
                      height={35}
                      className="w-[35px] h-[35px] pt-1 pl-1"
                    />
                  </button>
                </div>
                {/* <!-- Watch Our videos visible at sm: --> */}
                <Link
                  href="/"
                  className="text-white hidden sm:flex text-[18px] font-bold font-roboto mt-6 sm:mt-0"
                >
                  Watch Our Videos
                </Link>
              </div>
            </div>
            <Link
              href="/"
              className="text-white sm:hidden text-[18px] font-bold font-roboto mt-6"
            >
              Watch Our Videos
            </Link>
          </div>
        </div>

        {/* <!-- Right Side --> */}
        <div className="w-full max-h-[400px] sm:mt-8 2xl:right-20">
          {/* <!-- Image container with overlapping images --> */}
          <div className="relative w-full mx-auto overflow-hidden 2xl:left-64">
            {/* <!-- Front Image --> */}
            <Image
              src="/landingPageAssets/frontImage.png"
              alt="Image 1"
              width={500}
              height={684}
              className="relative -top-11 sm:-top-16 w-[300px] h-[550px] sm:w-[400px] sm:h-[550px] sm:left-16 md:left-28 lg:-top-11 lg:left-0 lg:w-[500px] lg:h-[684px] image-1 object-contain"
            />

            {/* <!-- Middle Images --> */}
            <Image
              src="/landingPageAssets/backImage.png"
              alt="Image 2"
              width={600}
              height={600}
              className="absolute top-52 left-6 w-[310px] h-[310px] sm:left-20 sm:top-28 sm:w-[410px] sm:h-[410px] md:left-32 lg:top-52 lg:left-0 lg:w-[600px] lg:h-[600px] image-2 object-cover filter saturate-100 brightness-90 contrast-70"
              style={{ clipPath: "inset(0 0 10% 0)" }}
            />
            {/* <!-- Back Images --> */}
            <Image
              src="/landingPageAssets/backImage2.png"
              alt="Image 3"
              width={300}
              height={510}
              className="absolute top-3 w-[300px] h-[400px] right-12 sm:-top-1 sm:-right-4 sm:w-[400px] 2xl:left-80
               sm:h-[410px] md:right-12 lg:top-20 lg:w-[300px] lg:h-[510px] image-3 object-cover filter saturate-150 brightness-110 contrast-120"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
