"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReviewCard from "../../ui/card/ReviewCard";
import ReviewSlidercard from "../../ui/slider/ReviewSlidercard";
import ReviewSliderimg from "../../ui/slider/ReviewSliderimgCard";
import ReviewimgCard from "../../ui/card/ReviewimgCard";

export default function Review() {
  const items = [
    {
      img: "/vr.png",
      name: "jack smith",
    },
    {
      img: "/henry-cavill.jpeg",
      name: "henry cavill",
    },
    {
      img: "/testimonial.png",
      name: "robert downey jr",
    },
  ];

  const [controller1, setController1] = useState(null); // عکس
  const [controller2, setController2] = useState(null); // کارت

  return (
    <div className="relative h-[23rem]! w-full overflow-hidden rounded-2xl md:h-[25rem]! lg:h-[33rem]! xl:px-30 xl:py-10">
      <Image
        src="/review.png"
        alt="Review Background"
        fill
        className="-z-10 object-cover"
        priority
      />
      <div className="flex h-full flex-row items-center gap-x-4 gap-y-8">
        {/* اسلایدر نظر */}
        <ReviewSlidercard
          items={items}
          RenderCard={ReviewCard}
          swiperClass="my-custom-swiper--dark"
          theme=""
          controller={controller1}
          setController={setController2}
        />

        {/* اسلایدر تصویر */}

        <ReviewSliderimg
          items={items}
          RenderImg={ReviewimgCard}
          theme="theme--dark"
          controller={controller2}
          setController={setController1}
        />
      </div>
    </div>
  );
}
