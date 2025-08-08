import React from "react";

import { getAllProducts } from "../../../lib/mockProducts";
import CategoryProducts from "../../../components/blocks/category/CategoryProducts";

export default function CategoryPage({ params }) {
  const slug = params.slug ?? "";

  const initialProducts = getAllProducts();

  const filteredProducts = initialProducts.filter((product) => {
    return true;
  });

  return <CategoryProducts initialProducts={filteredProducts} slug={slug} />;
}
