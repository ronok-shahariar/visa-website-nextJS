"use client";

import { useEffect, useRef, useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const mobileMenu = mobileMenuRef.current;
    const closeMenu = closeMenuRef.current;

    if (menuToggle && mobileMenu && closeMenu) {
      const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
        mobileMenu.classList.toggle("hidden");
      };

      const handleCloseMenu = () => {
        setIsMenuOpen(false);
        mobileMenu.classList.add("hidden");
      };

      const handleScrollCloseMenu = () => {
        if (isMenuOpen) {
          setIsMenuOpen(false);
          mobileMenu.classList.add("hidden");
        }
      };

      menuToggle.addEventListener("click", handleMenuToggle);
      closeMenu.addEventListener("click", handleCloseMenu);
      window.addEventListener("scroll", handleScrollCloseMenu);

      // Clean up listeners on unmount
      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        closeMenu.removeEventListener("click", handleCloseMenu);
        window.removeEventListener("scroll", handleScrollCloseMenu);
      };
    }
  }, [isMenuOpen]);

  return (
    //  <!-- Navigation Bar /responsive  -->

    <nav className="text-green_3 font-roboto w-full px-5 relative z-20">
      <div className="flex items-center justify-between w-full py-6">
        {/* Logo */}

        <Image
          src="/images/onevisahub_main.png"
          alt="Logo"
          width={170}
          height={50}
          className="w-[150px] h-[45px] lg:w-[170px] lg:h-[50px] cursor-pointer"
        />

        {/* <!-- get appontment button and hamburgur menu --> */}

        <div className="flex flex-row items-center justify-center space-x-6">
          {/* <!-- Get an appointment Button when sm: --> */}
          <button className="bg-getAnAppointment hidden sm:flex lg:hidden flex-row w-fit text-white py-[18px] px-[24px] rounded-full font-roboto hover:bg-greenBody transition-all duration-200">
            <span>Get An Appointment</span>
            <i data-feather="arrow-right" className="text-white w-5 h-5"></i>
          </button>

          {/* Hamburger Menu Button */}
          <button
            ref={menuToggleRef}
            id="menu-toggle"
            className="lg:hidden text-green-500 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-8 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Options (hidden on small screens) --> */}
        <ul className="hidden lg:flex lg:space-x-5 lg:items-center lg:justify-center lg:-ml-48 font-roboto font-bold text-[15px] text-greenBody">
          <li>
            <Link href="#" className="cursor-pointer">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              STORY
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              VISA
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              PAGE
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* <!-- Get an appointment Button --> */}
        <button className="bg-getAnAppointment hidden lg:flex flex-row items-center justify-center space-x-1 w-fit text-white py-[18px] px-[24px] rounded-full font-roboto hover:bg-greenBody transition-all duration-200">
          <span>Get An Appointment</span>
          <i data-feather="arrow-right" className="text-white w-5 h-5"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`flex flex-row lg:hidden ${
          isMenuOpen ? "" : "hidden"
        } fixed inset-y-0 right-0 w-3/4 bg-[#0E0A24] p-8 z-50`}
      >
        {/* Menu Items (visible on small screens) */}

        <div>
          <ul className="lg:hidden  fixed inset-y-0 right-0 w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/4 bg-[#0E0A24] flex-col space-y-4 p-8 font-roboto font-bold text-[15px] text-white z-50">
            {/* Logo and cross button on small screen */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              {/* <!-- logo --> */}
              <div>
                <Image
                  src="/images/onevisahub_gr.png"
                  alt=""
                  width={170}
                  height={50}
                  className="w-28 h-8 md:w-32 md:h-10"
                />
              </div>

              <div>
                <button
                  ref={closeMenuRef}
                  id="close-menu"
                  className="text-white"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-[85%] h-[0.6px] bg-gray-700 mt-5"></div>

            {/* <!-- list --> */}
            {/* <!-- 1 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Home
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center border border-[#374151] p-1 rounded hover:bg-button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="#374151"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 2 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                About Us
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 3 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Story
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center border border-[#374151] p-1 rounded hover:bg-button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="#374151"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 4 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Visa
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center border border-[#374151] p-1 rounded hover:bg-button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="#374151"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 5 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Blog
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center border border-[#374151] p-1 rounded hover:bg-button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="#374151"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 6 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Page
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center border border-[#374151] p-1 rounded hover:bg-button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="#374151"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="w-[85%] h-[0.6px] bg-gray-800 mt-36"></div>
            {/* <!-- 7 --> */}
            <div className="w-[85%] flex flex-row items-stretch justify-between">
              <Link
                href="#"
                className="cursor-pointer font-roboto text-white text-[12px] md:text-[15px] hover:text-button"
              >
                Contact
              </Link>
            </div>

            <h2 className="font-roboto text-white text-[20px] md:text-[24px] pt-3">
              CONTACT US
            </h2>
            {/* <!-- Social icons --> */}
            <div className="flex flex-row space-x-5">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-green-500" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-green-500" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-green-500" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="text-green-500" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
