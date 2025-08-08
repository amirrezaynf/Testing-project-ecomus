"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function SliderSwip({ items, RenderCard, swiperClass = "" }) {
  return (
    <div className="mt-8 w-full px-4">
      {/* موبایل: اسلایدر فعال */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className={`${swiperClass} w-full`}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <RenderCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* دسکتاپ: گرید معمولی بدون اسلایدر */}
      <div className="hidden grid-cols-2 gap-4 md:grid xl:grid-cols-4">
        {items.map((item, index) => (
          <RenderCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
