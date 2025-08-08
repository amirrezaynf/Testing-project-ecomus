"use client"; // این کامپوننت کلاینت است

import React, { useState, useEffect } from "react";

export default function QuantitySelector({ price, discountedPrice }) {
  const [quantity, setQuantity] = useState(1); // State برای مدیریت تعداد
  const [totalPrice, setTotalPrice] = useState(discountedPrice); // State برای قیمت کل

  // به‌روزرسانی قیمت کل هر زمان که تعداد یا قیمت محصول تغییر کند
  useEffect(() => {
    setTotalPrice(discountedPrice * quantity);
  }, [quantity, discountedPrice]);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)); // حداقل تعداد 1
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <>
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-semibold text-gray-800">Quantity:</span>
        <div className="flex items-center rounded-md border border-gray-300">
          <button
            className="rounded-l-md px-3 py-1 text-xl font-bold text-gray-700 hover:bg-gray-100"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="px-4 py-1 text-lg font-medium text-gray-800">
            {quantity}
          </span>
          <button
            className="rounded-r-md px-3 py-1 text-xl font-bold text-gray-700 hover:bg-gray-100"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>

      {/* Total Price Display */}
      <div className="mt-4 flex flex-col gap-4">
        <button className="w-full rounded-lg bg-stone-800 px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-stone-700">
          Add to cart - €{totalPrice.toFixed(2).replace(".", ",")}
        </button>
        <button className="w-full rounded-lg bg-purple-700 px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-purple-600">
          BUY IT NOW
        </button>
      </div>
    </>
  );
}
