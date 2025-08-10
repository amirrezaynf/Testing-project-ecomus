"use client";
import React from "react";
import NavigationProduct from "../../ui/slider/NavigationProductCard";
import HotDealsCard from "../../ui/card/HotDealsCard";
import { Button } from "../../ui/shadcn/button";
import { getAllProducts } from "@/lib/mockProducts";

const button = (
  <Button className="w-full rounded-full p-5" variant="outline">
    Add To Cart
  </Button>
);
export default function Recommendproduct() {
  const products = getAllProducts();
  const recommendedProducts = products.filter((product) => product.isFeatured);
  return (
    <div className="h-[45rem] pt-20">
      <div className="flex flex-col items-center justify-center pb-10">
        <h3 className="text-2xl font-bold text-stone-700 xl:text-5xl">
          Recommended products
        </h3>
      </div>

      <div>
        <NavigationProduct
          items={recommendedProducts.map((product) => ({
            title: product.name,
            price: product.price,
            discountedPrice: product.discountedPrice,
            discount: product.discount,
            img: product.image[0],
            hoverImg: product.hoverImg,
            color: product.colors,
            productId: product.id,
            button: button,
          }))}
          RenderCard={HotDealsCard}
          swiperClass="my-custom-swiper--light"
          theme="theme--light"
        />
      </div>
    </div>
  );
}
