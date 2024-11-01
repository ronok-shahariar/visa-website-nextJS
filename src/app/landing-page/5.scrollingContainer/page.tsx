"use client"

export default function SCROLCONT() {
  return (
    // <!-- Scrolling Container -->

    <section className="flex w-[88%] h-[50px] mx-auto items-center justify-between mt-14">
      <div className="scroll-wrapper mx-auto overflow-hidden">
        <div className="flex scroll-container gap-32 h-full">
          {/* <!-- First set of images --> */}
          <img
            src="black-brands1.png"
            alt="Image 1"
            className="scroll-image w-[171px] h-[49px]"
          />
          <img
            src="black-brands2.png"
            alt="Image 2"
            className="scroll-image w-[108px] h-[49px]"
          />
          <img
            src="black-brands3.png"
            alt="Image 3"
            className="scroll-image w-[114px] h-[49px]"
          />
          <img
            src="black-brands4.png"
            alt="Image 4"
            className="scroll-image w-[127px] h-[49px]"
          />
          <img
            src="black-brands5.png"
            alt="Image 5"
            className="scroll-image w-[144px] h-[49px]"
          />

          {/* <!-- Duplicate set of images for seamless looping --> */}
          <img
            src="black-brands1.png"
            alt="Image 1"
            className="scroll-image w-[171px] h-[49px]"
          />
          <img
            src="black-brands2.png"
            alt="Image 2"
            className="scroll-image w-[108px] h-[49px]"
          />
          <img
            src="black-brands3.png"
            alt="Image 3"
            className="scroll-image w-[114px] h-[49px]"
          />
          <img
            src="black-brands4.png"
            alt="Image 4"
            className="scroll-image w-[127px] h-[49px]"
          />
          <img
            src="black-brands5.png"
            alt="Image 5"
            className="scroll-image w-[144px] h-[49px]"
          />
        </div>
      </div>
    </section>
  );
}
