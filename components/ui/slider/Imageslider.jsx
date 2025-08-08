"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function Imageslider({ slug: defaultSlug }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const items = [
    {
      src: "/image-1.png",
      alt: "Description of image 1",
      width: 700,
      height: 500,
      slug: "keyboards",
    },
    {
      src: "/image-2.png",
      alt: "Description of image 2",
      width: 700,
      slug: "Controllers",
      height: 300,
    },
  ];

  return (
    <div className="flex justify-center gap-8 px-4 pt-20 md:pt-20 xl:pt-52">
      {isMobile ? (
        <Swiper spaceBetween={12} slidesPerView={1.1}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative w-full overflow-hidden rounded-lg shadow-lg">
                <Link href={`/category/${item.slug || defaultSlug}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Link href={`/category/${item.slug || defaultSlug}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
