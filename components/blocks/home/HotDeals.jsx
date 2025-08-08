// components/HotDeals.js
"use client";
import { getAllProducts } from "@/lib/mockProducts";
import { BiTime } from "react-icons/bi";
import HotDealsCard from "../../ui/card/HotDealsCard";
import NavigationProduct from "../../ui/slider/NavigationProduct";
import Timer from "../../ui/timer/Timer";

export default function HotDeals() {
  const products = getAllProducts();

  const hotDealsProducts = products
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5);

  return (
    <div className="h-[45rem] pt-20">
      <div className="mb-8 flex flex-col items-start gap-3 xl:mx-14 xl:flex-row xl:justify-between">
        <h3 className="text-2xl font-bold text-stone-700 xl:text-[2.5rem]">
          Hot Deals
        </h3>
        <div className="flex items-center gap-4 rounded-full bg-purple-200 px-3 py-2 xl:px-5 xl:py-4">
          <BiTime className="text-primary" size={20} />
          <Timer targetDate="2025-11-08T10:45:22" />
        </div>
      </div>

      <div className="h-96">
        <NavigationProduct
          items={hotDealsProducts.map((product) => ({
            title: product.name,
            img: product.image[0],
            hoverImg: product.hoverImg,
            price: product.price,
            discountedPrice: product.discountedPrice,
            discount: product.discount,
            productId: product.id,
            color: product.colors,
          }))}
          RenderCard={HotDealsCard}
          swiperClass="my-custom-swiper--light"
          theme="theme--light"
        />
      </div>
    </div>
  );
}
