import React from "react";
import NavigationCategory from "../../ui/slider/NavigationCategorySlider";
import ShopByCategoryCard from "../../ui/card/ShopByCategoryCard";

const toSlug = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const items = [
  {
    title: "Controllers",
    img: "/category/Group_1.webp",
  },
  {
    title: "Keyboards",
    img: "/category/Group-2.jpg",
  },
  {
    title: "Mice",
    img: "/category/Group_3.webp",
  },
  {
    title: "Headsets",
    img: "/category/Group_4.webp",
  },
  {
    title: "Flight simulation",
    img: "/category/Group_5.webp",
  },
  {
    title: "Race simulation",
    img: "/category/Group_6.webp",
  },
  {
    title: "Monitor",
    img: "/category/Group_7.jpg",
  },
];

export default function ShopByCategory() {
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
              RenderCard={ShopByCategoryCard}
              swiperClass="my-custom-swiper--dark "
              theme="theme--dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
