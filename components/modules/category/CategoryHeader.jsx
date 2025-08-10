// components/category/CategoryHeader.js
import Image from "next/image";

export default function CategoryHeader({ slug }) {
  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-hidden pt-5 pb-2 md:mt-35">
      <Image
        src="/bg-categorypage.webp"
        alt="Category background"
        fill
        className="-z-10 object-cover"
        priority
      />
      <h1 className="relative z-10 text-center text-4xl font-bold text-stone-800 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
    </div>
  );
}
