import { GrView } from "react-icons/gr";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

export default function CardHotDeals({
  title,
  img,
  hoverImg,
  price,
  discountedPrice,
  discount, // پراپ discount را دریافت می‌کنیم
  color,
  button,
  productId,
}) {
  const hasDiscount = discount > 0;

  return (
    <div className="group w- relative flex h-[22rem] flex-col items-center justify-start gap-5 rounded-2xl border-2 border-stone-100 bg-white p-3 hover:shadow-md lg:h-[470px]">
      {/* --- برچسب تخفیف (با شرط) --- */}
      {hasDiscount && (
        <div className="absolute top-12 right-5 z-20 flex items-center justify-center rounded-full bg-red-700 p-2 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}

      {/* --- عکس‌ها --- */}
      <div className="relative mt-6 flex h-[200px] w-full items-center justify-center bg-stone-50 xl:h-3/5">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-stone-50 p-4">
          <Link href={`/products/${productId}`} className="block w-full">
            <Image
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-125 lg:object-fill"
              src={img}
              fill
              alt={title}
            />
            <Image
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-0 transition-transform duration-[1800ms] ease-in-out group-hover:scale-125 group-hover:opacity-100 lg:object-fill"
              src={hoverImg || "/homeimg.png"}
              fill
              alt={`${title} Hover`}
            />

            <div className="absolute bottom-5 z-50 flex flex-wrap justify-center gap-2 opacity-100 transition-all duration-500 group-hover:opacity-100 xl:opacity-0">
              <div className="flex translate-y-0 items-center justify-center rounded-md bg-stone-50 p-2 shadow-md transition-all delay-100 duration-1000 sm:p-3 xl:translate-y-5 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                <RiShoppingBag2Line size={15} />
              </div>
              <div className="hidden translate-y-0 items-center justify-center rounded-md bg-stone-50 p-2 shadow-md transition-all delay-300 duration-1000 sm:p-3 xl:flex xl:translate-y-5 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                <FaRegHeart size={15} />
              </div>
              <div className="hidden translate-y-0 items-center justify-center rounded-md bg-stone-50 p-2 shadow-md transition-all delay-500 duration-1000 sm:p-3 xl:flex xl:translate-y-5 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                <MdCompareArrows size={15} />
              </div>
              <div className="flex translate-y-0 items-center justify-center rounded-md bg-stone-50 p-2 shadow-md transition-all delay-700 duration-1000 sm:p-3 xl:translate-y-5 xl:opacity-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                <GrView size={15} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* --- عنوان و قیمت‌ها --- */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="cursor-pointer text-center text-base font-semibold text-stone-900 transition-all duration-500 hover:text-primary">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {/* نمایش قیمت با شرط */}
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

        {/* --- رنگ‌ها --- */}
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
