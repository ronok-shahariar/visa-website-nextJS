"use client"
import Image from 'next/image';

import { useEffect, useRef } from 'react';


export default function OURCOUNTRY() {

  const cardContainerRef = useRef<HTMLDivElement | null>(null); // Specify the type for useRef
  const scrollAmount = 300; // Adjust based on the card width

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

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const handleNext = () => {
      if (cardContainer) {
        cardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const handlePrev = () => {
      if (cardContainer) {
        cardContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    // Add event listeners
    if (nextButton && prevButton) {
      nextButton.addEventListener('click', handleNext);
      prevButton.addEventListener('click', handlePrev);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', handleNext);
        prevButton.removeEventListener('click', handlePrev);
      }
    };
  }, []); // Only run once on mount
       


  return (
    // <!-- Our Countries -->

    <section className="bg-greenBody min-h-[850px] mx-auto mt-20 px-6">
      {/* <!-- Div 0 --> */}
      <div className="relative mx-auto">
        {/* <!-- Div 1 --> */}
        <div className="flex flex-row gap-2 pt-[70px]">
          <Image  src="/landingPageAssets/card-2.svg" alt="" className="relative w-[25px] h-[25px]" />
          <h2 className="font-roboto font-bold text-[15px] text-white items-center justify-center pt-1">
            OUR COUNTRIES
          </h2>
        </div>

        {/* <!-- Div 2 --> */}

        <div className="lg:flex">
          <h2 className="font-roboto font-bold text-white text-[30px] lg:text-[52px]">
            Making Memories Around World Unforgettable
          </h2>

          {/* <!-- Next previous button --> */}

          <div className="flex w-[80%] h-[20%] lg:justify-end pt-5 sm:pt-10 lg:pt-24 gap-4">
        <button id="prevButton" className="flex items-center justify-center w-16 h-16 rounded-full border border-white hover:bg-button transition-all duration-200">
          <i data-feather="arrow-left" className="text-white w-6 h-6"></i>
        </button>

        <button id="nextButton" className="flex items-center justify-center w-16 h-16 rounded-full border border-white hover:bg-button transition-all duration-200">
          <i data-feather="arrow-right" className="text-white w-6 h-6"></i>
        </button>
      </div>
        </div>

        {/* <!-- Div 3 --> */}
        {/* <!-- 5 Cards --> */}

        <div className="sm:flex md:grid md:grid-cols-2 lg:flex items-center justify-center lg:pt-6">
          {/* <!-- Card 1 --> */}
          {/* <!-- Parent Card Content --> */}
          <div className="parent-card relative">
            {/* <!-- Image inside parent card --> */}
            <Image 
              src="/landingPageAssets/projact-img1.png"
              alt="Card Image"
              className="absolute inset-0 z-0"
            />

            {/* <!-- Logo in the top-right corner --> */}
            <div className="logo">
              <Image  src="/landingPageAssets/projact-small-img1.png" alt="Logo" />
            </div>

            {/* <!-- Child Card --> */}
            <div className="child-card flip-card">
              <div className="front flex-col p-4 flex justify-start h-full bg-getAnAppointment text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold pt-2 text-left">
                  Working Visa
                </h2>
                <p className="pb-3 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <button className="bg-getAnAppointment flex flex-row items-center justify-center space-x-2 w-fit text-white py-[18px] px-[24px] rounded-full font-roboto border border-white hover:bg-greenBody transition-all duration-200">
                  <span>Apply Now</span>
                  <i
                    data-feather="arrow-right"
                    className="text-white w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="back">
                <p>Back Side</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          {/* <!-- Parent Card Content --> */}
          <div className="parent-card relative hidden sm:flex">
            {/* <!-- Image inside parent card --> */}
            <Image 
              src="/landingPageAssets/projact-img2.png"
              alt="Card Image"
              className="absolute inset-0 z-0"
            />

            {/* <!-- Logo in the top-right corner --> */}
            <div className="logo">
              <Image  src="/landingPageAssets/projact-small-img2.png" alt="Logo" />
            </div>

            {/* <!-- Child Card --> */}
            <div className="child-card flip-card">
              <div className="front flex-col p-4 flex justify-start h-full bg-getAnAppointment text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold pt-2 text-left">
                  Working Visa
                </h2>
                <p className="pb-3 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <button className="bg-getAnAppointment flex flex-row items-center justify-center space-x-2 w-fit text-white py-[18px] px-[24px] rounded-full font-roboto border border-white hover:bg-greenBody transition-all duration-200">
                  <span>Apply Now</span>
                  <i
                    data-feather="arrow-right"
                    className="text-white w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="back">
                <p>Back Side</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          {/* <!-- Parent Card Content --> */}
          <div className="parent-card relative hidden md:flex lg:visible">
            {/* <!-- Image inside parent card --> */}
            <Image 
              src="/landingPageAssets/projact-img3.png"
              alt="Card Image"
              className="absolute inset-0 z-0"
            />

            {/* <!-- Logo in the top-right corner --> */}
            <div className="logo">
              <Image  src="/landingPageAssets/projact-small-img3.png" alt="Logo" />
            </div>

            {/* <!-- Child Card --> */}
            <div className="child-card flip-card">
              <div className="front flex-col p-4 flex justify-start h-full bg-getAnAppointment text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold pt-2 text-left">
                  Working Visa
                </h2>
                <p className="pb-3 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <button className="bg-getAnAppointment flex flex-row items-center space-x-2 justify-center w-fit text-white py-[18px] px-[24px] rounded-full font-roboto border border-white hover:bg-greenBody transition-all duration-200">
                  <span>Apply Now</span>
                  <i
                    data-feather="arrow-right"
                    className="text-white w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="back">
                <p>Back Side</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          {/* <!-- Parent Card Content --> */}
          <div className="parent-card relative hidden md:flex lg:visible">
            {/* <!-- Image inside parent card --> */}
            <Image 
              src="/landingPageAssets/projact-img4.png"
              alt="Card Image"
              className="absolute inset-0 z-0"
            />

            {/* <!-- Logo in the top-right corner --> */}
            <div className="logo">
              <Image  src="/landingPageAssets/projact-small-img4.png" alt="Logo" />
            </div>

            {/* <!-- Child Card --> */}
            <div className="child-card flip-card">
              <div className="front flex-col p-4 flex justify-start h-full bg-getAnAppointment text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold pt-2 text-left">
                  Working Visa
                </h2>
                <p className="pb-3 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <button className="bg-getAnAppointment flex flex-row items-center justify-center space-x-2 w-fit text-white py-[18px] px-[24px] rounded-full font-roboto border border-white hover:bg-greenBody transition-all duration-200">
                  <span>Apply Now</span>
                  <i
                    data-feather="arrow-right"
                    className="text-white w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="back">
                <p>Back Side</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          {/* <!-- Parent Card Content --> */}
          <div className="parent-card relative hidden md:flex lg:visible">
            {/* <!-- Image inside parent card --> */}
            <Image 
              src="/landingPageAssets/projact-img5.png"
              alt="Card Image"
              className="absolute inset-0 z-0"
            />

            {/* <!-- Logo in the top-right corner --> */}
            <div className="logo">
              <Image  src="/landingPageAssets/projact-small-img5.png" alt="Logo" />
            </div>

            {/* <!-- Child Card --> */}
            <div className="child-card flip-card">
              <div className="front flex-col p-4 flex justify-start h-full bg-getAnAppointment text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold pt-2 text-left">
                  Working Visa
                </h2>
                <p className="pb-3 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <button className="bg-getAnAppointment flex flex-row items-center justify-center space-x-2 w-fit text-white py-[18px] px-[24px] rounded-full font-roboto border border-white hover:bg-greenBody transition-all duration-200">
                  <span>Apply Now</span>
                  <i
                    data-feather="arrow-right"
                    className="text-white w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
