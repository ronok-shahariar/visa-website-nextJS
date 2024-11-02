"use client";
import Image from "next/image";

export default function AVAILCOUNTR() {
  return (
    // <!-- Available countries -->

    <section className="min-h-[650px]">
      {/* <!-- Div 0 --> */}
      <div className="relative p-6">
        {/* <!-- Div 1 --> */}
        <div className="flex flex-row gap-2 pt-[30px]">
          <h2 className="font-roboto font-bold text-[18px] text-greenBody items-center justify-center pt-1">
            AVAILABLE COUNTRIES
          </h2>

          <Image
            src="/landingPageAssets/available countries logo.svg"
            alt=""
            width={85}
            height={8}
          />
        </div>

        {/* <!-- Div 2 --> */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-roboto font-bold text-greenBody text-[30px] sm:text-[36px] lg:text-[52px] pt-3">
            Urban Escapes City
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Hopping Adventures
          </h2>

          {/* <!-- View More button --> */}

          <div className="flex flex-row mt-5">
            <button className="flex flex-row items-center justify-center w-fit lg:w-fit text-white py-[18px] px-[28px] rounded-full bg-getAnAppointment hover:bg-greenBody transition-all duration-200 group">
              <span className="font-roboto text-[16px] lg:text-[17px]">
                View More
              </span>
              <i
                data-feather="arrow-right"
                className="text-white w-6 h-6 ml-1 font-bold group-hover:text-white"
              ></i>
            </button>
          </div>
        </div>

        {/* <!-- 4 boxes --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
          {/* <!-- Box-1 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7 group">
            <div className="flex flex-col gap-2">
              <div className="relative flex rounded-full w-[70px] h-[70px] items-center justify-center overflow-hidden">
                <Image
                  src="/landingPageAssets/adventure-img1.png"
                  alt=""
                  layout="fill"
                  objectFit="contain" // Maintains image resolution without cropping
                  quality={100} // Ensures full quality (0–100)
                  className="w-full h-full sh transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[23px] items-center pt-2">
                Canada
              </h2>
            </div>
            {/* <!-- tick and header --> */}
            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Mistakes To Avoid
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Your Startup
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Knew About Fonts
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box-2 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7 group">
            <div className="flex flex-col gap-2">
              <div className="relative flex rounded-full w-[70px] h-[70px] items-center justify-center overflow-hidden">
                {/* <!-- logo --> */}
                <Image
                  src="/landingPageAssets/adventure-img2.png"
                  alt=""
                  layout="fill"
                  objectFit="contain" // Maintains image resolution without cropping
                  quality={100} // Ensures full quality (0–100)
                  className="w-full h-full sh transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[23px] items-center pt-2">
                Bangladesh
              </h2>
            </div>
            {/* <!-- tick and header --> */}
            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Mistakes To Avoid
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Your Startup
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Knew About Fonts
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box-3 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7 group">
            <div className="flex flex-col gap-2">
              <div className="relative flex rounded-full w-[70px] h-[70px] items-center justify-center overflow-hidden">
                <Image
                  src="/landingPageAssets/adventure-img3.png"
                  alt=""
                  layout="fill"
                  objectFit="contain" // Maintains image resolution without cropping
                  quality={100} // Ensures full quality (0–100)
                  className="w-full h-full sh transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[23px] items-center pt-2">
                Australia
              </h2>
            </div>
            {/* <!-- tick and header --> */}
            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Mistakes To Avoid
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Your Startup
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Knew About Fonts
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box-4 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7 group">
            <div className="flex flex-col gap-2">
              <div className="relative flex rounded-full w-[70px] h-[70px] items-center justify-center overflow-hidden">
                <Image
                  src="/landingPageAssets/adventure-img4.png"
                  alt=""
                  layout="fill"
                  objectFit="contain" // Maintains image resolution without cropping
                  quality={100} // Ensures full quality (0–100)
                  className="w-full h-full sh transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[23px] items-center pt-2">
                United Kingdom
              </h2>
            </div>
            {/* <!-- tick and header --> */}
            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Mistakes To Avoid
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Your Startup
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image
                  src="/landingPageAssets/check-7079.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-500 text-[17px]">
                  Knew About Fonts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
