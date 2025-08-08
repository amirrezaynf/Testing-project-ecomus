// components/PapularProduct.js
"use client";

import React from "react";
import NavigationProduct from "../../ui/slider/NavigationProduct";
import HotDealsCard from "../../ui/card/HotDealsCard";
import { Button } from "../../ui/shadcn/button";
import { getAllProducts } from "@/lib/mockProducts";

export default function PapularProduct() {
  const products = getAllProducts();

  const popularProducts = products
    .sort((a, b) => b.price - a.price)
    .slice(0, 8);

  // ✅ دکمه برای اضافه کردن به سبد خرید
  const button = (
    <Button className="w-full rounded-full p-5" variant="outline">
      Add To Cart
    </Button>
  );

  return (
    <div className="h-[45rem] pt-20">
      {/* عنوان */}
      <div className="flex flex-col items-center justify-center pb-10">
        <h3 className="text-2xl font-bold text-stone-700 xl:text-5xl">
          Popular products
        </h3>
      </div>

      {/* اسلایدر محصولات محبوب */}
      <NavigationProduct
        items={popularProducts.map((product) => ({
          title: product.name,
          img: product.image[0],
          hoverImg: product.hoverImg,
          price: product.price,
          discountedPrice: product.discountedPrice,
          discount: product.discount,
          color: product.colors,
          productId: product.id,
          button: button,
        }))}
        RenderCard={HotDealsCard}
        swiperClass="my-custom-swiper--light"
        theme="theme--light"
      />
    </div>
  );
}
