import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
// ReviewCard.jsx
export default function ReviewCard({ name, img }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 text-stone-50 shadow-md md:w-3/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="31"
        viewBox="0 0 46 31"
        fill="none"
      >
        <path
          d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
          stroke="#B5B5B5"
        ></path>
      </svg>
      <p className="text-sm">OUR CUSTOMER'S RAVE REVIEWS</p>
      <div className="flex gap-2">
        <AiTwotoneStar size={20} />
        <AiTwotoneStar size={20} />
        <AiTwotoneStar size={20} />
        <AiTwotoneStar size={20} />
        <AiTwotoneStar size={20} />
      </div>
      <p className="text-md md:text-2xl">
        This product exceeded all my expectations. The quality is amazing and it
        works perfectly. Highly recommended!
      </p>
      <div className="flex flex-row-reverse justify-end gap-3">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-md font-bold lg:text-lg">{name}</h3>
          <p className="text-sm lg:text-lg">
            purchase item : A Great Gaming Product
          </p>
        </div>
        <div className="relative h-20 w-20 overflow-hidden rounded-2xl md:hidden">
          <Image src={img} alt="User" fill className="object-cover md:hidden" />
        </div>
      </div>
    </div>
  );
}
