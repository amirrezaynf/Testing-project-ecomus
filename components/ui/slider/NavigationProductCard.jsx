"use client";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";

export default function NavigationProduct({
  items,
  RenderCard,
  swiperClass = "",
  theme = "",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="hover--parent relative mx-auto w-full max-w-7xl">
      {/* دکمه‌های ناوبری */}
      <div
        className={`hover pointer-events-none absolute top-1/2 right-[-50px] left-[-50px] z-10 hidden -translate-y-1/2 items-center justify-between transition-all duration-500 ease-in-out xl:flex`}
      >
        <button
          ref={prevRef}
          className={`pointer-events-auto rounded-full border hover:bg-layotbg! ${theme} p-3 text-stone-400 shadow-lg transition-all duration-300 hover:text-stone-50`}
        >
          <AiOutlineLeft />
        </button>
        <button
          ref={nextRef}
          className={`pointer-events-auto rounded-full border hover:bg-layotbg! ${theme} p-3 text-stone-400 shadow-lg transition-all duration-300 hover:text-stone-50`}
        >
          <AiOutlineRight />
        </button>
      </div>

      {/* کانتینر اسلایدر */}
      <div className="">
        {isReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            spaceBetween={25}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: "2" },
              768: { slidesPerView: "3" },
              1024: { slidesPerView: "4" },
            }}
            className={`mt-3 ${swiperClass}`}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <RenderCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div
          ref={paginationRef}
          className={`xl:hidden ${swiperClass} mt-6 flex justify-center`}
        />
      </div>
    </div>
  );
}
