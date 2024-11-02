"use client"
import Image from 'next/image';

export default function CARDSHOW() {
  return (
    // <!-- Card Show /responsive -->
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-3 pt-8 min-h-[500px]">
      {/* <!-- Box 1 --> */}

      <div className="z-[100] border border-gray-300 relative w-full h-full flex flex-col pt-12 pl-8 py-6 pr-8 rounded-[20px]">
        <div className="relative flex flex-col rounded-full bg-getAnAppointment w-[100px] h-[100px] items-center justify-center overflow-hidden">
          <Image 
            src="/landingPageAssets/Card-1.svg"
            alt=""
            className="w-[50px] h-[50px] shake-image transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-roboto font-bold text-greenBody text-[22px] pt-9">
            Food and Wine Tours
          </h2>
          <p className="font-roboto text-gray-500 leading-[1.7] text-justify pt-5">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac
          </p>
        </div>
      </div>

      {/* <!-- Box 2 --> */}
      <div className="z-[100] border border-gray-300 relative w-full h-full flex flex-col pt-12 pl-8 py-6 pr-8 rounded-[20px]">
        <div className="relative flex flex-col rounded-full bg-getAnAppointment w-[100px] h-[100px] items-center justify-center overflow-hidden">
          <Image 
            src="/landingPageAssets/card-2.svg"
            alt=""
            className="w-[50px] h-[50px] shake-image transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-roboto font-bold text-greenBody text-[22px] pt-9">
            Travel Opportunities
          </h2>
          <p className="font-roboto text-gray-500 leading-[1.7] text-justify pt-5">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac
          </p>
        </div>
      </div>

      {/* <!-- Box 3 --> */}
      <div className="z-[100] border border-gray-300 relative w-full h-full flex flex-col pt-12 pl-8 py-6 pr-8 rounded-[20px]">
        <div className="relative flex flex-col rounded-full bg-getAnAppointment w-[100px] h-[100px] items-center justify-center overflow-hidden">
          <Image 
            src="/landingPageAssets/Card-3.svg"
            alt=""
            className="w-[50px] h-[50px] shake-image transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-roboto font-bold text-greenBody text-[22px] pt-9">
            Solo Travel Planning
          </h2>
          <p className="font-roboto text-gray-500 leading-[1.7] text-justify pt-5">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac
          </p>
        </div>
      </div>
    </section>
  );
}
