"use client";
import { FaCalendar, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function RECENTBLOG() {
  return (
    // <!-- Recent Blogs -->
    <section className="min-h-[1040px] mx-auto px-6 2xl:px-64">
      {/* <!-- Div 0 --> */}
      <div className="relative mx-auto">
        {/* <!-- Div 1 --> */}
        <div className="flex flex-row gap-2 pt-[60px] lg:pt-[90px]">
          <Image
            src="/landingPageAssets/card-2.3.svg"
            alt=""
            width={25}
            height={25}
            className="relative w-[25px] h-[25px]"
          />
          <h2 className="font-roboto font-bold text-[15px] text-greenBody items-center justify-center pt-1">
            RECENT BLOGS
          </h2>
        </div>

        {/* <!-- Div 2 --> */}

        <div className="lg:flex pt-2">
          <h2 className="font-roboto font-bold text-greenBody text-[30px] sm:text-[35px] lg:text-[52px] leading-tight">
            Journeys of Discovery Uncovering Hidden
          </h2>

          {/* <!-- Next previous button --> */}

          <div className="flex w-[80%] h-[20%] lg:justify-end pt-5 lg:pt-24 gap-4">
            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 border border-gray-200 hover:bg-button transition-all duration-200 group">
              <i
                data-feather="arrow-left"
                className="text-greenBody w-6 h-6 group-hover:text-white"
              ></i>
            </button>

            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 border border-gray-200 hover:bg-button transition-all duration-200 group">
              <i
                data-feather="arrow-right"
                className="text-greenBody w-6 h-6 group-hover:text-white"
              ></i>
            </button>
          </div>
        </div>

        {/* <!-- Div 3 --> */}
        {/* <!-- 3 Cards --> */}

        <div className="grid grid-cols-1 pt-8 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:pt-6">
          {/* <!-- card 1 --> */}
          <div className="relative w-full">
            {/* <!-- Image container --> */}
            <div className="overflow-hidden rounded-tl-[20px] rounded-tr-[20px] h-[300px]">
              <Image
                src="/landingPageAssets/blog-3img-1.png"
                alt="Sample Image"
                width={300}
                height={400}
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
            {/* <!-- Date and content --> */}
            <div className="flex flex-col space-y-5 border border-gray-200 rounded-bl-[20px] rounded-br-[20px]">
              {/* <!-- date and admin --> */}
              <div className="flex flex-row items-stretch justify-between pt-6 px-7">
                {/* <!-- Date --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaCalendar className="text-gray-500 w-6 h-6" />
                  July26,2024
                </button>

                {/* <!-- User --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaUser className="text-gray-500 w-6 h-6" />
                  RouteX
                </button>
              </div>
              {/* <!-- content --> */}
              <div className="px-7 space-y-2">
                <h2 className="font-roboto font-bold text-greenBody text-[22px]">
                  Journeys of Discovery Uncovering Hidden Treasures
                </h2>
                <p className="font-roboto text-gray-500">
                  Nancy boy Charles down the pub get stuffed mate easy peasy
                  brown bread...
                </p>
                <a href="#">
                  <button className="flex items-center justify-center pt-8 pb-10 lg:flex flex-row w-fit text-greenBody font-roboto font-bold hover:text-getAnAppointment transition-all duration-200 group">
                    <span>Read More</span>
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-5 h-5 group-hover:text-getAnAppointment"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="hidden md:flex md:flex-col relative w-full h-full">
            {/* <!-- Image container --> */}
            <div className="overflow-hidden rounded-tl-[20px] rounded-tr-[20px] h-[300px]">
              <Image
                src="/landingPageAssets/blog-2img-1.png"
                alt="Sample Image"
                width={300}
                height={400}
                className="relative w-full h-full object-cover object-center scale-105"
              />
            </div>
            {/* <!-- Date and content --> */}
            <div className="flex flex-col space-y-5 border border-gray-200 rounded-bl-[20px] rounded-br-[20px]">
              {/* <!-- date and admin --> */}
              <div className="flex flex-row items-stretch justify-between pt-6 px-7">
                {/* <!-- Date --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaCalendar className="text-gray-500 w-6 h-6" />
                  July26,2024
                </button>

                {/* <!-- User --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaUser className="text-gray-500 w-6 h-6" />
                  RouteX
                </button>
              </div>
              {/* <!-- content --> */}
              <div className="px-7 space-y-2 flex-grow">
                <h2 className="font-roboto font-bold text-greenBody text-[22px]">
                  The Road to Adventure Embarking on
                </h2>
                <p className="font-roboto text-gray-500">
                  Nancy boy Charles down the pub get <br />
                  stuffed mate easy peasy brown bread...
                </p>
                <a href="#">
                  <button className="flex items-center justify-center pt-8 pb-10 lg:flex flex-row w-fit text-greenBody font-roboto font-bold hover:text-getAnAppointment transition-all duration-200 group">
                    <span>Read More</span>
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-5 h-5 group-hover:text-getAnAppointment"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- card 3 --> */}
          <div className="hidden lg:flex lg:flex-col relative w-full">
            {/* <!-- Image container --> */}
            <div className="overflow-hidden rounded-tl-[20px] rounded-tr-[20px] h-[300px]">
              <Image
                src="/landingPageAssets/blog-1img.png"
                alt="Sample Image"
                width={300}
                height={400}
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
            {/* <!-- Date and content --> */}
            <div className="flex flex-col space-y-5 border border-gray-200 rounded-bl-[20px] rounded-br-[20px]">
              {/* <!-- date and admin --> */}
              <div className="flex flex-row items-stretch justify-between pt-6 px-7">
                {/* <!-- Date --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaCalendar className="text-gray-500 w-6 h-6" />
                  July26,2024
                </button>

                {/* <!-- User --> */}
                <button className="flex flex-row gap-x-1 font-roboto text-gray-400 text-[18px]">
                  <FaUser className="text-gray-500 w-6 h-6" />
                  RouteX
                </button>
              </div>
              {/* <!-- content --> */}
              <div className="px-7 space-y-2">
                <h2 className="font-roboto font-bold text-greenBody text-[22px]">
                  Wonders of Ancient Civilizations A Journey
                </h2>
                <p className="font-roboto text-gray-500">
                  Nancy boy Charles down the pub get <br />
                  stuffed mate easy peasy brown bread...
                </p>
                <a href="#">
                  <button className="items-center justify-center pt-8 pb-10 hidden lg:flex flex-row w-fit text-greenBody font-roboto font-bold hover:text-getAnAppointment transition-all duration-200 group">
                    <span>Read More</span>
                    <i
                      data-feather="arrow-right"
                      className="text-greenBody w-5 h-5 group-hover:text-getAnAppointment"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
