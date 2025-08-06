"use client";
import React from "react";
import { BiSupport, BiCube } from "react-icons/bi";
import { IoMdReturnLeft } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import SliderSwip from "./SliderSwip";
import CardServices from "./CardServices";

const items = [
  {
    title: "Free Shipping",
    desc: "You will love at great low prices",
    icon: <BiCube size={32} />,
    img: null,
  },
  {
    title: "Flexible Payment",
    desc: "Pay the way you like",
    icon: <MdOutlinePayment size={32} />,
    img: null,
  },
  {
    title: "14 Day Returns",
    desc: "Within 30 days for an exchange",
    icon: <IoMdReturnLeft size={32} />,
    img: null,
  },
  {
    title: "Premium Support",
    desc: "Outstanding premium support",
    icon: <BiSupport size={32} />,
    img: null,
  },
];

export default function Services() {
  return (
    <div className="border-b-2 border-b-stone-200 bg-white">
      <SliderSwip
        items={items}
        RenderCard={CardServices}
        swiperClass="my-custom-swiper--light"
      />
    </div>
  );
}
