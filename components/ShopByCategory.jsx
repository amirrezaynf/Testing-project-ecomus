import React from "react";
import NavigationCategory from "./NavigationCategory";
import CardShopByCategory from "./CardShopByCategory";

// تابع کمکی برای تبدیل عنوان به slug
const toSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const items = [
  {
    title: "Controllers",
    img: "/Group_1.webp",
  },
  {
    title: "Keyboards",
    img: "/Group-2.jpg",
  },
  {
    title: "Mice",
    img: "/Group_3.webp",
  },
  {
    title: "Headsets",
    img: "/Group_4.webp",
  },
  {
    title: "Flight simulation",
    img: "/Group_5.webp",
  },
  {
    title: "Race simulation",
    img: "/Group_6.webp",
  },
  {
    title: "Monitor",
    img: "/Group_7.jpg",
  },
];

export default function ShopByCategory() {
  // map کردن روی آرایه items و اضافه کردن slug به هر آیتم
  const itemsWithSlugs = items.map((item) => ({
    ...item,
    slug: toSlug(item.title),
  }));

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 lg:text-4xl">
          Shop by Category
        </h2>

        <div className="w-full">
          <div className="mx-6 flex items-center justify-center rounded-4xl bg-layotbg py-4">
            <NavigationCategory
              items={itemsWithSlugs}
              RenderCard={CardShopByCategory}
              swiperClass="my-custom-swiper--dark "
              theme="theme--dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
