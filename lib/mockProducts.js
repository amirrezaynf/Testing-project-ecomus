
import { faker } from "@faker-js/faker";

// تنظیمات faker برای تولید داده‌های تصادفی
faker.seed(123);

// این تابع محصولات را تولید می‌کند (فقط برای استفاده داخلی برای پر کردن کش)
function generateProducts(count = 20) {
  return Array.from({ length: count }).map((_, i) => {
    const originalPrice = faker.number.float({
      min: 100,
      max: 200,
      precision: 0.01,
    });

    const hasDiscount = faker.datatype.boolean();
    const discountPercentage = hasDiscount
      ? faker.number.int({ min: 10, max: 50 })
      : 0;

    const discountedPrice = hasDiscount
      ? originalPrice - (originalPrice * discountPercentage) / 100
      : originalPrice;

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: originalPrice,
      discountedPrice,
      discount: discountPercentage,
      //  3 تصویر برای هر محصول تولید می‌شود
      image: [
        `https://picsum.photos/400/300?random=${i * 3 + 1}`,
        `https://picsum.photos/400/300?random=${i * 3 + 2}`,
        `https://picsum.photos/400/300?random=${i * 3 + 3}`,
      ],
      hoverImg: `https://picsum.photos/400/300?random=${i + 10}`,
      colors: [faker.color.human(), faker.color.human()],
      bestSelling: faker.datatype.boolean(),
      isFeatured: faker.datatype.boolean(),
      category: faker.commerce.department(),
    };
  });
}

const PRODUCTS_CACHE = generateProducts(20);

// تابع برای دریافت همه محصولات (از کش)
export function getAllProducts() {
  return PRODUCTS_CACHE;
}

// تابع برای دریافت یک محصول بر اساس ID
export function getProductById(id) {
  return PRODUCTS_CACHE.find((product) => product.id === id);
}
