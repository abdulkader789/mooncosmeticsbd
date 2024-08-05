"use client";
import Image from "next/image";
import category1 from "@/public/category/category1.jpeg";
import category2 from "@/public/category/category2.jpeg";
import category3 from "@/public/category/category3.jpeg";
import category4 from "@/public/category/category4.jpeg";
import category5 from "@/public/category/category5.jpeg";
import category6 from "@/public/category/category6.jpeg";
import award1 from "@/public/moon/Gallary/AWARD.png";
import award2 from "@/public/moon/Gallary/AWARD2.png";
import award3 from "@/public/moon/Gallary/AWARD3.png";

import { Navigation, Autoplay } from "swiper/modules";
const GallerySlider = () => {
  return (
    <div className=" bg-white">
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl raleway-medium text-center">
            Our Gallery
          </h1>
          <p className="msm:text-base mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16 mx-auto text-center">
            BEST TAX PAYER IN 2023 (KHULNA ZILLA) Chairman of the Moon Cosmetics
            has got Best Tax payer in Khulna District.
          </p>
          {/* Content */}
          <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            {/* Item */}
            <a
              href="#"
              className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
            >
              <Image
                src={award1}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <Image
                src={award2}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <Image
                src={award3}
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySlider;
