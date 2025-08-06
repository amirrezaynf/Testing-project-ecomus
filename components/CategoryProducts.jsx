"use client"; // این کامپوننت کلاینت است

import React, { useState } from "react";
import CardCategory from "./CardCategory"; // مسیر نسبی صحیح به CardCategory
import Image from "next/image"; // Image component را وارد می‌کنیم
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet"; // فرض بر این است که shadcn/ui نصب شده است
import { Slider } from "@/components/ui/shadcn/slider"; // از کامپوننت Slider از shadcn/ui استفاده می‌کنیم
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select"; // از کامپوننت Select از shadcn/ui استفاده می‌کنیم

export default function CategoryProducts({ initialProducts, slug }) {
  const [gridCols, setGridCols] = useState(4); // State برای مدیریت تعداد ستون‌ها
  const [sortOption, setSortOption] = useState("featured"); // State برای گزینه مرتب‌سازی

  // محدوده قیمت ثابت 0 تا 200
  const minProductPrice = 0;
  const maxProductPrice = 200;

  // مقدار اولیه priceRange را از minProductPrice و maxProductPrice می‌گیرد
  const [priceRange, setPriceRange] = useState([
    minProductPrice,
    maxProductPrice,
  ]);

  // تابع کمکی برای تولید رشته نقطه‌چین
  const getColonPattern = (num) => {
    return ":".repeat(num);
  };

  // فیلتر کردن و مرتب‌سازی محصولات
  const sortedAndFilteredProducts = React.useMemo(() => {
    let productsToProcess = [...initialProducts]; // یک کپی برای جلوگیری از تغییر آرایه اصلی

    // 1. فیلتر کردن بر اساس محدوده قیمت
    productsToProcess = productsToProcess.filter((product) => {
      const productPrice = product.discountedPrice || product.price;
      return productPrice >= priceRange[0] && productPrice <= priceRange[1];
    });

    // 2. مرتب‌سازی بر اساس گزینه انتخاب شده
    productsToProcess.sort((a, b) => {
      switch (sortOption) {
        case "featured":
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        case "best-selling":
          return (b.bestSelling ? 1 : 0) - (a.bestSelling ? 1 : 0);
        case "alphabetical-az":
          return a.name.localeCompare(b.name);
        case "alphabetical-za":
          return b.name.localeCompare(a.name);
        case "price-low-to-high":
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceA - priceB;
        case "price-high-to-low":
          const priceA_desc = a.discountedPrice || a.price;
          const priceB_desc = b.discountedPrice || b.price;
          return priceB_desc - priceA_desc;
        default:
          return 0; // بدون مرتب‌سازی خاص
      }
    });

    return productsToProcess;
  }, [initialProducts, priceRange, sortOption]); // وابستگی‌ها برای memoization

  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  return (
    <>
      {/* --- بخش پس‌زمینه و عنوان --- */}
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden pt-5 pb-2 md:mt-35">
        <Image
          src="/bg-categorypage.webp"
          alt="Category Background"
          fill // تصویر کل فضای والد را پر می‌کند
          className="-z-10 object-cover" // تصویر را پوشش می‌دهد و به لایه زیرین می‌برد
          priority // برای بارگذاری سریع‌تر تصویر اصلی
        />
        <h1 className="relative z-10 text-center text-4xl font-bold text-stone-800 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
      </div>
      {/* --------------------------- */}

      <div className="px-4 py-10">
        {/* --- دکمه FILTER و Sheet --- */}
        <Sheet>
          <SheetTrigger className="ml-10 flex flex-row-reverse items-center gap-2 rounded-sm border-2 border-gray-100 px-4 py-2.5 text-[0.9rem] transition-all duration-300 hover:border-stone-400">
            FILTER
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
            </svg>
          </SheetTrigger>
          {/* SheetContent را از سمت چپ باز می‌کنیم */}
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-2xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
                </svg>
                Filter
              </SheetTitle>
              {/* --- استفاده از کامپوننت Slider --- */}
              <div className="mt-8 px-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Price
                </h3>
                <Slider
                  className="mt-12"
                  min={minProductPrice}
                  max={maxProductPrice}
                  step={1}
                  value={priceRange} // مقدار فعلی اسلایدر
                  onValueChange={setPriceRange} // تابع برای به‌روزرسانی مقدار
                />
                <div className="mt-6 text-center text-lg text-gray-700">
                  Price: <span>${priceRange[0].toFixed(2)}</span> -{" "}
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
              {/* --------------------------- */}
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* ----------------- */}

        {/* --- بخش مرتب‌سازی (Sort By) --- */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="text-gray-700">مرتب‌سازی بر اساس:</span>
          <Select onValueChange={setSortOption} defaultValue={sortOption}>
            <SelectTrigger className="w-[200px] rounded-lg border-2 border-gray-100 px-4 py-2.5 text-[0.9rem] transition-all duration-300 hover:border-stone-400">
              <SelectValue placeholder="انتخاب گزینه" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="best-selling">Best selling</SelectItem>
              <SelectItem value="alphabetical-az">
                Alphabetically A-Z
              </SelectItem>
              <SelectItem value="alphabetical-za">
                Alphabetically Z-A
              </SelectItem>
              <SelectItem value="price-low-to-high">
                Price, low to high
              </SelectItem>
              <SelectItem value="price-high-to-low">
                Price, high to low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* ----------------------------- */}

        {/* --- دکمه‌های کنترل تعداد ستون --- */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setGridCols(num)}
              className={`rounded-lg px-3 py-1 pb-2 text-2xl font-extrabold transition-colors ${
                gridCols === num
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : ""
              } `}
            >
              {getColonPattern(num)}
            </button>
          ))}
        </div>

        {/* گرید محصولات با کلاس داینامیک ثابت */}
        <div className={`grid gap-6 ${gridClasses[gridCols]}`}>
          {/* استفاده از sortedAndFilteredProducts */}
          {sortedAndFilteredProducts.map((product) => (
            <CardCategory
              key={product.id}
              title={product.name}
              img={product.image[0]}
              hoverImg={product.hoverImg}
              price={product.price}
              discountedPrice={product.discountedPrice}
              discount={product.discount}
              color={product.colors}
              currentGridCols={gridCols}
              productId={product.id} // <--- این پراپ اضافه شد
            />
          ))}
        </div>
      </div>
    </>
  );
}
