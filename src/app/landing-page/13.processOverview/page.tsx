"use client";
import Image from "next/image";

export default function PROCESSOVER() {
  return (
    // <!-- Process Overview -->
    <section className="bg-white bg-[url('/landingPageAssets/process-bg.png')] bg-cover bg-center min-h-[650px] lg:min-h-[690px] mx-auto backdrop-blur-3xl xl:min-h-[750px] 2xl:w-[90%] 2xl:rounded-[60px]">
      <div className="bg-white/80 w-full min-h-[650px] lg:min-h-[690px] xl:min-h-[750px] 2xl:rounded-[60px]">
        {/* <!-- top header --> */}
        <div className="flex flex-col items-center justify-center pt-16 lg:pt-24 space-y-4">
          <div className="flex flex-row items-center justify-center gap-1">
            <Image
              src="/landingPageAssets/card-2.3.svg"
              alt=""
              width={25}
              height={25}
            />
            <h2 className="font-roboto font-bold text-greenBody text-[16px]">
              PROCESS OVERVIEW
            </h2>
          </div>
          <div>
            <h2 className="font-roboto font-bold text-greenBody text-[30px] sm:text-[40px] lg:text-[50px] text-center leading-tight">
              Unforgettable Getaways <br />
              Escaping Routine
            </h2>
          </div>
        </div>

        {/* <!-- 3 boxes --> */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:mt-4 px-5 pb-16 items-center justify-between xl:pt-10 2xl:px-48">
          {/* <!-- Box-1 --> */}
          <div className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7 shadow-md">
            <div className="flex flex-col gap-x-14">
              {/* <!-- Top Number --> */}
              <div>
                <h2 className="font-roboto font-bold text-white text-bborder text-[55px]">
                  01
                </h2>
              </div>
              {/* <!-- Down content --> */}
              <div className="flex flex-col space-y-6">
                <h2 className="font-roboto font-bold text-greenBody text-[20px]">
                  Visa Voyage Agency
                </h2>
                <p className="font-roboto text-greenBody text-[15px] leading-6">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Box-2 --> */}
          <div className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7 shadow-md">
            <div className="flex flex-col gap-x-14">
              {/* <!-- Top Number --> */}
              <div>
                <h2 className="font-roboto font-bold text-white text-bborder text-[55px]">
                  02
                </h2>
              </div>
              {/* <!-- Down content --> */}
              <div className="flex flex-col space-y-6">
                <h2 className="font-roboto font-bold text-greenBody text-[20px]">
                  International Access Visas
                </h2>
                <p className="font-roboto text-greenBody text-[15px] leading-6">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Box-3 --> */}
          <div className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7 shadow-md">
            <div className="flex flex-col gap-x-14">
              {/* <!-- Top Number --> */}
              <div>
                <h2 className="font-roboto font-bold text-white text-bborder text-[55px]">
                  03
                </h2>
              </div>
              {/* <!-- Down content --> */}
              <div className="flex flex-col space-y-6">
                <h2 className="font-roboto font-bold text-greenBody text-[20px]">
                  Gateway to Global Citizenship
                </h2>
                <p className="font-roboto text-greenBody text-[15px] leading-6">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
