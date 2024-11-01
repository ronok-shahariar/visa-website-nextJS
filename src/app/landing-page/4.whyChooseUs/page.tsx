"use client";

import { useEffect } from 'react';

export default function WHYCHOOSEUS() {

  // <!-- Experience Counter (00-25) Script -->
  
  useEffect(() => {
    function animateSlidingCounter() {
      const tensContainer = document.getElementById("tensContainer");
      const unitsContainer = document.getElementById("unitsContainer");
      let count = 0;
      const target = 25;
      const speed = 100;

      const interval = setInterval(() => {
        count++;
        const tens = Math.floor(count / 10);
        const units = count % 10;

        if (tensContainer && tensContainer.firstElementChild && tensContainer.firstElementChild.textContent !== `${tens}`) {
          animateDigit(tensContainer, tens);
        }
        
        if (unitsContainer && unitsContainer.firstElementChild && unitsContainer.firstElementChild.textContent !== `${units}`) {
          animateDigit(unitsContainer, units);
        }

        if (count === target) {
          clearInterval(interval);
        }
      }, speed);
    }

    function animateDigit(container: HTMLElement, newDigit: number) {
      const currentDigit = container.firstElementChild;
      const newDigitElement = document.createElement("span");
      newDigitElement.className = "digit font-roboto text-[70px] font-bold text-white";
      newDigitElement.textContent = `${newDigit}`;

      container.appendChild(newDigitElement);

      currentDigit?.classList.add("up");
      newDigitElement.classList.add("up");

      setTimeout(() => {
        currentDigit?.remove();
        newDigitElement.classList.remove("up");
      }, 500);
    }

    function handleScroll() {
      const flipContainer = document.querySelector(".number-container");
      if (flipContainer) {
        const rect = flipContainer.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          animateSlidingCounter();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <!-- Why Choose us  -->

    <section className="lg:flex lg:mx-auto lg:px-8 lg:gap-x-10 w-full pt-16 overflow-hidden">
      {/* <!-- left section --> */}
      <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start lg:items-start sm:items-center relative min-h-[500px] gap-10 lg:gap-x-7 lg:w-full">
        {/* <!-- left side --> */}
        <div className="flex flex-col relative items-center justify-center">
          {/* <!-- left image --> */}
          <div className="relative inline-block">
            {/* <!-- Border Div --> */}
            <div className="absolute top-3 left-2 border-[1px] border-getAnAppointment rounded-[20px] pointer-events-none w-full h-full z-10"></div>

            <img
              src="choose-us-left-img.png"
              alt=""
              className="relative z-0 rounded-[20px]"
            />
          </div>

          <div className="flex justify-center items-center pt-10 mb-10">
            <img
              src="choose-us-circle-img.png"
              alt=""
              className="rotate-animation"
            />
          </div>
        </div>

        {/* <!-- Right side --> */}
        <div className="flex flex-col lg:justify-start lg:items-start min-h-[500px] sm:pt-12 lg:pt-0">
          {/* <!-- Left image right portion --> */}
          {/* <!-- Box --> */}
          <div className="flex flex-col items-center justify-center w-full overflow-hidden">
            <div className="h-[20%] w-[70%] sm:w-full bg-button rounded-[20px] flex flex-row justify-center items-center">
              {/* <!-- Experience Counter --> */}
              <div className="flex flex-row justify-center items-center gap-2 overflow-hidden">
                {/* Counter Value */}
                <div className="number-container relative ">
                  <div id="tensContainer" className="digit-container ">
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      0
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      1
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      2
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      3
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      4
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      5
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      6
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      7
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      8
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      9
                    </span>
                  </div>
                  <div id="unitsContainer" className="digit-container">
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      0
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      1
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      2
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      3
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      4
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      5
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      6
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      7
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      8
                    </span>
                    <span className="digit font-roboto text-[18px] font-bold text-white">
                      9
                    </span>
                  </div>
                </div>
                {/* Text Year of experience */}
                <div className="flex flex-col items-center justify-center relative">
                  <p className="text-white font-roboto text-[18px] ">
                    Years Of
                  </p>
                  <span className="text-white font-roboto text-[18px] ">
                    Experience
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- image below box --> */}
            <div className="flex items-center justify-center relative mt-8">
              <img
                src="choose-us-right-img.png"
                alt="Experience Image"
                className="relative rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Right section --> */}
      <div className="relative min-h-[500px] mx-4 space-y-3 pt-10 lg:pt-0">
        <div className="flex flex-row gap-2">
          <img
            src="card-2.3.svg"
            alt=""
            className="relative w-[25px] h-[25px]"
          />
          <h2 className="font-roboto font-bold text-[15px] sm:text-[16px] text-greenBody items-center justify-center">
            WHY CHOOSE US
          </h2>
        </div>
        <div className="space-y-4">
          {/* <!-- writting --> */}
          <h2 className="font-roboto font-bold text-[25px] sm:text-[35px] sm:leading-tight w-full lg:text-[45px] text-greenBody">
            Where Wanderlust Meets Dream Destinations
          </h2>
          <p className="font-roboto text-gray-500 sm:text-[16.5px] leading-[28px]">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa Et purus duis sollicitudin dignissim
            habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
            duis sollicitudin dignissim habitant. Egestas nulla
          </p>
        </div>

        {/* <!-- 2 cards --> */}

        <div className="sm:flex flex-row gap-4 mr-14">
          {/* <!-- Box-1 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7">
            <div className="flex flex-row gap-2">
              <div className="relative flex rounded-full bg-getAnAppointment w-[60px] h-[60px] items-center justify-center overflow-hidden">
                <img
                  src="image (5).svg"
                  alt=""
                  className="w-[40px] h-[40px] shake-image transition-transform duration-500 ease-in-out"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[20px] items-center">
                Passport Plus
              </h2>
            </div>

            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-2 items-center">
                <img
                  src="image (6).svg"
                  alt=""
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-600 text-[15px]">
                  Beyond Border Immigration
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="image (6).svg"
                  alt=""
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-600 text-[15px]">
                  Worldwide Visa Assistance
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box-2 --> */}
          <div className="z-[100] border border-gray-300 relative pt-8 pl-8 py-6 pr-8 rounded-[20px] mt-7">
            <div className="flex flex-row gap-2">
              <div className="relative flex rounded-full bg-getAnAppointment w-[60px] h-[60px] items-center justify-center overflow-hidden">
                <img
                  src="image (7).svg"
                  alt=""
                  className="w-[40px] h-[40px] shake-image transition-transform duration-500 ease-in-out"
                />
              </div>
              <h2 className="flex font-roboto font-bold text-greenBody text-[20px] items-center">
                Global Entry
              </h2>
            </div>

            <div className="flex flex-col mt-5 justify-between gap-4">
              <div className="flex gap-2 items-center">
                <img
                  src="image (6).svg"
                  alt=""
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-600 text-[15px]">
                  GlobeTrot Visa Services
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="image (6).svg"
                  alt=""
                  className="relative w-[15px] h-[15px]"
                />
                <p className="font-roboto text-gray-600 text-[15px]">
                  Infinity Visa Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!--  button & contact --> */}

        <div className="flex flex-col sm:flex-row gap-5 mt-7 ml-3">
          {/* <!-- button Read More --> */}

          <div className="w-[70%] lg:w-[50%] h-full mt-5">
            <button className="flex flex-row items-center justify-center w-fit lg:w-fit text-greenBody py-[18px] px-[28px] rounded-full border border-getAnAppointment hover:bg-greenBody hover:text-white transition-all duration-200 group">
              <span className="font-roboto text-[16px] lg:text-[17px]">
                Read More
              </span>
              <i
                data-feather="arrow-right"
                className="text-greenBody w-6 h-6 ml-1 font-bold group-hover:text-white"
              ></i>
            </button>
          </div>

          {/* <!-- Need Help --> */}
          <div className="flex flex-row gap-4 w-full h-full items-center mt-4">
            <div className="relative flex flex-col rounded-full bg-button w-[52px] h-[52px] items-center justify-center overflow-hidden">
              <img
                src="icons8-phone-30.png"
                alt=""
                className="w-[20px] h-[20px] shake-image transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-roboto text-greenBody">Need help?</p>
              <h2 className="font-roboto text-greenBody font-bold">
                (808)555-0111
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
