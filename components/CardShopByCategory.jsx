// components/CardShopByCategory.js

"use client";
import Image from "next/image";
import Link from "next/link"; // کامپوننت Link را وارد کنید

export default function CardShopByCategory({ title, img, slug }) {
  return (
    // از کامپوننت Link برای ساخت لینک استفاده می‌کنیم
    <Link href={`/category/${slug}`}>
      <div className="group flex h-50 flex-col items-center justify-center gap-5 rounded-2xl shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="flex h-35 w-35 items-center justify-center overflow-hidden rounded-lg">
          <Image
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={img}
            width={140}
            height={140}
            alt={title}
          />
        </div>
        <h3 className="h-5 cursor-pointer text-center text-base font-semibold text-stone-50 transition-all duration-500 hover:text-primary">
          {title}
        </h3>
      </div>
    </Link>
  );
}
