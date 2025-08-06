"use client";

import Image from "next/image";
import React from "react";

export default function PicProduct() {
  return (
    <div className="relative h-[300px] w-full bg-gray-100 sm:h-[400px] md:h-[500px] lg:h-[42rem]">
      <Image
        src="/picproduct.png"
        alt="product pic"
        fill
        style={{ objectFit: "cover" }} // اینجا تغییر دادم از contain به cover
        priority
      />

      {/* مانیتور */}
      <div className="absolute top-[30%] left-[50px] -translate-y-1/2 md:top-[180px] lg:top-[204px] lg:left-[360px]">
        <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
          <span className="absolute inline-flex h-4 w-4 animate-[blink_3s_ease-in-out_infinite] rounded-full bg-white opacity-50 lg:h-8 lg:w-8"></span>
          <div className="relative z-10 h-2 w-2 rounded-full bg-black lg:h-3 lg:w-3"></div>
        </div>
      </div>

      {/* VR */}
      <div className="absolute top-[70px] right-[50px] md:top-[170px] lg:top-[180px] lg:right-[370px]">
        <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
          <span className="absolute inline-flex h-4 w-4 animate-[blink_3s_ease-in-out_infinite] rounded-full bg-white opacity-50 lg:h-8 lg:w-8"></span>
          <div className="relative z-10 h-2 w-2 rounded-full bg-black lg:h-3 lg:w-3"></div>
        </div>
      </div>

      {/* دسته */}
      <div className="absolute bottom-[50px] left-[44%] -translate-x-1/2 sm:bottom-[100px] sm:left-[60%] md:bottom-[120px] lg:bottom-[140px] lg:left-[690px] lg:h-8 lg:w-8">
        <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
          <span className="absolute inline-flex h-4 w-4 animate-[blink_3s_ease-in-out_infinite] rounded-full bg-white opacity-50 lg:h-8 lg:w-8"></span>
          <div className="relative z-10 h-2 w-2 rounded-full bg-black lg:h-3 lg:w-3"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
