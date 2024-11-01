"use client"

export default function PROCESSOVER() {
  return (

    // <!-- Process Overview -->
      <section
        className="bg-white bg-[url('/process-bg.png')] bg-cover bg-center min-h-[650px] lg:min-h-[690px] mx-auto backdrop-blur-3xl"
      >
        <div className="bg-white/80 w-full min-h-[650px] lg:min-h-[690px]">
          {/* <!-- top header --> */}
          <div
            className="flex flex-col items-center justify-center pt-16 lg:pt-24 space-y-4"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <img src=" card-2.3.svg" alt="" />
              <h2 className="font-roboto font-bold text-greenBody text-[16px]">
                PROCESS OVERVIEW
              </h2>
            </div>
            <div>
              <h2
                className="font-roboto font-bold text-greenBody text-[30px] sm:text-[40px] lg:text-[50px] text-center leading-tight"
              >
                Unforgettable Getaways <br />Escaping Routine
              </h2>
            </div>
          </div>

          {/* <!-- 4 boxes --> */}
          <div
            className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:mt-4 px-5 pb-16 items-center justify-between"
          >
            {/* <!-- Box-1 --> */}
            <div
              className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7"
            >
              <div className="flex flex-col gap-x-14">
                {/* <!-- Top Number --> */}
                <div>
                  <h2
                    className="font-roboto font-bold text-white text-bborder text-[55px]"
                  >
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
            <div
              className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7"
            >
              <div className="flex flex-col gap-x-14">
                {/* <!-- Top Number --> */}
                <div>
                  <h2
                    className="font-roboto font-bold text-white text-bborder text-[55px]"
                  >
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
            <div
              className="z-[100] bg-white border relative p-10 rounded-[20px] mt-7"
            >
              <div className="flex flex-col gap-x-14">
                {/* <!-- Top Number --> */}
                <div>
                  <h2
                    className="font-roboto font-bold text-white text-bborder text-[55px]"
                  >
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