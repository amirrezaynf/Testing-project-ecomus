"use client";
import Autoplayer from "@/components/Autoplayer";
import Brand from "@/components/Brand";
import HotDeals from "@/components/HotDeals";
import PapularProduct from "@/components/PapularProduct";
import PicProduct from "@/components/PicProduct";
import Recommendproduct from "@/components/Recommendproduct";
import Review from "@/components/Review";
import Services from "@/components/Services";
import ShopByCategory from "@/components/ShopByCategory";
import Image from "next/image";
import dynamic from "next/dynamic";

import React from "react";
import Imageslider from "@/components/Imageslider";

export default function Homepage() {
  const MapView = dynamic(() => import("@/components/MapView"), {
    ssr: false,
  });
  return (
    <>
      <div className="relative h-[30rem] md:h-[30rem] lg:h-[38rem] xl:h-[58rem]">
        <Image
          src="/homeimg.png"
          alt="home"
          fill
          className="object-cover"
          priority={false}
        />

        <Imageslider />
      </div>

      <div className="flex h-20 w-full items-center overflow-hidden bg-primary text-white">
        <Autoplayer />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <ShopByCategory />
      </div>
      <div className="overflow-hidden bg-gray-100 px-8">
        <HotDeals />
      </div>
      <div className="overflow-hidden bg-white px-8">
        <PapularProduct />
      </div>
      <div>
        <PicProduct />
      </div>
      <div className="overflow-hidden bg-white px-8">
        <Recommendproduct />
      </div>
      <div className="rounded- xl:10 overflow-hidden px-2">
        <Review />
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <MapView />
      </div>
    </>
  );
}
