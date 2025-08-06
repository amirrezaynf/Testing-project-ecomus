import { GiBeveledStar } from "react-icons/gi";

export default function AutoScrollBanner() {
  const items = Array(20).fill("Free express shipping worldwide");

  return (
    <div className="group relative overflow-hidden py-4">
      <div className="animate-scroll scroll-pauser flex w-max gap-10">
        {items.map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-6 text-base font-semibold whitespace-nowrap text-white md:text-xl"
          >
            <GiBeveledStar />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
