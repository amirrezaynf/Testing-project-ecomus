// components/products/ProductDetails.js
import QuantitySelector from "@/components/blocks/product/QuantitySelector";
import PaymentMethod from "@/components/ui/banner/PaymentMethod";
import DeliveryInfo from "@/components/blocks/product/DeliveryInfo";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function ProductDetails({ product }) {
  const { name, discountedPrice, price, discount, colors } = product;

  return (
    <div className="flex flex-col gap-6 p-2 lg:w-1/2">
      {/* Product Name */}
      <h1 className="text-3xl font-bold text-stone-800 md:text-4xl">{name}</h1>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <p className="text-4xl font-bold text-gray-900">
          €{discountedPrice.toFixed(2).replace(".", ",")}
        </p>
        {discount > 0 && (
          <span className="text-xl text-gray-500 line-through">
            €{price.toFixed(2).replace(".", ",")}
          </span>
        )}
      </div>

      {/* Color Selector */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-semibold text-gray-800">Color:</span>
        {colors.length > 0 ? (
          <div className="flex gap-2">
            {colors.map((c, index) => (
              <div
                key={index}
                className="h-7 w-7 cursor-pointer rounded-full border-2 border-gray-300 transition-all duration-200 hover:border-stone-800"
                style={{ backgroundColor: c }}
                title={c}
              ></div>
            ))}
          </div>
        ) : (
          <span className="text-gray-600">N/A</span>
        )}
      </div>

      <QuantitySelector price={price} discountedPrice={discountedPrice} />

      <div className="mt-6 flex items-center justify-around gap-4 text-sm text-gray-700">
        <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-stone-800">
          {/* SVG for Compare */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
          Compare color
        </div>
        <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-stone-800">
          {/* SVG for Ask a question */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
          Ask a question
        </div>
        <div className="flex cursor-pointer items-center gap-1 transition-colors hover:text-stone-800">
          {/* SVG for Share */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.52.48 1.2.78 1.96.78 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L7.04 9.81c-.52-.48-1.2-.78-1.96-.78-1.66 0-3 1.34-3 3s1.34 3 3 3c.76 0 1.44-.3 1.96-.77L15.09 13.3c-.05.23-.09.46-.09.7s.04.47.09.7l-7.05 4.11c-.52-.48-1.2-.78-1.96-.78-1.66 0-3 1.34-3 3s1.34 3 3 3c1.66 0 3-1.34 3-3 0-.24-.04-.47-.09-.7l7.05-4.11c.52.48 1.2.78 1.96.78 1.66 0 3-1.34 3-3s-1.34-3-3-3z"></path>
          </svg>
          Share
        </div>
      </div>

      <DeliveryInfo />

      <div className="flex items-center">
        <div className="flex w-50 items-center justify-center gap-3 font-bold">
          <AiOutlineSafetyCertificate size={40} />
          <p>Guaranteed Safe Checkout</p>
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
}
