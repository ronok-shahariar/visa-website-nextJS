"use client";
import { useEffect, useRef } from 'react';

export default function VISASEC() {

    useEffect(() => {
        // Load the Feather Icons script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
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
    // <!-- Visa section -->

    <section className="min-h-[400px]">
      <div>
        {/* <!-- top header --> */}
        <div className="flex flex-col items-center justify-center pt-16 space-y-3">
          <div className="flex flex-row items-center justify-center gap-1">
            <img src="card-2.3.svg" alt="" />
            <h2 className="font-roboto font-bold text-greenBody text-[14px] sm:text-[16px]">
              VISA CATEGORY
            </h2>
          </div>
          <div>
            <h2 className="font-roboto font-bold text-greenBody text-[27px] sm:text-[39px] lg:text-[50px] text-center leading-tight">
              Seeking Adventure Thrills <br />
              and Excitement Await
            </h2>
          </div>
        </div>

        {/* <!-- 4 boxes --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 p-6">
          {/* <!-- Box-1 --> */}
          <div className="z-[100] border border-gray-300 relative p-5 rounded-[20px] mt-7 group">
            <div className="flex flex-col sm:flex-row gap-x-14">
              {/* <!-- left side image --> */}
              <div>
                <img
                  src="visa-card-img1.png"
                  alt="Business Visa Image"
                  width="600px"
                  height="600px"
                  className="rounded-[20px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* <!-- right side content --> */}
              <div className="flex flex-col space-y-6 pt-4">
                <h2 className="font-roboto font-bold text-greenBody text-[24px]">
                  Business Visa
                </h2>
                <p className="font-roboto text-gray-500 text-[18px] leading-6">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex flex-row items-stretch justify-between">
                  <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-getAnAppointment group hover:bg-getAnAppointment transition-all duration-700 ease-in-out">
                    <i
                      data-feather="arrow-right"
                      className="text-getAnAppointment w-5 h-5 font-bold transition-transform duration-700 -rotate-45 hover:rotate-0 hover:text-white"
                    ></i>
                  </button>
                  <img src="visa-card-right-icon1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Box-2 --> */}
          <div className="z-[100] border border-gray-300 relative p-5 rounded-[20px] mt-7 group">
            <div className="flex flex-col sm:flex-row gap-x-14">
              {/* <!-- left side image --> */}
              <div>
                <img
                  src="visa-card-img2.png"
                  alt="Business Visa Image"
                  width="600px"
                  height="600px"
                  className="rounded-[20px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* <!-- right side content --> */}
              <div className="flex flex-col space-y-6 pt-4">
                <h2 className="font-roboto font-bold text-greenBody text-[24px]">
                  Working Visa
                </h2>
                <p className="font-roboto text-gray-500 text-[18px] leading-6">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex flex-row items-stretch justify-between">
                  <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-getAnAppointment group hover:bg-getAnAppointment transition-all duration-700 ease-in-out">
                    <i
                      data-feather="arrow-right"
                      className="text-getAnAppointment w-5 h-5 font-bold transition-transform duration-700 -rotate-45 hover:rotate-0 hover:text-white"
                    ></i>
                  </button>
                  <img src="visa-card-right-icon2.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Box-3 --> */}
          <div className="z-[100] border border-gray-300 relative p-5 rounded-[20px] mt-7 group">
            <div className="flex flex-col sm:flex-row gap-x-14">
              {/* <!-- left side image --> */}
              <div>
                <img
                  src="visa-card-img3.png"
                  alt="Business Visa Image"
                  width="600px"
                  height="600px"
                  className="rounded-[20px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* <!-- right side content --> */}
              <div className="flex flex-col space-y-6 pt-4">
                <h2 className="font-roboto font-bold text-greenBody text-[24px]">
                  Student Visa
                </h2>
                <p className="font-roboto text-gray-500 text-[18px] leading-6">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex flex-row items-stretch justify-between">
                  <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-getAnAppointment group hover:bg-getAnAppointment transition-all duration-700 ease-in-out">
                    <i
                      data-feather="arrow-right"
                      className="text-getAnAppointment w-5 h-5 font-bold transition-transform duration-700 -rotate-45 hover:rotate-0 hover:text-white"
                    ></i>
                  </button>
                  <img src="visa-card-right-icon3.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Box-4 --> */}
          <div className="z-[100] border border-gray-300 relative p-5 rounded-[20px] mt-7 group">
            <div className="flex flex-col sm:flex-row gap-x-14">
              {/* <!-- left side image --> */}
              <div>
                <img
                  src="visa-card-img4.png"
                  alt="Business Visa Image"
                  width="600px"
                  height="600px"
                  className="rounded-[20px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* <!-- right side content --> */}
              <div className="flex flex-col space-y-6 pt-4">
                <h2 className="font-roboto font-bold text-greenBody text-[24px]">
                  Tourist Visa
                </h2>
                <p className="font-roboto text-gray-500 text-[18px] leading-6">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex flex-row items-stretch justify-between">
                  <button className="flex flex-row items-center justify-center w-fit lg:w-fit py-[18px] px-[18px] rounded-[16px] border border-getAnAppointment group hover:bg-getAnAppointment transition-all duration-700 ease-in-out">
                    <i
                      data-feather="arrow-right"
                      className="text-getAnAppointment w-5 h-5 font-bold transition-transform duration-700 -rotate-45 hover:rotate-0 hover:text-white"
                    ></i>
                  </button>
                  <img src="visa-card-right-icon4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
