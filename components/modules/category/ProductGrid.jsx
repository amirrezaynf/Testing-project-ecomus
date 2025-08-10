// components/category/ProductGrid.js
import CategoryCard from "@/components/ui/card/CategoryCard";

export default function ProductGrid({
  products,
  gridClasses,
  gridCols,
  isMobile,
}) {
  return (
    <div className={`grid gap-6 ${gridClasses[gridCols]}`}>
      {products.map((product) => (
        <CategoryCard
          key={product.id}
          title={product.name}
          img={product.image[0]}
          hoverImg={product.hoverImg}
          price={product.price}
          discountedPrice={product.discountedPrice}
          discount={product.discount}
          color={product.colors}
          currentGridCols={gridCols}
          productId={product.id}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
