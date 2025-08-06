"use client";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewSlidercard({
  items,
  RenderCard,
  swiperClass = "",
  theme = "",
  controller, // 🎯 برای همگام‌سازی
  setController, // 🎯 برای گرفتن رفرنس این Swiper
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative mx-auto h-full w-full! max-w-7xl xl:w-3/5!">
      {/* ناوبری */}
      <div
        className={`pointer-events-none absolute bottom-0 left-7 z-10 hidden -translate-y-1/2 items-center justify-between transition-all duration-500 ease-in-out md:flex md:gap-2`}
      >
        <button
          ref={prevRef}
          className={`pointer-events-auto rounded-full border hover:bg-layotbg! ${theme} p-2 text-stone-400 shadow-lg transition-all duration-300 hover:text-stone-50`}
        >
          <AiOutlineLeft />
        </button>
        <button
          ref={nextRef}
          className={`pointer-events-auto rounded-full border hover:bg-layotbg! ${theme} p-2 text-stone-400 shadow-lg transition-all duration-300 hover:text-stone-50`}
        >
          <AiOutlineRight />
        </button>
      </div>

      {/* اسلایدر */}
      {isReady && (
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          controller={{ control: controller }}
          onSwiper={(swiper) => setController && setController(swiper)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          spaceBetween={25}
          slidesPerView={1}
          className={`mt-3 ${swiperClass}`}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <RenderCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* pagination bullets (مخصوص موبایل یا سفارشی) */}
      <div
        ref={paginationRef}
        className={`md:hidden ${swiperClass} absolute! bottom-10 left-4 flex justify-center`}
      />
    </div>
  );
}
