import React from "react";
// مسیر نسبی صحیح برای دسترسی به lib/mockProducts از app/category/[slug]/page.js
// مطمئن شوید که از getAllProducts استفاده می‌کنید، نه generateProducts
import { getAllProducts } from "../../../lib/mockProducts";
import CategoryProducts from "../../../components/CategoryProducts";

// این یک کامپوننت سرور است، نیازی به "use client" نیست.
// داده‌ها در سمت سرور واکشی می‌شوند.
export default function CategoryPage({ params }) {
  const slug = params.slug ?? ""; // اطمینان از اینکه slug یک رشته است

  // دریافت همه محصولات از کش با استفاده از getAllProducts
  const initialProducts = getAllProducts();

  // فیلتر کردن محصولات بر اساس slug (اگر در آینده نیاز بود)
  const filteredProducts = initialProducts.filter((product) => {
    // اگر محصولات شما پراپ 'category' داشتند، اینجا فیلتر واقعی را اضافه کنید:
    // return product.category === slug;
    // در غیر این صورت، برای نمایش همه محصولات، فقط true را برگردانید:
    return true;
  });

  // پاس دادن داده‌های تولید شده به کامپوننت کلاینت
  return <CategoryProducts initialProducts={filteredProducts} slug={slug} />;
}
