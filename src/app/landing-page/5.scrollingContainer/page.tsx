"use client";
import Image from "next/image";

export default function SCROLCONT() {
  return (
    // <!-- Scrolling Container -->

    <section className="flex w-[88%] h-[50px] mx-auto items-center justify-between mt-14 2xl:px-24">
      <div className="scroll-wrapper mx-auto overflow-hidden">
        <div className="flex scroll-container gap-32 h-full">
          {/* <!-- First set of images --> */}
          <Image
            src="/landingPageAssets/black-brands1.png"
            alt="Image 1"
            width={171}
            height={49}
            className="scroll-image w-[171px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands2.png"
            alt="Image 2"
            width={108}
            height={49}
            className="scroll-image w-[108px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands3.png"
            alt="Image 3"
            width={114}
            height={49}
            className="scroll-image w-[114px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands4.png"
            alt="Image 4"
            width={127}
            height={49}
            className="scroll-image w-[127px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands5.png"
            alt="Image 5"
            width={144}
            height={49}
            className="scroll-image w-[144px] h-[49px]"
          />

          {/* <!-- Duplicate set of images for seamless looping --> */}
          <Image
            src="/landingPageAssets/black-brands1.png"
            alt="Image 1"
            width={171}
            height={49}
            className="scroll-image w-[171px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands2.png"
            alt="Image 2"
            width={108}
            height={49}
            className="scroll-image w-[108px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands3.png"
            alt="Image 3"
            width={114}
            height={49}
            className="scroll-image w-[114px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands4.png"
            alt="Image 4"
            width={127}
            height={49}
            className="scroll-image w-[127px] h-[49px]"
          />
          <Image
            src="/landingPageAssets/black-brands5.png"
            alt="Image 5"
            width={144}
            height={49}
            className="scroll-image w-[144px] h-[49px]"
          />
        </div>
      </div>
    </section>
  );
}
