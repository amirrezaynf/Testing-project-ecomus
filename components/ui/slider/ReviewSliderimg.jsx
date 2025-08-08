"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function ReviewSliderImg({
  items,
  RenderImg,
  swiperClass = "",
  controller,
  setController,
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="w-full">
      {isReady && (
        <Swiper
          modules={[Controller, Pagination]}
          controller={{ control: controller }}
          onSwiper={(swiper) => setController && setController(swiper)}
          spaceBetween={25}
          slidesPerView={1}
          className={`mt-3 ${swiperClass}`}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <RenderImg {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
