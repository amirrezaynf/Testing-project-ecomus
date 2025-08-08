import Image from "next/image";
import React from "react";

export default function Brandcard({ img }) {
  return (
    <div className="flex h-32 items-center justify-center border-2 border-stone-100 bg-white p-4 text-center text-stone-900">
      <Image
        src={img}
        alt="brand"
        width={200}
        height={200}
        className="object-fill"
      />
    </div>
  );
}
