"use client";
import Image from 'next/image';

export default function GETOURBEST() {
  return (
    // <!-- Get our best offers quickly -->
    <section className="min-h-[600px] lg:min-h-[650px]">
      <div className="relative flex flex-col lg:flex-row md:flex-row items-center justify-center lg:items-start lg:justify-start pl-4 pr-4">
        {/* <!-- left side --> */}
        <div className="sm:flex sm:items-center sm:justify-center lg:w-[40%]">
          <Image 
            src="/landingPageAssets/faq-info-img.png"
            alt=""
            className="relative rounded-[20px] w-[450px] h-[650px]"
          />
        </div>

        {/* <!-- right side --> */}
        <div className="w-full flex flex-col pt-8 mx-4 lg:w-[60%] lg:space-y-6 lg:pt-0">
          {/* <!-- top div card --> */}
          <div className="bg-white z-[100] border border-gray-300 relative w-full h-full flex flex-col pt-8 pl-6 lg:pt-1 rounded-[20px]">
            <div className="flex flex-col lg:flex-row">
              {/* <!-- left card content --> */}
              <div className="flex flex-col space-y-3 lg:w-[60%] lg:p-10">
                {/* <!-- logo Globe --> */}
                <div className="relative flex flex-col rounded-full bg-getAnAppointment w-[80px] h-[80px] items-center justify-center">
                  <Image 
                    src="/landingPageAssets/Card-1.svg"
                    alt=""
                    className="w-[50px] h-[50px] shake-image transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="flex flex-col space-y-3">
                  <h2 className="font-roboto font-bold text-greenBody text-[22px]">
                    Get our best offers quickly
                  </h2>

                  <p className="font-roboto text-gray-500 leading-[1.7] text-justify pr-7">
                    Lorem Ipsum is simply dummy text the printing and typese
                    Lorem Ipsum has been the industry standard dummy
                  </p>

                  {/* <!-- contact Us button --> */}
                  <div className="pb-6">
                      <button
                        className="bg-white gap-x-1 flex items-center justify-center border border-gray-300 w-fit text-greenBody py-[16px] px-[27px] rounded-full font-roboto hover:bg-getAnAppointment hover:text-white transition-all duration-200 group"
                      >
                        <span>Contact us</span>
                        <i
                          data-feather="arrow-right"
                          className="text-greenBody w-5 h-5 group-hover:text-white"
                        ></i>
                      </button>
                    </div>
                </div>
              </div>

              {/* <!-- right image --> */}
              <div className="hidden lg:flex justify-end place-items-end">
                <Image 
                  src="/landingPageAssets/faq-left-img.png"
                  alt=""
                  className="relative w-[300px] h-[350px]"
                />
              </div>
            </div>
          </div>

          {/* <!-- bottom div --> */}
          <div className="bg-getAnAppointment flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-center rounded-[20px] mt-10 pt-12 sm:pt-6 pb-9 lg:p-10">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-roboto font-bold text-white text-[50px]">
                10k+
              </h2>
              <p className="font-roboto text-white text-[20px] sm:text-[18px]">
                Complete project
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="font-roboto font-bold text-white text-[50px]">
                20k+
              </h2>
              <p className="font-roboto text-white text-[20px] sm:text-[18px]">
                Team member
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="font-roboto font-bold text-white text-[50px]">
                5k+
              </h2>
              <p className="font-roboto text-white text-[20px] sm:text-[18px]">
                Winning award
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="font-roboto font-bold text-white text-[50px]">
                100k+
              </h2>
              <p className="font-roboto text-white text-[20px] sm:text-[18px]">
                Complete project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
