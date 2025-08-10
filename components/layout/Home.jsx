import Autoplayer from "@/components/ui/banner/AutoPlayerBanner";
import Brand from "@/components/ui/banner/BrandBanner";
import HotDeals from "@/components/modules/home/HotDeals";
import PapularProduct from "@/components/modules/home/PapularProduct";
import Recommendproduct from "@/components/modules/home/Recommendproduct";
import Review from "@/components/modules/home/Review";
import Services from "@/components/modules/home/Services";
import ShopByCategory from "@/components/modules/home/ShopByCategory";
import PicProduct from "@/components/modules/home/PicProduct";
import Image from "next/image";
import MapView from "@/components/ui/map/MapView";

import Imageslider from "@/components/ui/slider/Imageslider";

export default function Homepage() {
  return (
    <>
      <div className="relative h-[30rem] md:h-[30rem] lg:h-[38rem] xl:h-[58rem]">
        <Image
          src="/background/homeimg.png"
          alt="home"
          fill
          className="object-cover"
          priority={false}
        />

        <Imageslider />
      </div>

      <div className="flex h-20 w-full items-center overflow-hidden bg-primary text-white">
        <Autoplayer />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <ShopByCategory />
      </div>
      <div className="overflow-hidden bg-gray-100 px-8">
        <HotDeals />
      </div>
      <div className="overflow-hidden bg-white px-8">
        <PapularProduct />
      </div>
      <div>
        <PicProduct />
      </div>
      <div className="overflow-hidden bg-white px-8">
        <Recommendproduct />
      </div>
      <div className="rounded- xl:10 overflow-hidden px-2">
        <Review />
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <MapView />
      </div>
    </>
  );
}
