import { GrView } from "react-icons/gr";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

export default function HotDealsCard({
  title,
  img,
  hoverImg,
  price,
  discountedPrice,
  discount,
  color,
  button,
  productId,
}) {
  const hasDiscount = discount > 0;

  return (
    <div className="group relative flex h-[22rem] w-full flex-col items-center justify-start gap-5 rounded-2xl border-2 border-stone-100 bg-white p-3 hover:shadow-md lg:h-[470px]">
      {/* --- Discount Label (conditional) --- */}
      {hasDiscount && (
        <div className="absolute top-12 right-5 z-20 flex items-center justify-center rounded-full bg-red-700 p-2 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}

      {/* --- Images --- */}
      <div className="relative mt-6 flex h-[200px] w-full items-center justify-center bg-stone-50 xl:h-3/5">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-stone-50 p-4">
          <Link href={`/products/${productId}`} className="block h-full w-full">
            <Image
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-125 lg:object-fill"
              src={img}
              fill
              alt={title}
            />
            <Image
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-0 transition-transform duration-[1800ms] ease-in-out group-hover:scale-125 group-hover:opacity-100 lg:object-fill"
              src={hoverImg || "/background/homeimg.png"}
              fill
              alt={`${title} Hover`}
            />

            {/* --- Refactored Icon Container --- */}
            <div className="absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-2 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
              <div className="flex translate-y-2 items-center justify-center rounded-md bg-stone-50 p-3 shadow-md transition-all delay-100 duration-300 group-hover:translate-y-0">
                <RiShoppingBag2Line size={15} />
              </div>
              <div className="flex translate-y-2 items-center justify-center rounded-md bg-stone-50 p-3 shadow-md transition-all delay-300 duration-300 group-hover:translate-y-0">
                <FaRegHeart size={15} />
              </div>
              <div className="flex translate-y-2 items-center justify-center rounded-md bg-stone-50 p-3 shadow-md transition-all delay-500 duration-300 group-hover:translate-y-0">
                <MdCompareArrows size={15} />
              </div>
              <div className="flex translate-y-2 items-center justify-center rounded-md bg-stone-50 p-3 shadow-md transition-all delay-700 duration-300 group-hover:translate-y-0">
                <GrView size={15} />
              </div>
            </div>
            {/* --- End of Refactored Icon Container --- */}
          </Link>
        </div>
      </div>
      {/* --- Title and Prices --- */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="cursor-pointer text-center text-base font-semibold text-stone-900 transition-all duration-500 hover:text-primary">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {/* Conditional price display */}
          {hasDiscount ? (
            <>
              <p className="text-gray-500 line-through">${price.toFixed(2)}</p>
              <p className="text-lg font-medium text-red-700">
                ${discountedPrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-lg font-medium text-stone-800">
              ${price.toFixed(2)}
            </p>
          )}
        </div>

        {/* --- Colors --- */}
        <div className="mt-3 flex gap-2">
          {Array.isArray(color) &&
            color.map((c, index) => (
              <div
                key={index}
                className="h-5 w-5 rounded-full border"
                style={{ backgroundColor: c }}
              ></div>
            ))}
        </div>
      </div>
      <div className="w-full pt-2 lg:pt-5">{button}</div>
    </div>
  );
}
