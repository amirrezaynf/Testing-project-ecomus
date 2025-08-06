"use client";
import React from "react";
import SliderSwip from "./SliderSwip";
import Brandcard from "./Brandcard";
import BrandSlider from "./BrandSlider";

export default function Brand() {
  const items = [
    {
      img: "/ssense.png",
    },
    {
      img: "/bubbery2.png",
    },
    {
      img: "/nike.png",
    },
    {
      img: "/asos.png",
    },
    {
      img: "/pull.png",
    },
    {
      img: "/gildan.png",
    },
  ];
  return (
    <div className="my-18">
      <div className="flex-nowrap">
        <BrandSlider
          items={items}
          RenderCard={Brandcard}
          swiperClass="my-custom-swiper--light"
        />
      </div>
    </div>
  );
}
