// app/page.js

import React from "react";
import Home from "./_Home/Home";
import HotDeals from "@/components/HotDeals";
import { getProducts } from "@/lib/mockProducts";

// این فایل یک Server Component است و use client ندارد.
export default async function Page() {
  // داده‌ها را به صورت async و در سمت سرور فچ می‌کنیم.
  const products = await getProducts();

  return (
    <>
      {/*
        HotDeals را مستقیما در Server Component والد رندر می‌کنیم
        و داده‌های فچ شده را به آن پاس می‌دهیم.
        این کار باعث می‌شود HotDeals به صورت Server Component عمل کند.
      */}
      <div className="overflow-hidden bg-gray-100 px-8">
        <HotDeals products={products} />
      </div>

      {/*
        سپس، Home.jsx را که یک Client Component است، رندر می‌کنیم.
        Home.jsx دیگر HotDeals را در خود ندارد.
      */}
      <Home />
    </>
  );
}
