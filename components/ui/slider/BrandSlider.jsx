"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function BrandSlider({ items, RenderCard, swiperClass = "" }) {
  const paginationRef = useRef(null);

  return (
    <div className="mt-8 w-full px-4">
      {/* موبایل: اسلایدر فعال */}
      <div className="block">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: "2" },
            768: { slidesPerView: "3" },
            1024: { slidesPerView: "6" },
          }}
          slidesPerGroup={3}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            if (typeof window !== "undefined") {
              swiper.params.pagination.el = paginationRef.current;
            }
          }}
          className={`${swiperClass} w-full`}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <RenderCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationRef}
          className={`mt-4 flex justify-center ${swiperClass}`}
        />
      </div>
    </div>
  );
}
