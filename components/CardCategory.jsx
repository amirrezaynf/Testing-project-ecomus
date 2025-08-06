"use client";
import { GrView } from "react-icons/gr";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import Link from "next/link"; // کامپوننت Link را وارد می‌کنیم

export default function CardCategory({
  title,
  img,
  hoverImg,
  price,
  discountedPrice,
  discount,
  color,
  currentGridCols, // پراپ جدید برای دریافت تعداد ستون‌ها
  productId, // پراپ جدید برای ID محصول
}) {
  const hasDiscount = discount > 0;

  // تعیین کلاس‌های چیدمان بر اساس تعداد ستون‌ها
  const cardLayoutClass = currentGridCols === 1 ? "flex-row" : "flex-col";
  const imageContainerClass =
    currentGridCols === 1 ? "w-1/3 h-full" : "w-full h-[200px] xl:h-3/5";
  const contentContainerClass =
    currentGridCols === 1
      ? "w-2/3 items-start justify-center text-left"
      : "items-center justify-center text-center";

  // تعیین موقعیت برچسب تخفیف بر اساس تعداد ستون‌ها
  const discountBadgePositionClass =
    currentGridCols === 1 ? "top-4 left-4" : "top-12 right-5";
  // تعیین کلاس‌های سایه بر اساس تعداد ستون‌ها
  const shadowClasses =
    currentGridCols === 1 ? "" : "shadow-sm hover:shadow-md";

  return (
    // کل کارت را با Link محصور می‌کنیم
    <Link href={`/products/${productId}`} className="block w-full">
      <div
        className={`group relative flex w-full gap-5 rounded-2xl border-2 border-stone-100 bg-white p-3 ${shadowClasses} transition-shadow duration-200 lg:h-[470px] ${cardLayoutClass}`}
        // ارتفاع کارت را در حالت تک ستون افزایش می‌دهیم تا محتوا جا شود
        style={currentGridCols === 1 ? { height: "25rem" } : {}}
      >
        {/* برچسب تخفیف */}
        {hasDiscount && (
          <div
            className={`absolute z-20 flex items-center justify-center rounded-full bg-red-700 p-2 text-xs font-bold text-white ${discountBadgePositionClass}`}
          >
            -{discount}%
          </div>
        )}

        {/* عکس‌ها */}
        <div
          className={`relative mt-6 flex items-center justify-center bg-stone-50 ${imageContainerClass}`}
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-stone-50 p-4">
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
          </div>
        </div>

        {/* عنوان و قیمت‌ها */}
        <div className={`flex flex-col gap-2 ${contentContainerClass}`}>
          <h3 className="cursor-pointer text-base font-semibold text-stone-900 transition-all duration-500 hover:text-primary">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <p className="text-gray-500 line-through">
                  ${price.toFixed(2)}
                </p>
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

          {/* --- آیکون‌های جدید زیر قیمت (فقط در حالت تک ستون) --- */}
          {currentGridCols === 1 && (
            <div className="mt-4 flex justify-center gap-3">
              <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-200">
                <RiShoppingBag2Line size={18} className="text-gray-700" />
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-200">
                <FaRegHeart size={18} className="text-gray-700" />
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-200">
                <MdCompareArrows size={18} className="text-gray-700" />
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-200">
                <GrView size={18} className="text-gray-700" />
              </div>
            </div>
          )}
          {/* --------------------------------------------------- */}

          {/* رنگ‌ها */}
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
      </div>
    </Link>
  );
}
