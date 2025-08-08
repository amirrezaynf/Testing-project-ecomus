"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getProductById } from "@/lib/mockProducts";

import ProductImageGallery from "@/components/blocks/product/ProductImageGallery";
import ProductDetails from "@/components/blocks/product/ProductDetails";

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomVisible, setZoomVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      setProduct(fetchedProduct);
      if (fetchedProduct?.image?.length > 0) {
        setMainImage(fetchedProduct.image[0]);
      }
    }
  }, [id]);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomPosition({ x: xPercent, y: yPercent });
  };

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl text-gray-600">
        محصول مورد نظر یافت نشد.
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4 py-8 md:py-16 xl:mt-50">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <ProductImageGallery
          thumbnails={product.image}
          mainImage={mainImage}
          setMainImage={setMainImage}
          zoomPosition={zoomPosition}
          zoomVisible={zoomVisible}
          setZoomVisible={setZoomVisible}
          handleMouseMove={handleMouseMove}
          imageRef={imageRef}
          productName={product.name}
        />
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
