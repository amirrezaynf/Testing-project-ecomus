// app/category/[slug]/page.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import CategoryHeader from "@/components/modules/category/CategoryHeader";
import ProductControls from "@/components/modules/category/ProductControls";
import ProductGrid from "@/components/modules/category/ProductGrid";

export default function CategoryProducts({ initialProducts, slug }) {
  const [gridCols, setGridCols] = useState(4);
  const [sortOption, setSortOption] = useState("featured");
  const [isMobile, setIsMobile] = useState(false);
  const hasUserManuallySetGridCols = useRef(false);

  const minProductPrice = 0;
  const maxProductPrice = 200;
  const [priceRange, setPriceRange] = useState([
    minProductPrice,
    maxProductPrice,
  ]);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      if (mobileView !== isMobile) {
        setIsMobile(mobileView);
      }
    };
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (!hasUserManuallySetGridCols.current) {
      if (isMobile && gridCols !== 2) {
        setGridCols(2);
      } else if (!isMobile && gridCols !== 4) {
        setGridCols(4);
      }
    } else {
      if (isMobile && ![1, 2].includes(gridCols)) {
        setGridCols(2);
        hasUserManuallySetGridCols.current = false;
      }
    }
  }, [isMobile, gridCols]);

  const handleGridColClick = (num) => {
    setGridCols(num);
    hasUserManuallySetGridCols.current = true;
  };

  const sortedAndFilteredProducts = React.useMemo(() => {
    let productsToProcess = [...initialProducts];
    productsToProcess = productsToProcess.filter((product) => {
      const productPrice = product.discountedPrice || product.price;
      return productPrice >= priceRange[0] && productPrice <= priceRange[1];
    });

    productsToProcess.sort((a, b) => {
      // Logic for sorting products
      switch (sortOption) {
        // ... (sorting cases as in the original component)
        case "featured":
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        case "best-selling":
          return (b.bestSelling ? 1 : 0) - (a.bestSelling ? 1 : 0);
        case "alphabetical-az":
          return a.name.localeCompare(b.name);
        case "alphabetical-za":
          return b.name.localeCompare(a.name);
        case "price-low-to-high":
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceA - priceB;
        case "price-high-to-low":
          const priceA_desc = a.discountedPrice || a.price;
          const priceB_desc = b.discountedPrice || b.price;
          return priceB_desc - priceA_desc;
        default:
          return 0;
      }
    });

    return productsToProcess;
  }, [initialProducts, priceRange, sortOption]);

  const columnOptions = isMobile ? [1, 2] : [1, 2, 3, 4, 5, 6];
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  return (
    <>
      <CategoryHeader slug={slug} />
      <div className="px-4 py-10">
        <ProductControls
          sortOption={sortOption}
          setSortOption={setSortOption}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minProductPrice={minProductPrice}
          maxProductPrice={maxProductPrice}
          gridCols={gridCols}
          handleGridColClick={handleGridColClick}
          columnOptions={columnOptions}
        />
        <ProductGrid
          products={sortedAndFilteredProducts}
          gridClasses={gridClasses}
          gridCols={gridCols}
          isMobile={isMobile}
        />
      </div>
    </>
  );
}
